document.addEventListener("DOMContentLoaded", () =>{
    let article = document.querySelector(".artc-col1");
    let navMenu = document.querySelector(".burger-menu");
    let span = document.querySelector(".menu");
    article.addEventListener("click", function(){
        window.location.href = "products.html";
    })
    console.log('Script 1 loaded');
    span.addEventListener("click", function(){
        navMenu.classList.toggle("show");

    })
    span.addEventListener("click", function(){
        span.classList.toggle("active");
    })
})