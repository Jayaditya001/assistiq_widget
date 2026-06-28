# AssistIQ Widget

A floating AI chat assistant widget for Frappe/ERPNext. Adds a floating button on every Frappe desk page that opens an intelligent chat panel powered by Claude AI.

## What it does

- Adds a **floating blue chat button** fixed to the bottom-right corner of every Frappe desk page
- Clicking it opens a **centered modal chat panel** over the current page
- The assistant fetches **real ERP data** from your Frappe instance
- Closing it returns you to exactly where you were — nothing is disturbed
- Powered by **Claude AI** via the `frappe_assistant_core` backend

## Preview

> Click the floating button → Chat panel opens → Ask anything about your ERP data → Get real answers with tables and summaries

## Requirements

- Frappe v16+
- ERPNext
- `frappe_assistant_core` app installed and configured (provides the Claude AI proxy)

## Installation

```bash
cd /home/frappe/frappe-bench
bench get-app https://github.com/Jayaditya001/assistiq_widget.git
bench --site yoursite install-app assistiq_widget
bench restart
```

Replace `yoursite` with your actual site name.

## How it works

1. The app registers a JavaScript file globally via `app_include_js` in `hooks.py`
2. This JS file injects a floating button and chat panel into every Frappe desk page
3. When a user sends a message, it calls the `assistiq_anthropic_proxy` API
4. Claude AI processes the request, fetches real Frappe data via REST API, and returns a response
5. Results are displayed in a clean chat interface with markdown table support

## What can you ask it?

- "Show all open leads"
- "List recent sales orders"
- "How many employees do we have?"
- "Show stock balance"
- Anything about your ERP data!

## File Structure

```
assistiq_widget/
├── assistiq_widget/
│   ├── hooks.py          # Registers the JS file globally
│   └── public/
│       └── js/
│           └── assistiq_widget.js   # The floating widget code
```

## Contributing

Pull requests are welcome! For major changes, please open an issue first.

## License

MIT
```

---
