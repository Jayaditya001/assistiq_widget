// Hide app subtitle globally in the workspace sidebar
$(document).ready(function () {
        var subtitleText = frappe.boot.sidebar_subtitle_text || "ERP Module";
        $("<style>.sidebar-header .header-subtitle::after { content: '" + subtitleText + "'; font-size: var(--text-xs, 12px) !important; color: var(--text-muted); display: block; text-align: left; line-height: 1; }</style>").appendTo("head");
});

// AssistIQ Floating Widget
setTimeout(function() {
  if (document.getElementById('aiq-float-btn')) return;

  var s = document.createElement('style');
  s.textContent = [
    '#aiq-float-btn{position:fixed;bottom:28px;right:28px;width:54px;height:54px;background:#0464a8;border-radius:50%;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 18px rgba(37,99,235,.45);z-index:99999}',
    '#aiq-float-btn:hover{transform:scale(1.08)}',
    '#aiq-overlay{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.5);z-index:99997;display:none;backdrop-filter:blur(2px)} #aiq-overlay.open{display:block} #aiq-float-panel{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:860px;max-width:95vw;height:85vh;background:#fff;border-radius:16px;box-shadow:0 20px 60px rgba(0,0,0,.3);z-index:99998;display:none;flex-direction:column;overflow:hidden}',
    '#aiq-float-panel.open{display:flex}',
    '.aiqf-hdr{padding:16px 24px;background:#0464a8;display:flex;align-items:center;gap:12px;flex-shrink:0}',
    '.aiqf-htitle{font-size:18px;font-weight:700;color:#fff}',
    '.aiqf-hsub{font-size:12px;color:rgba(255,255,255,.75)}',
    '.aiqf-hlive{margin-left:auto;display:flex;align-items:center;gap:6px;font-size:12px;color:#fff}',
    '.aiqf-hdot{width:8px;height:8px;background:#4ade80;border-radius:50%}',
    '.aiqf-close{background:none;border:none;cursor:pointer;color:#fff;font-size:28px;line-height:1;padding:0 0 0 16px}',
    '#aiqf-msgs{flex:1;overflow-y:auto;padding:24px;display:flex;flex-direction:column;gap:16px;max-width:900px;width:100%;margin:0 auto;box-sizing:border-box}',
    '.aiqf-msg{display:flex;gap:10px}',
    '.aiqf-msg.user{flex-direction:row-reverse}',
    '.aiqf-av{width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0;margin-top:2px}',
    '.aiqf-av.bot{background:#dbeafe;color:#0464a8}',
    '.aiqf-av.user{background:#0464a8;color:#fff}',
    '.aiqf-bubble{max-width:75%;padding:12px 16px;border-radius:16px;font-size:14px;line-height:1.7;word-break:break-word}',
    '.aiqf-msg.bot .aiqf-bubble{background:#f1f5f9;color:#0f172a;border-top-left-radius:4px}',
    '.aiqf-msg.user .aiqf-bubble{background:#0464a8;color:#fff;border-top-right-radius:4px}',
    '.aiqf-bubble table{border-collapse:collapse;font-size:13px;margin:8px 0;width:100%}',
    '.aiqf-bubble th{text-align:left;padding:8px 12px;background:#dbeafe;color:#1e40af;font-weight:600}',
    '.aiqf-bubble td{padding:8px 12px;border-top:1px solid #e2e8f0}',
    '.aiqf-bubble tr:hover td{background:#f8fafc}',
    '.aiqf-bubble-wrap{overflow-x:auto}',
    '.aiqf-typing{display:flex;align-items:center;gap:4px;padding:12px 16px;background:#f1f5f9;border-radius:16px;width:fit-content}',
    '.aiqf-typing span{width:7px;height:7px;background:#94a3b8;border-radius:50%;animation:aiqfB 1.2s infinite}',
    '.aiqf-typing span:nth-child(2){animation-delay:.18s}',
    '.aiqf-typing span:nth-child(3){animation-delay:.36s}',
    '@keyframes aiqfB{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-5px)}}',
    '.aiqf-bottom{flex-shrink:0;border-top:1px solid #e2e8f0;background:#fff;padding:16px 24px}',
    '.aiqf-bottom-inner{max-width:900px;margin:0 auto}',
    '.aiqf-suggs{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px;max-height:280px;overflow-y:auto;padding-right:4px}',
    '.aiqf-sugg{border:1px solid #e2e8f0;background:#fff;border-radius:20px;padding:6px 14px;font-size:12px;color:#475569;cursor:pointer}',
    '.aiqf-sugg:hover{border-color:#0464a8;color:#0464a8;background:#eff6ff}',
    '.aiqf-row{display:flex;gap:10px;align-items:flex-end}',
    '.aiqf-textarea{flex:1;border:1.5px solid #e2e8f0;border-radius:12px;padding:12px 16px;font-size:14px;font-family:inherit;resize:none;outline:none;max-height:120px;line-height:1.5;color:#0f172a;background:#f8fafc;box-sizing:border-box}',
    '.aiqf-textarea:focus{border-color:#0464a8;background:#fff}',
    '.aiqf-sendbtn{width:44px;height:44px;border-radius:50%;background:#0464a8;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0}',
    '.aiqf-ft{font-size:11px;color:#94a3b8;text-align:center;margin-top:8px}',
    '.aiqf-sugg-title{font-size:12px;color:#94a3b8;margin-bottom:8px;font-weight:500}',
    '.aiqf-sugg-toggle{border:1px solid #dbeafe;background:#f0f7ff;border-radius:20px;padding:6px 14px;font-size:12px;color:#0464a8;cursor:pointer;font-family:inherit}',
    '.aiqf-sugg-close{background:none;border:none;cursor:pointer;font-size:16px;color:#94a3b8;line-height:1;padding:0}',
    '.aiqf-sugg-close:hover{color:#475569}',
    '.aiqf-sugg-toggle:hover{background:#dbeafe}',
    '.aiqf-sugg-full{display:block;width:100%;text-align:left;border:1px solid #dbeafe;background:#f0f7ff;border-radius:12px;padding:8px 14px;font-size:13px;color:#0464a8;cursor:pointer;margin-bottom:6px;transition:all 0.2s;line-height:1.3}',
    '.aiqf-sugg-full:hover{border-color:#0464a8;color:#0464a8;background:#eff6ff}',
    '.aiqf-sugg-cat{padding:6px 12px;border-radius:8px;border:1.5px solid #fed7aa;background:#fff;cursor:pointer;font-size:12px;color:#c2410c;flex-shrink:0}',
    '.aiqf-sugg-cat-active{background:#ea580c;color:#fff;border-color:#ea580c}'
  ].join('');
  document.head.appendChild(s);

  var btn = document.createElement('button');
  btn.id = 'aiq-float-btn';
  btn.title = 'AssistIQ';
  btn.innerHTML = '<img src="/assets/assistiq_widget/ai-assistant.png" width="30" height="30" style="object-fit:contain;">';

  // Load site branding
  fetch('/api/method/frappe.client.get_value?doctype=System+Settings&fieldname=["assistiq_color","assistiq_icon"]', {
    headers: {'X-Frappe-CSRF-Token': frappe.csrf_token || '', 'X-Requested-With': 'XMLHttpRequest'},
    credentials: 'same-origin'
  }).then(function(r){return r.json();}).then(function(d){
    var msg = d.message || {};
    var color = msg.assistiq_color || '#0464a8';
    var icon = msg.assistiq_icon || '/assets/assistiq_widget/ai-assistant.png';
    btn.style.background = color;
    if(icon) btn.innerHTML = '<img src="'+icon+'" width="30" height="30" style="object-fit:contain;">';
    var hdr = document.querySelector('.aiqf-hdr');
    if(hdr) hdr.style.background = color;
    var sb = document.querySelector('.aiqf-sendbtn');
    if(sb) sb.style.background = color;
    var av = document.querySelectorAll('.aiqf-av.user');
    av.forEach(function(a){ a.style.background = color; });
    // Update user chat bubble color
    var style2 = document.getElementById('aiqf-bubble-style');
    if(!style2){ style2 = document.createElement('style'); style2.id = 'aiqf-bubble-style'; document.head.appendChild(style2); }
    style2.textContent = '.aiqf-msg.user .aiqf-bubble{background:'+color+' !important;} .aiqf-av.user{background:'+color+' !important;}';
    // Update suggestion box colors to match theme
    var hex = color.replace('#','');
    var r = parseInt(hex.substring(0,2),16);
    var g = parseInt(hex.substring(2,4),16);
    var b = parseInt(hex.substring(4,6),16);
    var lightBg = 'rgba('+r+','+g+','+b+',0.08)';
    var lightBorder = 'rgba('+r+','+g+','+b+',0.2)';
    var style = document.getElementById('aiqf-dynamic-style');
    if(!style){ style = document.createElement('style'); style.id = 'aiqf-dynamic-style'; document.head.appendChild(style); }
    style.textContent = '.aiqf-sugg-full{background:'+lightBg+' !important;border-color:'+lightBorder+' !important;color:'+color+' !important;} .aiqf-sugg-full:hover{background:rgba('+r+','+g+','+b+',0.15) !important;} .aiqf-sugg-cat{border-color:'+lightBorder+' !important;color:'+color+' !important;background:#fff !important;} .aiqf-sugg-cat-active{background:'+color+' !important;color:#fff !important;border-color:'+color+' !important;}';
  }).catch(function(){});
  var overlay=document.createElement("div");overlay.id="aiq-overlay";document.body.appendChild(overlay);document.body.appendChild(btn);

  var panel = document.createElement('div');
  panel.id = 'aiq-float-panel';
  document.body.appendChild(panel);

  var hdr = document.createElement('div');
  hdr.className = 'aiqf-hdr';
  hdr.innerHTML = '<div><div class="aiqf-htitle">AssistIQ Assistant</div><div class="aiqf-hsub"></div></div><div class="aiqf-hlive"><div class="aiqf-hdot"></div>Live</div><button class="aiqf-close" id="aiqf-hist-btn" title="Chat history" style="font-size:16px;">🕐</button><button class="aiqf-close" id="aiqf-new-btn" title="New chat" style="font-size:20px;">+</button><button class="aiqf-close" id="aiqf-close-btn">&times;</button>';
  panel.appendChild(hdr);

  var msgs_el = document.createElement('div');
  msgs_el.id = 'aiqf-msgs';
  panel.appendChild(msgs_el);

  var hist_el = document.createElement('div');
  hist_el.id = 'aiqf-histview';
  hist_el.style.cssText = 'flex:1;overflow-y:auto;padding:16px;display:none;background:#fafafa;';
  panel.appendChild(hist_el);

  var bottom = document.createElement('div');
  bottom.className = 'aiqf-bottom';
  var AIQF_SUGGS = {
    'selling': {
      'Selling': [['Draft quotation','Create and save a draft quotation for a customer'],['Drafts for review','Show all draft quotations pending for review'],['Update & submit','Update and submit a quotation'],['Convert to order','Convert a quotation into a sales order'],['Today\'s sales orders','Show today\'s sales orders'],['Pending sales orders','Show pending sales orders'],['Top customers','Show top-selling customers this month']],
      'Selling Analytics': [['Today\'s sales','Show today\'s sales'],['Monthly sales','Show monthly sales'],['Vs last month','Compare sales with last month'],['Sales trend','Show sales trend'],['By product','Show sales by product'],['By customer','Show sales by customer'],['By salesperson','Show sales by salesperson'],['Growth','Show sales growth']]
    },
    'buying': [['Pending POs','Show pending purchase orders'],['Create PO','Create a purchase order for a supplier'],['Purchases this month','Show purchases made this month'],['Delayed suppliers','Which suppliers have delayed deliveries?']],
    'accounts': [['Today\'s receivables','Show today\'s receivables'],['Overdue payments','Show overdue customer payments'],['P&L this month','Show profit and loss for this month'],['Top outstanding','Show customers with the highest outstanding balance']],
    'stock': [['Stock levels','Show current stock levels'],['Below reorder','Which products are below reorder level?'],['Out of stock','Show out-of-stock products'],['Warehouse stock','Which warehouse has stock for a product?']],
    'manufacturing': [['Open production','Show open production orders'],['Production status','Show today\'s production status'],['Raw materials needed','Which raw materials are required for production?'],['Delayed orders','Show delayed manufacturing orders']],
    'hrms': [['Absent today','Show employees absent today'],['Attendance summary','Show today\'s attendance summary'],['On leave this week','Show employees on leave this week'],['Pending leave requests','Show pending leave requests']],
    'projects': [['Active projects','Show active projects'],['Behind schedule','Show projects behind schedule'],['Tasks due','Show tasks due this week'],['Cost & progress','Show project-wise cost and progress']],
    'support': [['Open tickets','Show open support tickets'],['High priority','Show high-priority tickets'],['Pending >3 days','Show tickets pending for more than 3 days'],['Most issues','Which customers have the most support issues?']],
    'assets': [['Active assets','Show all active assets'],['Maintenance due','Show assets due for maintenance'],['Assigned assets','Show assets assigned to an employee'],['Purchased this year','Show assets purchased this year']],
    'quality': [['Pending inspections','Show pending quality inspections'],['Failed inspections','Show failed quality inspections'],['Most issues','Which products have the most quality issues?'],['Monthly summary','Show quality inspection summary for this month']],
    'crm': [['New leads','Show new leads this week'],['Follow-ups due','Show follow-ups due today'],['High-value deals','Show high-value opportunities'],['Likely to convert','Which leads are most likely to convert?']],
    'default': [['Sales orders','Show today\'s sales orders'],['Stock levels','Show current stock levels'],['Pending POs','Show pending purchase orders'],['Employees','How many employees do we have?']]
  };
  var AIQF_PAGE_SUGGS = {
    'customer': {
      'Customer Management': [
        ['Create customer','Create a new customer'],
        ['Show profile','Show customer profile'],
        ['Show ledger','Show customer ledger'],
        ['Show outstanding','Show customer outstanding']
      ],
      'Customer Intelligence': [
        ['Inactive 90 days','Show customers who haven\'t ordered in 90 days'],
        ['Repeat customers','Show repeat customers'],
        ['Top 5 customers','Show top 5 customers'],
        ['Payment history','Show customer payment history']
      ]
    },
    'lead': {
      'Suggestions': [
        ['Create lead','Create a new lead'],
        ['New leads today','Show today\'s new leads'],
        ['Hot leads','Show hot leads'],
        ['Follow-ups due','Show follow-ups due today'],
        ['Convert to customer','Convert lead into customer'],
        ['Conversion ratio','Show conversion ratio'],
        ['Pipeline','Show opportunity pipeline'],
        ['High-value deals','Show high-value opportunities']
      ]
    },
    'opportunity': {
      'Suggestions': [
        ['Create lead','Create a new lead'],
        ['New leads today','Show today\'s new leads'],
        ['Hot leads','Show hot leads'],
        ['Follow-ups due','Show follow-ups due today'],
        ['Convert to customer','Convert lead into customer'],
        ['Conversion ratio','Show conversion ratio'],
        ['Pipeline','Show opportunity pipeline'],
        ['High-value deals','Show high-value opportunities']
      ]
    },
    'quotation': {
      'Suggestions': [
        ['Create quotation','Create quotation for a customer'],
        ['Pending quotations','Show pending quotations'],
        ['Expired quotations','Show expired quotations'],
        ['Compare quotations','Compare quotations'],
        ['Suggest discount','Suggest discount'],
        ['Quotation history','Show quotation history']
      ]
    },
    'sales order': {
      'Suggestions': [
        ['Create order','Create sales order'],
        ['From quotation','Convert quotation into sales order'],
        ['Pending orders','Show pending sales orders'],
        ['Open orders','Show open orders'],
        ['Delayed orders','Show delayed orders'],
        ['Today\'s orders','Show today\'s orders'],
        ['This month\'s orders','Show this month\'s orders'],
        ['Highest value','Show highest value orders']
      ]
    },
    'sales invoice': {
      'Suggestions': [
        ['Create invoice','Create invoice'],
        ['From sales order','Generate invoice from sales order'],
        ['Today\'s invoices','Show today\'s invoices'],
        ['Pending invoices','Show pending invoices'],
        ['Overdue invoices','Show overdue invoices'],
        ['Recalculate taxes','Recalculate taxes']
      ]
    },
    'item': {
      'Suggestions': [
        ['Top selling','Show top selling products'],
        ['Slow moving','Show slow moving products'],
        ['Dead stock','Show dead stock'],
        ['Highest margin','Show products with highest margin'],
        ['Out of stock','Show products out of stock'],
        ['Below reorder','Show products below reorder level'],
        ['Cross-sell','Recommend cross-sell products'],
        ['Frequently bought together','Show frequently purchased together products']
      ]
    },
    'warehouse': {
      'Suggestions': [
        ['Check availability','Is a product available?'],
        ['Stock available','How much stock is available?'],
        ['Which warehouse','Which warehouse has stock for a product?'],
        ['Reserved stock','Show reserved stock by customer'],
        ['Expected arrival','Show expected stock arrival'],
        ['Below reorder','Show products below reorder level'],
        ['Fulfill today','Can this order be fulfilled today?']
      ]
    },
    'home': {
      'Suggestions': [
        ['Business summary','Give me today\'s business summary'],
        ['Pending quotations','Which quotations are pending?'],
        ['Delayed orders','Which orders are delayed?'],
        ['Overdue invoices','Which invoices are overdue?'],
        ['Sales summary','Summarize sales in one page']
      ]
    }
  };
  var AIQF_MODULE_MAP = {
    'manufacturing': 'manufacturing',
    'quality': 'quality',
    'accounting': 'accounts', 'accounts': 'accounts',
    'invoicing': 'accounts', 'payments': 'accounts', 'financial report': 'accounts',
    'banking': 'accounts', 'budget': 'accounts', 'share manage': 'accounts',
    'subscription': 'accounts', 'taxes': 'accounts',
    'purchase': 'buying', 'buying': 'buying',
    'selling': 'selling', 'sales': 'selling',
    'stock': 'stock', 'inventory': 'stock',
    'projects': 'projects',
    'helpdesk': 'support', 'support': 'support',
    'assets': 'assets',
    'crm': 'crm',
    'payroll': 'hrms', 'hrms': 'hrms', 'hr': 'hrms',
    'expenses': 'hrms', 'leaves': 'hrms', 'performance': 'hrms',
    'recruitment': 'hrms', 'attendance': 'hrms', 'shift': 'hrms',
    'tenure': 'hrms', 'benefit': 'hrms'
  };
  function aiqf_getModule(callback){
    var route = frappe.get_route();
    if(!route || !route.length){ callback('default'); return; }
    var routeStr = route.join(' ').toLowerCase().replace(/-/g,' ');
    for(var key in AIQF_MODULE_MAP){
      if(routeStr.indexOf(key) !== -1){ callback(AIQF_MODULE_MAP[key]); return; }
    }
    var routeType = route[0] && route[0].toLowerCase();
    var doctype = route[1];
    if(doctype && (routeType === 'list' || routeType === 'form')){
      frappe.model.with_doctype(doctype, function(){
        var meta = frappe.get_meta(doctype);
        var mod = meta && meta.module ? meta.module.toLowerCase() : '';
        for(var key in AIQF_MODULE_MAP){ if(mod.indexOf(key) !== -1){ callback(AIQF_MODULE_MAP[key]); return; } }
        callback('default');
      });
      return;
    }
    callback('default');
  }
  function aiqf_getPageKey(callback){
    var route = frappe.get_route();
    if(!route || !route.length || route[0]==='' || route[0].toLowerCase()==='workspace' || route[0].toLowerCase()==='home'){
      callback('home'); return;
    }
    var routeType = route[0] && route[0].toLowerCase();
    var doctype = route[1] && route[1].toLowerCase();
    if(doctype && AIQF_PAGE_SUGGS[doctype] && (routeType==='list'||routeType==='form')){
      callback(doctype); return;
    }
    callback(null);
  }
  function aiqf_collapseSuggs(){
    var el = document.querySelector('.aiqf-suggs');
    if(!el) return;
    el.innerHTML = '<button class="aiqf-sugg-toggle">💡 Suggestions</button>';
    el.querySelector('.aiqf-sugg-toggle').addEventListener('click', function(){
      aiqf_renderSuggs(true);
    });
  }

  function aiqf_renderSuggs(expanded, activeCategory){
    aiqf_getPageKey(function(pageKey){
      if(pageKey){
        var cats = AIQF_PAGE_SUGGS[pageKey];
        var catNames = Object.keys(cats);
        var current = activeCategory && cats[activeCategory] ? activeCategory : catNames[0];
        var suggs = cats[current];
        var el = document.querySelector('.aiqf-suggs');
        if(el){
          el.innerHTML = '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;width:100%"><div class="aiqf-sugg-title" style="margin-bottom:0">Suggestions</div><button class="aiqf-sugg-close">&times;</button></div>' +
            (catNames.length>1 ? ('<div class="aiqf-sugg-cats" style="display:flex;gap:6px;margin-bottom:8px;width:100%">' +
            catNames.map(function(c){return '<button class="aiqf-sugg-cat'+(c===current?' aiqf-sugg-cat-active':'')+'" data-cat="'+c+'">'+c+'</button>';}).join('') +
            '</div>') : '') +
            suggs.map(function(s){return '<button class="aiqf-sugg-full" data-q="'+s[1]+'">'+s[1]+'</button>';}).join('');
          var closeBtn = el.querySelector('.aiqf-sugg-close');
          if(closeBtn) closeBtn.addEventListener('click', function(){ aiqf_collapseSuggs(); });
          el.querySelectorAll('.aiqf-sugg-cat').forEach(function(b){
            b.addEventListener('click', function(){
              aiqf_renderSuggs(true, b.getAttribute('data-cat'));
            });
          });
          el.querySelectorAll('.aiqf-sugg-full').forEach(function(b){
            b.addEventListener('click',function(){
              text_el.value=b.getAttribute('data-q');
              aiqf_collapseSuggs();
              aiqf_send();
            });
          });
        }
        return;
      }
      aiqf_getModule(function(module){
        try{console.log('[AssistIQ] route:',frappe.get_route(),'detected module:',module);}catch(e){}
        var raw = AIQF_SUGGS[module] || AIQF_SUGGS['default'];
        var isMulti = !Array.isArray(raw);
        var catNames2 = isMulti ? Object.keys(raw) : null;
        var current2 = isMulti ? (activeCategory && raw[activeCategory] ? activeCategory : catNames2[0]) : null;
        var suggs = isMulti ? raw[current2] : raw;
        var el = document.querySelector('.aiqf-suggs');
        if(el){
          el.innerHTML = '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;width:100%"><div class="aiqf-sugg-title" style="margin-bottom:0">Suggestions</div><button class="aiqf-sugg-close">&times;</button></div>' +
            (isMulti ? ('<div class="aiqf-sugg-cats" style="display:flex;gap:6px;margin-bottom:8px;width:100%">' +
            catNames2.map(function(c){return '<button class="aiqf-sugg-cat'+(c===current2?' aiqf-sugg-cat-active':'')+'" data-cat="'+c+'">'+c+'</button>';}).join('') +
            '</div>') : '') +
            suggs.map(function(s){return '<button class="aiqf-sugg-full" data-q="'+s[1]+'">'+s[1]+'</button>';}).join('');
          var closeBtn = el.querySelector('.aiqf-sugg-close');
          if(closeBtn) closeBtn.addEventListener('click', function(){ aiqf_collapseSuggs(); });
          if(isMulti){
            el.querySelectorAll('.aiqf-sugg-cat').forEach(function(b){
              b.addEventListener('click', function(){
                aiqf_renderSuggs(true, b.getAttribute('data-cat'));
              });
            });
          }
          el.querySelectorAll('.aiqf-sugg-full').forEach(function(b){
            b.addEventListener('click',function(){
              text_el.value=b.getAttribute('data-q');
              aiqf_collapseSuggs();
              aiqf_send();
            });
          });
        }
      });
    });
  }
  bottom.innerHTML = '<div class="aiqf-bottom-inner"><div class="aiqf-suggs"></div><div id="aiqf-attach-chip"></div><div class="aiqf-row"><input type="file" id="aiqf-file" accept="application/pdf,image/png,image/jpeg,image/webp" style="display:none;"><button id="aiqf-attach-btn" title="Attach invoice/document" style="width:40px;height:44px;flex-shrink:0;background:none;border:1.5px solid #e2e8f0;border-radius:12px;cursor:pointer;font-size:18px;color:#64748b;">📎</button><textarea id="aiqf-text" class="aiqf-textarea" placeholder="Ask anything about your ERP data…" rows="1"></textarea><button id="aiqf-sb" class="aiqf-sendbtn"><svg width="16" height="16" fill="#fff" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg></button></div><div class="aiqf-ft"></div></div>';
  panel.appendChild(bottom);

  var text_el = document.getElementById('aiqf-text');
  var send_btn = document.getElementById('aiqf-sb');
  var close_btn = document.getElementById('aiqf-close-btn');
  var file_el = document.getElementById('aiqf-file');
  var attach_btn = document.getElementById('aiqf-attach-btn');
  var chip_el = document.getElementById('aiqf-attach-chip');
  var aiqf_pendingFile = null;
  var aiqf_lastFile = null;
  var isOpen = false, aiqf_b = false, aiqf_h = [], AIQF_GEN = 0, AIQF_USED_FILE = false;
  var AIQF_SID = (function(){
    try{
      var k='aiqf_session_id';
      var v=localStorage.getItem(k);
      if(!v){v='sess_'+Date.now()+'_'+Math.random().toString(36).substr(2,9);localStorage.setItem(k,v);}
      return v;
    }catch(e){return 'sess_'+Date.now();}
  })();
  function aiqf_saveMsg(role,content,sid){
    try{
      fetch('/api/resource/AssistIQ Chat Log',{method:'POST',headers:{'Content-Type':'application/json','X-Frappe-CSRF-Token':frappe.csrf_token||'','X-Requested-With':'XMLHttpRequest'},credentials:'same-origin',body:JSON.stringify({user:frappe.session.user,session_id:sid||AIQF_SID,role:role,message:content})}).catch(function(){});
    }catch(e){}
  }
  function aiqf_loadHistory(sid){
    var p=new URLSearchParams();
    p.set('fields',JSON.stringify(['role','message','creation']));
    p.set('filters',JSON.stringify([['AssistIQ Chat Log','user','=',frappe.session.user],['AssistIQ Chat Log','session_id','=',sid||AIQF_SID]]));
    p.set('order_by','creation asc');
    p.set('limit_page_length','100');
    return fetch('/api/resource/AssistIQ Chat Log?'+p.toString(),{headers:{'X-Frappe-CSRF-Token':frappe.csrf_token||'','X-Requested-With':'XMLHttpRequest'},credentials:'same-origin'}).then(function(r){return r.json();}).then(function(d){return d.data||[];}).catch(function(){return [];});
  }
  function aiqf_listSessions(){
    var p=new URLSearchParams();
    p.set('fields',JSON.stringify(['name','role','message','creation','session_id','session_title']));
    p.set('filters',JSON.stringify([['AssistIQ Chat Log','user','=',frappe.session.user]]));
    p.set('order_by','creation asc');
    p.set('limit_page_length','500');
    return fetch('/api/resource/AssistIQ Chat Log?'+p.toString(),{headers:{'X-Frappe-CSRF-Token':frappe.csrf_token||'','X-Requested-With':'XMLHttpRequest'},credentials:'same-origin'}).then(function(r){return r.json();}).then(function(d){
      var rows=d.data||[];
      var groups={};
      rows.forEach(function(m){
        if(!groups[m.session_id])groups[m.session_id]={session_id:m.session_id,first:m.message,first_row_name:m.name,last_time:m.creation,count:0,title:null};
        groups[m.session_id].count++;
        groups[m.session_id].last_time=m.creation;
        if(m.session_title)groups[m.session_id].title=m.session_title;
      });
      return Object.values(groups).sort(function(a,b){return a.last_time<b.last_time?1:-1;});
    }).catch(function(){return [];});
  }
  function aiqf_renameSession(sid,rowName,newTitle){
    return fetch('/api/resource/AssistIQ Chat Log/'+encodeURIComponent(rowName),{method:'PUT',headers:{'Content-Type':'application/json','X-Frappe-CSRF-Token':frappe.csrf_token||'','X-Requested-With':'XMLHttpRequest'},credentials:'same-origin',body:JSON.stringify({session_title:newTitle})}).catch(function(){});
  }
  function aiqf_deleteSession(sid){
    var p=new URLSearchParams();
    p.set('fields',JSON.stringify(['name']));
    p.set('filters',JSON.stringify([['AssistIQ Chat Log','user','=',frappe.session.user],['AssistIQ Chat Log','session_id','=',sid]]));
    p.set('limit_page_length','500');
    return fetch('/api/resource/AssistIQ Chat Log?'+p.toString(),{headers:{'X-Frappe-CSRF-Token':frappe.csrf_token||'','X-Requested-With':'XMLHttpRequest'},credentials:'same-origin'}).then(function(r){return r.json();}).then(function(d){
      var names=(d.data||[]).map(function(r){return r.name;});
      return Promise.all(names.map(function(n){return fetch('/api/resource/AssistIQ Chat Log/'+encodeURIComponent(n),{method:'DELETE',headers:{'X-Frappe-CSRF-Token':frappe.csrf_token||'','X-Requested-With':'XMLHttpRequest'},credentials:'same-origin'}).catch(function(){});}));
    });
  }
  function aiqf_setSession(sid){
    AIQF_SID=sid;
    try{localStorage.setItem('aiqf_session_id',sid);}catch(e){}
  }
  function aiqf_showChatView(){
    hist_el.style.display='none';
    msgs_el.style.display='';
  }
  function aiqf_showHistoryList(){
    msgs_el.style.display='none';
    hist_el.style.display='block';
    hist_el.innerHTML='<div style="text-align:center;color:#999;padding:20px;">Loading...</div>';
    aiqf_listSessions().then(function(sessions){
      if(!sessions.length){hist_el.innerHTML='<div style="text-align:center;color:#999;padding:20px;">No past conversations yet.</div>';return;}
      hist_el.innerHTML=sessions.map(function(s){
        var display=s.title||(s.first||'').substring(0,60)+((!s.title&&(s.first||'').length>=60)?'...':'');
        var d=new Date(s.last_time);
        var dateStr=isNaN(d)?'':d.toLocaleDateString()+' '+d.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
        var active=s.session_id===AIQF_SID;
        return '<div class="aiqf-hist-item" data-sid="'+s.session_id+'" data-row="'+s.first_row_name+'" style="padding:12px 14px;margin-bottom:8px;background:#fff;border:1px solid '+(active?'#0464a8':'#e5e5e5')+';border-radius:10px;cursor:pointer;display:flex;align-items:flex-start;gap:8px;">'+
          '<div class="aiqf-hist-body" style="flex:1;min-width:0;">'+
            '<div class="aiqf-hist-title" style="font-size:13px;font-weight:600;color:#222;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">'+display+'</div>'+
            '<div style="font-size:11px;color:#999;margin-top:4px;">'+dateStr+' · '+s.count+' messages'+(active?' · current':'')+'</div>'+
          '</div>'+
          '<button class="aiqf-hist-rename" title="Rename" style="background:none;border:none;cursor:pointer;font-size:14px;color:#94a3b8;padding:2px;flex-shrink:0;">✏️</button>'+
          '<button class="aiqf-hist-delete" title="Delete" style="background:none;border:none;cursor:pointer;font-size:14px;color:#94a3b8;padding:2px;flex-shrink:0;">🗑️</button>'+
        '</div>';
      }).join('');
      hist_el.querySelectorAll('.aiqf-hist-item').forEach(function(el){
        var sid=el.getAttribute('data-sid'), rowName=el.getAttribute('data-row');
        el.querySelector('.aiqf-hist-body').addEventListener('click',function(){
          aiqf_openSession(sid);
        });
        el.querySelector('.aiqf-hist-rename').addEventListener('click',function(ev){
          ev.stopPropagation();
          var titleEl=el.querySelector('.aiqf-hist-title');
          var current=titleEl.textContent;
          var input=document.createElement('input');
          input.value=current;
          input.style.cssText='font-size:13px;font-weight:600;color:#222;border:1px solid #0464a8;border-radius:4px;padding:2px 6px;width:100%;box-sizing:border-box;';
          titleEl.replaceWith(input);
          input.focus();input.select();
          function commit(){
            var val=input.value.trim();
            if(val&&val!==current){
              aiqf_renameSession(sid,rowName,val).then(function(){aiqf_showHistoryList();});
            }else{
              aiqf_showHistoryList();
            }
          }
          input.addEventListener('keydown',function(e){if(e.key==='Enter'){e.preventDefault();commit();}else if(e.key==='Escape'){aiqf_showHistoryList();}});
          input.addEventListener('blur',commit);
        });
        el.querySelector('.aiqf-hist-delete').addEventListener('click',function(ev){
          ev.stopPropagation();
          if(!confirm('Delete this conversation? This cannot be undone.'))return;
          aiqf_deleteSession(sid).then(function(){
            if(sid===AIQF_SID){aiqf_newChat();}else{aiqf_showHistoryList();}
          });
        });
      });
    });
  }
  function aiqf_openSession(sid){
    AIQF_GEN++;
    aiqf_b=false;
    aiqf_lastFile=null;
    aiqf_setSession(sid);
    msgs_el.innerHTML='';
    aiqf_showChatView();
    aiqf_loadHistory(sid).then(function(rows){
      if(rows.length){
        rows.forEach(function(m){if(m.role==='user'){aiqf_addUser(m.message);}else{aiqf_addBot(m.message);}});
        aiqf_h=rows.slice(-6).map(function(m){return{role:m.role,content:m.message};});
      }else{
        aiqf_addBot('👋 Hi! I am AssistIQ, your ERP assistant. Ask me anything!');
        aiqf_h=[];
      }
    });
  }
  function aiqf_newChat(){
    AIQF_GEN++;
    aiqf_b=false;
    aiqf_lastFile=null;
    var sid='sess_'+Date.now()+'_'+Math.random().toString(36).substr(2,9);
    aiqf_setSession(sid);
    msgs_el.innerHTML='';
    aiqf_h=[];
    aiqf_showChatView();
    aiqf_addBot('👋 Hi! I am AssistIQ, your ERP assistant. Ask me anything!');
    aiqf_renderSuggs();
  }

  var AIQF_SYS_CORE = 'You are AssistIQ, an AI-powered ERP assistant for Frappe/ERPNext. ALWAYS use tools to fetch real data — never invent field values, IDs, or numbers. Be concise. Use markdown tables. fields MUST always be an array.\n\nWhen the user asks you to draft, create, or make a document (e.g. "draft a quotation", "create a PO"): you MUST call fac_create_document to actually create a real draft record in Frappe. NEVER just describe or format a fake document in chat text — that is misleading, since the user cannot tell the difference between a real record and text you made up. After creating, always state the real document name/ID Frappe returned (e.g. "Created draft Quotation QTN-2026-00045") so the user can open and review it themselves before doing anything with it.\n\nCreated documents are drafts only (docstatus 0) unless the user explicitly asks you to submit/finalize it — submitting is a separate, deliberate action via fac_submit_document, and you should confirm with the user before doing it, since submission can trigger real business effects (emails, stock/GL updates, workflow states) that are hard to undo.\n\nIf a create or update fails (missing required field, invalid link, permission error), tell the user exactly what failed and what value is needed — do not silently make one up to force it through.\n\nFor workflow actions (approve/reject/etc.): first call fac_get_workflow_state to see the real current state and valid actions, confirm the action with the user, then call fac_run_workflow_action with the exact action name. Never claim an action succeeded without calling the tool.\n\nWhen a question mentions "today", "this week", or a date range, filter on the document\'s actual business date field (e.g. transaction_date, posting_date, from_date) — never the internal "creation" timestamp, which reflects when the record was saved, not the business date it represents. Before telling the user nothing matches, double check you used the correct date field and the correct format (YYYY-MM-DD), since concluding "none found" when records genuinely exist is worse than a wrong number — it looks like the system has no data at all. You MUST pass {"date_range":"today"} (or this_week/this_month/last_7_days/last_30_days) as the filter for ANY question mentioning those words — never compute the date yourself or reason about it in your head, even for a quick-seeming check. Manually reasoning about "today" has repeatedly produced wrong answers; the date_range filter is always correct and costs nothing extra to use.\n\nWhen a question uses a plain-English status word ("pending", "open", "outstanding", "overdue", "active", "completed"), map it to what that word actually means for the doctype in question — usually docstatus and a real status value or range — rather than searching for that literal word as an exact status string, since most doctypes do not have a status literally called "Pending". For Sales/Purchase Orders and Invoices, "pending"/"open" normally means docstatus 1 and status not in ("Completed","Closed","Cancelled"). If you already showed the user matching records under one phrasing (e.g. "open orders"), and they then ask for the same thing using a different everyday word (e.g. "pending orders"), recognize it as the same request and answer directly instead of reporting no results.\n\nCritically: "pending" does NOT mean docstatus 0 (draft/unsaved) — a submitted Purchase/Sales Order with status like "To Receive and Bill" or "To Deliver and Bill" absolutely counts as pending, since it is real, submitted, and awaiting completion. Never filter by docstatus 0 when asked for "pending" items unless the user explicitly says "draft".\n\nWhen displaying a date for Purchase/Sales Invoices or Orders, always use the real business date field (posting_date or transaction_date) that fac_list_documents/fac_analyze_data returns — never the internal "creation" timestamp, even if you have to explicitly request that field. Showing the wrong date is a real, visible error to the user, not a minor detail.\n\nFor "delayed delivery" or "overdue" questions on Purchase Orders: Purchase Order Items have a schedule_date field — compare it to today\'s date for any order not yet fully received (per_received under 100) instead of saying you lack the data to answer; you likely already have exactly what is needed.\n\nFor "profit and loss" or "P&L" style questions, do NOT rely on fac_generate_report with the native "Profit and Loss" report — it requires precise standard filter parameters (company, fiscal_year, period) that are easy to get wrong, and getting them wrong silently returns an empty result that looks like "no transactions" even when real data exists. Instead, build a simple, reliable approximation yourself: use fac_analyze_data to sum Sales Invoice grand_total for the period (revenue) and sum Purchase Invoice grand_total for the same period (costs), then present revenue, costs, and the difference — clearly labelled as a simplified estimate, not the exact statutory P&L.\n\nIn this system, CRM follow-ups and reminders are tracked as Task records (with an exp_end_date), not as Event or ToDo records — when asked about "follow-ups due" or similar, check Task first.\n\nIn this system, "production orders" or "manufacturing orders" correspond to the Work Order doctype — there is no doctype called "Production Order" (that is an old, deprecated ERPNext term; do not assume it means the feature is unavailable). Always call fac_list_documents on Work Order directly before concluding none exist — never answer from memory or assume the module is disabled. For "raw materials required for production", Work Order documents have a required_items child table listing exactly this — fetch the Work Order\'s own required_items field rather than guessing or asking the user to specify a BOM manually. For "delayed manufacturing orders", compare each Work Order\'s planned_end_date to today for any order whose status is not yet Completed or Stopped.\n\nFor Asset records: employee assignment is tracked in the custodian field (an Employee ID), not department — always check custodian for "assigned to an employee" style questions. Maintenance scheduling is tracked via the maintenance_required checkbox field (1 or 0) directly on the Asset — check this field for "due for maintenance" style questions instead of assuming the information is unavailable.\n\nFor questions involving totals, averages, counts, or breakdowns by category (sales this month, average order value, invoices by customer): use fac_analyze_data instead of fetching raw records and calculating in your head — this keeps numbers accurate and responses shorter.\n\nFor questions comparing what different suppliers charge for the SAME item ("which supplier is cheapest for X", "compare prices across suppliers", "has the price changed over time"), use fac_compare_supplier_pricing instead of trying to compute this yourself — it correctly joins item-level pricing with the supplier on each purchase document, which fac_analyze_data cannot do.\n\nFor "what needs reordering" or "what\'s running low" style questions, use fac_predict_reorder instead of just checking reorder levels yourself — it factors in actual recent consumption rate to estimate days until stockout, so items barely below reorder level but moving slowly aren\'t reported with the same urgency as fast-moving items about to run out.\n\nFor "how much of X will we need" or "forecast demand" style questions, use fac_forecast_demand. This is a simple linear trend on the last 12 months of sales — always tell the user plainly that this is a basic estimate based on recent trend, not a guaranteed prediction, and mention if history was too short/sparse to trust the projection.\n\nWhen creating a new document based on a past record (e.g. "same items as my last order", "draft like the previous one"): only copy the fields the user actually asked to reuse (typically items/quantities). NEVER copy over the reference document\'s date, status, naming, or other document-specific fields — new documents should use today\'s date and a fresh Draft status unless the user explicitly asks for a different date.\n\nWhen reporting a document\'s current state (e.g. from fac_get_workflow_state), always state the actual state value returned by the tool clearly (e.g. "Draft", "Pending Approval") — never say vague things like "not yet set" or "pending" unless that is the literal state value.\n\nFor trends over time, comparisons across categories, or breakdowns (sales by month, top items, status distribution), prefer fac_create_chart over a markdown table — first get the numbers via fac_analyze_data or fac_list_documents, then call fac_create_chart to visualize them. The chart renders directly in the chat; do not also repeat the same numbers as a table or wall of text afterward, just briefly describe what it shows.\n\nBe token-efficient: when calling fac_get_document or fac_list_documents, always pass "fields" limited to only what the question actually needs (e.g. ["customer","grand_total","status"]) rather than fetching the whole document. Keep your own text responses concise — lead with the answer, skip restating the question or the tool calls you made.\n\nAlways display monetary amounts with the correct currency symbol for that document\'s own currency field — never default to $ or show a bare number with no currency indicator. This company\'s documents are in EUR, so amounts should be shown as e.g. \u20ac1,000 (or "EUR 1,000"), never $1,000 or plain 1,000. If you are not certain which currency a figure is in, fetch the currency field rather than guessing or omitting it. When summing or comparing amounts across multiple documents in a table, state the currency once clearly (e.g. in a column header or a note above the table) rather than repeating it inconsistently or omitting it on some rows.\n\nUnless the user explicitly asks for cancelled, voided, or historical/amended records, ALWAYS exclude documents with docstatus 2 (Cancelled) from any list, count, sum, or analysis — always pass a filter excluding docstatus 2, never assume the underlying data source already excludes them for you. A cancelled document that was later corrected and resubmitted will have a related active document (often with a \'-1\' or similar suffix in its name) that reflects the true, current record — always show that one, not the cancelled original, unless specifically asked about cancellation history.\n\nIMPORTANT: Lead and Opportunity are NOT submittable doctypes in this system — every Lead and Opportunity record will always have docstatus 0, permanently, and this is completely normal, not a sign of an incomplete or draft record. NEVER filter Lead or Opportunity by docstatus, and NEVER tell the user "there are no submitted opportunities/leads" — that framing is meaningless for these two doctypes. Instead, use the actual status field (e.g. Open, Quotation, Converted, Lost for Lead; Open, Quotation, Converted, Lost for Opportunity) to determine what counts as active, hot, or high-value.\n\nFor Project: "active" means status = "Open" (not Completed/Cancelled) — never say there are no active projects without checking the actual status field first. Project also stores estimated_costing directly on the document itself — always fetch and report this field directly for "cost" questions rather than deflecting to linked Purchase/Sales Invoices or claiming cost data isn\'t tracked.\n\nCRITICAL — date arithmetic: NEVER state a number of days between two dates (e.g. "~X days from today", "due in Y weeks") without actually calculating it correctly from the real calendar dates involved. Manually estimating or guessing an elapsed-day count has repeatedly produced wildly wrong numbers (off by hundreds of days). If you need to express a duration, work it out precisely from the actual date values you already have — do not round, approximate, or guess.';
  var AIQF_SYS_OCR = 'When the user attaches an invoice, bill, or receipt (image or PDF): in your very FIRST response, before or alongside any tool calls, write out ALL extracted fields as text — supplier/vendor name, date, bill/invoice number, every item line with its exact quantity and rate, tax, and total. This is important: the raw image is only available to you for this first response: after that it is replaced with a placeholder, so any detail you have not written down in text by the end of this first response is permanently lost to you for the rest of this conversation. Only report values you can actually read; if a field is unclear or missing, say so explicitly rather than guessing.\n\nSelf-check before reporting: sum each line\'s (quantity × rate) and compare to the invoice\'s own printed subtotal. If they don\'t match, you likely misread a quantity or rate — re-examine the image and correct it before writing your summary, rather than reporting numbers that don\'t reconcile.\n\nDo ALL verification in this same first response and present ONE consolidated pre-flight summary covering everything at once: whether the supplier exists (fac_search_documents), whether this looks like a duplicate (fac_list_documents, matching supplier + bill number or supplier+amount+date), and whether each line item matches an existing Item — search using the core 1-2 word noun (e.g. "Conference Chair" not "Conference Chairs (Black)"), checking is_purchase_item/is_sales_item as relevant, using the returned "name" field as the actual item_code. If a search returns multiple candidates (e.g. searching "Industrial" could return both "Industrial Adhesive" and "Industrial Wood"), compare each against the FULL original invoice line text and pick the one that genuinely matches in meaning — do not default to the first result. If two or more remain equally plausible, list the options and ask the user to pick rather than guessing. List every issue that needs the user\'s input together in that single message — do not surface them one at a time across separate turns, since each extra round costs the user real money.\n\nAnti-hallucination guardrail: never state a new fact (a supplier name, item, amount, or any other value) in a later turn that was not already present in your own first-response extraction or explicitly provided by the user. If asked about something that doesn\'t match your recorded extraction, say so plainly rather than inventing a plausible-sounding answer.\n\nIf the supplier was not found after searching: tell the user plainly, then ask two things together in one message — (1) is the name slightly different (let them correct it), or (2) would they like you to create this Supplier now with basic details (name, country, supplier group) so the invoice can proceed. Only call fac_create_document for the Supplier if the user explicitly agrees (e.g. "yes", "create it") — if they decline or say no, do not create anything, just wait for them to resolve it another way. The same applies if an item genuinely has no match after searching: ask whether to create a new Item, but only proceed with explicit confirmation. This is not something the extraction form can help with, since it is a missing record, not a number to correct. But once supplier, all items, and tax account are resolved, do NOT ask the user to confirm quantities/rates/dates in chat text and do NOT call fac_create_document yourself. Instead call fac_show_extraction_form with everything you have, so the user reviews and edits any wrong numbers directly in an editable form and creates the document with one click, at no extra chat cost. Only fall back to fac_create_document directly (skipping the form) for simple creates where the user typed the values themselves and there is no invoice image to double-check against. As with all creates, this produces a real draft (docstatus 0) that the user should review before submitting. Also pass the invoice/bill number and date into the appropriate fields (e.g. bill_no, bill_date) so future duplicate checks have something concrete to match against.\n\nIf the invoice shows a tax amount, you MUST include it — do not silently drop it and only create the item lines. Search the Account doctype for a tax account matching each tax name/rate shown and pass it via fac_show_extraction_form\'s "taxes" array, with the correct charge_type ("On Net Total"), account_head, and rate. Never invent an account name — if you can\'t find a clear match, tell the user which tax account to use instead of leaving tax off entirely.\n\nIndian GST invoices commonly show CGST and SGST (or IGST) as separate components, e.g. "CGST @ 9%" and "SGST @ 9%" — these are two distinct tax accounts and must be passed as two separate entries in the taxes array, never combined into one "18%" line, since they post to different GL accounts. Search for each account separately (e.g. search "CGST" and "SGST" independently).\n\nIf the invoice prints an "Amount Chargeable (in words)" or "Total Invoice Value (in words)" line, use it as your primary cross-check instead of just summing your own extracted numbers — convert the words to a number and compare against your extracted grand total; if they don\'t match, you have misread something and should re-examine before proceeding.\n\nSome invoice lines are lump-sum service/license charges with no natural quantity (e.g. "License Fee: 42,000.00" with blank Qty/Rate columns) — represent these with qty 1 and rate equal to the full line amount, not qty 0 or a guessed unit price. If a line item is a service (often marked with an HSN/SAC code rather than a product code) and does not correspond to any existing product Item after searching, tell the user it may need a non-stock/service Item or a direct expense account instead of forcing a product-item match.\n\nIf the invoice supplier search returns multiple candidates, compare each against the full extracted supplier name and pick the genuine match — do not default to the first result. If genuinely ambiguous, list the candidates and ask.\n\nIf the invoice is in a different currency than the company\'s default currency, do not silently assume a 1:1 conversion rate — tell the user the invoice currency differs and ask for the correct exchange rate, or check for an existing Currency Exchange record, rather than guessing.\n\nWhen extracting fields from an image/document, mark any field you are not confident about directly next to the value, e.g. "Supplier: ABC Traders (low confidence — please verify)", rather than one blanket disclaimer at the end. Only mark fields as low-confidence if the source is genuinely unclear, blurry, or ambiguous.';
  var AIQF_TOOLS = [
    {name:'fac_list_documents',description:'List Frappe documents. For date-based questions ("today", "this week", "this month"), pass a filter like {"date_range":"today"} instead of computing a raw date yourself — the system resolves this to the correct real date field for the doctype automatically. Common values: today, this_week, this_month, last_7_days, last_30_days.',parameters:{type:'object',properties:{doctype:{type:'string'},filters:{type:'object'},fields:{type:'array',items:{type:'string'}},limit:{type:'integer',default:20}},required:['doctype','fields']}},
    {name:'fac_get_document',description:'Get a single Frappe document. Prefer passing "fields" with only the specific fields you actually need (e.g. ["customer","grand_total","status"]) instead of omitting it — omitting it returns the entire document with many irrelevant/empty fields and costs far more tokens.',parameters:{type:'object',properties:{doctype:{type:'string'},name:{type:'string'},fields:{type:'array',items:{type:'string'},description:'Optional. Specific field names to return. Omit only if you genuinely need the full document.'}},required:['doctype','name']}},
    {name:'fac_generate_report',description:'Run a Frappe report.',parameters:{type:'object',properties:{report_name:{type:'string'},filters:{type:'object'}},required:['report_name']}},
    {name:'fac_search_documents',description:'Search Frappe documents.',parameters:{type:'object',properties:{query:{type:'string'},doctype:{type:'string'}},required:['query']}},
    {name:'fac_report_list',description:'List available reports.',parameters:{type:'object',properties:{module:{type:'string'}}}},
    {name:'fac_create_document',description:'Create a REAL draft Frappe document (docstatus 0). Use this whenever the user asks to draft/create/make a document — never fake one in text. Referenced records (customer, item, warehouse, etc.) must already exist. Returns the real document name Frappe assigns.',parameters:{type:'object',properties:{doctype:{type:'string',description:'Exact DocType name, e.g. Quotation, Purchase Order, Stock Entry'},data:{type:'object',description:'Field values as key-value pairs, e.g. {"customer":"CUST-001","items":[{"item_code":"ITEM-01","qty":5}]}'}},required:['doctype','data']}},
    {name:'fac_update_document',description:'Update fields on an existing Frappe document that is still a draft (docstatus 0).',parameters:{type:'object',properties:{doctype:{type:'string'},name:{type:'string'},data:{type:'object',description:'Only the fields to change, as key-value pairs'}},required:['doctype','name','data']}},
    {name:'fac_submit_document',description:'Submit (finalize) an existing draft document, changing it from docstatus 0 to 1. This can trigger real side effects (emails, GL/stock updates). Only call this when the user has explicitly confirmed they want to submit/finalize — not automatically after creating a draft.',parameters:{type:'object',properties:{doctype:{type:'string'},name:{type:'string'}},required:['doctype','name']}},
    {name:'fac_get_workflow_state',description:'Get the current workflow state and the list of valid next actions (e.g. Approve, Reject) for a document that is under a Workflow. Call this before fac_run_workflow_action to see what actions are actually available.',parameters:{type:'object',properties:{doctype:{type:'string'},name:{type:'string'}},required:['doctype','name']}},
    {name:'fac_run_workflow_action',description:'Apply a workflow action (e.g. Approve, Reject, Submit for Review) to a document under a Frappe Workflow, moving it to its next state. Only call this after confirming with the user which action to take, and after checking fac_get_workflow_state for valid actions on this document.',parameters:{type:'object',properties:{doctype:{type:'string'},name:{type:'string'},action:{type:'string',description:'Exact workflow action name, e.g. "Approve", "Reject" — must match one of the valid actions for this doc\'s current state'}},required:['doctype','name','action']}},
    {name:'fac_analyze_data',description:'Fetch a list of documents and compute a simple aggregate (count, sum, average, min, max), optionally grouped by a field. Use this for questions like "total sales this month", "average deal size by rep", "count of overdue invoices by customer" instead of dumping raw records. Only returns the computed summary, not every raw row.',parameters:{type:'object',properties:{doctype:{type:'string'},filters:{type:'object'},aggregate_field:{type:'string',description:'Numeric field to aggregate, e.g. grand_total. Omit for count-only.'},aggregate_fn:{type:'string',enum:['count','sum','avg','min','max']},group_by:{type:'string',description:'Optional field to group results by, e.g. customer, status, sales_person'}},required:['doctype','aggregate_fn']}},
    {name:'fac_create_chart',description:'Render an actual visual chart (bar, line, pie, or doughnut) inline in the chat, using data you already have (typically from fac_analyze_data or fac_list_documents). Use this instead of a markdown table whenever the user asks to "chart", "visualize", "graph", "plot", or when showing a trend/comparison/breakdown across categories would be clearer as a picture than a table.',parameters:{type:'object',properties:{chart_type:{type:'string',enum:['bar','line','pie','doughnut']},title:{type:'string'},labels:{type:'array',items:{type:'string'},description:'Category labels, e.g. ["Jan","Feb","Mar"] or ["Approved","Rejected","Pending"]'},datasets:{type:'array',items:{type:'object',properties:{label:{type:'string'},data:{type:'array',items:{type:'number'}}},required:['label','data']},description:'One or more data series, each with a label and numeric values matching the labels array in order'}},required:['chart_type','labels','datasets']}},
    {name:'fac_compare_supplier_pricing',description:'Compare what different suppliers have charged for the same Item across past submitted Purchase Orders/Invoices — shows average rate, latest rate, lowest/highest rate, and purchase count per supplier, sorted cheapest first. Use this for "which supplier is cheapest for X", "compare pricing across suppliers", "have prices for this item changed" style questions. For general spend/count analysis not tied to a specific item, use fac_analyze_data instead.',parameters:{type:'object',properties:{item_code:{type:'string',description:'Exact Item code, e.g. ITEM-017. Use fac_search_documents first if you only have a description.'},doctype:{type:'string',enum:['Purchase Invoice','Purchase Order'],description:'Defaults to Purchase Invoice if omitted.'}},required:['item_code']}},
    {name:'fac_predict_reorder',description:'Find items running low on stock, factoring in actual recent consumption rate — not just a flat "below reorder level" check. Returns current stock, reorder level, average daily consumption (based on recent stock movements), and an estimated number of days until stockout, so low-consumption items below reorder level aren\'t treated the same urgency as fast-moving ones. Use for "what needs reordering", "what\'s running low", "which items will run out soon" style questions.',parameters:{type:'object',properties:{warehouse:{type:'string',description:'Optional — restrict to a specific warehouse'},lookback_days:{type:'number',description:'How many days of recent stock movement to use for the consumption-rate estimate. Defaults to 90.'}}}},
    {name:'fac_forecast_demand',description:'Estimate future demand for an item using a simple linear trend fitted to its last 12 months of actual sales history. This is a basic statistical projection (linear regression on monthly totals), NOT a sophisticated ML model — it will not capture seasonality, promotions, or one-off spikes. Always present it to the user as a rough estimate based on recent trend, not a guaranteed prediction. Use for "how much X will we need next quarter", "forecast demand for X" style questions.',parameters:{type:'object',properties:{item_code:{type:'string',description:'Exact Item code'},periods_ahead:{type:'number',description:'How many future months to forecast. Defaults to 3.'}},required:['item_code']}},
    {name:'fac_show_extraction_form',description:'After reading an attached invoice/bill and completing supplier/duplicate/item-match/tax checks via tool calls, call this ONCE to show the user an editable review form with the extracted numbers (quantities, rates, dates, tax) pre-filled. The user corrects any wrong numbers directly in the form (cheap, no extra chat needed) and clicks Confirm themselves to create the real document — you do NOT call fac_create_document for this; the form handles creation directly. Supports invoices with multiple simultaneous tax components (e.g. Indian GST invoices with separate CGST + SGST lines) via the taxes array — never combine multiple tax components into one line. After calling this, just briefly tell the user to review the form, then stop — do not repeat the numbers in chat text.',parameters:{type:'object',properties:{doctype:{type:'string',description:'e.g. Purchase Invoice, Purchase Order'},supplier:{type:'string'},bill_no:{type:'string'},bill_date:{type:'string',description:'YYYY-MM-DD'},currency:{type:'string'},items:{type:'array',items:{type:'object',properties:{item_code:{type:'string'},item_name:{type:'string'},qty:{type:'number',description:'Use 1 for lump-sum service charges with no natural quantity'},rate:{type:'number',description:'For lump-sum charges, set this to the full amount (with qty 1)'}},required:['item_code','item_name','qty','rate']}},taxes:{type:'array',description:'One entry per tax component. For Indian GST, this is normally two entries: CGST and SGST separately, each at half the total rate — never one combined line.',items:{type:'object',properties:{account_head:{type:'string',description:'Exact Account name found via fac_search_documents, e.g. "CGST 9% - IDPL"'},rate:{type:'number',description:'Percentage for this component only, e.g. 9 for CGST 9%, not the combined 18%'},description:{type:'string',description:'e.g. "CGST 9%", "SGST 9%"'}},required:['account_head','rate','description']}}},required:['doctype','supplier','items']}}
  ];
  var AIQF_TITLE_FIELD = {
    'Item':'item_name','Customer':'customer_name','Supplier':'supplier_name','Lead':'lead_name',
    'Employee':'employee_name','Contact':'first_name','Item Group':'name','Territory':'name'
  };
  var AIQF_DEF = {
    'Lead':['name','lead_name','status','mobile_no','lead_owner'],
    'Customer':['name','customer_name','customer_type','territory'],
    'Sales Order':['name','customer','status','grand_total','transaction_date'],
    'Purchase Order':['name','supplier','status','grand_total','transaction_date'],
    'Sales Invoice':['name','customer','status','grand_total','posting_date'],
    'Item':['name','item_name','item_group','standard_rate','is_purchase_item','is_sales_item'],
    'Employee':['name','employee_name','designation','department','status']
  };

  function aiqf_scrollBottom(){setTimeout(function(){msgs_el.scrollTop=msgs_el.scrollHeight;},50);}

  function aiqf_fmt(t){
    if(typeof t!=='string')t=JSON.stringify(t,null,2);
    t=t.replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>');
    t=t.replace(/\|(.+)\|\n\|[-| :]+\|\n((?:\|.+\|\n?)+)/g,function(_,h,r){
      return '<div class="aiqf-bubble-wrap"><table><thead><tr>'+
        h.split('|').filter(function(s){return s.trim();}).map(function(x){return '<th>'+x.trim()+'</th>';}).join('')+
        '</tr></thead><tbody>'+
        r.trim().split('\n').map(function(row){return '<tr>'+row.split('|').filter(function(s){return s.trim();}).map(function(d){return '<td>'+d.trim()+'</td>';}).join('')+'</tr>';}).join('')+
        '</tbody></table></div>';
    });
    t=t.replace(/\n/g,'<br>');
    return t;
  }

  function aiqf_addBot(t){
    var d=document.createElement('div');
    d.className='aiqf-msg bot';
    d.innerHTML='<div class="aiqf-av bot">AI</div><div class="aiqf-bubble">'+aiqf_fmt(t)+'</div>';
    msgs_el.appendChild(d);
    aiqf_scrollBottom();
  }
  function aiqf_addUser(t){
    var d=document.createElement('div');
    d.className='aiqf-msg user';
    d.innerHTML='<div class="aiqf-av user">You</div><div class="aiqf-bubble">'+t.replace(/</g,'&lt;')+'</div>';
    msgs_el.appendChild(d);
    aiqf_scrollBottom();
  }
  function aiqf_showTyping(){
    var d=document.createElement('div');
    d.className='aiqf-msg bot';
    d.id='aiqf-t';
    d.innerHTML='<div class="aiqf-av bot">AI</div><div class="aiqf-typing"><span></span><span></span><span></span></div>';
    msgs_el.appendChild(d);
    aiqf_scrollBottom();
  }
  function aiqf_rmTyping(){var t=document.getElementById('aiqf-t');if(t)t.remove();}

  function aiqf_normFields(fields,dt){if(!fields||(Array.isArray(fields)&&fields.length===0))return AIQF_DEF[dt]||['name'];if(typeof fields==='string')return[fields];return fields;}
  function aiqf_buildFilters(dt,f){if(!f)return[];if(Array.isArray(f))return f;if(typeof f==='object')return Object.entries(f).map(function(e){return[dt,e[0],'=',e[1]];});return[];}
  function aiqf_rest(dt,fields,filters,limit){
    var p=new URLSearchParams();
    p.set('fields',JSON.stringify(fields));
    p.set('limit_page_length',limit||20);
    var f=aiqf_normalizeFilters(dt,aiqf_buildFilters(dt,filters));
    if(f.length>0)p.set('filters',JSON.stringify(f));
    return fetch('/api/resource/'+encodeURIComponent(dt)+'?'+p.toString(),{headers:{'X-Frappe-CSRF-Token':frappe.csrf_token||'','X-Requested-With':'XMLHttpRequest'},credentials:'same-origin'}).then(function(r){
      return r.json().then(function(d){
        if(!r.ok||d.exc||d.exception){
          var em=d.exception||d._server_messages||d.message||('HTTP '+r.status);
          throw new Error(typeof em==='string'?em:JSON.stringify(em));
        }
        return d.data||[];
      });
    });
  }
  function aiqf_rest_get(dt,name){
    return fetch('/api/resource/'+encodeURIComponent(dt)+'/'+encodeURIComponent(name),{headers:{'X-Frappe-CSRF-Token':frappe.csrf_token||'','X-Requested-With':'XMLHttpRequest'},credentials:'same-origin'}).then(function(r){return r.json();}).then(function(d){return d.data||{};});
  }
  function aiqf_stripEmpty(obj){
    if(Array.isArray(obj))return obj.map(aiqf_stripEmpty);
    if(obj&&typeof obj==='object'){
      var out={};
      Object.keys(obj).forEach(function(k){
        var v=obj[k];
        if(v===null||v===undefined||v==='')return;
        if(Array.isArray(v)&&v.length===0)return;
        if(typeof v==='object'&&!Array.isArray(v)&&Object.keys(v).length===0)return;
        out[k]=(typeof v==='object')?aiqf_stripEmpty(v):v;
      });
      return out;
    }
    return obj;
  }
  function aiqf_pickFields(obj,fields){
    if(!fields||!fields.length)return obj;
    var out={};
    fields.forEach(function(f){if(obj[f]!==undefined)out[f]=obj[f];});
    return out;
  }
  function aiqf_uploadFile(file,doctype,docname){
    try{
      var byteChars=atob(file.data);
      var byteNumbers=new Array(byteChars.length);
      for(var i=0;i<byteChars.length;i++)byteNumbers[i]=byteChars.charCodeAt(i);
      var blob=new Blob([new Uint8Array(byteNumbers)],{type:file.media_type});
      var fd=new FormData();
      fd.append('file',blob,file.name);
      fd.append('doctype',doctype);
      fd.append('docname',docname);
      fd.append('is_private','1');
      return fetch('/api/method/upload_file',{method:'POST',headers:{'X-Frappe-CSRF-Token':frappe.csrf_token||'','X-Requested-With':'XMLHttpRequest'},credentials:'same-origin',body:fd}).then(function(r){return r.json();}).catch(function(){return null;});
    }catch(e){return Promise.resolve(null);}
  }
  function aiqf_docUrl(doctype,name){
    var slug=doctype.toLowerCase().replace(/\s+/g,'-');
    return '/app/'+slug+(name?'/'+encodeURIComponent(name):'');
  }
  function aiqf_renderDocLink(doctype,name,myGen){
    if(myGen!==undefined&&AIQF_GEN!==myGen)return;
    var wrap=document.createElement('div');
    wrap.style.cssText='display:flex;justify-content:flex-start;margin-bottom:2px;';
    var a=document.createElement('a');
    a.href=aiqf_docUrl(doctype,name);
    a.target='_blank';a.rel='noopener';
    a.style.cssText='display:inline-flex;align-items:center;gap:6px;background:#eff6ff;border:1px solid #dbeafe;color:#0464a8;border-radius:20px;padding:8px 14px;font-size:13px;font-weight:600;text-decoration:none;';
    a.innerHTML='Open '+name+' →';
    wrap.appendChild(a);
    msgs_el.appendChild(wrap);
    msgs_el.scrollTop=msgs_el.scrollHeight;
  }
  function aiqf_renderExtractionForm(input,myGen,mySid,file){
    if(myGen!==undefined&&AIQF_GEN!==myGen)return;
    var box=document.createElement('div');
    box.style.cssText='max-width:96%;width:100%;background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:14px;margin-bottom:2px;';
    var itemsHtml=(input.items||[]).map(function(it,i){
      return '<div style="display:grid;grid-template-columns:1fr 70px 90px 90px;gap:6px;align-items:center;margin-bottom:6px;font-size:12px;">'+
        '<div style="color:#334155;">'+it.item_name+' <span style="color:#94a3b8;">('+it.item_code+')</span></div>'+
        '<input type="number" step="any" data-i="'+i+'" data-f="qty" value="'+it.qty+'" style="width:100%;padding:5px 6px;border:1px solid #e2e8f0;border-radius:6px;font-size:12px;">'+
        '<input type="number" step="any" data-i="'+i+'" data-f="rate" value="'+it.rate+'" style="width:100%;padding:5px 6px;border:1px solid #e2e8f0;border-radius:6px;font-size:12px;">'+
        '<div class="aiqf-amt" data-i="'+i+'" style="text-align:right;color:#0f172a;font-weight:600;">'+(it.qty*it.rate).toFixed(2)+'</div>'+
      '</div>';
    }).join('');
    var taxesHtml=(input.taxes||[]).map(function(t,ti){
      return '<div style="display:flex;justify-content:space-between;align-items:center;font-size:12px;color:#475569;margin-top:6px;">'+
        '<span>'+t.description+' <span style="color:#94a3b8;">('+t.account_head+')</span></span>'+
        '<span><input type="number" step="any" data-ti="'+ti+'" class="aiqf-ef-taxrate" value="'+t.rate+'" style="width:60px;padding:4px 6px;border:1px solid #e2e8f0;border-radius:6px;font-size:12px;">%</span>'+
      '</div>';
    }).join('');
    box.innerHTML=
      '<div style="font-size:13px;font-weight:700;color:#0f172a;margin-bottom:10px;">Review before creating — '+input.doctype+'</div>'+
      '<div style="font-size:12px;color:#475569;margin-bottom:8px;">Supplier: <strong>'+input.supplier+'</strong></div>'+
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px;">'+
        '<label style="font-size:11px;color:#94a3b8;">Bill No<br><input id="aiqf-ef-billno" value="'+(input.bill_no||'')+'" style="width:100%;padding:5px 6px;border:1px solid #e2e8f0;border-radius:6px;font-size:12px;margin-top:2px;"></label>'+
        '<label style="font-size:11px;color:#94a3b8;">Bill Date<br><input id="aiqf-ef-billdate" type="date" value="'+(input.bill_date||'')+'" style="width:100%;padding:5px 6px;border:1px solid #e2e8f0;border-radius:6px;font-size:12px;margin-top:2px;"></label>'+
      '</div>'+
      '<div style="display:grid;grid-template-columns:1fr 70px 90px 90px;gap:6px;font-size:11px;color:#94a3b8;margin-bottom:4px;"><div>Item</div><div>Qty</div><div>Rate</div><div style="text-align:right;">Amount</div></div>'+
      itemsHtml+
      (taxesHtml?'<div style="margin-top:8px;padding-top:8px;border-top:1px solid #f1f5f9;">'+taxesHtml+'</div>':'')+
      '<div style="display:flex;justify-content:space-between;font-size:13px;font-weight:700;color:#0f172a;margin-top:10px;padding-top:8px;border-top:1px solid #e2e8f0;"><span>Grand Total</span><span id="aiqf-ef-total">—</span></div>'+
      '<div id="aiqf-ef-msg" style="font-size:12px;margin-top:8px;"></div>'+
      '<div style="display:flex;gap:8px;margin-top:12px;">'+
        '<button id="aiqf-ef-confirm" style="flex:1;background:#0464a8;color:#fff;border:none;border-radius:8px;padding:9px;font-size:13px;font-weight:600;cursor:pointer;">✓ Confirm & Create</button>'+
        '<button id="aiqf-ef-cancel" style="background:none;border:1px solid #e2e8f0;color:#64748b;border-radius:8px;padding:9px 16px;font-size:13px;cursor:pointer;">Cancel</button>'+
      '</div>';
    msgs_el.appendChild(box);
    msgs_el.scrollTop=msgs_el.scrollHeight;

    function recalc(){
      var subtotal=0;
      box.querySelectorAll('input[data-f="qty"]').forEach(function(qi){
        var i=qi.getAttribute('data-i');
        var ri=box.querySelector('input[data-f="rate"][data-i="'+i+'"]');
        var qty=parseFloat(qi.value)||0, rate=parseFloat(ri.value)||0;
        var amt=qty*rate;
        subtotal+=amt;
        box.querySelector('.aiqf-amt[data-i="'+i+'"]').textContent=amt.toFixed(2);
      });
      var taxTotal=0;
      box.querySelectorAll('.aiqf-ef-taxrate').forEach(function(ti){
        taxTotal+=subtotal*(parseFloat(ti.value)||0)/100;
      });
      box.querySelector('#aiqf-ef-total').textContent=(subtotal+taxTotal).toFixed(2)+' '+(input.currency||'');
    }
    box.querySelectorAll('input').forEach(function(el){el.addEventListener('input',recalc);});
    recalc();

    box.querySelector('#aiqf-ef-cancel').addEventListener('click',function(){
      box.querySelector('#aiqf-ef-confirm').disabled=true;
      box.querySelector('#aiqf-ef-cancel').disabled=true;
      box.querySelector('#aiqf-ef-msg').innerHTML='<span style="color:#94a3b8;">Cancelled — nothing was created.</span>';
      aiqf_saveMsg('assistant','[Extraction form cancelled by user — nothing created]',mySid);
    });

    box.querySelector('#aiqf-ef-confirm').addEventListener('click',function(){
      var btn=box.querySelector('#aiqf-ef-confirm');
      btn.disabled=true;btn.textContent='Creating…';
      var items=(input.items||[]).map(function(it,i){
        var qty=parseFloat(box.querySelector('input[data-f="qty"][data-i="'+i+'"]').value)||0;
        var rate=parseFloat(box.querySelector('input[data-f="rate"][data-i="'+i+'"]').value)||0;
        return {item_code:it.item_code,qty:qty,rate:rate};
      });
      var data={supplier:input.supplier,items:items};
      var billNoEl=box.querySelector('#aiqf-ef-billno');
      var billDateEl=box.querySelector('#aiqf-ef-billdate');
      if(billNoEl&&billNoEl.value)data.bill_no=billNoEl.value;
      if(billDateEl&&billDateEl.value)data.bill_date=billDateEl.value;
      if(input.currency)data.currency=input.currency;
      var taxRows=box.querySelectorAll('.aiqf-ef-taxrate');
      if(taxRows.length){
        data.taxes=(input.taxes||[]).map(function(t,ti){
          var rateEl=box.querySelector('.aiqf-ef-taxrate[data-ti="'+ti+'"]');
          return {charge_type:'On Net Total',account_head:t.account_head,rate:parseFloat(rateEl.value)||0,description:t.description};
        });
      }
      aiqf_rest_create(input.doctype,data).then(function(res){
        if(!res.ok){
          var em=(res.body&&(res.body.exception||res.body._server_messages||res.body.message))||'Create failed';
          box.querySelector('#aiqf-ef-msg').innerHTML='<span style="color:#dc2626;">Error: '+(typeof em==='string'?em:JSON.stringify(em))+'</span>';
          btn.disabled=false;btn.textContent='✓ Confirm & Create';
          return;
        }
        var doc=(res.body&&res.body.data)||{};
        var attachFile=file||aiqf_lastFile;
        var finish=function(){
          box.querySelector('#aiqf-ef-msg').innerHTML='<span style="color:#16a34a;">✓ Created '+doc.name+' as draft.</span>';
          btn.textContent='✓ Created';
          box.querySelector('#aiqf-ef-cancel').style.display='none';
          aiqf_renderDocLink(input.doctype,doc.name,myGen);
          aiqf_saveMsg('assistant','Created draft '+input.doctype+' '+doc.name+' via review form (user-confirmed values).',mySid);
        };
        if(attachFile){
          aiqf_uploadFile(attachFile,input.doctype,doc.name).then(function(){aiqf_lastFile=null;finish();});
        }else{finish();}
      }).catch(function(e){
        box.querySelector('#aiqf-ef-msg').innerHTML='<span style="color:#dc2626;">Error: '+e.message+'</span>';
        btn.disabled=false;btn.textContent='✓ Confirm & Create';
      });
    });
  }
  function aiqf_rest_create(dt,data){
    return fetch('/api/resource/'+encodeURIComponent(dt),{method:'POST',headers:{'Content-Type':'application/json','X-Frappe-CSRF-Token':frappe.csrf_token||'','X-Requested-With':'XMLHttpRequest'},credentials:'same-origin',body:JSON.stringify(data||{})}).then(function(r){return r.json().then(function(d){return {ok:r.ok,body:d};});});
  }
  function aiqf_rest_update(dt,name,data){
    return fetch('/api/resource/'+encodeURIComponent(dt)+'/'+encodeURIComponent(name),{method:'PUT',headers:{'Content-Type':'application/json','X-Frappe-CSRF-Token':frappe.csrf_token||'','X-Requested-With':'XMLHttpRequest'},credentials:'same-origin',body:JSON.stringify(data||{})}).then(function(r){return r.json().then(function(d){return {ok:r.ok,body:d};});});
  }
  function aiqf_rest_submit(dt,name){
    return aiqf_rest_update(dt,name,{docstatus:1});
  }
  function aiqf_rest_workflow_state(dt,name){
    return aiqf_rest_get(dt,name).then(function(doc){
      var form=new FormData();form.append('doc',JSON.stringify(doc));
      return fetch('/api/method/frappe.model.workflow.get_transitions',{method:'POST',headers:{'X-Frappe-CSRF-Token':frappe.csrf_token||''},credentials:'same-origin',body:form}).then(function(r){return r.json();}).then(function(d){
        var trans=(d.message||[]).map(function(t){return {action:t.action,next_state:t.next_state};});
        return {current_state:doc.workflow_state||null,valid_actions:trans};
      });
    });
  }
  function aiqf_rest_workflow_action(dt,name,action){
    return aiqf_rest_get(dt,name).then(function(doc){
      var form=new FormData();form.append('doc',JSON.stringify(doc));form.append('action',action);
      return fetch('/api/method/frappe.model.workflow.apply_workflow',{method:'POST',headers:{'X-Frappe-CSRF-Token':frappe.csrf_token||''},credentials:'same-origin',body:form}).then(function(r){return r.json().then(function(d){return {ok:r.ok,body:d};});});
    });
  }
  function aiqf_comparePricing(itemCode,doctype){
    doctype=doctype||'Purchase Invoice';
    var childDoctype=doctype+' Item';
    return aiqf_rest(doctype,['name'],[[childDoctype,'item_code','=',itemCode],[doctype,'docstatus','=',1]],50).then(function(parents){
      if(!parents.length)return {suppliers:[],total_transactions:0};
      var dateField=doctype==='Purchase Invoice'?'posting_date':'transaction_date';
      return Promise.all(parents.map(function(p){return aiqf_rest_get(doctype,p.name);})).then(function(fullDocs){
        var joined=[];
        fullDocs.forEach(function(doc){
          (doc.items||[]).forEach(function(it){
            if(it.item_code===itemCode){
              joined.push({supplier:doc.supplier,rate:parseFloat(it.rate)||0,qty:parseFloat(it.qty)||0,date:doc[dateField]});
            }
          });
        });
        var groups={};
        joined.forEach(function(j){
          if(!groups[j.supplier])groups[j.supplier]={supplier:j.supplier,rates:[],latest_date:j.date,latest_rate:j.rate,count:0};
          var g=groups[j.supplier];
          g.rates.push(j.rate);
          g.count++;
          if(!g.latest_date||j.date>g.latest_date){g.latest_date=j.date;g.latest_rate=j.rate;}
        });
        var suppliers=Object.values(groups).map(function(g){
          return {supplier:g.supplier,avg_rate:g.rates.reduce(function(a,b){return a+b;},0)/g.rates.length,min_rate:Math.min.apply(null,g.rates),max_rate:Math.max.apply(null,g.rates),latest_rate:g.latest_rate,latest_date:g.latest_date,purchase_count:g.count};
        }).sort(function(a,b){return a.avg_rate-b.avg_rate;});
        return {suppliers:suppliers,total_transactions:joined.length};
      });
    });
  }

  function aiqf_predictReorder(warehouse,lookbackDays){
    lookbackDays=lookbackDays||90;
    var itemFilters=[['Item Reorder','warehouse_reorder_level','>',0]];
    return aiqf_rest('Item',['name'],itemFilters,100).then(function(itemRows){
      if(!itemRows.length)return {items:[],checked:0};
      return Promise.all(itemRows.map(function(ir){return aiqf_rest_get('Item',ir.name);})).then(function(fullItems){
        var candidates=[];
        fullItems.forEach(function(it){
          (it.reorder_levels||[]).forEach(function(rl){
            if(parseFloat(rl.warehouse_reorder_level)>0&&(!warehouse||rl.warehouse===warehouse)){
              candidates.push({item_code:it.name,warehouse:rl.warehouse,reorder_level:parseFloat(rl.warehouse_reorder_level)||0,reorder_qty:parseFloat(rl.warehouse_reorder_qty)||0});
            }
          });
        });
        if(!candidates.length)return {items:[],checked:fullItems.length};
        return Promise.all(candidates.map(function(c){
          return aiqf_rest('Bin',['actual_qty'],[['Bin','item_code','=',c.item_code],['Bin','warehouse','=',c.warehouse]],1).then(function(bins){
            c.current_qty=bins.length?parseFloat(bins[0].actual_qty)||0:0;
            return c;
          });
        })).then(function(withStock){
          var low=withStock.filter(function(c){return c.current_qty<c.reorder_level;}).slice(0,20);
          if(!low.length)return {items:[],checked:candidates.length};
          var cutoff=new Date();
          cutoff.setDate(cutoff.getDate()-lookbackDays);
          var cutoffStr=cutoff.toISOString().slice(0,10);
          return Promise.all(low.map(function(b){
            return aiqf_rest('Stock Ledger Entry',['actual_qty'],[['Stock Ledger Entry','item_code','=',b.item_code],['Stock Ledger Entry','warehouse','=',b.warehouse],['Stock Ledger Entry','posting_date','>=',cutoffStr]],500).then(function(sles){
              var consumed=sles.reduce(function(sum,s){var q=parseFloat(s.actual_qty)||0;return q<0?sum+Math.abs(q):sum;},0);
              var avgDaily=consumed/lookbackDays;
              var daysLeft=avgDaily>0?Math.round(b.current_qty/avgDaily):null;
              return {item_code:b.item_code,warehouse:b.warehouse,current_qty:b.current_qty,reorder_level:b.reorder_level,reorder_qty:b.reorder_qty,avg_daily_consumption:Math.round(avgDaily*100)/100,estimated_days_until_stockout:daysLeft};
            });
          })).then(function(results){
            results.sort(function(a,b){
              var da=a.estimated_days_until_stockout===null?Infinity:a.estimated_days_until_stockout;
              var db=b.estimated_days_until_stockout===null?Infinity:b.estimated_days_until_stockout;
              return da-db;
            });
            return {items:results,checked:candidates.length};
          });
        });
      });
    });
  }

  function aiqf_forecastDemand(itemCode,periodsAhead){
    periodsAhead=periodsAhead||3;
    var cutoff=new Date();
    cutoff.setMonth(cutoff.getMonth()-12);
    var cutoffStr=cutoff.toISOString().slice(0,10);
    return aiqf_rest('Sales Invoice',['name'],[['Sales Invoice Item','item_code','=',itemCode],['Sales Invoice','docstatus','=',1],['Sales Invoice','posting_date','>=',cutoffStr]],100).then(function(invRows){
      if(!invRows.length)return {historical:[],forecast:[],message:'No sales history found for this item in the last 12 months.'};
      return Promise.all(invRows.map(function(r){return aiqf_rest_get('Sales Invoice',r.name);})).then(function(fullDocs){
        var monthly={};
        fullDocs.forEach(function(doc){
          var monthKey=(doc.posting_date||'').slice(0,7);
          if(!monthKey)return;
          (doc.items||[]).forEach(function(it){
            if(it.item_code===itemCode){
              monthly[monthKey]=(monthly[monthKey]||0)+(parseFloat(it.qty)||0);
            }
          });
        });
        var now=new Date();
        var months=[];
        for(var i=11;i>=0;i--){
          var d=new Date(now.getFullYear(),now.getMonth()-i,1);
          var key=d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0');
          months.push({month:key,qty:monthly[key]||0});
        }
        var n=months.length;
        var sumX=0,sumY=0,sumXY=0,sumX2=0;
        months.forEach(function(m,idx){sumX+=idx;sumY+=m.qty;sumXY+=idx*m.qty;sumX2+=idx*idx;});
        var denom=(n*sumX2-sumX*sumX);
        var slope=denom!==0?(n*sumXY-sumX*sumY)/denom:0;
        var intercept=(sumY-slope*sumX)/n;
        var forecast=[];
        for(var f=0;f<periodsAhead;f++){
          var idx=n+f;
          var d2=new Date(now.getFullYear(),now.getMonth()+1+f,1);
          var key2=d2.getFullYear()+'-'+String(d2.getMonth()+1).padStart(2,'0');
          forecast.push({month:key2,forecast_qty:Math.max(0,Math.round((slope*idx+intercept)*10)/10)});
        }
        return {historical:months,forecast:forecast,trend:slope>0.05?'increasing':slope<-0.05?'decreasing':'flat',monthly_change_rate:Math.round(slope*100)/100};
      });
    });
  }

  var AIQF_DATE_FIELD = {
    'Sales Order':'transaction_date','Purchase Order':'transaction_date',
    'Sales Invoice':'posting_date','Purchase Invoice':'posting_date',
    'Quotation':'transaction_date','Delivery Note':'posting_date','Purchase Receipt':'posting_date',
    'Leave Application':'from_date','Attendance':'attendance_date',
    'Stock Entry':'posting_date','Expense Claim':'posting_date','Opportunity':'transaction_date',
    'Lead':'creation','Task':'exp_end_date'
  };
  var AIQF_STATUS_NORMALIZE = {
    'Sales Order':{'pending':['not in',['Completed','Cancelled','Closed']],'open':['not in',['Completed','Cancelled','Closed']],'outstanding':['not in',['Completed','Cancelled','Closed']],'active':['not in',['Completed','Cancelled','Closed']]},
    'Purchase Order':{'pending':['not in',['Completed','Cancelled','Closed']],'open':['not in',['Completed','Cancelled','Closed']],'outstanding':['not in',['Completed','Cancelled','Closed']],'active':['not in',['Completed','Cancelled','Closed']]},
    'Sales Invoice':{'pending':['not in',['Paid','Cancelled']],'outstanding':['not in',['Paid','Cancelled']],'overdue':['=','Overdue']},
    'Purchase Invoice':{'pending':['not in',['Paid','Cancelled']],'outstanding':['not in',['Paid','Cancelled']],'overdue':['=','Overdue']},
    'Leave Application':{'pending':['=','Open'],'open':['=','Open']},
    'Asset':{'active':['=','Submitted']}
  };
  function aiqf_resolveDateRange(key){
    var today=new Date();
    var y=today.getFullYear(),m=today.getMonth(),d=today.getDate();
    function fmt(dt){return dt.getFullYear()+'-'+String(dt.getMonth()+1).padStart(2,'0')+'-'+String(dt.getDate()).padStart(2,'0');}
    key=String(key).toLowerCase().replace(/\s+/g,'_');
    if(key==='today')return [fmt(today),fmt(today)];
    if(key==='this_week'){
      var day=today.getDay();
      var monday=new Date(y,m,d-((day+6)%7));
      var sunday=new Date(monday.getFullYear(),monday.getMonth(),monday.getDate()+6);
      return [fmt(monday),fmt(sunday)];
    }
    if(key==='this_month'){
      return [fmt(new Date(y,m,1)),fmt(new Date(y,m+1,0))];
    }
    if(key==='last_7_days')return [fmt(new Date(y,m,d-6)),fmt(today)];
    if(key==='last_30_days')return [fmt(new Date(y,m,d-29)),fmt(today)];
    return null;
  }
  function aiqf_normalizeFilters(doctype,filterArray){
    var dateField=AIQF_DATE_FIELD[doctype];
    var statusMap=AIQF_STATUS_NORMALIZE[doctype];
    var out=[];
    (filterArray||[]).forEach(function(f){
      if(!Array.isArray(f)){out.push(f);return;}
      var is4=f.length>=4;
      var dt2=is4?f[0]:doctype;
      var fld=is4?f[1]:f[0];
      var op=is4?f[2]:f[1];
      var val=is4?f[3]:f[2];
      if(fld==='date_range'&&dateField){
        var range=aiqf_resolveDateRange(val);
        if(range){out.push([dt2,dateField,'>=',range[0]]);out.push([dt2,dateField,'<=',range[1]]);return;}
      }
      if(fld==='creation'&&dateField){fld=dateField;}
      if(fld==='status'&&statusMap&&typeof val==='string'){
        var norm=statusMap[val.toLowerCase()];
        if(norm){out.push([dt2,'status',norm[0],norm[1]]);return;}
      }
      out.push([dt2,fld,op,val]);
    });
    return out;
  }
  function aiqf_analyze(doctype,filters,aggField,fn,groupBy){
    var fields=['name'];
    if(aggField)fields.push(aggField);
    if(groupBy)fields.push(groupBy);
    return aiqf_rest(doctype,fields,filters||{},500).then(function(rows){
      function calc(list){
        if(fn==='count')return list.length;
        var vals=list.map(function(r){return parseFloat(r[aggField])||0;});
        if(fn==='sum')return vals.reduce(function(a,b){return a+b;},0);
        if(fn==='avg')return vals.length?vals.reduce(function(a,b){return a+b;},0)/vals.length:0;
        if(fn==='min')return vals.length?Math.min.apply(null,vals):null;
        if(fn==='max')return vals.length?Math.max.apply(null,vals):null;
        return null;
      }
      if(groupBy){
        var groups={};
        rows.forEach(function(r){var k=r[groupBy]||'(none)';groups[k]=groups[k]||[];groups[k].push(r);});
        var result={};
        Object.keys(groups).forEach(function(k){result[k]=calc(groups[k]);});
        return {result:result,row_count:rows.length,truncated:rows.length>=500};
      }else{
        return {result:calc(rows),row_count:rows.length,truncated:rows.length>=500};
      }
    });
  }

  var AIQF_CHARTJS_PROMISE=null;
  function aiqf_loadChartJS(){
    if(window.Chart)return Promise.resolve();
    if(AIQF_CHARTJS_PROMISE)return AIQF_CHARTJS_PROMISE;
    AIQF_CHARTJS_PROMISE=new Promise(function(resolve,reject){
      var s=document.createElement('script');
      s.src='https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js';
      s.onload=function(){resolve();};
      s.onerror=function(){reject(new Error('Failed to load charting library'));};
      document.head.appendChild(s);
    });
    return AIQF_CHARTJS_PROMISE;
  }
  var AIQF_CHART_COLORS=['#f97316','#0464a8','#16a34a','#dc2626','#9333ea','#0891b2','#ca8a04','#db2777'];
  function aiqf_renderChart(input){
    var wrap=document.createElement('div');
    wrap.style.cssText='display:flex;justify-content:flex-start;margin-bottom:2px;';
    var box=document.createElement('div');
    box.style.cssText='max-width:92%;width:100%;background:#fff;border:1px solid #eee;border-radius:12px;padding:12px;';
    if(input.title){
      var t=document.createElement('div');
      t.style.cssText='font-size:13px;font-weight:600;color:#222;margin-bottom:8px;';
      t.textContent=input.title;
      box.appendChild(t);
    }
    var canvasWrap=document.createElement('div');
    canvasWrap.style.cssText='position:relative;height:220px;';
    var canvas=document.createElement('canvas');
    canvasWrap.appendChild(canvas);
    box.appendChild(canvasWrap);
    wrap.appendChild(box);
    msgs_el.appendChild(wrap);
    msgs_el.scrollTop=msgs_el.scrollHeight;
    var ctx=canvas.getContext('2d');
    var isPie=(input.chart_type==='pie'||input.chart_type==='doughnut');
    var datasets=(input.datasets||[]).map(function(ds,i){
      if(isPie){
        return {label:ds.label,data:ds.data,backgroundColor:input.labels.map(function(_,j){return AIQF_CHART_COLORS[j%AIQF_CHART_COLORS.length];})};
      }
      var c=AIQF_CHART_COLORS[i%AIQF_CHART_COLORS.length];
      return {label:ds.label,data:ds.data,backgroundColor:input.chart_type==='line'?'transparent':c,borderColor:c,borderWidth:2,tension:0.3};
    });
    new window.Chart(ctx,{
      type:input.chart_type,
      data:{labels:input.labels,datasets:datasets},
      options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:datasets.length>1||isPie,labels:{font:{size:11}}}},scales:isPie?{}:{y:{beginAtZero:true,ticks:{font:{size:10}}},x:{ticks:{font:{size:10}}}}}
    });
  }

  var AIQF_STOPWORDS=['of','the','a','an','for','with','and','grade','pack','size','new','set','type'];
  function aiqf_cleanQuery(q){
    return q.replace(/\([^)]*\)/g,' ')
             .replace(/\b\d+\s*(ml|l|kg|g|mm|cm|m|pcs|pack|x|units?)\b/gi,' ')
             .replace(/\b\d+\b/g,' ')
             .replace(/\s+/g,' ').trim();
  }
  function aiqf_significantWords(q){
    return q.split(/\s+/).filter(function(w){return w.length>2&&AIQF_STOPWORDS.indexOf(w.toLowerCase())===-1;}).sort(function(a,b){return b.length-a.length;});
  }
  function aiqf_searchStep(dt,field,term){
    if(!term)return Promise.resolve([]);
    return aiqf_rest(dt,AIQF_DEF[dt]||['name'],[[dt,field,'like','%'+term+'%']],10);
  }
  function aiqf_wordCascade(dt,titleField,text){
    var words=aiqf_significantWords(text);
    var tryWord=function(i){
      if(i>=words.length)return Promise.resolve([]);
      return aiqf_searchStep(dt,titleField,words[i]).then(function(d){
        if(d.length)return d;
        return tryWord(i+1);
      });
    };
    return tryWord(0);
  }
  function aiqf_smartSearch(dt,titleField,query){
    return aiqf_searchStep(dt,titleField,query).then(function(data){
      if(data.length)return data;
      var cleaned=aiqf_cleanQuery(query);
      if(cleaned&&cleaned.toLowerCase()!==query.toLowerCase()){
        return aiqf_searchStep(dt,titleField,cleaned).then(function(d2){
          if(d2.length)return d2;
          return aiqf_wordCascade(dt,titleField,cleaned);
        });
      }
      return aiqf_wordCascade(dt,titleField,query);
    });
  }

  function aiqf_fac(tool,input,myGen,file,mySid){return new Promise(function(resolve){
    if(input.fields&&typeof input.fields==='string')input.fields=[input.fields];
    if(input.limit&&typeof input.limit==='string')input.limit=parseInt(input.limit);
    var norm=tool.replace(/^fac_/,'');
    if(norm==='list_documents'||norm==='get_documents'){
      aiqf_rest(input.doctype,aiqf_normFields(input.fields,input.doctype),input.filters||{},input.limit||20).then(function(data){var out=JSON.stringify({success:true,data:data,count:data.length});resolve(out.length>4000?out.substring(0,4000)+'...':out);}).catch(function(e){resolve(JSON.stringify({success:false,error:e.message}));});
    }else if(norm==='get_document'){
      aiqf_rest_get(input.doctype,input.name).then(function(data){
        var trimmed=aiqf_stripEmpty(aiqf_pickFields(data,input.fields));
        var out=JSON.stringify({success:true,data:trimmed});
        resolve(out.length>6000?out.substring(0,6000)+'...[truncated, request specific fields for full detail]':out);
      }).catch(function(e){resolve(JSON.stringify({success:false,error:e.message}));});
    }else if(norm==='search_documents'){
      var dt=input.doctype||'Item';
      var titleField=AIQF_TITLE_FIELD[dt]||'name';
      aiqf_smartSearch(dt,titleField,input.query).then(function(data){
        if(data.length||titleField==='name'){resolve(JSON.stringify({success:true,data:data}));return;}
        aiqf_wordCascade(dt,'name',input.query).then(function(d2){resolve(JSON.stringify({success:true,data:d2}));}).catch(function(){resolve(JSON.stringify({success:true,data:[]}));});
      }).catch(function(){resolve(JSON.stringify({success:true,data:[]}));});
    }else if(norm==='generate_report'){
      var form=new FormData();form.append('report_name',input.report_name);form.append('filters',JSON.stringify(input.filters||{}));fetch('/api/method/frappe.desk.query_report.run',{method:'POST',headers:{'X-Frappe-CSRF-Token':frappe.csrf_token||''},body:form}).then(function(r){return r.json();}).then(function(d){var result=d.message||{};resolve(JSON.stringify({success:true,columns:result.columns,data:(result.result||[]).slice(0,20)}));}).catch(function(e){resolve(JSON.stringify({success:false,error:e.message}));});
    }else if(norm==='report_list'){
      aiqf_rest('Report',['name','report_type','module'],{},30).then(function(data){resolve(JSON.stringify({success:true,reports:data}));}).catch(function(e){resolve(JSON.stringify({success:false,error:e.message}));});
    }else if(norm==='create_document'){
      aiqf_rest_create(input.doctype,input.data||{}).then(function(res){
        if(!res.ok){var em=(res.body&&(res.body.exception||res.body._server_messages||res.body.message))||'Create failed';resolve(JSON.stringify({success:false,error:typeof em==='string'?em:JSON.stringify(em)}));return;}
        var doc=(res.body&&res.body.data)||{};
        aiqf_renderDocLink(input.doctype,doc.name,myGen);
        var attachFile=file||aiqf_lastFile;
        if(attachFile){
          aiqf_uploadFile(attachFile,input.doctype,doc.name).then(function(){
            aiqf_lastFile=null;
            resolve(JSON.stringify({success:true,name:doc.name,doctype:input.doctype,docstatus:doc.docstatus,message:'Draft '+input.doctype+' '+doc.name+' created (docstatus 0, not submitted). Original source file attached to the record.'}));
          });
        }else{
          resolve(JSON.stringify({success:true,name:doc.name,doctype:input.doctype,docstatus:doc.docstatus,message:'Draft '+input.doctype+' '+doc.name+' created (docstatus 0, not submitted).'}));
        }
      }).catch(function(e){resolve(JSON.stringify({success:false,error:e.message}));});
    }else if(norm==='update_document'){
      aiqf_rest_update(input.doctype,input.name,input.data||{}).then(function(res){
        if(!res.ok){var em=(res.body&&(res.body.exception||res.body._server_messages||res.body.message))||'Update failed';resolve(JSON.stringify({success:false,error:typeof em==='string'?em:JSON.stringify(em)}));return;}
        var doc=(res.body&&res.body.data)||{};
        resolve(JSON.stringify({success:true,name:doc.name||input.name,doctype:input.doctype,docstatus:doc.docstatus,message:input.doctype+' '+(doc.name||input.name)+' updated.'}));
      }).catch(function(e){resolve(JSON.stringify({success:false,error:e.message}));});
    }else if(norm==='submit_document'){
      aiqf_rest_submit(input.doctype,input.name).then(function(res){
        if(!res.ok){var em=(res.body&&(res.body.exception||res.body._server_messages||res.body.message))||'Submit failed';resolve(JSON.stringify({success:false,error:typeof em==='string'?em:JSON.stringify(em)}));return;}
        var doc=(res.body&&res.body.data)||{};
        aiqf_renderDocLink(input.doctype,doc.name||input.name,myGen);
        resolve(JSON.stringify({success:true,name:doc.name||input.name,doctype:input.doctype,docstatus:doc.docstatus,message:input.doctype+' '+(doc.name||input.name)+' submitted (docstatus 1).'}));
      }).catch(function(e){resolve(JSON.stringify({success:false,error:e.message}));});
    }else if(norm==='get_workflow_state'){
      aiqf_rest_workflow_state(input.doctype,input.name).then(function(d){resolve(JSON.stringify({success:true,doctype:input.doctype,name:input.name,current_state:d.current_state,valid_actions:d.valid_actions}));}).catch(function(e){resolve(JSON.stringify({success:false,error:e.message}));});
    }else if(norm==='run_workflow_action'){
      aiqf_rest_workflow_action(input.doctype,input.name,input.action).then(function(res){
        if(!res.ok){var em=(res.body&&(res.body.exception||res.body._server_messages||res.body.message))||'Workflow action failed';resolve(JSON.stringify({success:false,error:typeof em==='string'?em:JSON.stringify(em)}));return;}
        var doc=(res.body&&res.body.message)||{};
        resolve(JSON.stringify({success:true,name:input.name,doctype:input.doctype,new_state:doc.workflow_state,message:input.doctype+' '+input.name+' moved to state "'+doc.workflow_state+'" via action "'+input.action+'".'}));
      }).catch(function(e){resolve(JSON.stringify({success:false,error:e.message}));});
    }else if(norm==='analyze_data'){
      aiqf_analyze(input.doctype,input.filters,input.aggregate_field,input.aggregate_fn,input.group_by).then(function(d){resolve(JSON.stringify({success:true,doctype:input.doctype,aggregate_fn:input.aggregate_fn,aggregate_field:input.aggregate_field||null,group_by:input.group_by||null,result:d.result,row_count:d.row_count,truncated:d.truncated}));}).catch(function(e){resolve(JSON.stringify({success:false,error:e.message}));});
    }else if(norm==='compare_supplier_pricing'){
      aiqf_comparePricing(input.item_code,input.doctype).then(function(d){
        if(!d.suppliers.length){resolve(JSON.stringify({success:true,item_code:input.item_code,message:'No submitted purchase history found for this item.',suppliers:[]}));return;}
        resolve(JSON.stringify({success:true,item_code:input.item_code,suppliers:d.suppliers,total_transactions:d.total_transactions}));
      }).catch(function(e){resolve(JSON.stringify({success:false,error:e.message}));});
    }else if(norm==='predict_reorder'){
      aiqf_predictReorder(input.warehouse,input.lookback_days).then(function(d){
        if(!d.items.length){resolve(JSON.stringify({success:true,message:'No items currently below their reorder level (checked '+d.checked+' items with a reorder level set).',items:[]}));return;}
        resolve(JSON.stringify({success:true,items:d.items,items_checked:d.checked}));
      }).catch(function(e){resolve(JSON.stringify({success:false,error:e.message}));});
    }else if(norm==='forecast_demand'){
      aiqf_forecastDemand(input.item_code,input.periods_ahead).then(function(d){
        if(d.message){resolve(JSON.stringify({success:true,item_code:input.item_code,message:d.message,historical:[],forecast:[]}));return;}
        resolve(JSON.stringify({success:true,item_code:input.item_code,historical:d.historical,forecast:d.forecast,trend:d.trend,monthly_change_rate:d.monthly_change_rate,method:'Simple linear trend fitted to last 12 months of actual sales — a basic statistical estimate, not a sophisticated ML model. Does not account for seasonality or one-off events.'}));
      }).catch(function(e){resolve(JSON.stringify({success:false,error:e.message}));});
    }else if(norm==='create_chart'){
      aiqf_loadChartJS().then(function(){
        if(myGen===undefined||AIQF_GEN===myGen)aiqf_renderChart(input);
        resolve(JSON.stringify({success:true,message:'Chart rendered inline in the chat for the user. Do not repeat the raw numbers as a table — just briefly comment on what the chart shows.'}));
      }).catch(function(e){resolve(JSON.stringify({success:false,error:e.message}));});
    }else if(norm==='show_extraction_form'){
      aiqf_renderExtractionForm(input,myGen,mySid,file);
      resolve(JSON.stringify({success:true,message:'Review form shown to the user with editable fields. The user will correct any wrong numbers directly and click Confirm themselves — this creates the document without any further action from you. Just tell the user briefly to review the form; do not call fac_create_document and do not repeat the numbers in text.'}));
    }else{resolve(JSON.stringify({error:'Unknown tool'}));}
  });}

  function aiqf_send(){
    if(aiqf_b)return;
    var text=text_el.value.trim();
    var file=aiqf_pendingFile;
    if(!text&&!file)return;
    text_el.value='';
    text_el.style.height='auto';
    aiqf_b=true;
    var mySid=AIQF_SID, myGen=AIQF_GEN;
    var displayText=text||'Extract the details from this document.';
    aiqf_addUser(displayText+(file?'\n📎 '+file.name:''));
    var apiContent;
    var placeholderText;
    if(file){
      aiqf_lastFile=file;
      AIQF_USED_FILE=true;
      var block=(file.media_type==='application/pdf')
        ?{type:'document',source:{type:'base64',media_type:file.media_type,data:file.data}}
        :{type:'image',source:{type:'base64',media_type:file.media_type,data:file.data}};
      apiContent=[block,{type:'text',text:displayText}];
      placeholderText=displayText+' [Attached file: '+file.name+' — already processed, do not need to re-read it]';
    }else{
      apiContent=text;
      placeholderText=text;
    }
    var requestMsgs=aiqf_h.slice().concat([{role:'user',content:apiContent}]);
    aiqf_h.push({role:'user',content:placeholderText});
    if(aiqf_h.length>6)aiqf_h=aiqf_h.slice(-6);
    aiqf_saveMsg('user',placeholderText,mySid);
    aiqf_pendingFile=null;file_el.value='';aiqf_renderChip();
    aiqf_showTyping();
    aiqf_runClaude(mySid,myGen,requestMsgs,file).catch(function(e){if(AIQF_GEN===myGen){aiqf_rmTyping();aiqf_addBot('Sorry: '+e.message);}}).finally(function(){if(AIQF_GEN===myGen)aiqf_b=false;});
  }

  function aiqf_runClaude(mySid,myGen,initialMsgs,file){
    var msgs=(initialMsgs||aiqf_h.slice());
    var imageStripped=false;
    var loop=function(i){
      if(i>=8){
        if(AIQF_GEN===myGen){
          aiqf_rmTyping();
          aiqf_addBot('This is taking more steps than expected. Could you rephrase or split this into a simpler request?');
        }
        aiqf_saveMsg('assistant','[Stopped: exceeded tool-call limit for this turn]',mySid);
        return Promise.resolve();
      }
      var aiqf_isOcrConv=AIQF_USED_FILE;
      var aiqf_sysText=aiqf_isOcrConv?(AIQF_SYS_CORE+'\n\n'+AIQF_SYS_OCR):AIQF_SYS_CORE;
      var aiqf_model=aiqf_isOcrConv?'claude-sonnet-4-6':'claude-haiku-4-5-20251001';
      var aiqf_toolList=AIQF_TOOLS.filter(function(t){return aiqf_isOcrConv||t.name!=='fac_show_extraction_form';});
      return fetch('/api/method/assistiq_anthropic_proxy',{method:'POST',headers:{'Content-Type':'application/json','X-Frappe-CSRF-Token':frappe.csrf_token||'','X-Requested-With':'XMLHttpRequest'},credentials:'same-origin',body:JSON.stringify({model:aiqf_model,max_tokens:1024,system:[{type:'text',text:aiqf_sysText,cache_control:{type:'ephemeral'}}],messages:msgs,tools:aiqf_toolList.map(function(t,idx){var o={name:t.name,description:t.description,input_schema:t.parameters};if(idx===aiqf_toolList.length-1)o.cache_control={type:'ephemeral'};return o;})})})
      .then(function(r){return r.json();})
      .then(function(r){
        var d=r.message||r;
        if(d.error)throw new Error(d.error);
        var tx=d.content.filter(function(b){return b.type==='text';});
        var tl=d.content.filter(function(b){return b.type==='tool_use';});
        if(d.stop_reason==='end_turn'||!tl.length){
          var rep=tx.map(function(b){return b.text;}).join('\n')||'Done!';
          aiqf_saveMsg('assistant',rep,mySid);
          if(AIQF_GEN===myGen){
            aiqf_rmTyping();
            aiqf_h.push({role:'assistant',content:rep});
            if(aiqf_h.length>6)aiqf_h=aiqf_h.slice(-6);
            aiqf_addBot(rep);
          }
          return;
        }
        msgs.push({role:'assistant',content:d.content});
        if(file&&!imageStripped){
          imageStripped=true;
          for(var k=0;k<msgs.length;k++){
            if(msgs[k].role==='user'&&Array.isArray(msgs[k].content)){
              msgs[k]={role:'user',content:'[Attached file already read above — details already extracted, no need to re-view it]'};
              break;
            }
          }
        }
        return Promise.all(tl.map(function(tu){return aiqf_fac(tu.name,tu.input||{},myGen,file,mySid).then(function(content){return{type:'tool_result',tool_use_id:tu.id,content:content};});}))
        .then(function(res){msgs.push({role:'user',content:res});return loop(i+1);});
      });
    };
    return loop(0);
  }

  var new_btn = document.getElementById('aiqf-new-btn');
  var hist_btn = document.getElementById('aiqf-hist-btn');
  btn.addEventListener('click',function(){
    isOpen=!isOpen;
    panel.classList.toggle('open',isOpen);overlay.classList.toggle('open',isOpen);
    if(isOpen){
      aiqf_showChatView();
      if(!panel.dataset.inited){
        panel.dataset.inited='1';
        aiqf_loadHistory(AIQF_SID).then(function(rows){
          if(rows&&rows.length){
            rows.forEach(function(m){
              if(m.role==='user'){aiqf_addUser(m.message);}else{aiqf_addBot(m.message);}
            });
            aiqf_h=rows.slice(-6).map(function(m){return{role:m.role,content:m.message};});
          }else{
            aiqf_addBot('👋 Hi! I am AssistIQ, your ERP assistant. Ask me anything!');
          }
        });
      }
    }
    aiqf_renderSuggs();
    if(isOpen){setTimeout(function(){text_el.focus();},100); aiqf_renderSuggs();}
  });
  new_btn.addEventListener('click',aiqf_newChat);
  hist_btn.addEventListener('click',function(){
    if(hist_el.style.display==='block'){aiqf_showChatView();}else{aiqf_showHistoryList();}
  });
  close_btn.addEventListener('click',function(){isOpen=false;panel.classList.remove('open');overlay.classList.remove('open');});
  send_btn.addEventListener('click',aiqf_send);
  attach_btn.addEventListener('click',function(){file_el.click();});
  function aiqf_renderChip(){
    if(!aiqf_pendingFile){chip_el.innerHTML='';return;}
    chip_el.innerHTML='<div style="display:inline-flex;align-items:center;gap:6px;background:#eff6ff;border:1px solid #dbeafe;border-radius:16px;padding:4px 10px;font-size:12px;color:#0464a8;margin-bottom:8px;">'+
      '📎 '+aiqf_pendingFile.name+
      '<button id="aiqf-chip-remove" style="background:none;border:none;cursor:pointer;color:#0464a8;font-size:14px;line-height:1;padding:0;">&times;</button></div>';
    document.getElementById('aiqf-chip-remove').addEventListener('click',function(){aiqf_pendingFile=null;file_el.value='';aiqf_renderChip();});
  }
  file_el.addEventListener('change',function(){
    var f=file_el.files&&file_el.files[0];
    if(!f)return;
    if(f.size>10*1024*1024){alert('File too large (max 10MB).');file_el.value='';return;}
    var reader=new FileReader();
    reader.onload=function(){
      var b64=reader.result.split(',')[1];
      aiqf_pendingFile={name:f.name,media_type:f.type||'application/octet-stream',data:b64};
      aiqf_renderChip();
    };
    reader.readAsDataURL(f);
  });
  text_el.addEventListener('keydown',function(e){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();aiqf_send();}});
  text_el.addEventListener('input',function(){this.style.height='auto';this.style.height=Math.min(this.scrollHeight,120)+'px';});
  aiqf_renderSuggs();

}, 3000);
