let AddTodoBtn = document.querySelector(".btn");
let popup = document.querySelector(".pop-block")

AddTodoBtn.addEventListener("click",()=>{
    popup.classList.remove('d-none');
})
