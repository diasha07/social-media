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

function poisk(){
    let a = document.querySelectorAll(".niki")
    let c = document.querySelectorAll(".fr")
    let b = document.querySelector("#p").value.toUpperCase()
    for(i=0;i<a.length;i++){
        if(a[i].innerHTML.toUpperCase().indexOf(b)>-1){
            c[i].style.display='';
        }
        else{c[i].style.display='none' ;}
    }
}
function del(a){
    if(a==1){
        if(document.querySelector(".a1").innerHTML=="Friends"){
        document.querySelector(".a1").innerHTML="Follow";
        document.querySelector(".a1").style.backgroundColor =" rgba(119, 119, 118, 0.66)";
        }
        else{
            document.querySelector(".a1").innerHTML="Friends";
            document.querySelector(".a1").style.backgroundColor =" rgba(153, 209, 153, 0.66)";
        }
    }
    if(a==2){
        if(document.querySelector(".a2").innerHTML=="Friends"){
            document.querySelector(".a2").innerHTML="Follow";
            document.querySelector(".a2").style.backgroundColor =" rgba(119, 119, 118, 0.66)";
            }
            else{
                document.querySelector(".a2").innerHTML="Friends";
                document.querySelector(".a2").style.backgroundColor =" rgba(153, 209, 153, 0.66)";
            }
    }
    if(a==3){
        if(document.querySelector(".a3").innerHTML=="Friends"){
            document.querySelector(".a3").innerHTML="Follow";
            document.querySelector(".a3").style.backgroundColor =" rgba(119, 119, 118, 0.66)";
            }
            else{
                document.querySelector(".a3").innerHTML="Friends";
                document.querySelector(".a3").style.backgroundColor =" rgba(153, 209, 153, 0.66)";
            }
    }
    if(a==4){
        if(document.querySelector(".a4").innerHTML=="Friends"){
            document.querySelector(".a4").innerHTML="Follow";
            document.querySelector(".a4").style.backgroundColor =" rgba(119, 119, 118, 0.66)";
            }
            else{
                document.querySelector(".a4").innerHTML="Friends";
                document.querySelector(".a4").style.backgroundColor =" rgba(153, 209, 153, 0.66)";
            }
    }
    if(a==5){
        if(document.querySelector(".a5").innerHTML=="Friends"){
            document.querySelector(".a5").innerHTML="Follow";
            document.querySelector(".a5").style.backgroundColor =" rgba(119, 119, 118, 0.66)";
            }
            else{
                document.querySelector(".a5").innerHTML="Friends";
                document.querySelector(".a5").style.backgroundColor =" rgba(153, 209, 153, 0.66)";
            }
    }
    if(a==6){
        if(document.querySelector(".a6").innerHTML=="Friends"){
            document.querySelector(".a6").innerHTML="Follow";
            document.querySelector(".a6").style.backgroundColor =" rgba(119, 119, 118, 0.66)";
            }
            else{
                document.querySelector(".a6").innerHTML="Friends";
                document.querySelector(".a6").style.backgroundColor =" rgba(153, 209, 153, 0.66)";
            }
    }
    if(a==7){
        if(document.querySelector(".a7").innerHTML=="Friends"){
            document.querySelector(".a7").innerHTML="Follow";
            document.querySelector(".a7").style.backgroundColor =" rgba(119, 119, 118, 0.66)";
            }
            else{
                document.querySelector(".a7").innerHTML="Friends";
                document.querySelector(".a7").style.backgroundColor =" rgba(153, 209, 153, 0.66)";
            }
    }
    if(a==8){
        if(document.querySelector(".a8").innerHTML=="Friends"){
            document.querySelector(".a8").innerHTML="Follow";
            document.querySelector(".a8").style.backgroundColor =" rgba(119, 119, 118, 0.66)";
            }
            else{
                document.querySelector(".a8").innerHTML="Friends";
                document.querySelector(".a8").style.backgroundColor =" rgba(153, 209, 153, 0.66)";
            }
    }
    if(a==9){
        if(document.querySelector(".a9").innerHTML=="Friends"){
            document.querySelector(".a9").innerHTML="Follow";
            document.querySelector(".a9").style.backgroundColor =" rgba(119, 119, 118, 0.66)";
            }
            else{
                document.querySelector(".a9").innerHTML="Friends";
                document.querySelector(".a9").style.backgroundColor =" rgba(153, 209, 153, 0.66)";
            }
    }
}