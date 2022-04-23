const h1 = document.querySelector(".hello h1");

console.dir(h1);

function handleh1Click()
{
const clickedClass = "clicked";

   if(h1.classList.contains(clickedClass)){
  
    h1.classList.remove(clickedClass);
   }

   else{
h1.classList.add(clickedClass);
   }

h1.classList.toggle(clickedClass);

}

function handleMouseEnter(){
h1.innerHTML = "Mouse is here";
}


function handleMouseLeave(){
    h1.innerHTML = "Mouse is gone";
    }
    
    function handleWindowResize(){
        document.body.style.backgroundColor = "green";
        }
        
  
    function handleWindowCopy(){
        alert("copier");
        }
        

h1.onclick = handleh1Click;

h1.addEventListener("mouseenter",handleMouseEnter)

h1.addEventListener("mouseleave",handleMouseLeave)

window.addEventListener("resize", handleWindowResize);

window.addEventListener("copy", handleWindowCopy);
