function openNav() {
    document.getElementById("navigationMobile").style.width = "100%";
}

function closeNav() {
    document.getElementById("navigationMobile").style.width = "0";
}

function scrollDown() {
    window.scrollTo(0,2100);
}

window.onscroll = function() {
    scrollDownAppear()
}

function scrollDownAppear() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("scrollDown").className = "scroll-down-appear";    
 }
};

