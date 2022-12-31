//active  sidebar admin
var side = document.getElementById('sideNav');
var menu = side.querySelectorAll('.item-nav');
Array.from(menu).forEach(item => {
    item.addEventListener("click", () => {
        var aktif = document.getElementsByClassName("active");
        aktif[0].className = aktif[0].className.replace(" active", "");
        item.className += " active";
    });
});