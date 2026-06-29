import frappe
import json

def after_install():
    frappe.db.sql("""
        INSERT INTO `tabSingles` (doctype, field, value)
        VALUES ('System Settings', 'server_script_enabled', '1')
        ON DUPLICATE KEY UPDATE value = '1'
    """)

    if frappe.db.exists("Server Script", "AssistIQ Anthropic Proxy"):
        ss = frappe.get_doc("Server Script", "AssistIQ Anthropic Proxy")
    else:
        ss = frappe.new_doc("Server Script")
        ss.name = "AssistIQ Anthropic Proxy"

    ss.script_type = "API"
    ss.api_method = "assistiq_anthropic_proxy"
    ss.allow_guest = 0
    ss.disabled = 0
    ss.script = """model = frappe.form_dict.get('model', 'claude-sonnet-4-6')
max_tokens = frappe.utils.cint(frappe.form_dict.get('max_tokens', 1024))
system = frappe.form_dict.get('system', '')
messages_raw = frappe.form_dict.get('messages', '[]')
tools_raw = frappe.form_dict.get('tools', '[]')
messages = frappe.parse_json(messages_raw) if isinstance(messages_raw, str) else messages_raw
tools = frappe.parse_json(tools_raw) if isinstance(tools_raw, str) else tools_raw
db_result = frappe.db.sql("SELECT value FROM `tabSingles` WHERE doctype='System Settings' AND field='assistiq_anthropic_key'")
api_key = db_result[0][0] if db_result else ''
if not api_key:
    frappe.response['message'] = {'error': 'Anthropic API key not configured'}
else:
    payload = {'model': model, 'max_tokens': max_tokens, 'messages': messages, 'system': system}
    if tools:
        payload['tools'] = tools
    response = frappe.make_post_request(
        'https://api.anthropic.com/v1/messages',
        data=json.dumps(payload),
        headers={'Content-Type': 'application/json', 'x-api-key': api_key, 'anthropic-version': '2023-06-01'}
    )
    frappe.response['message'] = response"""

    ss.save(ignore_permissions=True)
    frappe.db.commit()
    print("✅ AssistIQ installed! Now run:")
    print("   bench --site yoursite execute assistiq_widget.install.set_api_key --kwargs '{\"key\": \"your-key\"}'")


def set_api_key(key):
    frappe.db.sql("""
        INSERT INTO `tabSingles` (doctype, field, value)
        VALUES ('System Settings', 'assistiq_anthropic_key', %s)
        ON DUPLICATE KEY UPDATE value = %s
    """, (key, key))
    frappe.db.commit()
    print("✅ API key stored!")
