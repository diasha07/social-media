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

    
function save ()  {
    let f = file1.files[0];
    if (f) {
        image1.src = URL.createObjectURL(f);
        localStorage.setItem('myImage', image1.src);
    }
}

image1.src = localStorage.getItem('myImage')

function save2(){
    let aboutme=document.querySelector('.opistext').value
    window.localStorage.setItem("opis", aboutme)
    document.querySelector('.opistext').style.display="none"
    let b = window.localStorage.getItem("opis")
    document.getElementById("about").innerHTML=b
    document.querySelector('#about').style.display="block"
}

const pictures = document.querySelectorAll('.picture');

pictures.forEach((picture) => {
  picture.addEventListener('click', () => {
    pictures.forEach((pic) => pic.classList.add('away'));
    picture.classList.remove('away');
    picture.classList.toggle('active');

    if (!picture.classList.contains('active')) {
      pictures.forEach((pic) => pic.classList.remove('away'));
    }
  });
});
