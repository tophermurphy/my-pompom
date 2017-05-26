var incr = 0;

$(document).ready(function () {
    
    var myTimer; 
    var isRunning = false;
    var opObj;
    var content_timer_incr;
    var content_brk_incr;

function setVal(thisIN){
    $('#content_' + thisIN ).html($('input#' + thisIN).val());
};
setVal('timer');
setVal('brk');
    
$('.time-set').change(function(){
    setVal();
    incr = Number($('input#timer').val());
//    incr = Number(incr);
});
incr = Number($('input#timer').val());
//    incr = Number(incr);
    
    function cd(){
        isRunning = true;
        incr --;
        if(incr >= 0){
            opObj.children('.inner-content').html(incr);
        }else {
           opObj.children('.inner-content').html('0');
        }
         if(incr === 0){
        clearInterval(myTimer);
             console.log("i stopped" + opObj.attr("id"));
             isRunning = false;
             $('.output').toggle();
    }
    }
function startTime(){
     myTimer = setInterval(cd, 1000);
}
    
$('.output').click(function(e){
    if(isRunning === false){
        opObj = $(this);
        startTime();
        
    }else{
      clearInterval(myTimer);  
        isRunning = false;
    }
    
});
    
    });