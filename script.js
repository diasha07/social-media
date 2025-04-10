let q=0;
let users={user:{
    name:"admin",
    parol:"admin",
    email:" "
}}
let newuser={
    name:" ",
    parol:" ",
    email:" "
}
let user_name="user";
function vhod(){
    document.querySelector(".reg2").style.display="inline";
    document.querySelector(".reg").style.display="none";
}
function reg(){
    document.querySelector(".reg2").style.display="none";
    document.querySelector(".reg").style.display="inline";
}
function gotovo(){
    if(document.querySelector(".type").value !="" && document.querySelector(".typeparol").value!=''&& document.querySelector(".typeemail").value!=""){
    q+=1;
    let a=user_name+String(q)
    newobject=Object.create(newuser)
    newobject.name=document.querySelector(".type").value
    newobject.parol=document.querySelector(".typeparol").value
    newobject.email=document.querySelector(".typeemail").value
    users[a]=newobject
    console.log(users)
    document.querySelector(".type").value=""
    document.querySelector(".typeparol").value=""
    document.querySelector(".typeemail").value=""
    window.localStorage.setItem("login", newobject.name)
    window.open("glav.html")
    }else{alert("пусто")}
}
function gotovo2(){
    let login=document.querySelector(".type2").value
    let password =document.querySelector(".typeparol2").value
    for(let i in users){
        if(users[i].name==login && users[i].parol==password){
            alert('Вы вошли!')
            window.localStorage.setItem("login", login)
            window.open("glav.html")
        }else{
            console.log('Не правильный пароль или логин!')
            document.querySelector(".type2").value=""
            document.querySelector(".typeparol2").value=""
        }
    }
}