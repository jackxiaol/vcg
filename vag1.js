var big = document.getElementById('body1');
var small = document.getElementById('screen');
var ol = document.getElementById('ol');
var ul = document.getElementById('imgs');
var left = document.getElementById('left');
var right = document.getElementById('right');
var arr = document.getElementById('arr');



for (var i = 0; i < ul.children.length - 1; i++) {
    var li = document.createElement('li');
    li.setAttribute('inr', i)
    if (i == 0) {
        li.setAttribute('class', 'current');
    }
    ol.appendChild(li);
}

var index = 0;
var time = null;
big.onmouseover = function () {
    arr.style.display = 'block';
    clearInterval(time);
    
}
big.onmouseout = function () {
    arr.style.display = 'none';
    time = setInterval(move, 5000);
}

right.onclick = function () {
    // index++;
    // if (index > ol.children.length - 1) {
    //     index = ol.children.length - 1;
    // }
    // animate(ul, -small.offsetWidth * index);
    // for (var t = 0; t < ol.children.length; t++) {
    //     ol.children[t].removeAttribute('class');
    // }
    // ol.children[index].setAttribute('class', 'current');

    if (index < ol.children.length - 1) {
        index++;
        animate(ul, -small.offsetWidth * index);
        for (var t = 0; t < ol.children.length; t++) {
            ol.children[t].removeAttribute('class');
        }
        ol.children[index].setAttribute('class', 'current');
        
        
    }
    else {
        index = 0;
        animate(ul, -small.offsetWidth * ol.children.length);
        for (var t = 0; t < ol.children.length; t++) {
            ol.children[t].removeAttribute('class');
        }
        ol.children[index].setAttribute('class', 'current');
    }
    if(index==1){
        ul.style.left = 0;
    }

}
left.onclick = function () {
    // index--;
    // if (index < 0) {
    //     index = 0;
    // }
    // animate(ul, -small.offsetWidth * index);
    // for (var t = 0; t < ol.children.length; t++) {
    //     ol.children[t].removeAttribute('class');
    // }
    // ol.children[index].setAttribute('class', 'current');
    if (index > 0) {
        index--;
        console.log(index);
        animate(ul, -small.offsetWidth * index);
        for (var t = 0; t < ol.children.length; t++) {
            ol.children[t].removeAttribute('class');
        }
        ol.children[index].setAttribute('class', 'current');
    }
    else {
        index = ol.children.length ;
        console.log(index);
        animate(ul, -small.offsetWidth * ol.children.length);
        for (var t = 0; t < ol.children.length; t++) {
            ol.children[t].removeAttribute('class');
        }
        ol.children[0].setAttribute('class', 'current');
    }
    if(index==ol.children.length ){
        ul.style.left = -7020+'px';
    }

}
left.onmouseover=function(){
    if(index<=0){
        index = ol.children.length ;
        console.log(index);
        animate(ul, -small.offsetWidth * ol.children.length);
        for (var t = 0; t < ol.children.length; t++) {
            ol.children[t].removeAttribute('class');
        }
        ol.children[0].setAttribute('class', 'current');
    }
    if(index==ol.children.length ){
        ul.style.left = -7020+'px';
    }
}
time = setInterval(move, 5000);
for (var u = 0; u < ol.children.length; u++) {
    ol.children[u].setAttribute('index', u);
    ol.children[u].onclick = function () {
        for (var p = 0; p < ol.children.length; p++) {
            ol.children[p].removeAttribute('class');
        }
        this.setAttribute('class', 'current');
        var page = this.getAttribute('index');
        index = page;
        console.log(page);
        animate(ul, -small.offsetWidth * page);
    }
}


function move() {
    // if (index == ul.children.length - 1) {
    //     index = 0;
    //     ul.style.left = 0;
    // }
    index++;
    if (index < ul.children.length - 1) {
        for (var k = 0; k < ol.children.length; k++) {
            ol.children[k].removeAttribute('class');
        }
        ol.children[index].setAttribute('class', 'current');
    } else {
        ol.children[0].setAttribute('class', 'current');
        ol.children[ol.children.length - 1].removeAttribute('class');
    }
    animate(ul, -small.offsetWidth * index);
}

var big2 = document.getElementById('body2');
var small2 = document.getElementById('screen2');
var ol2 = document.getElementById('ol2');
var ul2 = document.getElementById('imgs2');
var left2 = document.getElementById('left2');
var right2 = document.getElementById('right2');
var arr2 = document.getElementById('arr2');

for (var i = 0; i < ul2.children.length - 1; i++) {
    var li = document.createElement('li');
    li.setAttribute('inr', i)
    if (i == 0) {
        li.setAttribute('class', 'current2');
    }
    ol2.appendChild(li);
}

var index1 = 0;
var time1 = null;
big2.onmouseover = function () {
    arr2.style.display = 'block';
    clearInterval(time1);
}
big2.onmouseout = function () {
    arr2.style.display = 'none';
    time1 = setInterval(move1, 5000);
}

right2.onclick = function () {
    index1++;
    if (index1 > ol2.children.length - 1) {
        index1 = ol2.children.length - 1;
    }
    animate(ul2, -small2.offsetWidth * index1);
    for (var t = 0; t < ol2.children.length; t++) {
        ol2.children[t].removeAttribute('class');
    }
    ol2.children[index1].setAttribute('class', 'current2');

}
left2.onclick = function () {
    index1--;
    if (index < 0) {
        index = 0;
    }
    animate(ul2, -small2.offsetWidth * index1);
    for (var t = 0; t < ol2.children.length; t++) {
        ol2.children[t].removeAttribute('class');
    }
    ol2.children[index1].setAttribute('class', 'current2');
}
time1 = setInterval(move1, 5000);
for (var u = 0; u < ol2.children.length; u++) {
    ol2.children[u].setAttribute('index1', u);
    ol2.children[u].onclick = function () {
        for (var p = 0; p < ol2.children.length; p++) {
            ol2.children[p].removeAttribute('class');
        }
        this.setAttribute('class', 'current2');
        var page = this.getAttribute('index1');
        index1 = page;
        console.log(page);
        animate(ul2, -small2.offsetWidth * page);
    }
}


function move1() {
    if (index1 == ul2.children.length - 1) {
        index1 = 0;
        ul2.style.left = 0;
    }
    index1++;
    if (index1 < ul2.children.length - 1) {
        for (var k = 0; k < ol2.children.length; k++) {
            ol2.children[k].removeAttribute('class');
        }
        ol2.children[index1].setAttribute('class', 'current2');
    } else {
        ol2.children[0].setAttribute('class', 'current2');
        ol2.children[ol2.children.length - 1].removeAttribute('class');
    }
    animate(ul2, -small2.offsetWidth * index1);
}

var kg = document.getElementById('kg').parentNode;
var ob = document.getElementsByClassName('ob');
kg.onclick = function () {
    if (ob[0].style.left == '0px') {
        ob[0].style.left = -116 + 'px';
        ob[0].style.transition = 'all .4s';
    } else {
        ob[0].style.left = 0 + 'px';
    }
}

var oa = document.getElementsByClassName('oa');

oa[0].onclick = function () {
    var timId = setInterval(function () {
        if (document.documentElement.scrollTop > 0) {
            document.body.scrollTop = document.documentElement.scrollTop = document.documentElement.scrollTop - 100;
        } else {
            clearInterval(timId);
        };
    }, 10)
}

// var lists = document.getElementsByTagName('li');
// for (var i = 0; i < lists.length; i++) {
//     lists[i].onmouseover = function () {
//         for (var j = 0; j < lists.length; j++) {
//             lists[j].style.color = '#1a1a1a';
//         }
//         this.style.color = 'rgb(201 198 195)';
//     }
// }

var fb = document.getElementsByClassName('fb');
var zd = document.getElementsByClassName('zd');
var hz3 = document.getElementById('box3');

for (var u = 0; u < zd.length; u++) {
    zd[u].setAttribute('dj', u);
    zd[u].onmouseover = function () {
        for (var rt = 0; rt < fb.length; rt++) {
            fb[rt].style.display = 'none';
            fb[rt].style.transition = 'all .5s';
        }
        var xb = this.getAttribute('dj');
        this.style.marginTop = -5 + 'px';
        fb[xb].style.display = 'block';
        fb[xb].style.transition = 'all .5s';
    }
    zd[u].onmouseout = function () {
        this.style.marginTop = '';
    }
}
hz3.onmouseout = function () {
    for (var rt = 0; rt < fb.length; rt++) {
        fb[rt].style.display = 'none';
        fb[rt].style.transition = 'all 3s';
    }
}

var zdh = document.querySelectorAll('.top2-2');
var uis = document.querySelectorAll('.top2-2>ul');
for (var yu = 0; yu < zdh.length; yu++) {
    zdh[yu].setAttribute('rt', yu);
    zdh[yu].onmouseover = function () {
        for (var n = 0; n < uis.length; n++) {
            uis[n].style.display = 'none';
        }
        xw = this.getAttribute('rt');
        uis[xw].style.display = 'block';
    }
    zdh[yu].onmouseout = function () {
        uis[xw].style.display = 'none';
    }

}

var topPart = document.getElementsByClassName('top1');
var navBar = document.getElementsByClassName('top2');
var mainPart = document.getElementById('body1');
var tj=document.querySelector('#tj');
var syli=document.querySelectorAll('.syli');


window.onscroll = function () {
    if (window.pageYOffset > topPart[0].offsetHeight) {
        console.log(window.pageYOffset);
        navBar[0].className = 'top2 fixed';
        tj.style.color='#fff';
        tj.onmouseover=function(){
            tj.style.color='rgba(47, 163, 217, 0.6)';
        }
        tj.onmouseout=function(){
            tj.style.color='#fff';
        }
        mainPart.style.marginTop = navBar[0].offsetHeight;
        
    } else {
        navBar[0].className = 'top2 ';
        tj.style.color='#000';
        tj.onmouseover=function(){
            tj.style.color='rgba(47, 163, 217, 0.6)';
        }
        tj.onmouseout=function(){
            tj.style.color='#000';
        }
       
    }
}