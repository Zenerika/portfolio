'use strict';

document.addEventListener('DOMContentLoaded', function () {
  console.log('Hello :)');
});

$(function(){
  $("#mondrian").on({
   mouseenter: function(){
    $(this).attr('src','css/img/mondrian_350.png');
    console.log('color')
  },
  mouseleave: function(){
    $(this).attr('src','css/img/mondrian_dark.jpg');
    console.log('dark')
  }
  });
  
});


