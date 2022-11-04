var box1=document.querySelectorAll('.box-1');
var hz1=document.querySelector('.box2');
var hz2=document.querySelector('.box3');
var body=document.querySelector('.bodyz');
var zc=document.getElementById('zc');
var dl=document.getElementById('dl');
var box=document.getElementById('box');
var boxt=document.getElementById('box1');


var txt = document.getElementById("txt");
txt.onblur = function () {
    var phoneNum = this.value;
    if(/^1[34578]\d{9}$/.test(phoneNum)){
        
    }else {
        alert("你输入的手机号错误");
    }
}
var txt1=document.getElementById("txt1");
txt1.onblur = function () {
    var phoneNum1 = this.value;
    if(/^\d{6}$/.test(phoneNum1)){
        
    }else {
        alert("你输入的验证码错误");
    }
}

box1[0].onclick=function(){
    hz2.style.display='none';
    hz1.style.display='block';
    box1[0].className = 'box-1 bs';
    box1[1].className = 'box-1 ';
    body.style.backgroundImage='url(img/注册页面背景.png)';
}
box1[1].onclick=function(){
    hz2.style.display='block';
    hz1.style.display='none';
    box1[0].className = 'box-1';
    box1[1].className = 'box-1 bs';
    body.style.backgroundImage='url(img/54850.png)';
}
zc.onclick=function(){
    hz2.style.display='none';
    hz1.style.display='block';
    box.style.display='none';
    boxt.style.display='block';
    body.style.backgroundImage='url(img/seet.jpg)';
}
dl.onclick=function(){
    hz2.style.display='none';
    hz1.style.display='block';
    box.style.display='block';
    boxt.style.display='none';
    body.style.backgroundImage='url(img/注册页面背景.png)';
}

// var boxdd=document.getElementsByClassName('box2-2');
// boxdd[0].onmouseover=function(){
//     boxdd[0].className='box2-2  yrlm';
  
// }
// boxdd[0].onclick=function(){
//     boxdd[0].className='box2-2  yrlm2';
  
// }
// boxdd[0].onmouseout=function(){
//     boxdd[0].className='box2-2 ';
// }