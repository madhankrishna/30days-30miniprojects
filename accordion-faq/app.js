let li = document.querySelectorAll(".faq-text li");

li.forEach((li)=>{
    li.addEventListener("click", (e)=>{
        let clickedLi
        if(e.target.classList.contains("question-arrow")){
            clickedLi = e.target.parentElement;
          }else{
            clickedLi = e.target.parentElement.parentElement;
          }
         clickedLi.classList.toggle("showAnswer");
    })
})