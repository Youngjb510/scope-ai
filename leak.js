// generated from leak.py — do not edit by hand
const TICKETS={"barber": 45, "nail": 55, "hair": 85, "facial": 120, "laser": 250, "med": 350, "tattoo": 180, "massage": 95, "dental": 320, "chiro": 110, "physio": 120, "optical": 220, "vet": 180, "gym": 95, "studio": 28, "trainer": 75, "plumb": 340, "electric": 300, "hvac": 420, "roof": 1200, "clean": 140, "garden": 160, "auto": 380, "detail": 180, "cafe": 18, "restaurant": 48, "bakery": 26, "florist": 75, "photo": 600, "venue": 4500, "legal": 450, "account": 320, "realty": 6000, "solar": 18000, "remodel": 14000, "pool": 45000, "windows": 9000, "garage": 1400, "pest": 180, "moving": 1200, "restoration": 6500, "plastic": 6500, "transplant": 8000, "fertility": 14000, "derm": 280, "rehab": 12000, "homecare": 3200, "childcare": 1100, "injury": 9000, "builder": 85000, "landscape": 22000, "interior": 12000, "cabinet": 14000, "hardscape": 18000, "boat": 28000, "equestrian": 4200, "default": 70}, DEFECTS={"NO_CHAT": [0.1, "Nothing on the site answers a question \u2014 anyone with one has to ring during opening hours or give up"], "CLOSED": [0.08, "Closed most of the week, and enquiries don't keep opening hours"], "NO_BOOKING": [0.06, "No online booking \u2014 every appointment has to become a phone call"], "NO_FORM": [0.05, "Nothing captures a name and a number, so an unanswered visit leaves no trace to follow up"], "NO_SITE": [0.09, "No website at all \u2014 there is nowhere for an enquiry to start"], "NO_EMAIL": [0.02, "No email published, so the ones who won't ring have no route"], "NO_TEL": [0.02, "The number isn't tap-to-call \u2014 on a phone that means copying it out by hand, and some won't"], "DEAD_URL": [0.13, "The link on their Google listing 404s \u2014 every tap from Maps dead-ends"], "DOWN": [0.13, "The site wouldn't load at all"], "NO_VIEWPORT": [0.06, "Not built for phones, where the enquiry starts"], "NO_HTTPS": [0.03, "A 'Not secure' warning sits in front of the page"], "SLOW": [0.02, "Slow enough that people leave before it paints"], "DATED": [0.05, "The site looks several years old next to whoever they're being compared with, and on a job this size people compare"], "THIN": [0.04, "The site works and says almost nothing \u2014 no gallery of the work, nothing that earns the price against a cheaper quote"]}, MAX_SHARE=0.3,
      BOT_GAPS={"NO_CHAT": [0.1, "Nothing on the site answers a question \u2014 anyone with one has to ring during opening hours or give up"], "CLOSED": [0.08, "Closed most of the week, and enquiries don't keep opening hours"], "NO_BOOKING": [0.06, "No online booking \u2014 every appointment has to become a phone call"], "NO_FORM": [0.05, "Nothing captures a name and a number, so an unanswered visit leaves no trace to follow up"], "NO_SITE": [0.09, "No website at all \u2014 there is nowhere for an enquiry to start"], "NO_EMAIL": [0.02, "No email published, so the ones who won't ring have no route"], "NO_TEL": [0.02, "The number isn't tap-to-call \u2014 on a phone that means copying it out by hand, and some won't"]}, SITE_GAPS={"DEAD_URL": [0.13, "The link on their Google listing 404s \u2014 every tap from Maps dead-ends"], "DOWN": [0.13, "The site wouldn't load at all"], "NO_VIEWPORT": [0.06, "Not built for phones, where the enquiry starts"], "NO_HTTPS": [0.03, "A 'Not secure' warning sits in front of the page"], "SLOW": [0.02, "Slow enough that people leave before it paints"], "DATED": [0.05, "The site looks several years old next to whoever they're being compared with, and on a job this size people compare"], "THIN": [0.04, "The site works and says almost nothing \u2014 no gallery of the work, nothing that earns the price against a cheaper quote"]},
      ENQ_PER_JOB={"barber": 0.7, "nail": 0.8, "hair": 0.9, "cafe": 0.3, "bakery": 0.3, "restaurant": 0.5, "florist": 1.2, "studio": 0.9, "gym": 1.4, "massage": 1.1, "facial": 1.2, "trainer": 1.6, "tattoo": 2.2, "med": 1.8, "laser": 1.8, "derm": 1.5, "dental": 1.6, "chiro": 1.5, "physio": 1.5, "optical": 1.3, "vet": 1.3, "clean": 2.2, "pest": 2.0, "detail": 1.8, "garden": 2.4, "auto": 1.6, "plumb": 2.4, "electric": 2.4, "hvac": 2.6, "moving": 3.2, "garage": 2.2, "roof": 3.5, "windows": 3.5, "remodel": 3.8, "solar": 4.0, "pool": 3.5, "builder": 5.0, "landscape": 3.6, "hardscape": 3.4, "cabinet": 3.2, "interior": 3.4, "boat": 4.5, "equestrian": 2.6, "restoration": 2.8, "venue": 4.0, "realty": 3.5, "photo": 3.5, "legal": 2.6, "account": 2.2, "plastic": 3.0, "transplant": 3.2, "fertility": 2.8, "rehab": 3.0, "homecare": 2.8, "childcare": 2.4, "injury": 3.5, "default": 1.5}, CLOSE_RATE={"barber": 0.8, "nail": 0.78, "hair": 0.75, "cafe": 0.85, "bakery": 0.85, "restaurant": 0.8, "florist": 0.65, "studio": 0.7, "gym": 0.55, "massage": 0.7, "facial": 0.68, "trainer": 0.5, "tattoo": 0.45, "med": 0.5, "laser": 0.5, "derm": 0.55, "dental": 0.55, "chiro": 0.55, "physio": 0.58, "optical": 0.6, "vet": 0.65, "clean": 0.45, "pest": 0.5, "detail": 0.5, "garden": 0.42, "auto": 0.55, "plumb": 0.45, "electric": 0.45, "hvac": 0.4, "moving": 0.3, "garage": 0.42, "roof": 0.2, "windows": 0.2, "remodel": 0.16, "solar": 0.15, "pool": 0.18, "builder": 0.08, "landscape": 0.18, "hardscape": 0.2, "cabinet": 0.2, "interior": 0.15, "boat": 0.12, "equestrian": 0.25, "restoration": 0.3, "venue": 0.18, "realty": 0.15, "photo": 0.25, "legal": 0.3, "account": 0.35, "plastic": 0.25, "transplant": 0.22, "fertility": 0.25, "rehab": 0.22, "homecare": 0.3, "childcare": 0.35, "injury": 0.2, "default": 0.55},
      LOSS={"NO_CHAT": "Anyone with a quick question has to ring you or drop it, and most of them drop it.", "CLOSED": "Everyone who tries you outside those hours is waiting on a call back you don't know you owe.", "DEAD_RETAIL": "Right now anyone who wants one either asks in person or forgets about it.", "NO_CHECKOUT": "Every one of those orders has to become a phone call, and most of them just don't.", "NO_SITE": "Every one of those searches is landing on a competitor instead of you.", "DEAD_URL": "Everyone tapping through from Maps hits that and goes straight back to the results.", "DOWN": "Everyone looking you up right now is hitting the same wall I did.", "NO_VIEWPORT": "On a phone that's where most people give up and try the next shop.", "NO_HTTPS": "Most people back out the moment a browser warns them, before they see anything.", "NO_FORM": "Anyone who isn't ready to call right that second just leaves.", "NO_BOOKING": "Every after-hours booking goes to whoever answers first, and it isn't you.", "BUILDER": "You're up against shops whose sites don't look like a template.", "NO_SCHEMA": "That's search traffic going to shops Google understands better than yours.", "NO_TEL": "On a phone that means copying it out by hand, and a few of them won't bother.", "NO_OG": "Every share of your link looks like a broken attachment instead of your shop.", "NO_DESC": "Google writes that snippet for you instead, and it rarely picks your best line.", "NO_SOCIAL": "Anyone who wants to see your work first has to go looking for it.", "STALE": "It reads as though nobody's minding the place.", "THIN_TITLE": "That's the line people see in search results before they see anything else.", "HEAVY": "On a phone signal that's a wait, and some of them don't wait.", "JS_RENDERED": "That's search traffic going to shops Google can read more easily."}, NO_CLOSE={"NO_CHAT": "Do you know how many people a week give up rather than ring you?", "CLOSED": "What happens to someone who wants you at 9pm on a Sunday?", "DEAD_RETAIL": "Is that on purpose, or is buying online just not something you've set up yet?", "NO_CHECKOUT": "Is that deliberate, or has it just not come up yet?", "NO_SITE": "Have you given up on having a site, or has it just never been the right month?", "DEAD_URL": "Did you know that link was broken?", "DOWN": "Is the site down on purpose, or is that news to you?", "NO_VIEWPORT": "Is that on purpose, or has it just not come up yet?", "NO_HTTPS": "Has anyone flagged that to you before?", "NO_FORM": "Is that deliberate, or would you rather people could message you?", "NO_BOOKING": "Would it be ridiculous to let people book themselves at 9pm?", "BUILDER": "Are you happy with it, or has redoing it been on the list a while?", "NO_TEL": "Is that deliberate, or has nobody mentioned it?", "NO_OG": "Have you seen what your link looks like when someone shares it?", "NO_DESC": "Would it be ridiculous to choose that line yourself?", "NO_SOCIAL": "Is leaving the Instagram off the site on purpose?", "STALE": "Has updating it just not been the priority?", "THIN_TITLE": "Is that on purpose, or has it just not come up yet?", "HEAVY": "Has anyone complained it's slow on their phone?", "JS_RENDERED": "Did whoever built it mention that to you?"}, ORDER=["NO_CHAT", "CLOSED", "NO_SITE", "DEAD_URL", "DOWN", "NO_BOOKING", "NO_FORM", "DEAD_RETAIL", "NO_CHECKOUT", "NO_VIEWPORT", "NO_HTTPS", "BUILDER", "NO_SCHEMA", "STALE", "HEAVY", "JS_RENDERED", "NO_OG", "NO_TEL", "NO_DESC", "THIN_TITLE", "NO_SOCIAL"], OBSERVE={"NO_CHAT": "There's no way to ask a quick question on your site \u2014 no chat, nothing that answers.", "CLOSED": "Your listing has you closed for most of the week.", "NO_SITE": "You're showing up in local search with no website behind it.", "DEAD_URL": "The link on your Google listing goes to a page that doesn't exist.", "DOWN": "Your site wouldn't load when I tried it.", "NO_VIEWPORT": "Your site isn't built for phones \u2014 it loads the desktop layout.", "NO_HTTPS": "Your site still loads over http, so Chrome puts a 'Not secure' warning in front of it.", "NO_BOOKING": "There's no way to book online \u2014 it's phone only.", "NO_FORM": "There's no contact form anywhere on the site.", "SLOW": "The site takes a few seconds before anything appears.", "DEAD_RETAIL": "The products on your site have no prices and no way to buy them.", "NO_CHECKOUT": "You've got products listed but no way to pay for them.", "NO_TEL": "Your phone number isn't tappable on the site.", "NO_OG": "When someone texts your link it shows up as a blank grey box.", "NO_DESC": "Your site has no description tag for search results.", "NO_SOCIAL": "There's no link to your Instagram anywhere on the site.", "STALE": "The site hasn't been touched in a good while.", "THIN_TITLE": "Your homepage title is just the business name.", "HEAVY": "Your homepage is heavy enough to be slow on mobile data.", "JS_RENDERED": "The page needs JavaScript to show anything, so crawlers see a blank page."},
      CUSTOMER_BANDS=[[500, 420, 620, 850, "500+ reviews"], [200, 260, 380, 520, "200\u2013500 reviews"], [80, 150, 220, 300, "80\u2013200 reviews"], [25, 90, 130, 180, "25\u201380 reviews"], [0, 40, 70, 110, "under 25 reviews"]], TICKET_RANGE={"barber": [30, 45, 65], "nail": [35, 55, 80], "hair": [55, 85, 130], "facial": [80, 120, 180], "laser": [150, 250, 400], "med": [200, 350, 600], "default": [45, 70, 110]},
      DEFECT_RANGE={"NO_SITE": [0.14, 0.3], "DEAD_URL": [0.11, 0.25], "DOWN": [0.11, 0.25], "NO_VIEWPORT": [0.07, 0.16], "NO_HTTPS": [0.04, 0.1], "NO_BOOKING": [0.03, 0.09], "NO_FORM": [0.02, 0.06], "SLOW": [0.015, 0.05], "DATED": [0.02, 0.11], "THIN": [0.02, 0.09], "DEAD_RETAIL": [0.05, 0.12], "NO_CHECKOUT": [0.03, 0.08]}, FIX={"NO_CHAT": "The bot answers it, in your words, in a couple of seconds.", "CLOSED": "The bot works the hours you don't. That's most of the week.", "NO_BOOKING": "The bot takes the booking and puts it straight in your calendar.", "NO_FORM": "The bot gets a name and a number before the conversation ends.", "NO_SITE": "A one-page site with the bot on it, built from your listing.", "NO_EMAIL": "The bot emails you the transcript, so nothing sits unread.", "NO_TEL": "The bot is the tap \u2014 no number to copy out.", "DEAD_URL": "Point the Google listing at a page that exists.", "DOWN": "Get it back online and keep it there.", "NO_VIEWPORT": "Rebuild it mobile-first \u2014 that's where the enquiry starts.", "NO_HTTPS": "A certificate. It's free and takes an afternoon.", "SLOW": "Compress the images and cut what isn't earning its load.", "DATED": "Rebuild it to look like the work you actually do.", "THIN": "Show the work. A page per service and a real gallery of finished jobs."}, NOT_COUNTED={"NO_SCHEMA": "No LocalBusiness structured data, so Google shows a plainer result than your competitors get.", "NO_OG": "Links to your site show as a blank box when anyone texts or posts them.", "NO_SOCIAL": "No links to your social accounts.", "NO_DESC": "No meta description, so Google writes its own snippet for you.", "BUILDER": "Built on a template, so it looks like everyone else's."},
      KIND_RULES=[[["barber"], "barber", "barber shop"], [["nail"], "nail", "nail salon"], [["laser"], "laser", "laser clinic"], [["tattoo", "piercing"], "tattoo", "tattoo studio"], [["medical spa", "med spa", "medspa", "aesthet", "botox", "inject"], "med", "med spa"], [["plastic surgery", "cosmetic surgery", "plastic surgeon"], "plastic", "cosmetic surgery clinic"], [["hair transplant", "hair restoration"], "transplant", "hair transplant clinic"], [["fertility", "ivf", "reproductive"], "fertility", "fertility clinic"], [["dermatolog"], "derm", "dermatology clinic"], [["rehab", "addiction", "treatment center", "detox", "recovery center"], "rehab", "treatment centre"], [["home care", "homecare", "in-home care", "senior care", "caregiv"], "homecare", "home care agency"], [["preschool", "daycare", "day care", "nursery", "montessori", "childcare"], "childcare", "nursery"], [["dentist", "dental", "orthodont"], "dental", "dental practice"], [["chiropract"], "chiro", "chiropractor"], [["physio", "physical therapy", "sports therapy"], "physio", "physiotherapy clinic"], [["optometr", "optician", "eyewear"], "optical", "optician"], [["veterinar", "vet clinic", "animal hospital"], "vet", "veterinary practice"], [["massage", "reflexolog"], "massage", "massage therapist"], [["facial", "day spa", "skin care", "skincare", "esthetic"], "facial", "day spa"], [["yoga", "pilates", "barre", "spin studio"], "studio", "fitness studio"], [["personal train", "coach"], "trainer", "personal trainer"], [["gym", "fitness", "crossfit", "martial art"], "gym", "gym"], [["plumb"], "plumb", "plumber"], [["electric"], "electric", "electrician"], [["hvac", "heating", "air condition"], "hvac", "HVAC company"], [["roof"], "roof", "roofing company"], [["solar"], "solar", "solar installer"], [["pool"], "pool", "pool builder"], [["custom home", "home builder", "homebuilder", "luxury home", "design build"], "builder", "custom home builder"], [["landscape architect", "landscape design", "landscaping"], "landscape", "landscape designer"], [["hardscap", "outdoor living", "outdoor kitchen", "paver"], "hardscape", "hardscape contractor"], [["cabinet", "millwork", "joinery", "closet design"], "cabinet", "cabinetmaker"], [["interior design", "interior decorat"], "interior", "interior designer"], [["yacht", "boat dealer", "marine dealer", "boat sales"], "boat", "marine dealer"], [["equestrian", "stable", "horse boarding", "riding academy"], "equestrian", "equestrian centre"], [["remodel", "renovation", "kitchen and bath", "kitchen & bath", "home improvement"], "remodel", "remodelling company"], [["window replace", "windows and doors", "replacement window", "glazing"], "windows", "window company"], [["garage door"], "garage", "garage door company"], [["pest", "exterminator", "termite"], "pest", "pest control company"], [["moving", "removals", "movers"], "moving", "moving company"], [["restoration", "water damage", "fire damage", "mold remediation"], "restoration", "restoration company"], [["landscap", "lawn", "garden", "tree service"], "garden", "landscaping company"], [["clean", "maid", "janitor"], "clean", "cleaning company"], [["detail"], "detail", "car detailer"], [["auto", "mechanic", "tire", "collision", "body shop"], "auto", "auto shop"], [["cafe", "coffee", "espresso"], "cafe", "coffee shop"], [["bakery", "patisserie", "cake"], "bakery", "bakery"], [["restaurant", "bistro", "pizzeria", "taqueria", "diner"], "restaurant", "restaurant"], [["florist", "flower"], "florist", "florist"], [["photograph", "videograph"], "photo", "photographer"], [["wedding venue", "event venue", "banquet"], "venue", "events venue"], [["personal injury", "injury lawyer", "accident attorney", "injury attorney"], "injury", "personal injury firm"], [["law", "attorney", "solicitor"], "legal", "law firm"], [["account", "bookkeep", "tax "], "account", "accountancy practice"], [["real estate", "realtor", "estate agent", "letting"], "realty", "estate agency"], [["groom", "pet"], "clean", "pet groomer"], [["hair", "salon", "beauty", "blow dry", "braid", "lash", "brow", "wax"], "hair", "hair salon"]], MECHANIC={"NO_CHAT": ["Somebody lands on your site with one question \u2014 do you take walk-ins, do you do this particular thing, how much is it, can you fit me in Saturday. There is nothing there to ask. Ringing feels like a bigger commitment than the question deserves, so most of them close the tab and ask the next shop instead. You never find out it happened.", "Checked: no chat or messaging widget of any kind on the site."], "CLOSED": ["People decide to sort this out in the evening, on the sofa, or on a Sunday. You are shut for about two thirds of the week \u2014 that is not a criticism, it is just what the hours on your listing say. Every enquiry that arrives in those hours waits until you open, and a good share of them have booked somewhere else by then.", "Checked: the opening hours on your Google listing."], "NO_SITE": ["Someone searches your category, sees your listing, and wants to know your prices, your hours, or what the place looks like before they commit. There's nowhere to send them, so they open the next result instead \u2014 and there is nowhere to put anything that could have answered them.", "Checked: no website is attached to your Google Business listing."], "DEAD_URL": ["They tap the website link on your Google listing and land on an error page. That's worse than having no link \u2014 it reads as 'this place has closed'.", "Checked: the URL on your listing returns a 404."], "DOWN": ["The site doesn't load at all. Anyone who tries assumes you're gone.", "Checked: the server didn't respond."], "NO_VIEWPORT": ["Most people look you up on a phone. Without a mobile layout the page loads at desktop width \u2014 tiny text, sideways scrolling, buttons they can't hit. They pinch twice and give up.", "Checked: the page has no mobile viewport tag, so phones render it at desktop width."], "NO_HTTPS": ["Chrome puts a 'Not secure' warning in front of your site before anyone sees it. Most people read that as 'this might be dangerous' and back out.", "Checked: the site loads over http with no certificate."], "NO_BOOKING": ["People decide to book at night, on the sofa. With no online booking their only option is to call in the morning \u2014 and by morning they've booked wherever they could do it there and then.", "Checked: no booking link or scheduler found on the site."], "NO_FORM": ["Someone with a question that isn't urgent enough for a phone call has no way to ask it. There's no low-effort next step, so there's no next step.", "Checked: no contact form or message field anywhere on the site."], "SLOW": ["The page takes long enough that a share of visitors leave before anything appears. They never see the site at all.", "Checked: measured page load time."], "DEAD_RETAIL": ["You list products but show no prices and offer no way to buy. Anyone who wants one has to remember to ask next time they're in \u2014 and most don't.", "Checked: product pages carry no prices and no add-to-cart."], "NO_CHECKOUT": ["Products are shown but there's no way to pay, so every sale has to become a phone call or an in-person ask.", "Checked: no checkout or payment path found."]},
      TICKETS_GBP={"barber": 28, "nail": 40, "hair": 60, "facial": 85, "laser": 180, "med": 250, "default": 50}, TICKET_RANGE_GBP={"barber": [18, 28, 45], "nail": [25, 40, 60], "hair": [38, 60, 95], "facial": [55, 85, 130], "laser": [110, 180, 300], "med": [150, 250, 450], "default": [32, 50, 80]}, UK_MARKS=["united kingdom", ", uk", "england", "scotland", "wales", "northern ireland", "london", "manchester", "birmingham", "glasgow", "edinburgh", "leeds", "liverpool", "bristol", "cardiff", "belfast"], VOLUME={"barber": 1.0, "nail": 1.0, "hair": 1.0, "cafe": 1.0, "bakery": 1.0, "restaurant": 1.0, "florist": 0.9, "massage": 0.8, "facial": 0.7, "gym": 0.8, "studio": 0.9, "trainer": 0.6, "med": 0.35, "laser": 0.35, "derm": 0.35, "tattoo": 0.3, "vet": 0.4, "dental": 0.4, "chiro": 0.5, "physio": 0.45, "optical": 0.35, "clean": 0.25, "pest": 0.25, "detail": 0.25, "garden": 0.22, "auto": 0.3, "plumb": 0.15, "electric": 0.15, "hvac": 0.13, "moving": 0.12, "garage": 0.15, "roof": 0.06, "windows": 0.05, "remodel": 0.05, "restoration": 0.07, "homecare": 0.06, "childcare": 0.06, "legal": 0.08, "account": 0.09, "photo": 0.05, "venue": 0.03, "realty": 0.03, "builder": 0.006, "landscape": 0.035, "hardscape": 0.045, "cabinet": 0.05, "interior": 0.04, "boat": 0.05, "equestrian": 0.2, "solar": 0.03, "pool": 0.03, "plastic": 0.04, "transplant": 0.03, "fertility": 0.03, "rehab": 0.03, "injury": 0.03, "default": 0.5};

// Jobs a month relative to the walk-in baseline — see leak.py.
function volumeFor(niche){
  var k=ticketFor(niche)[2];
  return (k in VOLUME)?VOLUME[k]:VOLUME.default;
}

// Local money, not converted dollars — see leak.py.
function regionFor(city){
  var c=String(city||'').toLowerCase();
  return UK_MARKS.some(function(m){return c.indexOf(m)>=0;})?'UK':'US';
}
function symbolFor(region){ return region==='UK'?'£':'$'; }

// Python's round() is half-to-even and its int() truncates; JavaScript's
// Math.round is half-up. Left alone that disagreement put the browser a dollar
// off the server on 3,589 of 4,515 test cases — small, but the whole promise
// here is that the page and the pipeline show the same number.
function pyRound(x){
  var f=Math.floor(x), d=x-f;
  if(d>0.5) return f+1;
  if(d<0.5) return f;
  return f%2===0?f:f+1;
}
var pyInt=Math.trunc;

// Walks KIND_RULES, emitted from leak.py — no second copy of the niche list.
function ticketFor(niche){
  const n=(niche||'').toLowerCase();
  for(const [words,key,label] of KIND_RULES)
    if(words.some(w=>n.includes(w))) return [TICKETS[key],label,key];
  return [TICKETS.default,'local service','default'];
}

function customersFromReviews(r){
  r=parseInt(r||0,10)||0;
  if(r>=500) return [620,'500+ reviews — a busy, established shop'];
  if(r>=200) return [380,'200-500 reviews — steady volume'];
  if(r>=80)  return [220,'80-200 reviews — solid local trade'];
  if(r>=25)  return [130,'25-80 reviews — building'];
  return [70,'under 25 reviews — early or low-volume'];
}

// Mirrors leak.estimate(). Same cap, same proportional scale-back.
function estimate(codes,niche,reviews,opts){
  opts=opts||{};
  const set=new Set(codes||[]);
  let [tkt,kind,tkey]=ticketFor(niche);
  if(opts.ticket) tkt=+opts.ticket;
  let [cust,custWhy]=customersFromReviews(reviews);
  const vol=volumeFor(niche);
  if(vol!==1) cust=Math.max(1,pyRound(cust*vol));
  if(opts.customers){ cust=parseInt(opts.customers,10); custWhy='set by hand'; }

  const perJob=enqPerJob(niche), close=closeRate(niche);
  const enq=Math.max(1,pyRound(cust*perJob));
  const worth=tkt*close;

  function collect(table){
    var out=[], share=0;
    for(const code in table){
      if(set.has(code)){ share+=table[code][0]; out.push([code,table[code][0],table[code][1]]); }
    }
    return [out,share];
  }
  const [bot,botShare]=collect(BOT_GAPS), [site,siteShare]=collect(SITE_GAPS);
  const total=botShare+siteShare;
  const capped=Math.min(total,MAX_SHARE);
  const factor=(total>capped && total)?capped/total:1;

  let lines=[], botLines=[], siteLines=[];
  [[bot,botLines],[site,siteLines]].forEach(function(pair){
    pair[0].forEach(function(row){
      const amt=pyRound(enq*row[1]*factor*worth);
      pair[1].push([row[0],amt,row[2]]); lines.push([row[0],amt,row[2]]);
    });
  });
  const botMonthly=botLines.reduce((a,x)=>a+x[1],0);
  const siteMonthly=siteLines.reduce((a,x)=>a+x[1],0);
  const cmp=(a,b)=>b[1]-a[1];
  lines.sort(cmp); botLines.sort(cmp); siteLines.sort(cmp);
  return {monthly:pyInt(botMonthly+siteMonthly), annual:pyInt((botMonthly+siteMonthly)*12),
          bot_monthly:pyInt(botMonthly), bot_annual:pyInt(botMonthly*12),
          site_monthly:pyInt(siteMonthly),
          customers:cust, customers_why:custWhy, enquiries:enq, per_job:perJob, close:close,
          ticket:pyInt(tkt), worth:pyInt(pyRound(worth)), kind:kind,
          missed:pyRound(enq*capped), bot_missed:pyRound(enq*botShare*factor),
          share:pyRound(capped*100), capped:total>capped,
          lines:lines, bot_lines:botLines, site_lines:siteLines};
}

// The kind key is the third slot ticketFor() returns, same as leak.kind_key().
function enqPerJob(niche){ var k=ticketFor(niche)[2]; return (k in ENQ_PER_JOB)?ENQ_PER_JOB[k]:ENQ_PER_JOB['default']; }
function closeRate(niche){ var k=ticketFor(niche)[2]; return (k in CLOSE_RATE)?CLOSE_RATE[k]:CLOSE_RATE['default']; }

const money=(n,cur)=>(cur||'$')+Math.round(n||0).toLocaleString('en-US');
const usd=n=>money(n,'$');   // kept: the calculator is US-only

function explain(e){
  let out=['Roughly '+e.customers+' customers a month ('+e.customers_why+'), at about $'
           +e.ticket+' a visit for a '+e.kind+'.',''];
  e.lines.forEach(([,amt,why])=>out.push('  '+usd(amt)+'/mo — '+why));
  out.push('','Estimated total: '+usd(e.monthly)+' a month, '+usd(e.annual)+' a year.');
  if(e.capped) out.push('(Capped — the individual losses overlap, so the total is held down.)');
  out.push('This is an estimate from public data, not their books.');
  return out.join('\n');
}

// What you saw, with no consequence attached — lossClause supplies that.
// Keeping them apart is what stops the message saying the same thing twice.
function observation(codes){
  const s=new Set(codes||[]);
  for(const c of ORDER.concat(['SLOW'])) if(s.has(c)&&OBSERVE[c]) return OBSERVE[c];
  return '';
}

// Standing rule: every message names what is being lost, in the present tense.
function lossClause(codes){
  const s=new Set(codes||[]);
  if(s.has('NO_SITE')) return LOSS.NO_SITE;
  for(const c of ORDER) if(s.has(c)&&LOSS[c]) return LOSS[c];
  return '';
}
function noClose(codes){
  const s=new Set(codes||[]);
  if(s.has('NO_SITE')) return NO_CLOSE.NO_SITE;
  for(const c of ORDER) if(s.has(c)&&NO_CLOSE[c]) return NO_CLOSE[c];
  return 'Is that on purpose, or has it just not come up yet?';
}
function costOfDelay(e){
  if(!e||e.monthly<400) return '';
  return 'Left alone that\'s about '+usd(e.annual)+' between now and this time next year.';
}

// ------------------------------------------------------ the full derivation
// Mirrors leak.breakdown(). A range with provenance on every input, because a
// single number invites "where did you get that?" and nothing else.
function customersRange(reviews){
  var r=parseInt(reviews||0,10)||0;
  for(var i=0;i<CUSTOMER_BANDS.length;i++){
    var b=CUSTOMER_BANDS[i];
    if(r>=b[0]) return {lo:b[1],mid:b[2],hi:b[3],label:b[4]};
  }
  return {lo:40,mid:70,hi:110,label:'under 25 reviews'};
}

// Mirrors leak._spread(): any niche with a ticket but no hand-tuned range gets
// one derived from it. Falling back to the DEFAULT ticket instead — which is
// what this did first — priced a dental practice like a nail bar.
function spread(mid){ return [pyRound(mid*0.62), mid, pyRound(mid*1.55)]; }
function ticketGbp(key){
  if(key in TICKETS_GBP) return TICKETS_GBP[key];
  return Math.max(1,pyRound(TICKETS[key]*0.62));
}
function ticketRange(niche,region){
  var f=ticketFor(niche), key=f[2], t;
  if(region==='UK') t=(key in TICKET_RANGE_GBP)?TICKET_RANGE_GBP[key]:spread(ticketGbp(key));
  else t=(key in TICKET_RANGE)?TICKET_RANGE[key]:spread(TICKETS[key]);
  return {lo:t[0],mid:t[1],hi:t[2],kind:f[1]};
}

function breakdown(codes,niche,reviews,opts){
  opts=opts||{};
  var cs=new Set(codes||[]);
  var region=regionFor(opts.city||''), cur=symbolFor(region);
  var c=customersRange(reviews), t=ticketRange(niche,region);
  var vol=volumeFor(niche);
  if(vol!==1){ c={lo:Math.max(1,pyRound(c.lo*vol)),mid:Math.max(1,pyRound(c.mid*vol)),
                  hi:Math.max(1,pyRound(c.hi*vol)),label:c.label}; }
  var custSrc='benchmark', tktSrc='benchmark';
  if(opts.customers){ c={lo:+opts.customers,mid:+opts.customers,hi:+opts.customers,
                         label:'the number you gave me'}; custSrc='measured'; }
  if(opts.ticket){ t={lo:+opts.ticket,mid:+opts.ticket,hi:+opts.ticket,kind:t.kind}; tktSrc='measured'; }

  var perJob=enqPerJob(niche), close=closeRate(niche);
  var e={lo:Math.max(1,pyRound(c.lo*perJob)),mid:Math.max(1,pyRound(c.mid*perJob)),
         hi:Math.max(1,pyRound(c.hi*perJob))};
  var w={lo:t.lo*close, mid:t.mid*close, hi:t.hi*close};

  var steps=[
    {n:1,label:'How busy you are',value:'about '+c.mid+' jobs a month',
     range:c.lo+'–'+c.hi,src:custSrc,
     why:'You have '+(reviews||0)+' Google reviews ('+c.label+'). Review count is a proxy '+
         'for size, not a calculation — a business in that range typically does '+c.lo+'–'+c.hi+
         ' a month. If you know your real number, it replaces this one and everything below '+
         'moves with it.'},
    {n:2,label:'How many people make contact',value:'about '+e.mid+' enquiries a month',
     range:e.lo+'–'+e.hi,src:'benchmark',
     why:'For a '+t.kind+', roughly '+perJob+' people get in touch for every job booked — '+
         'calls, messages, form fills, DMs. Some trades take three quotes before choosing; '+
         'some are mostly walk-ins. This is the pool everything else comes out of.'},
    {n:3,label:'What one enquiry is worth',value:'about '+cur+Math.round(w.mid),
     range:cur+Math.round(w.lo)+'–'+cur+Math.round(w.hi),src:tktSrc,
     why:'About '+Math.round(close*100)+'% of enquiries become work once somebody answers '+
         'them, at roughly '+cur+Math.round(t.mid)+' a job. Not every enquiry is a booking, '+
         'which is why this is lower than your ticket.'}
  ];

  var share=0; cs.forEach(function(x){ if(DEFECTS[x]) share+=DEFECTS[x][0]; });
  var scale=share>MAX_SHARE?MAX_SHARE/share:1;
  var items=[];
  ORDER.concat(['SLOW']).forEach(function(code){
    if(!cs.has(code)) return;
    var rng=DEFECT_RANGE[code];
    if(DEFECTS[code]){
      var pct=DEFECTS[code][0], why=DEFECTS[code][1];
      var lo=rng?rng[0]:pct*0.6, hi=rng?rng[1]:pct*1.4;
      var m=MECHANIC[code]||[why,'Checked during the audit.'];
      items.push({code:code,saw:OBSERVE[code]||why,
        kind:(code in BOT_GAPS)?'bot':'site',
        mid:pyRound(e.mid*pct*scale*w.mid),
        lo:pyRound(e.lo*lo*scale*w.lo), hi:pyRound(e.hi*hi*scale*w.hi),
        share:pyRound(pct*scale*1000)/10, customers:pyRound(e.mid*pct*scale),
        why:why, mechanic:m[0], evidence:m[1], fix:FIX[code]||''});
    }
  });

  var mid=items.reduce(function(a,i){return a+i.mid;},0);
  var rawLo=items.reduce(function(a,i){return a+i.lo;},0);
  var rawHi=items.reduce(function(a,i){return a+i.hi;},0);
  // Halfway back toward the point, geometrically — see leak.py for why.
  items.forEach(function(i){
    i.lo=i.mid?pyInt(Math.sqrt(i.lo*i.mid)):i.lo;
    i.hi=i.mid?pyInt(Math.sqrt(i.hi*i.mid)):i.hi;
  });
  items.sort(function(a,b){return b.mid-a.mid;});

  var notCounted=[];
  cs.forEach(function(x){ if(NOT_COUNTED[x]) notCounted.push({code:x,why:NOT_COUNTED[x]}); });

  return {steps:steps,items:items,
    monthly:pyInt(mid),
    low:pyInt(mid&&rawLo?Math.sqrt(rawLo*mid):rawLo),
    high:pyInt(mid&&rawHi?Math.sqrt(rawHi*mid):rawHi),
    annual:pyInt(mid*12), best:pyInt(rawLo), worst:pyInt(rawHi),
    customers:c.mid, ticket:pyInt(t.mid), kind:t.kind, cur:cur, region:region,
    capped:share>MAX_SHARE, share_pct:pyRound(Math.min(share,MAX_SHARE)*100),
    not_counted:notCounted, reviews:parseInt(reviews||0,10)||0,
    sensitivity:[
      {i:'you serve '+c.lo+' customers a month, not '+c.mid, t:pyInt(mid*c.lo/c.mid)},
      {i:'you serve '+c.hi+' a month', t:pyInt(mid*c.hi/c.mid)},
      {i:'your average ticket is '+cur+pyInt(t.lo)+', not '+cur+pyInt(t.mid),
       t:pyInt(mid*t.lo/t.mid)},
      {i:'your average ticket is '+cur+pyInt(t.hi), t:pyInt(mid*t.hi/t.mid)}
    ]};
}

function rangePhrase(b){
  if(!b||b.monthly<=0) return '';
  var c=b.cur||'$';
  return 'somewhere between '+money(b.low,c)+' and '+money(b.high,c)+' a month';
}

// Instagram's keyword search needs a login and dumps phone users on a login
// page. A site-scoped Google search resolves to the real profile without one.
function igSearchUrl(name,city){
  var q='site:instagram.com "'+(name||'').trim()+'"'+(city?' '+city.trim():'');
  return 'https://www.google.com/search?q='+encodeURIComponent(q);
}
function igProfileUrl(h){ return 'https://www.instagram.com/'+String(h||'').trim().replace(/^@/,'')+'/'; }
function smsUrl(p){ return 'sms:'+String(p||'').replace(/[^0-9+]/g,''); }
function mapsSearchUrl(name,city){
  return 'https://www.google.com/maps/search/'+encodeURIComponent(((name||'')+' '+(city||'')).trim());
}

function messagesFor(rec){
  // The audit was turned away by their bot protection, so nothing was actually
  // observed about this site. Anything written here would be a guess presented
  // as a finding — and the raw hook is a note to self, not a message.
  if(rec.z) return [
    "\u26a0 Not ready to send. Their site blocked the automatic audit, so nothing "+
    "here was verified.\n\nOpen "+(rec.d||"their site")+" yourself, find one real "+
    "thing wrong with it, then write the opener around that.",
    "\u26a0 No second message until the first one is written by hand."];

  // They already run something that answers people. Pitching an answering bot
  // to them is the fastest way to look like a mailshot, so say so instead.
  if(rec.k.indexOf('HAS_CHAT')>=0) return [
    "\u26a0 Skip \u2014 they already have something on the site that answers people. "+
    "Pitching a bot here reads as a blast.\n\nIf you want them anyway, the angle is "+
    "whether the thing they have actually books people or just collects an email.",
    "\u26a0 No second message. Pick someone without one."];

  var est=estimate(rec.k,rec.q,rec.v,{});
  var b=breakdown(rec.k,rec.q,rec.v,{city:rec.c});
  var loss=lossClause(rec.k), ask=noClose(rec.k);

  // Message one names one thing that is true, what it costs in plain words,
  // and asks a question that is easier to answer than to ignore. No price, no
  // link, no pitch — the only job is a reply.
  var one='Hey \u2014 quick one, not a pitch. '+rec.h+(loss?' '+loss:'')+'\n\n'+ask;

  // Message two is the arithmetic. The bot figure only — never the combined
  // total. Quoting a bot against a number that includes "your site is slow"
  // sells a bot that gets blamed in month two for not fixing the site.
  var report=CFG.hub+'/profile.html?b='+encodeURIComponent(rec.g);
  var money='', delay='', months=0;
  if(est.bot_monthly>=300){
    months=est.bot_monthly/CFG.bot_monthly;
    money='Rough maths, and every assumption is on one page so you can argue with it:\n'+
      report+'\n\n'+
      'About '+est.enquiries+' people a month get in touch with a '+
      (est.kind||'shop')+' your size. On what I can see, roughly '+est.bot_missed+
      ' of them reach nobody \u2014 they turn up after you shut, or while you\'re with '+
      'someone, and there\'s nothing there to catch them. That\'s about '+
      usd(est.bot_monthly)+' a month.\n\n';
    delay='Left alone it\'s roughly '+usd(est.bot_annual)+' between now and this time '+
      'next year.\n\n';
  }

  var what='What I do about it: a bot on your site that answers those people in your '+
    'words \u2014 your prices, your hours, what you do and don\'t do \u2014 takes a name '+
    'and a number, and books them in. '+CFG.bot_setup+' to build it, then '+
    CFG.bot_monthly_s+' a month. Cancel whenever.\n\n';

  var proof=months>=2
    ? 'On your own numbers that\'s about '+months.toFixed(1)+'\u00d7 what it costs. '
    : '';

  var two='Asking because '+rec.r+'\u2605 from '+rec.v+' reviews means the shop clearly '+
    'works \u2014 it\'s just that not everyone who wants you is getting through.\n\n'+
    money+delay+what+proof+
    'Happy to show you what it\'d say to your customers before you decide anything. '+
    'If it\'s not for you, no hard feelings.';
  return [one,two];
}
