var myTimer;

function iO(inID, outID, check){
    var self = this;
    this.inputObj = $(inID);
    this.ouputObj = $(outID);
    this.check = $(check);
    this.incr = $(inID).val();
    this.myTimer;
    this.isRunning = false;
    
    this.setIncr = function(){
        this.incr = this.inputObj.val(); console.log('new ' + this.incr);
        this.ouputObj.html(this.incr);
    }
        
    this.updOut = function(){
     console.log(this.incr);
        this.isRunning = true;
        this.incr --;
        if(this.incr >= 0){
            console.log(this.ouputObj);
            this.ouputObj.html(this.incr);
        }else {
            console.log(this.ouputObj)
           this.ouputObj.html('0');
        }
         if(this.incr === 0){
            clearInterval(this.myTimer);
             console.log("i stopped" + this.ouputObj.attr("id"));
             this.isRunning = false;
             $('.output').toggle();
             this.setIncr();
            $('.output').each(function(){
                if($(this).is(':visible')){
                    var thisHere = $(this).data('timertype');
                    
                    console.log(thisHere);
                 thisHere.setTimer();
                }
            });        
    } 
 };   
        
    this.setTimer = function(){this.myTimer = setInterval(function(){self.updOut()}, 1000)}
    
    };



var timer = new iO('#timer', '#content_timer', '#timer-check');
timer.setIncr();
timer.inputObj.change(function(){
    timer.setIncr();
    console.log(this);
});

var breaker = new iO('#brk', '#content_brk', '#brk-check');
breaker.setIncr();
breaker.inputObj.change(function(){
    breaker.setIncr();
    console.log(this);
});



$('.output').click(function(){
    if(timer.isRunning === false && timer.ouputObj.is(':visible')){timer.setTimer();}
    else{clearInterval(timer.myTimer); timer.isRunning = false;}
    
    if(breaker.isRunning === false && breaker.ouputObj.is(':visible') ){breaker.setTimer();}
    else{clearInterval(breaker.myTimer); breaker.isRunning = false;}

});

$('input.checker').change(function(){console.log("Chchchchchanges")});