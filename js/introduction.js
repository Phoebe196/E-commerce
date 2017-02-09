window.onload = function() {
  var show_nav1=document.getElementById('show_nav1');
  var sub_nav1=document.getElementById('sub_nav1');
  var show_nav2=document.getElementById('show_nav2');
  var sub_nav2=document.getElementById('sub_nav2');
  var show_nav3=document.getElementById('show_nav3');
  var sub_nav3=document.getElementById('sub_nav3');
  var show_nav4=document.getElementById('show_nav4');
  var sub_nav4=document.getElementById('sub_nav4');
  var show_nav5=document.getElementById('show_nav5');
  var sub_nav5=document.getElementById('sub_nav5');
  var h3 = document.getElementById('shopClass');
  var details = document.getElementById('shopClass_show');
  var mini_img1 = document.getElementById('img1');
  var mini_img2 = document.getElementById('img2');
  var mini_img3 = document.getElementById('img3');
  var mini_img4 = document.getElementById('img4');
  var mini_img5 = document.getElementById('img5');
  var image = document.getElementById('bigImg');
  var largeImg=document.getElementById('jqzoom');
  var images = document.getElementById('mini_img').getElementsByTagName('li');
  var comments = document.getElementById('comments');
  var introduction = document.getElementById('introduction');
  var show = document.getElementById('show');
  var first=document.getElementById('first');
  var color= document.getElementById('color').getElementsByTagName('a');
  var scale= document.getElementById('scale').getElementsByTagName('a');
  var number=document.getElementById('value');
  var add=document.getElementById('add');
  var minus=document.getElementById('minus');

  for(i=0;i<color.length;i++){
    color[i].onclick = function(){
      remove(color);
      this.className="on";
    }
  }

  for(i=0;i<scale.length;i++){
    scale[i].onclick = function(){
      remove(scale);
      this.className="on";
    }
  }
  
  
  add.onclick = function(){
    number.value++;
    if(number.value>1){
    minus.removeAttribute('disabled');
  }
  if(number.value>=9){
    add.disabled=true;
  }
  }
  minus.onclick = function(){
    number.value--;
    if(number.value<9){
    add.removeAttribute('disabled');
  }
    if(number.value<=1){
    minus.disabled=true;
  }
  
  }

  comments.onclick = function(){
   introduction.className="";
   this.className="active";
   show.style.display="none";
   first.style.marginBottom="0";
 }

 introduction.onclick = function(){
   comments.className="";
   this.className="active";
   show.style.display="block";
   first.style.marginBottom="15px";
 }

 h3.onmouseover = function(){
  details.className='shopClass_show';
}
h3.onmouseout = function(){
  details.className='shopClass_show hide';
}

show_nav1.onmouseover = function(){
  sub_nav1.className='shopClass_list';
}
sub_nav1.onmouseover = function(){
  sub_nav1.className='shopClass_list';
}
sub_nav1.onmouseout = function(){
  sub_nav1.className='shopClass_list hide';
}
show_nav1.onmouseout = function(){
  sub_nav1.className='shopClass_list hide';
}

show_nav2.onmouseover = function(){
  sub_nav2.className='shopClass_list';
}
sub_nav2.onmouseover = function(){
  sub_nav2.className='shopClass_list';
}
sub_nav2.onmouseout = function(){
  sub_nav2.className='shopClass_list hide';
}
show_nav2.onmouseout = function(){
  sub_nav2.className='shopClass_list hide';
}

show_nav3.onmouseover = function(){
  sub_nav3.className='shopClass_list';
}
sub_nav3.onmouseover = function(){
  sub_nav3.className='shopClass_list';
}
sub_nav3.onmouseout = function(){
  sub_nav3.className='shopClass_list hide';
}
show_nav3.onmouseout = function(){
  sub_nav3.className='shopClass_list hide';
}

show_nav4.onmouseover = function(){
  sub_nav4.className='shopClass_list';
}
sub_nav4.onmouseover = function(){
  sub_nav4.className='shopClass_list';
}
sub_nav4.onmouseout = function(){
  sub_nav4.className='shopClass_list hide';
}
show_nav4.onmouseout = function(){
  sub_nav4.className='shopClass_list hide';
}

show_nav5.onmouseover = function(){
  sub_nav5.className='shopClass_list';
}
sub_nav5.onmouseover = function(){
  sub_nav5.className='shopClass_list';
}
sub_nav5.onmouseout = function(){
  sub_nav5.className='shopClass_list hide';
}
show_nav5.onmouseout = function(){
  sub_nav5.className='shopClass_list hide';
}
mini_img1.onclick = function(){
  image.setAttribute('src','../img/product_info.jpg');
  largeImg.setAttribute('href','../img/big_img1.jpg');
  removeOn();
  this.className="on";
}
mini_img2.onclick = function(){
  image.setAttribute('src','../img/product_info2.jpg');
  removeOn();
  this.className="on";
  largeImg.setAttribute('href','../img/big_img2.jpg');
}
mini_img3.onclick = function(){
  image.setAttribute('src','../img/product_info3.jpg');
  largeImg.setAttribute('href','../img/big_img3.jpg');
  removeOn();
  this.className="on";
}
mini_img4.onclick = function(){
  image.setAttribute('src','../img/product_info4.jpg');
  largeImg.setAttribute('href','../img/big_img4.jpg');
  removeOn();
  this.className="on";
}
mini_img5.onclick = function(){
  image.setAttribute('src','../img/product_info5.jpg');
  largeImg.setAttribute('href','../img/big_img5.jpg');
  removeOn();
  this.className="on";
}
function removeOn(){
 if(mini_img1.className=="on"){
  mini_img1.className="";
}
else if(mini_img2.className=="on"){
  mini_img2.className="";
}
else if(mini_img3.className=="on"){
  mini_img3.className="";
}
else if(mini_img4.className=="on"){
  mini_img4.className="";
}
else{
  mini_img5.className="";
}
}

function remove(arr){
  for (var i = 0; i < arr.length; i++) {
    if(arr[i].className=="on"){
      arr[i].className="";
      break;
    }
  }

}

}
