'use strict';

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const dictionary = {
  ar: {
    skip:'انتقل للمحتوى', home:'الرئيسية', projects:'المشاريع', brokers:'منصة الوسطاء', discover:'اكتشف المشاريع', ourPerspective:'منظور أكتال', introTitle:'رؤية واضحة.<br>واختيار يليق بك.', introCopy:'نقرّبك من العقار المناسب، بمشاريع مختارة ومعلومات واضحة، وتجربة ترافقك من أول اختيار إلى خطوتك القادمة.', allProjects:'استكشف كل المشاريع', selectedDestinations:'وجهات مختارة', browse:'تصفح', ourProjects:'مشاريعنا', projectCaption:'مساحات مختلفة.<br>ومكان يشبه تطلعاتك.', searchPlaceholder:'ابحث باسم المشروع أو الحي', showProjects:'عرض المشاريع', city:'المدينة', district:'الحي', delivery:'حالة المشروع', sort:'الترتيب', allCities:'كل المدن', riyadh:'الرياض', jeddah:'جدة', allDistricts:'كل الأحياء', allStatuses:'كل الحالات', offPlan:'على الخارطة', ready:'استلام فوري', defaultSort:'ترتيب العرض', priceAsc:'السعر: الأقل أولاً', priceDesc:'السعر: الأعلى أولاً', clearFilters:'مسح الفلاتر', noProjects:'لا توجد مشاريع بهذه الاختيارات', noProjectsCopy:'جرّب تغيير المدينة أو الحي، أو امسح الفلاتر لعرض كل المشاريع.', resetAll:'عرض كل المشاريع', snapshot:'معاينة التصميم · معلومات المشاريع لقطة من موقع أكتال وليست تحديثًا مباشرًا للتوافر.', partnership:'شراكة تصنع الفرص', brokerHeading:'فرص أكثر.<br>شراكة أقرب.', brokerCopy:'تعرّف على منصة الوسطاء العقاريين من أكتال، واستكشف المشاريع المتاحة للتسويق من خلال المنصة الرسمية.', joinBrokers:'انتقل إلى منصة الوسطاء', brokerStep1:'تعرّف على المشاريع', brokerStep1Copy:'استكشف المواقع والصور والمعلومات الأساسية لكل مشروع.', brokerStep2:'قدّم طلب الانضمام', brokerStep2Copy:'أكمل طلبك على منصة الوسطاء الرسمية لأكتال.', brokerStep3:'ابدأ شراكتك', brokerStep3Copy:'يتابع معك فريق أكتال لاستكمال خطوات الانضمام.', nextStep:'خطوتك القادمة', contactHeading:'لنجد لك المكان المناسب.', contact:'تواصل معنا', footerStatement:'العقار السعودي…<br>بتنظيم يليق به.', developers:'المطورون', ownership:'تملك غير السعوديين', offers:'العروض الترويجية', lands:'الأراضي', areas:'الأحياء', about:'من نحن', careers:'التوظيف', address:'الرياض، حي العارض', copyright:'© 2026 أكتال العقارية. جميع الحقوق محفوظة.', previewLabel:'معاينة تصميم مستقلة', privacy:'سياسة الخصوصية', explore:'استكشف أكتال', available:'متاح', soldOut:'تم البيع', residential:'سكني', soldPercent:'نسبة البيع', license:'ترخيص', from:'يبدأ من', sar:'ريال', details:'شاهد التفاصيل', projectWord:'مشروع', results:'من أصل', share:'مشاركة المشروع', copied:'تم نسخ رابط المشروع', copyFailed:'تعذر النسخ. يمكنك فتح تفاصيل المشروع ومشاركة الرابط من هناك.', officialProject:'صفحة المشروع الرسمية', detailNote:'للتحقق من الأسعار والتوافر الحالي، يُرجى زيارة صفحة المشروع الرسمية.', heroProjects:'مشاريعنا', heroProjectsSub:'وجهات عقارية مختارة، وتفاصيل تستحق أن تُكتشف.', heroHome:'العقار السعودي…<br>بتنظيم يليق به.', heroHomeSub:'مشاريع مختارة، وخطوة أقرب إلى المكان الذي يناسبك.', heroBrokers:'منصة الوسطاء', heroBrokersSub:'نفتح آفاق الشراكة، ونقرّبك من الفرصة المناسبة.', heroCredit:'فلل آرش فيو · الرياض', themeLight:'المظهر: فاتح — اضغط للتبديل', themeDark:'المظهر: داكن — اضغط للتبديل', themeSystem:'تلقائي حسب نظام التشغيل', menuOpen:'فتح القائمة', menuClose:'إغلاق القائمة', closeDetail:'إغلاق تفاصيل المشروع', resultsError:'تعذر تحميل المشاريع. يرجى تحديث الصفحة.', backTop:'العودة للأعلى', loaded:'تم عرض المشاريع',
  },
  en: {
    skip:'Skip to content', home:'Home', projects:'Projects', brokers:'Broker Platform', discover:'Explore projects', ourPerspective:'THE AKTAL PERSPECTIVE', introTitle:'A clear vision.<br>A considered choice.', introCopy:'Discover carefully selected properties, clear information and a thoughtful experience that guides you from your first choice to your next step.', allProjects:'Explore all projects', selectedDestinations:'SELECTED DESTINATIONS', browse:'Explore', ourProjects:'our projects', projectCaption:'Distinctive spaces.<br>A place for your ambitions.', searchPlaceholder:'Search by project or district', showProjects:'View projects', city:'City', district:'District', delivery:'Project status', sort:'Sort by', allCities:'All cities', riyadh:'Riyadh', jeddah:'Jeddah', allDistricts:'All districts', allStatuses:'All statuses', offPlan:'Off-plan', ready:'Ready to move in', defaultSort:'Featured order', priceAsc:'Price: low to high', priceDesc:'Price: high to low', clearFilters:'Clear filters', noProjects:'No projects match your selection', noProjectsCopy:'Try another city or district, or clear the filters to explore all projects.', resetAll:'View all projects', snapshot:'Design preview · Project information is a snapshot of the AKTAL website, not a live availability feed.', partnership:'PARTNERSHIPS THAT OPEN DOORS', brokerHeading:'More opportunities.<br>Closer partnerships.', brokerCopy:'Discover AKTAL’s real estate broker platform and explore marketing opportunities through the official platform.', joinBrokers:'Visit the broker platform', brokerStep1:'Explore the projects', brokerStep1Copy:'Browse locations, photography and essential project information.', brokerStep2:'Apply to join', brokerStep2Copy:'Complete your application on AKTAL’s official broker platform.', brokerStep3:'Begin your partnership', brokerStep3Copy:'The AKTAL team will help you complete the onboarding process.', nextStep:'YOUR NEXT STEP', contactHeading:'Let’s find your place.', contact:'Get in touch', footerStatement:'Saudi real estate.<br>Thoughtfully connected.', developers:'Developers', ownership:'Non-Saudi Ownership', offers:'Promotional Offers', lands:'Land', areas:'Districts', about:'About AKTAL', careers:'Careers', address:'Al Arid, Riyadh', copyright:'© 2026 AKTAL Real Estate. All rights reserved.', previewLabel:'Independent design preview', privacy:'Privacy policy', explore:'EXPLORE AKTAL', available:'Available', soldOut:'Sold out', residential:'Residential', soldPercent:'Sales progress', license:'License', from:'Starting from', sar:'SAR', details:'View details', projectWord:'projects', results:'of', share:'Share project', copied:'Project link copied', copyFailed:'Could not copy the link. Open the project details to share it.', officialProject:'Official project page', detailNote:'Visit the official project page to confirm current pricing and availability.', heroProjects:'Our projects', heroProjectsSub:'Considered destinations. Details worth discovering.', heroHome:'Saudi real estate.<br>Thoughtfully connected.', heroHomeSub:'Selected projects. One step closer to a place that fits you.', heroBrokers:'Broker Platform', heroBrokersSub:'Closer partnerships. New possibilities.', heroCredit:'Arch View Villas · Riyadh', themeLight:'Light appearance — switch to dark', themeDark:'Dark appearance — switch to light', themeSystem:'Following your system appearance', menuOpen:'Open menu', menuClose:'Close menu', closeDetail:'Close project details', resultsError:'Projects could not be loaded. Please refresh the page.', backTop:'Back to top', loaded:'Projects updated',
  }
};
Object.assign(dictionary, window.AKTAL_LOCALES);
let lang = 'ar';
let projects = [];
let currentPage = 'projects';
let activeProject = null;
let toastTimer;
let searchTimer;
const themeQuery = matchMedia('(prefers-color-scheme: dark)');
const motionQuery = matchMedia('(prefers-reduced-motion: reduce)');
const pin = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>';
const calendar = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v5m8-5v5M4 11h16"/></svg>';
const doc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h7l4 4v14H6V3h1Zm7 0v5h4M9 12h6m-6 4h6"/></svg>';
const share = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 10.5 6.8-4m-6.8 7 6.8 4"/></svg>';
const t = key => dictionary[lang][key] || key;
const number = value => new Intl.NumberFormat('en-US').format(value);
const name = p => lang === 'ar' ? p.name : p.en;
const cityName = p => lang === 'ar' ? p.city : p.cityEn;
const districtName = p => lang === 'ar' ? p.district : p.districtEn;
const escapeHtml = value => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
function readStorage(key, fallback) { try { return localStorage.getItem(key) || fallback; } catch { return fallback; } }
function writeStorage(key, value) { try { localStorage.setItem(key, value); } catch {} }
function normalize(text) { return String(text).toLowerCase().replace(/[أإآ]/g,'ا').replace(/ى/g,'ي').replace(/[\u064B-\u065F\u0640]/g,'').trim(); }

function setTheme(value, save = true) {
  if (save) writeStorage('aktal-preview-theme', value);
  const theme = value === 'system' ? (themeQuery.matches ? 'dark' : 'light') : value;
  document.documentElement.dataset.theme = theme;
  const sun = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
  const moon = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.5 14.2A9 9 0 0 1 9.8 3.5 9 9 0 1 0 20.5 14.2Z"/></svg>';
  $('#themeButton').innerHTML = theme === 'dark' ? sun : moon;
  $('#themeButton').setAttribute('aria-label', theme === 'dark' ? t('themeDark') : t('themeLight'));
  $('#themeButton').title = value === 'system' ? t('themeSystem') : (theme === 'dark' ? t('themeDark') : t('themeLight'));
}
themeQuery.addEventListener('change', () => { if (readStorage('aktal-preview-theme','system') === 'system') setTheme('system', false); });
$('#themeButton').addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));
$('#themeButton').addEventListener('dblclick', () => { setTheme('system'); showToast(t('themeSystem')); });

function translate() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  $$('[data-i18n]').forEach(el => { el.innerHTML = t(el.dataset.i18n); });
  $$('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); el.setAttribute('aria-label', el.placeholder); });
  ['city','district','status','sort'].forEach((key,i) => $('#'+['cityFilter','districtFilter','statusFilter','sortFilter'][i]).setAttribute('aria-label', t(['city','district','delivery','sort'][i])));
  $$('[data-language]').forEach(button => button.setAttribute('aria-checked', String(button.dataset.language === lang)));
  $('#languageButton').setAttribute('aria-label', ({ar:'اختيار اللغة',en:'Select language',ru:'Выбрать язык',zh:'选择语言',tr:'Dil seçin'})[lang]);
  $('#menuButton').setAttribute('aria-label',t('menuOpen'));
  $('#closeMenu').setAttribute('aria-label',t('menuClose'));
  $('#closeDetail').setAttribute('aria-label',t('closeDetail'));
  $('#backTop').setAttribute('aria-label',t('backTop'));
  setTheme(readStorage('aktal-preview-theme','system'), false);
  updateDistricts();
  updateHero();
  renderProjects();
  if (activeProject) renderDetail(activeProject);
}
const languageMenu = $('#languageMenu');
function closeLanguages(restoreFocus = false) { languageMenu.hidden = true; $('#languageButton').setAttribute('aria-expanded','false'); if(restoreFocus) $('#languageButton').focus(); }
function openLanguages(focusOption = false) { languageMenu.hidden = false; $('#languageButton').setAttribute('aria-expanded','true'); if(focusOption) ($('[aria-checked=true]',languageMenu) || $('button',languageMenu)).focus(); }
$('#languageButton').addEventListener('click', () => { if(languageMenu.hidden) openLanguages(); else closeLanguages(); });
$('#languageButton').addEventListener('keydown', e => { if(e.key === 'ArrowDown' || e.key === 'ArrowUp'){e.preventDefault();openLanguages(true);} });
languageMenu.addEventListener('click', e => { const button=e.target.closest('[data-language]'); if(!button)return; lang=button.dataset.language; writeStorage('aktal-preview-language',lang); translate(); closeLanguages(true); });
languageMenu.addEventListener('keydown', e => {
  const options=$$('button',languageMenu), index=options.indexOf(document.activeElement);
  if(e.key === 'Escape'){e.preventDefault();closeLanguages(true);return;}
  let next; if(e.key==='ArrowDown')next=(index+1)%options.length; if(e.key==='ArrowUp')next=(index-1+options.length)%options.length; if(e.key==='Home')next=0;if(e.key==='End')next=options.length-1;
  if(next!==undefined){e.preventDefault();options[next].focus();}
});
document.addEventListener('click', e => {if(!e.target.closest('.language-picker'))closeLanguages();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!languageMenu.hidden)closeLanguages(true);});
document.addEventListener('focusin',e=>{if(!e.target.closest('.language-picker'))closeLanguages();});

function updateHero() {
  const kind = currentPage === 'home' ? 'Home' : currentPage === 'brokers' ? 'Brokers' : 'Projects';
  $('#heroTitle').innerHTML = t('hero'+kind);
  $('#heroSubtitle').textContent = t('hero'+kind+'Sub');
  document.title = (currentPage === 'home' ? (lang === 'ar' ? 'أكتال العقارية' : 'AKTAL Real Estate') : t(currentPage)) + ' | AKTAL';
  const desired = currentPage === 'brokers' ? 'assets/view-arch.webp' : 'assets/arch-villas.webp';
  if (!$('#heroImage').src.endsWith(desired)) $('#heroImage').src = desired;
  $('#heroImage').alt = currentPage === 'brokers' ? (lang === 'ar' ? 'فيو آرش ريزدنس' : 'View Arch Residence') : (lang === 'ar' ? 'فلل آرش فيو في الرياض' : 'Arch View Villas in Riyadh');
}

function updateDistricts() {
  const select = $('#districtFilter');
  const previous = select.value;
  const city = $('#cityFilter').value;
  const visible = projects.filter(p => !city || p.city === city);
  const districts = [...new Map(visible.map(p => [p.district,p])).values()];
  select.innerHTML = `<option value="">${t('allDistricts')}</option>` + districts.map(p => `<option value="${escapeHtml(p.district)}">${escapeHtml(districtName(p))}</option>`).join('');
  if (districts.some(p => p.district === previous)) select.value = previous;
}
function filteredProjects() {
  const query = normalize($('#search').value);
  const city = $('#cityFilter').value;
  const district = $('#districtFilter').value;
  const status = $('#statusFilter').value;
  const matches = projects.filter(p => (!query || normalize([p.name,p.en,p.district,p.districtEn,p.city,p.cityEn].join(' ')).includes(query)) && (!city || p.city === city) && (!district || p.district === district) && (!status || p.status === status));
  const sort = $('#sortFilter').value;
  if (sort === 'priceAsc') matches.sort((a,b) => a.price-b.price);
  if (sort === 'priceDesc') matches.sort((a,b) => b.price-a.price);
  return matches;
}
function card(p) {
  const title = escapeHtml(name(p));
  return `<article class="project-card" data-project="${p.id}">
    <a href="#/${currentPage}?project=${p.id}" class="card-image-link" aria-label="${t('details')} — ${title}"><img src="${p.image}" width="900" height="600" loading="lazy" decoding="async" alt="${title}"><span class="status-label">${p.sold === 100 ? t('soldOut') : t('available')}</span></a>
    <button class="share-button" data-share="${p.id}" aria-label="${t('share')} — ${title}">${share}</button>
    <div class="card-content"><div class="card-location">${pin}<span>${escapeHtml(districtName(p))}، ${escapeHtml(cityName(p))}</span></div>
      <h3><a href="#/${currentPage}?project=${p.id}">${title}</a></h3><p class="card-type">${t('residential')}</p><div class="card-delivery">${calendar}<span>${t(p.status === 'plan' ? 'offPlan':'ready')}</span></div>
      <div class="sales-row"><span>${p.sold === 100 ? t('soldOut') : t('soldPercent')}</span><b>${p.sold}%</b></div><div class="sale-progress" role="img" aria-label="${t('soldPercent')} ${p.sold}%"><span style="width:${p.sold}%"></span></div>
      <div class="license-line">${doc}<span>${t('license')}: <bdi>${p.license}</bdi></span></div>
      <div class="card-bottom"><div class="price-box"><span>${t('from')}</span><strong><bdi>${number(p.price)}</bdi> <small>${t('sar')}</small></strong></div><a class="detail-link" href="#/${currentPage}?project=${p.id}"><span>${t('details')}</span><span aria-hidden="true">${lang === 'ar' ? '←' : '→'}</span></a></div>
    </div></article>`;
}
function renderProjects() {
  const filtered = filteredProjects();
  $('#projectGrid').innerHTML = filtered.map(card).join('');
  $('#resultsCount').innerHTML = `<strong>${number(filtered.length)}</strong> ${t('projectWord')} ${t('results')} ${number(projects.length)}`;
  $('#emptyState').hidden = filtered.length !== 0;
  $('#projectGrid').hidden = filtered.length === 0;
  $('#clearFilters').hidden = !($('#search').value || $('#cityFilter').value || $('#districtFilter').value || $('#statusFilter').value || $('#sortFilter').value !== 'default');
}
function persistFilters() {
  const state = {search:$('#search').value,city:$('#cityFilter').value,district:$('#districtFilter').value,status:$('#statusFilter').value,sort:$('#sortFilter').value};
  try { sessionStorage.setItem('aktal-preview-filters',JSON.stringify(state)); } catch {}
}
function restoreFilters() {
  try {
    const v = JSON.parse(sessionStorage.getItem('aktal-preview-filters') || '{}');
    $('#search').value = v.search || ''; $('#cityFilter').value = v.city || ''; updateDistricts(); $('#districtFilter').value = v.district || ''; $('#statusFilter').value = v.status || ''; $('#sortFilter').value = v.sort || 'default';
  } catch {}
}
function resetFilters() { $('#projectFilters').reset(); updateDistricts(); persistFilters(); renderProjects(); }
$('#projectFilters').addEventListener('submit', e => { e.preventDefault(); renderProjects(); persistFilters(); $('#resultsCount').scrollIntoView({behavior:motionQuery.matches?'instant':'smooth',block:'start'}); });
$('#search').addEventListener('input', () => { clearTimeout(searchTimer); searchTimer = setTimeout(() => {renderProjects(); persistFilters();},130); });
['cityFilter','districtFilter','statusFilter','sortFilter'].forEach(id => $('#'+id).addEventListener('change', () => { if(id === 'cityFilter') updateDistricts(); renderProjects(); persistFilters(); }));
$('#clearFilters').addEventListener('click',resetFilters);
$('#resetEmpty').addEventListener('click',resetFilters);

const menu = $('#sideMenu');
const detail = $('#projectDialog');
function openMenu() { menu.showModal(); document.body.classList.add('modal-open'); $('#menuButton').setAttribute('aria-expanded','true'); }
function closeMenu() { menu.close(); }
$('#menuButton').addEventListener('click',openMenu);
$('#closeMenu').addEventListener('click',closeMenu);
menu.addEventListener('close',() => { document.body.classList.remove('modal-open'); $('#menuButton').setAttribute('aria-expanded','false'); });
menu.addEventListener('click',e => { if (e.target === menu && (e.clientX < menu.getBoundingClientRect().left || e.clientX > menu.getBoundingClientRect().right)) closeMenu(); });
$$('a',menu).forEach(a => a.addEventListener('click',closeMenu));

function renderDetail(p) {
  $('#projectDetail').innerHTML = `<img class="detail-photo" src="${p.image}" width="1000" height="550" alt="${escapeHtml(name(p))}"><div class="detail-body"><div class="card-location">${pin}<span>${escapeHtml(districtName(p))}، ${escapeHtml(cityName(p))}</span></div><h2 id="detailTitle">${escapeHtml(name(p))}</h2><div class="price-box"><span>${t('from')}</span><strong><bdi>${number(p.price)}</bdi> <small>${t('sar')}</small></strong></div><div class="detail-facts"><div><span>${t('delivery')}</span><strong>${t(p.status==='plan'?'offPlan':'ready')}</strong></div><div><span>${t('soldPercent')}</span><strong dir="ltr">${p.sold}%</strong></div><div><span>${t('license')}</span><strong><bdi>${p.license}</bdi></strong></div></div><div class="detail-actions"><p>${t('detailNote')}</p><a class="primary-button" href="${escapeHtml(p.url)}" target="_blank" rel="noopener noreferrer"><span>${t('officialProject')}</span><span aria-hidden="true">↗</span></a></div></div>`;
}
function openDetail(p) { activeProject = p; renderDetail(p); if(!detail.open) {detail.showModal(); document.body.classList.add('modal-open');} }
function removeProjectFromRoute() { if(new URLSearchParams(location.hash.split('?')[1]).has('project')) history.replaceState(null,'',`#/${currentPage}`); }
$('#closeDetail').addEventListener('click',() => {removeProjectFromRoute(); detail.close();});
detail.addEventListener('close',() => { activeProject = null; document.body.classList.remove('modal-open'); removeProjectFromRoute(); });
detail.addEventListener('click',e => {const r=detail.getBoundingClientRect(); if(e.target===detail && (e.clientX<r.left || e.clientX>r.right || e.clientY<r.top || e.clientY>r.bottom)) {removeProjectFromRoute();detail.close();} });

function showToast(message) { clearTimeout(toastTimer); $('#toast').textContent=message; $('#toast').classList.add('show'); toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),3000); }
$('#projectGrid').addEventListener('click',async e => {
  const button=e.target.closest('[data-share]'); if(!button) return;
  const p=projects.find(x=>x.id===button.dataset.share); if(!p) return;
  const url=new URL(location.href); url.hash=`/projects?project=${p.id}`;
  try {await navigator.clipboard.writeText(url.href);showToast(t('copied'));} catch {showToast(t('copyFailed'));}
});

function route(initial=false) {
  if (location.hash === '#main') return;
  const [path,query='']=location.hash.replace(/^#\/?/,'').split('?');
  const page=['home','projects','brokers'].includes(path)?path:'projects';
  const changed=page!==currentPage;
  currentPage=page;
  $$('.main-nav a').forEach(a=>{if(a.dataset.page===page)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
  $('#homeIntro').hidden=page!=='home';
  $('#projectSection').hidden=page==='brokers';
  $('#brokersSection').hidden=page!=='brokers';
  if(changed || initial){updateHero();renderProjects();if(!initial)scrollTo({top:0,behavior:'instant'});}
  const id=new URLSearchParams(query).get('project');
  const p=projects.find(x=>x.id===id);
  if(p)openDetail(p);else if(detail.open)detail.close();
}
window.addEventListener('hashchange',()=>route());
$('#backTop').addEventListener('click',()=>scrollTo({top:0,behavior:motionQuery.matches?'instant':'smooth'}));
let scrollPending=false;
addEventListener('scroll',()=>{if(!scrollPending){scrollPending=true;requestAnimationFrame(()=>{$('#header').classList.toggle('scrolled',scrollY>40);scrollPending=false;});}},{passive:true});

async function init() {
  lang=readStorage('aktal-preview-language','ar'); if(!dictionary[lang])lang='ar';
  translate();
  try {
    const response=await fetch('./projects.json'); if(!response.ok)throw new Error('Project file unavailable');
    projects=await response.json();
    updateDistricts();restoreFilters();translate();route(true);
  } catch(error){$('#resultsCount').textContent=t('resultsError');$('#emptyState').hidden=true;console.error('Project snapshot could not be loaded',error);}
  $('#header').classList.toggle('scrolled',scrollY>40);
}
init();
