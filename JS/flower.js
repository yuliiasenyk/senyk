 $(document).ready(function () {
    var timerinterval = 8,
        degperint = 1,
        target = $('#flower'),
        degrees = 0,
        active = false,
        firststart = false,
        easefirststart = false;
    
    function rotatenow() {
        if (active === true) {
            if (degrees > 359) {
                degrees = 0;
            } else {
                degrees += degperint;
            }
            setRotation(degrees);
        }
    }
    
    function setRotation(deg) {
            target.css({
                '-webkit-transform': 'rotate(' + deg + 'deg)',
                    '-moz-transform': 'rotate(' + deg + 'deg)',
                    '-ms-transform': 'rotate(' + deg + 'deg)',
                    'transform': 'rotate(' + deg + 'deg)'
            });       
    }
    
    target.hover(function () {
        active = true;   
        if (firststart===false) { myintv = setInterval(rotatenow, timerinterval); }
        firststart = true; 
    }, function () {
        active = false;
    });
});