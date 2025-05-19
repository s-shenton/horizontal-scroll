var windowWidth = window.innerWidth;
var horLength = document.querySelector(".element-wrapper").scrollWidth;
var distFromTop = document.querySelector(".horizontal-section").offsetTop;
var scrollDistance = distFromTop + horLength - windowWidth;

document.querySelector(".horizontal-section").style.height = horLength + "px";

window.onscroll = function(){
    var scrollTop = window.pageYOffset;
    
    if (scrollTop >= distFromTop && scrollTop <= scrollDistance) {
        document.querySelector(".element-wrapper").style.transform = "translateX(-"+(scrollTop - distFromTop)+"px)";
    }
}

// Add this to handle window resizing
window.addEventListener('resize', function() {
    windowWidth = window.innerWidth;
    horLength = document.querySelector(".element-wrapper").scrollWidth;
    distFromTop = document.querySelector(".horizontal-section").offsetTop;
    scrollDistance = distFromTop + horLength - windowWidth;
    document.querySelector(".horizontal-section").style.height = horLength + "px";
});