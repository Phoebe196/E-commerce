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


}
