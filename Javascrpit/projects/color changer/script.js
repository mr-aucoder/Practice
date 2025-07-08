const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');
buttons.forEach((buttons)=>{
    buttons.addEventListener('click',(e)=>{
        if(e.target.id==="grey"){
            body.style.backgroundColor=e.target.id
        }
        else if(e.target.id==="white"){
            body.style.backgroundColor=e.target.id
        }
        else if(e.target.id==="blue"){
            body.style.backgroundColor=e.target.id
        }
        else{
            body.style.backgroundColor=e.target.id
        }
    })
});