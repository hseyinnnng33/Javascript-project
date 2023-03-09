// const input1 = document.getElementById("result");
// input type="text" id="result" onchange="degistir()">
// const degistir = () =>{
//     input1.value=input1.value.toUpperCase();
// } // inputa girilen degerin dışarıya dokununca yazının büyümesi

// const input1 = document.getElementById("result");
// const yazi = document.getElementById("yazi");

// <h2 id="yazi"></h2>
// <input type="text" id="result"></input>
// input1.onkeydown = function(){
//     yazi.innerHTML ="bir tuşa bastıgın zaman çalışır";
// }

// input1.onkeyup = function(){
//     yazi.innerHTML ="bastıgın tuşa basmazsan";
// }  tuşa basma olaylar

// window.addEventListener("resize", function(){
//     yazi.innerText = Math.floor(Math.random()*100);
// }); // ekranın boyutnu degiştirdigimiz zaman bize bir sayi veriyor istedigimiz şeyi yazdıra biliyoruz


// yazi.addEventListener("mousemove", function(){
//     text.innerText = Math.floor(Math.random()*100);
// }); // div içersinde fare ile hareket ettigimizde random sayı üretiyor

// BİR DİV İÇİNDE YENİ ELEMAN YARATMAK

// let isClicked = true; // tıklandıgında deger true
// const parentDiv1 = document.getElementById("div1");
// const p3 = document.querySelector("#p3");

// function elemanekle(){
//     if(isClicked){ // tıklandıgında deger true
//     let p = document.createElement("p");
//     let text1 = document.createTextNode("EKLENEN METİN");
//     let p2 = document.querySelector("#p2");
//     p.appendChild(text1);
//     parentDiv1.insertBefore(p,p2);
//     p.style.color = "red";
//     isClicked = false; // ikinci defa tıklamya izin vermez çünkü deger false
//     }
// }

// function elemansil(){
//     p3.parentNode.removeChild(p3);
// }

// const yazi = document.querySelector("#result"); 

// const elemanekle = () =>{
//     if(yazi.style.display == "none"){
//         yazi.style.display = "block";
//     }else{
//         yazi.style.display = "none";
//     }
// }




// const buton1 = document.getElementById("buton");
// let yKonum = 0;
// let xKonum = 0; 

// buton1.onmouseover = function(){
//     yKonum = parseInt(Math.random()*600);
//     xKonum = parseInt(Math.random()*1000);

//     buton1.style.top = yKonum +"px";
//     buton1.style.left = xKonum +"px";

//     buton1.style.fontSize = this.clientWidth+5+"px";
// };

// const bir = document.querySelector(".div");
// const color = ["#ed1f5e", "#3354ed", "#8e8ee0", "#0e6a0a","#8e4a6d","#89113e","#fe23a8","#e3ea37","#cd254f","#cd254f"];

// buton1.addEventListener("click", function(){
//     alert("tebrikler");
//     buton1.style.top = "0";
//     buton1.style.left = "0";
//     buton1.style.fontSize = "100px";
//     for(let i = 0; i<10;i++){
//         const bir1 = Math.floor(Math.random()*color.length+1);
//         bir.style.backgroundColor = color[bir1];
//         console.log(color[bir1]);
//         buton1.style.backgroundColor = color[bir1];
//     }
// });



//  checkbox olayları
/* <div class="div">
    <input type="checkbox" id="accept">
    <label for="accept" id="kabul">okudum kabul ettim</label>
    <p id="result"></p>
    <button id="Btn">click</button> */

// const Btn = document.querySelector("#Btn");
// const control = document.querySelector("#accept");
// const p1 = document.querySelector("#result");
// const p2 = document.querySelector("#kabul");

// Btn.addEventListener("click", function(){
//     if(!control.checked){
//         alert("kabul etmen gerek");
//     }
//     else{
//         control.style.display = "none";
//         p2.style.display = "none";
//         p1.innerHTML = "Sözleşmeyi kabul ettiniz";
//     }
// });


// kullanıcıdan 200 karakterlik metin girmesini istedik bitince tam metni altına yazdık

const input1 = document.querySelector("#message");
const p1 = document.querySelector("#result");
const p2 = document.querySelector("#result1");
const buton1 = document.querySelector("#buton1");

let chracter = 200;
let lengt1;

input1.addEventListener("onkeydown",control1);
input1.addEventListener("keyup",control1);

function control1(){
    lengt1 = this.value.length;
    if(chracter>=lengt1){
        const sonlenght = chracter-lengt1;
        p1.textContent = sonlenght +"karakter kaldı";
    }
    else{
        this.value = this.value.substr(0, chracter);
        goster();
    }
    //  p2.textContent = input1.value;
}

buton1.addEventListener("click", goster);
    function goster(){
    p2.textContent = input1.value;
}