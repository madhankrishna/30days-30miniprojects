const popup=document.querySelector(".popup");
let userInput=document.getElementById("input_value");
const btn=document.querySelector(".copy");
btn.addEventListener('click',()=>{
    popup.classList.add("active");
    copyToClip();
    userInput.value="";
})
popup.addEventListener("animationend", () => {
    popup.classList.remove("active");
});

function copyToClip(){
    const textarea = document.createElement("textarea");
    textarea.setAttribute("readonly", "");
    textarea.value=userInput.value;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea); 
}