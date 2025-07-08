const links=document.querySelector(".pro");
links.addEventListener("pointerenter",()=>{
  links.innerHTML=` 
  <nav>
        <a href="color changer/index.html">Color Changer</a>
        <a href="bmi-genrator/index.html">BMI Genrator</a>
        <a href="Digital clock/index.html">Digital Clock</a>
        <a href="Guess the number/index.html">Guess the Number Game</a>
  </nav>`

})
links.addEventListener("pointerleave",()=>{
  links.innerHTML=`<h1>projects</h1>`
})