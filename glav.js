let a = window.localStorage.getItem("login")
document.getElementById("nik").innerHTML=a

function poisk(){
    let a = document.querySelectorAll(".niki")
    let c = document.querySelectorAll(".st1")
    let b = document.querySelector("#p").value.toUpperCase()
    for(i=0;i<a.length;i++){
        if(a[i].innerHTML.toUpperCase().indexOf(b)>-1){
            a[i].style.opacity='100%';
            c[i].style.opacity='100%';
        }
        else{a[i].style.opacity='0%' ,c[i].style.opacity='0%' ;}
    }
}
function off(){
    document.querySelector(".not").style.display='none';
    document.querySelector(".not2").style.display='inline';
    
}
function off2(){
    document.querySelector(".not2").style.display='none';
    document.querySelector(".not").style.display='inline';
    
}
function fr(){
    let a = document.querySelector('.stories2');
    a.classList.toggle('newbox')
}
function sub(){
    let a = document.querySelector('.stories');
    a.classList.toggle('newbox')
}

function onstar(a){
    if(a==1){
    document.querySelector(".star1").style.display='none';
    document.querySelector(".star2").style.display='inline';}
    if(a==2){
        document.querySelector(".star1_2").style.display='none';
        document.querySelector(".star2_2").style.display='inline';}
    if(a==3){
            document.querySelector(".star1_3").style.display='none';
            document.querySelector(".star2_3").style.display='inline';}
    if(a==4){
            document.querySelector(".star1_4").style.display='none';
            document.querySelector(".star2_4").style.display='inline';}
}
function offstar(a){
    if(a==1){
    document.querySelector(".star2").style.display='none';
    document.querySelector(".star1").style.display='inline';}
    if(a==2){
        document.querySelector(".star2_2").style.display='none';
        document.querySelector(".star1_2").style.display='inline';}
    if(a==3){
        document.querySelector(".star2_3").style.display='none';
        document.querySelector(".star1_3").style.display='inline';}
    if(a==4){
        document.querySelector(".star2_4").style.display='none';
        document.querySelector(".star1_4").style.display='inline';}
}


let slides = 0;
function nazad(){
    let a = document.querySelectorAll(".a1")
    slides --
    if (slides<0){slides=3}
    for(let i=0; i<a.length; i++){
        a[i].style.display ='none';
        a[slides].style.display ='inline';
    }
    
}
function vper(){
    let a = document.querySelectorAll(".a1")
    slides ++
    if (slides>3){slides=0}
    for(let i=0; i<a.length; i++){
        a[i].style.display ='none';
        a[slides].style.display ='inline';
    }
    
}


