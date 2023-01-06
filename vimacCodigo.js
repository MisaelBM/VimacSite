let menuCheck = document.querySelector("#menuCheck");
let menu = document.getElementById("menu");
let navStyle = document.getElementById("navStyle");
let linha1 = document.getElementById("linha1");
let linha2 = document.getElementById("linha2");
let linha3 = document.getElementById("linha3");
menu.addEventListener("click", function () {
    if(menuCheck.checked == true){
        navStyle.style.display = "none";
    } else {
        navStyle.style.display = "block";
    }
})
let caixaImg = document.getElementById("caixaImg");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");
let img6 = document.getElementById("img6");
let imgDisplay = document.getElementById("imgDisplay");
setTimeout(
    function () {
        img1.style.marginLeft = "auto"
        img1.style.marginRight = "auto"
        img6.style.display = "none";
        img1.style.display = "block";
    }
,0)
setTimeout(
    function () {
        img2.style.marginLeft = "auto"
        img2.style.marginRight = "auto"
        img2.style.textAlign = "center";
        img1.style.display = "none";
        img2.style.display = "block";   
     }
,4000)
setTimeout(
    function () {
        img3.style.marginLeft = "auto"
        img3.style.marginRight = "auto"
        img3.style.textAlign = "center";
        img2.style.display = "none";
        img3.style.display = "block";   
     }
,8000)
setTimeout(
    function () {
        img4.style.marginLeft = "auto"
        img4.style.marginRight = "auto"
        img4.style.textAlign = "center";
        img3.style.display = "none";
        img4.style.display = "block"; 
       }
,12000)
setTimeout(
    function () {
        img5.style.marginLeft = "auto"
        img5.style.marginRight = "auto"
        img5.style.textAlign = "center";
        img4.style.display = "none";
        img5.style.display = "block"; 
       }
,16000)
setTimeout(
    function () {
        img6.style.marginLeft = "auto"
        img6.style.marginRight = "auto"
        img6.style.textAlign = "center";
        img5.style.display = "none";
        img6.style.display = "block";
    }
,20000)
setInterval(
    function () {
        setTimeout(
            function () {
                img1.style.marginLeft = "auto"
                img1.style.marginRight = "auto"
                img6.style.display = "none";
                img1.style.display = "block";
    
            }
        ,0)
        setTimeout(
            function () {
                img2.style.marginLeft = "auto"
                img2.style.marginRight = "auto"
                img2.style.textAlign = "center";
                img1.style.display = "none";
                img2.style.display = "block";
                }
        ,4000)
        setTimeout(
            function () {
                img3.style.marginLeft = "auto"
                img3.style.marginRight = "auto"
                img3.style.textAlign = "center";
                img2.style.display = "none";
                img3.style.display = "block";
                }
        ,8000)
        setTimeout(
            function () {
                img4.style.marginLeft = "auto"
                img4.style.marginRight = "auto"
                img4.style.textAlign = "center";
                img3.style.display = "none";
                img4.style.display = "block";
                }
        ,12000)
        setTimeout(
            function () {
                img5.style.marginLeft = "auto"
                img5.style.marginRight = "auto"
                img5.style.textAlign = "center";
                img4.style.display = "none";
                img5.style.display = "block";
                }
        ,16000)
        setTimeout(
            function () {
                img6.style.marginLeft = "auto"
                img6.style.marginRight = "auto"
                img6.style.textAlign = "center";
                img5.style.display = "none";
                img6.style.display = "block";
    
            }
        ,20000)
    }
,24000)