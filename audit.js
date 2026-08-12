// generated from audit.py — do not edit by hand
// Read-only fetch proxies, tried in order. Public infrastructure: they rate
// limit, so the page degrades to its archive rather than showing nothing.
// Must return the raw HTML. r.jina.ai was in this list and it returns
// *markdown* — every tag-based check then failed to match and the audit
// invented thirteen findings where there were six. A proxy that reformats the
// page is not a proxy for this purpose.
const PROXIES = [
  u => 'https://api.allorigins.win/raw?url=' + encodeURIComponent(u),
  u => 'https://corsproxy.io/?url=' + encodeURIComponent(u),
  u => 'https://api.codetabs.com/v1/proxy?quest=' + encodeURIComponent(u)
];

// Cheap guard against a proxy handing back an error page, a JSON envelope or
// markdown. Everything downstream assumes real markup.
function looksLikeHtml(s){
  var h=s.slice(0,4000).toLowerCase();
  return h.indexOf('<html')>=0 || h.indexOf('<!doctype html')>=0 ||
         (h.indexOf('<head')>=0 && h.indexOf('<body')>=0) || h.indexOf('<body')>=0;
}

const BUILDERS={"godaddysites.com": "GoDaddy Website Builder", "wixsite.com": "Wix (free subdomain)", "weebly.com": "Weebly", "square.site": "Square Online", "squarespace.com": "Squarespace (default domain)", "business.site": "Google Business Site (discontinued)", "myshopify.com": "Shopify (default domain)", "webnode": "Webnode", "jimdosite.com": "Jimdo", "sitey.com": "Sitey", "wordpress.com": "WordPress.com", "blogspot.com": "Blogspot"}, BOOKING=["vagaro.com", "booksy.com", "fresha.com", "squareup.com", "square.site", "calendly.com", "acuityscheduling.com", "schedulicity.com", "setmore.com", "mindbodyonline.com", "getsquire.com", "styleseat.com", "zenoti.com", "boulevard.io", "phorest.com", "gettimely.com"], CART=["add to cart", "add to bag", "buy now", "shop now", "checkout", "addtocart", "add-to-cart", "data-product", "snipcart", "shopify", "woocommerce", "stripe.com/checkout", "buy.stripe.com", "paypal.com/cgi-bin"], CHAT=["intercom", "drift.com", "driftt.com", "tidio", "crisp.chat", "tawk.to", "livechatinc", "livechat.com", "olark", "zopim", "zendesk.com/embeddable", "smartsupp", "chatra.io", "jivosite", "purechat", "chaport", "helpcrunch", "freshchat", "wchat.freshchat", "salesiq.zoho", "zoho.com/salesiq", "gorgias.chat", "front.com/chat", "hubspot.com/conversations", "js.hs-scripts.com", "userlike", "liveperson", "snapengage", "comm100", "getbutton.io", "chatbot.com", "landbot", "manychat", "collect.chat", "podium.com", "birdeye.com", "textrequest", "signpost.com", "swellcx", "reviewwave", "weave.com", "kenect", "thryv.com", "facebook.com/plugins/customerchat", "customerchat.js", "wa.me/", "api.whatsapp.com", "web.whatsapp.com/send", "whatsapp-widget", "voiceflow", "botpress", "chatbase.co", "sitegpt", "chatsimple", "tiledesk", "ada.support", "certainly.io", "wati.io"],
      HANDLE_JUNK=["p", "reel", "reels", "explore", "tv", "stories", "accounts", "share", "sharer", "profile.php", "pages", "hashtag", "@"], VENDORS=["squarespace", "wix", "godaddy", "shopify", "weebly", "wordpress", "webflow", "duda", "bigcommerce", "yelp", "google", "instagram", "facebook", "tiktok", "linktree", "linktr", "vagaro", "booksy", "fresha", "square", "canva", "mailchimp", "glossgenius", "boulevard", "mindbody", "schedulicity", "styleseat", "setmore", "acuity", "calendly", "phorest", "salioniq", "booker", "squareup", "wixcom"], VENDOR_TAIL=["", "pro", "app", "hq", "official", "us", "inc", "co", "team", "help", "support", "dotcom", "com", "studio", "software"];
const RETAIL_RE=/\b(products?|shop|store|retail|merch|boutique)\b/i, CONTACT_RE=/\b(contact|get.?in.?touch|book|appointment|schedule|reach.?us)\b/i,
      EMAIL_RE=/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/, PRICE_RE=/[$]\s?\d{1,4}(?:[.,]\d{2})?/,
      YEAR_RE=/(?:©|&copy;|copyright)\s*(?:\d{4}\s*[-–]\s*)?(20\d{2})/i, SERVICE_WORDS=/(service|repair|install|remodel|renovat|construct|design|build|maintenance|cleaning|resurfac|decking|spa|lighting|heater|pump|treatment|package|pricing|rates|menu|catering|wedding|event)/i,
      GALLERY_RE=/\b(galler(?:y|ies)|portfolios?|our.?work|projects?|case.?stud(?:y|ies)|before.?and.?after|recent.?builds?|showcases?)\b/i, PROOF_RE=/\b(testimonial|what.?our.?clients|reviews?|5.?star|what.?people.?say)\b/i,
      STOCK_RE=/(unsplash\.com|shutterstock|istockphoto|gettyimages|pexels\.com|stock\.adobe|depositphotos|dreamstime|placeholder\.com|via\.placeholder)/i, TEMPLATE_RE=/(wix\.com|parastorage|static1\.squarespace|squarespace\.com|weebly|godaddysites|duda(one|site)|websitebuilder|elementor|et_pb_|divi-theme|wpbakery|themeforest|template-kit)/i;

function vendorAccount(h){
  for(var i=0;i<VENDORS.length;i++){
    var v=VENDORS[i];
    if(h.indexOf(v)===0 && VENDOR_TAIL.indexOf(h.slice(v.length).replace(/^[._-]+|[._-]+$/g,''))>=0)
      return true;
  }
  return false;
}

function handleFrom(html,host){
  var m=new RegExp(host+'/(?:#!/)?@?([A-Za-z0-9_.\\-]{2,40})','i').exec(html);
  if(!m) return '';
  var h=m[1].replace(/\.+$/,'').toLowerCase();
  return (HANDLE_JUNK.indexOf(h)>=0 || vendorAccount(h)) ? '' : h;
}

// Fetch through whichever proxy answers first.
function fetchVia(url){
  var started=Date.now();
  function attempt(i){
    if(i>=PROXIES.length) return Promise.reject(new Error('no proxy responded'));
    var ac=new AbortController(), t=setTimeout(function(){ac.abort();},14000);
    return fetch(PROXIES[i](url),{signal:ac.signal,redirect:'follow'})
      .then(function(r){
        clearTimeout(t);
        if(!r.ok) throw new Error('HTTP '+r.status);
        return r.text();
      })
      .then(function(html){
        if(!html || html.length<80) throw new Error('empty response');
        if(!looksLikeHtml(html)) throw new Error('proxy did not return HTML');
        return {html:html, ms:Date.now()-started, status:200};
      })
      .catch(function(e){ clearTimeout(t); return attempt(i+1); });
  }
  return attempt(0);
}

// Mirrors audit.audit() for everything visible in the HTML. Findings carry the
// same codes, so the leak model and the messages need no special cases.
function auditLive(rawUrl, meta){
  meta = meta || {};
  var url = rawUrl.trim();
  if(!/^https?:\/\//i.test(url)) url = 'https://' + url;
  var host = url.replace(/^https?:\/\//,'').replace(/^www\./,'').split('/')[0];

  // audit.py probes a second page because the broken storefront and the
  // missing contact form are almost never on the homepage. Same here: one
  // extra fetch, chosen from the site's own links.
  function secondPage(html){
    var re=/href=["']([^"'#]+)["']/gi, m, best=null;
    while((m=re.exec(html))){
      var href=m[1];
      if(/^(mailto:|tel:|javascript:)/i.test(href)) continue;
      if(/\.(jpg|jpeg|png|gif|svg|webp|css|js|pdf|mp4)(\?|$)/i.test(href)) continue;
      if(RETAIL_RE.test(href)){ best=href; break; }
      if(!best && CONTACT_RE.test(href)) best=href;
    }
    if(!best) return null;
    if(/^https?:\/\//i.test(best)) return best.indexOf(host)>=0 ? best : null;
    return url.replace(/\/+$/,'') + (best.charAt(0)==='/'?'':'/') + best;
  }

  return fetchVia(url).then(function(res){
    var extra = secondPage(res.html);
    if(!extra) return res;
    return fetchVia(extra).then(function(r2){
      return {html: res.html + '\n' + r2.html, ms: res.ms, status: 200,
              homeOnly: res.html, second: extra};
    }).catch(function(){ return res; });
  }).then(function(res){
    var html = res.html, low = html.toLowerCase(), out = [], score = 0;
    function add(pts,code,note){ out.push({code:code,note:note,points:pts}); score+=pts; }

    // quality signal, same thresholds as audit.quality()
    var rating=+(meta.rating||0), reviews=+(meta.reviews||0);
    if(rating>=4.5&&reviews>=40) add(12,'PROVEN',rating+'\u2605 from '+reviews+
      ' reviews \u2014 the business works, the website is the bottleneck.');
    else if(rating>=4.2&&reviews>=15) add(6,'SOLID',rating+'\u2605 from '+reviews+' reviews.');
    else if(reviews&&rating&&rating<3.8) add(-15,'WEAK_BIZ','Only '+rating+
      '\u2605 \u2014 their problem is bigger than the website.');

    // a shell page means the checks below see almost nothing — say so rather
    // than reporting a pile of false findings
    var text = html.replace(/<script[\s\S]*?<\/script>/gi,'')
                   .replace(/<style[\s\S]*?<\/style>/gi,'')
                   .replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
    var thin = text.length < 600;
    if(thin) add(0,'JS_RENDERED','Site renders client-side \u2014 checks below are partial. '+
      'Verify by hand.');

    var builder=null;
    for(var b in BUILDERS){ if(low.indexOf(b)>=0){ builder=BUILDERS[b];
      add(18,'BUILDER','Running on '+builder+' \u2014 a default builder subdomain, '+
        'not a real domain.'); break; } }
    if(!builder && low.indexOf('godaddy')>=0 && low.indexOf('website-builder')>=0)
      add(12,'BUILDER','Built on GoDaddy Website Builder.');

    if(/^http:\/\//i.test(url)) add(15,'NO_HTTPS',
      "No HTTPS \u2014 browsers show a 'Not secure' warning.");
    if(!/name=["']?viewport/i.test(html)) add(20,'NO_VIEWPORT',
      'No mobile viewport tag \u2014 the site is not built for phones.');
    if(!/localbusiness|schema\.org/i.test(html)) add(14,'NO_SCHEMA',
      "No LocalBusiness structured data \u2014 Google can't build a rich listing.");
    if(!/property=["']?og:image/i.test(html)) add(8,'NO_OG',
      'No preview image \u2014 links shared in a text message show as a blank box.');

    if(!thin){
      if(!/<form/i.test(html) && !/<input/i.test(html))
        add(22,'NO_FORM','No contact form '+(res.second?'anywhere on the site':'on the homepage')+
          ' \u2014 nothing captures a lead.');
      if(!EMAIL_RE.test(text))
        add(10,'NO_EMAIL','No email address published anywhere on the site.');
    }
    if(!/href=["']tel:/i.test(html)) add(12,'NO_TEL',
      "Phone number isn't tap-to-call on a phone.");

    // The one the whole business turns on. Same list and same two-stage test
    // as audit.py: vendor fingerprint first, then the words a hand-rolled
    // widget uses. Telling an owner they have no chat while their own bubble
    // is open in the corner of the screen ends the conversation instantly.
    var chatVendor='';
    for(var ci=0;ci<CHAT.length;ci++){ if(low.indexOf(CHAT[ci])>=0){chatVendor=CHAT[ci];break;} }
    var chatWords=/(live\s?chat|chat\s+with\s+us|chat\s+now|start\s+a\s+chat|message\s+us|text\s+us|chat-widget|chat_widget|chatwidget|id=["']chat|class=["'][^"']*chat-(bubble|button|launcher))/i.test(html);
    if(chatVendor)
      add(0,'HAS_CHAT','Already running a chat widget ('+chatVendor+') — whatever you '+
        'have is catching these already.');
    else if(chatWords)
      add(0,'HAS_CHAT','Something chat-shaped on the page — worth a look by hand.');
    else
      add(26,'NO_CHAT','No chat or messaging widget in the page source — a visitor with '+
        'a question has to ring during opening hours or leave.');

    var booked=false;
    for(var i=0;i<BOOKING.length;i++){ if(low.indexOf(BOOKING[i])>=0){booked=true;break;} }
    if(!booked && !/book\s*(now|online|appointment)/i.test(text))
      add(16,'NO_BOOKING','No online booking link \u2014 every appointment has to come '+
        'through the phone.');

    // retail: products mentioned, but no price and no way to pay
    if(RETAIL_RE.test(text)){
      var hasPrice=PRICE_RE.test(text), hasCart=false;
      for(var j=0;j<CART.length;j++){ if(low.indexOf(CART[j])>=0){hasCart=true;break;} }
      if(!hasPrice && !hasCart)
        add(30,'DEAD_RETAIL','Products are mentioned with no prices and no way to buy.');
      else if(!hasCart)
        add(20,'NO_CHECKOUT','Products are shown but there is no way to pay for them.');
    }

    // No SLOW here. The timing measured is the proxy's, not the site's, and a
    // finding you cannot stand behind is worse than a missing one. Page weight
    // is a property of the HTML itself, so that one still holds.
    var kb = html.length/1024;
    if(kb>900) add(6,'HEAVY','Homepage HTML alone is '+Math.round(kb)+' KB.');

    var tm=/<title[^>]*>([\s\S]*?)<\/title>/i.exec(html);
    var title=tm?tm[1].replace(/\s+/g,' ').trim():'';
    if(!title) add(10,'NO_TITLE','No page title \u2014 Google has nothing to show in results.');
    else if(title.length<25) add(5,'THIN_TITLE',"Page title is just '"+title+"'.");
    if(!/name=["']?description/i.test(html)) add(6,'NO_DESC',
      "No meta description \u2014 Google writes its own snippet.");

    var ym=YEAR_RE.exec(html);
    if(ym){ var yr=+ym[1], now=new Date().getFullYear();
      if(yr<now-1) add(8,'STALE','Copyright still says '+yr+'.'); }

    // era + thin: the two checks that sell a rebuild rather than a repair.
    // The stylesheet is not fetched here — that would be a second proxy round
    // trip through infrastructure that already fails often enough. So the
    // CSS-dependent signals are simply absent, and the browser can report
    // FEWER signals than the pipeline but never more. Under-reporting is the
    // safe direction: the live X-Ray never claims something the pipeline
    // wouldn't stand behind.
    var era=[], sparse=[];
    if(!thin){
      var ey=YEAR_RE.exec(html);
      if(ey && +ey[1]<=2021) era.push('The copyright line still says '+ey[1]);
      if(/<font\b|<center\b|<marquee\b|bgcolor\s*=|cellpadding\s*=|cellspacing\s*=/i.test(html))
        era.push('Presentational HTML in the markup \u2014 font tags, table '+
                 'spacing or bgcolor, which stopped being written around 2010');
      var tbl=(html.match(/<table\b/gi)||[]).length;
      if(tbl>=3 && /<table[^>]+(width|cellpadding|border)\s*=/i.test(html))
        era.push('The page is laid out with '+tbl+' HTML tables');
      var jq=/jquery[.\-\/]?(?:ui[.\-])?(1|2)\.\d+/i.exec(html);
      if(jq) era.push('Running jQuery '+jq[1]+'.x, superseded in 2016');
      var bs=/bootstrap[\/\-.](?:v)?([23])\.\d/i.exec(html);
      if(bs) era.push('Built on Bootstrap '+bs[1]+', retired years ago');
      if(!/srcset=|<picture\b|loading=["']lazy/i.test(html))
        era.push('No responsive or lazy-loaded images \u2014 every phone downloads '+
                 'the full desktop photos');
      if(/<!doctype\s+html\s+public/i.test(html)) era.push('An HTML 4 or XHTML doctype');
      if(/\.swf\b|shockwave-flash/i.test(html))
        era.push('Flash content, which no browser has run since 2020');
      if(/x-ua-compatible/i.test(html)) era.push('An Internet Explorer compatibility tag');
      if(/^http:\/\//i.test(url)) era.push('Served over plain HTTP');

      var paths={}, np=0, svc=0, lre=/<a[^>]+href=["']([^"']+)["']/gi, lm;
      while((lm=lre.exec(html))){
        var hp=lm[1];
        if(/^(https?:)?\/\//i.test(hp) && hp.indexOf(host)<0) continue;
        var pp=hp.replace(/^https?:\/\/[^\/]+/i,'').split('?')[0].replace(/\/$/,'').toLowerCase();
        if(!pp || paths[pp]) continue;
        paths[pp]=1; np++;
        if(SERVICE_WORDS.test(pp)) svc++;
      }
      var words=text.split(/\s+/).length;
      var imgs=(html.match(/<img\b/gi)||[]).length;
      if(np<=5) sparse.push('The entire site is '+(np||1)+' page'+(np===1?'':'s'));
      if(!GALLERY_RE.test(html)) sparse.push('No gallery of finished work anywhere \u2014 '+
        'nothing shows what they actually build');
      if(words<900) sparse.push('About '+words+' words on the whole site, so nothing '+
        'explains the work or justifies the price');
      if(svc<=1) sparse.push((svc?'One page':'No page')+' for any individual service '+
        '\u2014 everything they do is one undifferentiated list');
      if(STOCK_RE.test(html)) sparse.push('Stock photography on the page rather than their own jobs');
      if(imgs<8) sparse.push('Only '+imgs+' images on the page \u2014 there is nothing to look at');
      if(!PROOF_RE.test(text)) sparse.push('No reviews or testimonials on the site, so the '+
        'reputation lives entirely on Google');
      var tm=TEMPLATE_RE.exec(html);
      if(tm) sparse.push('Running a stock template ('+tm[1].toLowerCase()+') \u2014 it looks '+
        'like every other site built on it');

      if(era.length>=3) add(Math.min(era.length,6)*5,'DATED',
        'The site reads as several years old \u2014 '+era.length+' signs of it, starting '+
        'with: '+era[0].charAt(0).toLowerCase()+era[0].slice(1)+'.');
      if(sparse.length>=4) add(Math.min(sparse.length,5)*5,'THIN',
        "Nothing is broken \u2014 there's just very little there: "+
        sparse[0].charAt(0).toLowerCase()+sparse[0].slice(1)+', and '+(sparse.length-1)+' more like it.');
    }

    var ig=handleFrom(html,'instagram\\.com'), tk=handleFrom(html,'tiktok\\.com');
    if(!ig && !tk && !/facebook\.com/i.test(html)) add(6,'NO_SOCIAL','No social links on the site.');

    var em=EMAIL_RE.exec(text);
    return {
      ok:true, live:true, name: meta.name || host, url:url, host:host,
      findings: out, score: score, instagram: ig, tiktok: tk,
      email: em?em[0]:'', title:title, ms:res.ms, kb:Math.round(kb),
      era: era, plain: sparse
    };
  }).catch(function(err){
    return {ok:false, live:true, name: meta.name || host, url:url, host:host,
            error: String(err && err.message || err)};
  });
}

function bandFor(score){
  if(score>=90) return 'HOT';
  if(score>=65) return 'WARM';
  if(score>=45) return 'MAYBE';
  return 'SKIP';
}
