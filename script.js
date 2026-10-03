const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('#main-nav');
const productGroup=document.querySelector('.nav-products');
const productButton=document.querySelector('.product-toggle');
const corporateGroup=document.querySelector('.nav-corporate');
const corporateButton=document.querySelector('.corporate-toggle');
function closeProducts(){if(productGroup&&productButton){productGroup.classList.remove('open');productButton.setAttribute('aria-expanded','false');productButton.setAttribute('aria-label','Ürün menüsünü aç')}}
function closeCorporate(){if(corporateGroup&&corporateButton){corporateGroup.classList.remove('open');corporateButton.setAttribute('aria-expanded','false');corporateButton.setAttribute('aria-label','Kurumsal menüsünü aç')}}
function closeMenu(){if(menuButton&&nav){nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Menüyü aç')}closeProducts();closeCorporate()}
if(menuButton&&nav){menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Menüyü kapat':'Menüyü aç');if(!open){closeProducts();closeCorporate()}});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu))}
if(productGroup&&productButton){productButton.addEventListener('click',event=>{event.stopPropagation();closeCorporate();const open=productGroup.classList.toggle('open');productButton.setAttribute('aria-expanded',String(open));productButton.setAttribute('aria-label',open?'Ürün menüsünü kapat':'Ürün menüsünü aç')})}
if(corporateGroup&&corporateButton){corporateButton.addEventListener('click',event=>{event.stopPropagation();closeProducts();const open=corporateGroup.classList.toggle('open');corporateButton.setAttribute('aria-expanded',String(open));corporateButton.setAttribute('aria-label',open?'Kurumsal menüsünü kapat':'Kurumsal menüsünü aç')})}
document.addEventListener('click',event=>{if(productGroup&&!productGroup.contains(event.target))closeProducts();if(corporateGroup&&!corporateGroup.contains(event.target))closeCorporate()});
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu()});