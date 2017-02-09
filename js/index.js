 window.onload = function() {
   var container = document.getElementById('container');
   var list = document.getElementById('list');
   var buttons = document.getElementById('button').getElementsByTagName('a');
   var prev = document.getElementById('prev');
   var next = document.getElementById('next');
   var index = 0;
   var timer = null;
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

   container.onmouseout = play;

   container.onmouseover = stop;
   play();
   
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

   function showButton() {
     for (var i = 0; i < buttons.length; i++) {
       if (buttons[i].className == 'active') {
         buttons[i].className = '';
         break;
       }
     }

     buttons[index].className = 'active';
   }

   function animate(value) {
     var newLeft = parseInt(list.style.left) + value;
     var time = 300; //位移总时间
     var interval = 10; //位移间隔时间
     var speed = value / (time / interval); //每次位移量

     list.style.left = newLeft + 'px';
     if (newLeft > -810) {
       list.style.left = -3260 + 'px';
     }
     if (newLeft < -3260) {
       list.style.left = -810 + 'px';

     }
   }

   function play() {
     timer = setInterval(function() {
       next.onclick();
     }, 2000)
   }

   function stop() {
     clearInterval(timer);
   }

   next.onclick = function() {
     if (index == 3) {
       index = 0;
     } else {
       index++;
     }
     showButton();
     animate(-815);

   }
   prev.onclick = function() {
     if (index == 0) {
       index = 3;
     } else {
       index--;
     }
     showButton();
     animate(815);

   }
   for (var j = 0; j < buttons.length; j++) {
     buttons[j].onclick = function() {
       if (this.className == 'active') {
         return;
       }
       var myIndex = parseInt(this.getAttribute('index'));
       var offset = -815 * (myIndex - index - 1);
       animate(offset);
       index = myIndex - 1;
       showButton();

     }
   }
 }