document.addEventListener("DOMContentLoaded", () => {
    let article2 = document.querySelector(".artc-col2");
    let article3 = document.querySelector(".artc-col3");
    let article4 = document.querySelector(".artc-col4");
    const imgSrc = localStorage.getItem('imgSrc');
            if (imgSrc) {
                const imgprod = document.getElementById('imgprod');
                if (imgprod) {
                    imgprod.src = imgSrc;
                }
                localStorage.removeItem('imgSrc');
            }
    function imgReplaceAndWeb2(){
        localStorage.setItem('imgSrc', 'images/Onevase.jpg');
        window.location.href = "products.html";
    }
    function imgReplaceAndWeb3(){
        localStorage.setItem('imgSrc', 'images/vaseSet.jpg');
        window.location.href = "products.html";
    }
    function imgReplaceAndWeb4(){
        localStorage.setItem('imgSrc', 'images/lamp.jpg');
        window.location.href = "products.html";
    }
    article2.addEventListener("click", imgReplaceAndWeb2);
    article3.addEventListener("click", imgReplaceAndWeb3);
    article4.addEventListener("click", imgReplaceAndWeb4);
});