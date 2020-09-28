jQuery(document).ready(function(){
    

    
    
    
    $(".nav > ul > li").mouseover(function(){
        $(".nav > ul > li > ul, .sub_bg").stop().slideDown();
    });
    $(".nav > ul > li").mouseout(function(){
        $(".nav > ul > li > ul, .sub_bg").stop().slideUp();
    });
    
    
  
    
    
});//레디닫기