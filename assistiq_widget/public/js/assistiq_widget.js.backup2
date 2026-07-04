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
    '.aiqf-suggs{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px}',
    '.aiqf-sugg{border:1px solid #e2e8f0;background:#fff;border-radius:20px;padding:6px 14px;font-size:12px;color:#475569;cursor:pointer}',
    '.aiqf-sugg:hover{border-color:#0464a8;color:#0464a8;background:#eff6ff}',
    '.aiqf-row{display:flex;gap:10px;align-items:flex-end}',
    '.aiqf-textarea{flex:1;border:1.5px solid #e2e8f0;border-radius:12px;padding:12px 16px;font-size:14px;font-family:inherit;resize:none;outline:none;max-height:120px;line-height:1.5;color:#0f172a;background:#f8fafc;box-sizing:border-box}',
    '.aiqf-textarea:focus{border-color:#0464a8;background:#fff}',
    '.aiqf-sendbtn{width:44px;height:44px;border-radius:50%;background:#0464a8;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0}',
    '.aiqf-ft{font-size:11px;color:#94a3b8;text-align:center;margin-top:8px}',
    '.aiqf-sugg-title{font-size:12px;color:#94a3b8;margin-bottom:8px;font-weight:500}',
    '.aiqf-sugg-full{display:block;width:100%;text-align:left;border:1px solid #dbeafe;background:#f0f7ff;border-radius:16px;padding:12px 18px;font-size:13px;color:#0464a8;cursor:pointer;margin-bottom:8px;transition:all 0.2s}',
    '.aiqf-sugg-full:hover{border-color:#0464a8;color:#0464a8;background:#eff6ff}'
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
    // Update suggestion box colors to match theme
    var hex = color.replace('#','');
    var r = parseInt(hex.substring(0,2),16);
    var g = parseInt(hex.substring(2,4),16);
    var b = parseInt(hex.substring(4,6),16);
    var lightBg = 'rgba('+r+','+g+','+b+',0.08)';
    var lightBorder = 'rgba('+r+','+g+','+b+',0.2)';
    var style = document.getElementById('aiqf-dynamic-style');
    if(!style){ style = document.createElement('style'); style.id = 'aiqf-dynamic-style'; document.head.appendChild(style); }
    style.textContent = '.aiqf-sugg-full{background:'+lightBg+' !important;border-color:'+lightBorder+' !important;color:'+color+' !important;} .aiqf-sugg-full:hover{background:rgba('+r+','+g+','+b+',0.15) !important;}';
  }).catch(function(){});
  var overlay=document.createElement("div");overlay.id="aiq-overlay";document.body.appendChild(overlay);document.body.appendChild(btn);

  var panel = document.createElement('div');
  panel.id = 'aiq-float-panel';
  document.body.appendChild(panel);

  var hdr = document.createElement('div');
  hdr.className = 'aiqf-hdr';
  hdr.innerHTML = '<div><div class="aiqf-htitle">AssistIQ Assistant</div><div class="aiqf-hsub"></div></div><div class="aiqf-hlive"><div class="aiqf-hdot"></div>Live</div><button class="aiqf-close" id="aiqf-close-btn">&times;</button>';
  panel.appendChild(hdr);

  var msgs_el = document.createElement('div');
  msgs_el.id = 'aiqf-msgs';
  panel.appendChild(msgs_el);

  var bottom = document.createElement('div');
  bottom.className = 'aiqf-bottom';
  var AIQF_SUGGS = {
    'selling': [['Open opportunities','Show me open opportunities over 5L that have not been touched in 14 days'],['Draft quotation','Draft a quotation for my last customer with same items'],['Sales performance','Which sales reps are behind quota this quarter and by how much?'],['Customer communication','Summarize all communication with our top customer in the last month']],
    'buying': [['RFQ status','Which suppliers have not responded to our last RFQ?'],['Create PO','Create a Purchase Order from the latest Material Request'],['Supplier comparison','Compare pricing across our top 3 suppliers for the most ordered item'],['Invoice mismatch','Flag any Purchase Invoices that do not match their PO amount']],
    'accounts': [['AR aging','What is our AR aging by customer over 60 days?'],['P&L summary','Summarize this month P&L vs last month in plain English'],['Overdue invoices','List invoices overdue by more than 30 days with contact emails'],['Expense analysis','Why did expenses jump last month?']],
    'stock': [['Low stock','What items are below reorder level?'],['Slow moving','Which items have not moved in 90 days?'],['Stock transfer','Create a stock entry to transfer items between warehouses'],['Stock valuation','Show current stock valuation by warehouse']],
    'manufacturing': [['Work order status','Which Work Orders are behind their planned end date?'],['BOM cost','What is driving the cost increase in our main BOM?'],['Create work order','Create a Work Order for our top selling item'],['Scrap report','Show scrap percentage by work center this month']],
    'hrms': [['Leave summary','Who is on approved leave next week?'],['Attendance','Summarize attendance regularity by department this month'],['Payroll check','Flag any employee whose payroll differs from last month by more than 15 percent'],['Onboarding','What is the status of onboarding tasks for our latest joiner?']],
    'projects': [['Overdue tasks','Which tasks are overdue across all active projects?'],['Budget burn','How much of our top project budget has been consumed?'],['Resource allocation','Who is overallocated across projects this week?'],['Task breakdown','Break down our current project into tasks with estimated hours']],
    'support': [['SLA breach','Which open tickets are about to breach SLA?'],['Ticket triage','Summarize all unresolved tickets for our top customer'],['Recurring issues','What are the top 5 recurring issue categories this month?'],['Draft response','Draft a first response to our oldest open ticket']],
    'assets': [['Maintenance due','Which assets are due for maintenance in the next 30 days?'],['Depreciation','What is the depreciated value of our assets as of today?'],['Idle assets','List idle assets not assigned to any active project or location']],
    'quality': [['Rejection reasons','What are the most common rejection reasons this quarter?'],['Inspection pass rate','Summarize quality inspection pass rate by supplier'],['Non conformance','Show open non conformances this month']],
    'crm': [['Contact summary','Summarize everything we know about our top lead from calls and emails'],['Campaign performance','Which campaign had the best conversion this quarter?'],['Deal progression','Show deal stage progression for open opportunities']],
    'default': [['Open leads','Show all open leads'],['Sales orders','List recent sales orders'],['Stock balance','Show stock balance'],['Employees','How many employees do we have?']]
  };
  var AIQF_MODULE_MAP = {
    'selling': 'selling', 'buying': 'buying', 'accounts': 'accounts',
    'stock': 'stock', 'manufacturing': 'manufacturing', 'hrms': 'hrms',
    'hr': 'hrms', 'projects': 'projects', 'support': 'support',
    'assets': 'assets', 'quality management': 'quality', 'crm': 'crm'
  };
  function aiqf_getModule(callback){
    var route = frappe.get_route();
    if(!route){ callback('default'); return; }
    var routeType = route[0] && route[0].toLowerCase();
    // Workspace pages
    if(routeType === 'workspaces' && route[1]){
      var ws = route[1].toLowerCase();
      for(var key in AIQF_MODULE_MAP){ if(ws.indexOf(key) !== -1){ callback(AIQF_MODULE_MAP[key]); return; } }
      callback('default'); return;
    }
    // List or Form pages - use doctype module
    var doctype = route[1];
    if(doctype && (routeType === 'list' || routeType === 'form')){
      frappe.model.with_doctype(doctype, function(){
        var meta = frappe.get_meta(doctype);
        var mod = meta && meta.module ? meta.module.toLowerCase() : 'default';
        for(var key in AIQF_MODULE_MAP){ if(mod.indexOf(key) !== -1){ callback(AIQF_MODULE_MAP[key]); return; } }
        callback('default');
      });
      return;
    }
    callback('default');
  }
  function aiqf_renderSuggs(){
    aiqf_getModule(function(module){
      var suggs = AIQF_SUGGS[module] || AIQF_SUGGS['default'];
      var el = document.querySelector('.aiqf-suggs');
      if(el){
        el.innerHTML = '<div class="aiqf-sugg-title">Suggestions</div>' +
          suggs.map(function(s){return '<button class="aiqf-sugg-full" data-q="'+s[1]+'">'+s[1]+'</button>';}).join('');
        el.querySelectorAll('.aiqf-sugg-full').forEach(function(b){
          b.addEventListener('click',function(){
            text_el.value=b.getAttribute('data-q');
            el.style.display='none';
            aiqf_send();
          });
        });
      }
    });
  }
  bottom.innerHTML = '<div class="aiqf-bottom-inner"><div class="aiqf-suggs"></div><div class="aiqf-row"><textarea id="aiqf-text" class="aiqf-textarea" placeholder="Ask anything about your ERP data…" rows="1"></textarea><button id="aiqf-sb" class="aiqf-sendbtn"><svg width="16" height="16" fill="#fff" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg></button></div><div class="aiqf-ft"></div></div>';
  panel.appendChild(bottom);

  var text_el = document.getElementById('aiqf-text');
  var send_btn = document.getElementById('aiqf-sb');
  var close_btn = document.getElementById('aiqf-close-btn');
  var isOpen = false, aiqf_b = false, aiqf_h = [];

  var AIQF_SYS = 'You are AssistIQ, an AI-powered ERP assistant for Frappe/ERPNext. ALWAYS use tools to fetch real data. Be concise. Use markdown tables. fields MUST always be an array.';
  var AIQF_TOOLS = [
    {name:'fac_list_documents',description:'List Frappe documents.',parameters:{type:'object',properties:{doctype:{type:'string'},filters:{type:'object'},fields:{type:'array',items:{type:'string'}},limit:{type:'integer',default:20}},required:['doctype','fields']}},
    {name:'fac_get_document',description:'Get a single Frappe document.',parameters:{type:'object',properties:{doctype:{type:'string'},name:{type:'string'}},required:['doctype','name']}},
    {name:'fac_generate_report',description:'Run a Frappe report.',parameters:{type:'object',properties:{report_name:{type:'string'},filters:{type:'object'}},required:['report_name']}},
    {name:'fac_search_documents',description:'Search Frappe documents.',parameters:{type:'object',properties:{query:{type:'string'},doctype:{type:'string'}},required:['query']}},
    {name:'fac_report_list',description:'List available reports.',parameters:{type:'object',properties:{module:{type:'string'}}}}
  ];
  var AIQF_DEF = {
    'Lead':['lead_name','status','mobile_no','lead_owner'],
    'Customer':['customer_name','customer_type','territory'],
    'Sales Order':['name','customer','status','grand_total','transaction_date'],
    'Purchase Order':['name','supplier','status','grand_total','transaction_date'],
    'Sales Invoice':['name','customer','status','grand_total','posting_date'],
    'Item':['item_name','item_group','standard_rate'],
    'Employee':['employee_name','designation','department','status']
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
    var f=aiqf_buildFilters(dt,filters);
    if(f.length>0)p.set('filters',JSON.stringify(f));
    return fetch('/api/resource/'+encodeURIComponent(dt)+'?'+p.toString(),{headers:{'X-Frappe-CSRF-Token':frappe.csrf_token||'','X-Requested-With':'XMLHttpRequest'},credentials:'same-origin'}).then(function(r){return r.json();}).then(function(d){return d.data||[];});
  }
  function aiqf_rest_get(dt,name){
    return fetch('/api/resource/'+encodeURIComponent(dt)+'/'+encodeURIComponent(name),{headers:{'X-Frappe-CSRF-Token':frappe.csrf_token||'','X-Requested-With':'XMLHttpRequest'},credentials:'same-origin'}).then(function(r){return r.json();}).then(function(d){return d.data||{};});
  }

  function aiqf_fac(tool,input){return new Promise(function(resolve){
    if(input.fields&&typeof input.fields==='string')input.fields=[input.fields];
    if(input.limit&&typeof input.limit==='string')input.limit=parseInt(input.limit);
    var norm=tool.replace(/^fac_/,'');
    if(norm==='list_documents'||norm==='get_documents'){
      aiqf_rest(input.doctype,aiqf_normFields(input.fields,input.doctype),input.filters||{},input.limit||20).then(function(data){var out=JSON.stringify({success:true,data:data,count:data.length});resolve(out.length>4000?out.substring(0,4000)+'...':out);}).catch(function(e){resolve(JSON.stringify({success:false,error:e.message}));});
    }else if(norm==='get_document'){
      aiqf_rest_get(input.doctype,input.name).then(function(data){resolve(JSON.stringify({success:true,data:data}));}).catch(function(e){resolve(JSON.stringify({success:false,error:e.message}));});
    }else if(norm==='search_documents'){
      var dt=input.doctype||'Item';aiqf_rest(dt,AIQF_DEF[dt]||['name'],[[dt,'name','like','%'+input.query+'%']],10).then(function(data){resolve(JSON.stringify({success:true,data:data}));}).catch(function(){resolve(JSON.stringify({success:true,data:[]}));});
    }else if(norm==='generate_report'){
      var form=new FormData();form.append('report_name',input.report_name);form.append('filters',JSON.stringify(input.filters||{}));fetch('/api/method/frappe.desk.query_report.run',{method:'POST',headers:{'X-Frappe-CSRF-Token':frappe.csrf_token||''},body:form}).then(function(r){return r.json();}).then(function(d){var result=d.message||{};resolve(JSON.stringify({success:true,columns:result.columns,data:(result.result||[]).slice(0,20)}));}).catch(function(e){resolve(JSON.stringify({success:false,error:e.message}));});
    }else if(norm==='report_list'){
      aiqf_rest('Report',['name','report_type','module'],{},30).then(function(data){resolve(JSON.stringify({success:true,reports:data}));}).catch(function(e){resolve(JSON.stringify({success:false,error:e.message}));});
    }else{resolve(JSON.stringify({error:'Unknown tool'}));}
  });}

  function aiqf_send(){
    if(aiqf_b)return;
    var text=text_el.value.trim();
    if(!text)return;
    text_el.value='';
    text_el.style.height='auto';
    aiqf_b=true;
    aiqf_addUser(text);
    aiqf_h.push({role:'user',content:text});
    if(aiqf_h.length>6)aiqf_h=aiqf_h.slice(-6);
    aiqf_showTyping();
    aiqf_runClaude().catch(function(e){aiqf_rmTyping();aiqf_addBot('Sorry: '+e.message);}).finally(function(){aiqf_b=false;});
  }

  function aiqf_runClaude(){
    var msgs=aiqf_h.slice();
    var loop=function(i){
      if(i>=5){aiqf_rmTyping();return Promise.resolve();}
      return fetch('/api/method/assistiq_anthropic_proxy',{method:'POST',headers:{'Content-Type':'application/json','X-Frappe-CSRF-Token':frappe.csrf_token||'','X-Requested-With':'XMLHttpRequest'},credentials:'same-origin',body:JSON.stringify({model:'claude-sonnet-4-6',max_tokens:1024,system:AIQF_SYS,messages:msgs,tools:AIQF_TOOLS.map(function(t){return{name:t.name,description:t.description,input_schema:t.parameters};})})})
      .then(function(r){return r.json();})
      .then(function(r){
        var d=r.message||r;
        if(d.error)throw new Error(d.error);
        var tx=d.content.filter(function(b){return b.type==='text';});
        var tl=d.content.filter(function(b){return b.type==='tool_use';});
        if(d.stop_reason==='end_turn'||!tl.length){
          aiqf_rmTyping();
          var rep=tx.map(function(b){return b.text;}).join('\n')||'Done!';
          aiqf_h.push({role:'assistant',content:rep});
          if(aiqf_h.length>6)aiqf_h=aiqf_h.slice(-6);
          aiqf_addBot(rep);
          return;
        }
        msgs.push({role:'assistant',content:d.content});
        return Promise.all(tl.map(function(tu){return aiqf_fac(tu.name,tu.input||{}).then(function(content){return{type:'tool_result',tool_use_id:tu.id,content:content};});}))
        .then(function(res){msgs.push({role:'user',content:res});return loop(i+1);});
      });
    };
    return loop(0);
  }

  btn.addEventListener('click',function(){
    isOpen=!isOpen;
    panel.classList.toggle('open',isOpen);overlay.classList.toggle('open',isOpen);
    if(isOpen&&!panel.dataset.inited){aiqf_addBot('👋 Hi! I am AssistIQ, your ERP assistant. Ask me anything!');panel.dataset.inited='1';} aiqf_renderSuggs();
    if(isOpen){setTimeout(function(){text_el.focus();},100); aiqf_renderSuggs();}
  });
  close_btn.addEventListener('click',function(){isOpen=false;panel.classList.remove('open');overlay.classList.remove('open');});
  send_btn.addEventListener('click',aiqf_send);
  text_el.addEventListener('keydown',function(e){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();aiqf_send();}});
  text_el.addEventListener('input',function(){this.style.height='auto';this.style.height=Math.min(this.scrollHeight,120)+'px';});
  aiqf_renderSuggs();

}, 3000);
