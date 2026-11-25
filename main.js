import 'allo-font';
const menu=document.querySelector('.menu'),nav=document.querySelector('#nav');
function setMenu(open){menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');menu.textContent=open?'×':'☰';nav.classList.toggle('open',open)}
menu.addEventListener('click',()=>setMenu(menu.getAttribute('aria-expanded')!=='true'));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));document.addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false)});
