window.addEventListener('scroll', function () {
    const textElement = document.getElementById('title');
    const scrollPosition = window.scrollY;

    // Detect if screen width is mobile
    const isMobile = window.matchMedia("(max-width: 1260px)").matches;

    if (scrollPosition > 0) {
        // When user scrolls down
        if (isMobile) {
            textElement.style.fontSize = '2rem'; // Smaller for mobile
            textElement.style.top = '1%';
            textElement.style.transform = 'translate(-50%, -20%)';
        } else {
            textElement.style.fontSize = '1.5rem';
            textElement.style.top = '2%';
            textElement.style.transform = 'translate(-50%, -18%)';
        }
    } else {
        // When at the top of the page
        if (isMobile) {
            textElement.style.fontSize = '1.5rem'; // Original mobile size
            textElement.style.top = '2%';
            textElement.style.transform = 'translate(-50%, -20%)';
        } else {
            textElement.style.fontSize = '13rem'; // Original desktop size
            textElement.style.top = '2%';
            textElement.style.transform = 'translate(-50%, -18%)';
        }
    }
});

function toggleMenu() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.classList.toggle('visible'); // Toggle the 'visible' class
}