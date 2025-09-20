//slides
    const slides = document.querySelectorAll('.slides img');
    let current = 0;
    function showNextSlide() {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }
    setInterval(showNextSlide, 3000);
//nav
document.getElementById("menuToggle").addEventListener("click", function() {
    document.getElementById("navMenu").classList.toggle("show");
});
const dropdownButtons = document.querySelectorAll(".dropdown > .dropbtn");
dropdownButtons.forEach(btn => {
    btn.addEventListener("click", function(e) {
        e.preventDefault();
        const parentDropdown = this.parentElement;
        document.querySelectorAll(".dropdown").forEach(drop => {
            if (drop !== parentDropdown) {
                drop.classList.remove("open");
            }
        });
        parentDropdown.classList.toggle("open");
    });
});
