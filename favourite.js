let a = window.localStorage.getItem("login")
document.getElementById("nik").innerHTML=a

function off(){
    document.querySelector(".not").style.display='none';
    document.querySelector(".not2").style.display='inline';
    
}
function off2(){
    document.querySelector(".not2").style.display='none';
    document.querySelector(".not").style.display='inline';
    
}
