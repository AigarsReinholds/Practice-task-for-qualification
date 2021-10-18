function openNav() {
    document.getElementById("navigationMobile").style.width = "100%";
}

function closeNav() {
    document.getElementById("navigationMobile").style.width = "0";
}

function scrollDown() {
if (location.hash.length !== 0) {
window.scrollTo(0,document.body.scrollHeight);
    }
};


