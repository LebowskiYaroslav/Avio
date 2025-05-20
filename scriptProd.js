document.addEventListener("DOMContentLoaded", () =>{
    let btnminus = document.querySelector(".btnminus");
    let btnplus = document.querySelector(".btnplus");
    let counter = document.querySelector(".p-quan");
    function counterAdd(){
        counter.textContent = `${Number(counter.textContent) + 1}`;
    } 
    btnplus.addEventListener("click", counterAdd);
    function counterDelete(){
        if (Number(counter.textContent) != 0){
            counter.textContent = `${Number(counter.textContent) - 1}`;
        }
    }
    btnminus.addEventListener("click", counterDelete);
    console.log('Script 1 loaded');
})