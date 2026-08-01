
const toggle=document.querySelector('.mobile-toggle');
const menu=document.querySelector('.menu');
if(toggle&&menu){toggle.addEventListener('click',()=>menu.classList.toggle('open'));menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const form=document.querySelector('#zgloszenie');
if(form){
 form.addEventListener('submit',e=>{
   const consent=form.querySelector('[name="privacy"]');
   if(consent&&!consent.checked){e.preventDefault();alert('Zaznacz zgodę na przetwarzanie danych w celu odpowiedzi na zgłoszenie.');}
 });
}
