window.onscroll = function () {
    var header = document.getElementById("navigation");
    if (window.pageYOffset > 200) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
};

var sommaire = document.querySelector('.sommaire');
var h3s = sommaire.querySelectorAll('h3');

h3s.forEach(lists => {
    lists.addEventListener('click',function(event){
        const ols = lists.nextElementSibling;
        ols.classList.toggle('showsom');
    });
});

const box = document.getElementById('about');

box.addEventListener('mousemove', function(event) {
    const rect = box.getBoundingClientRect();
    const x = event.clientX - rect.left; // X position within the element
    const y = event.clientY - rect.top;  // Y position within the element

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = x - centerX;
    const deltaY = y - centerY;

    const maxOffset = 5; // Maximum shadow offset
    const offsetX = (deltaX / centerX) * maxOffset;
    const offsetY = (deltaY / centerY) * maxOffset;

    box.style.boxShadow = `${offsetX}px ${offsetY}px 5px rgba(0, 0, 68, 0.3)`;
});

box.addEventListener('mouseleave', function() {
    // Reset the box shadow when the mouse leaves the box
    box.style.boxShadow = '0 0 15px rgba(0, 0, 68, 0.2)';
});