const wrapper=document.querySelector('.wrapper')
const btnpopup=document.querySelector('.log');
btnpopup.addEventListener('click',()=>
{
    wrapper.classList.add('active-popup');
});
