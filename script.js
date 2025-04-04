window.addEventListener('scroll', function () {
    const textElement = document.getElementById('title');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        // Change the title's size and position on the first scroll
        textElement.style.fontSize = '1.5rem'; // Smaller size
        textElement.style.top ='2%'
        textElement.style.transform ='translate(-50%, -18%)'; // Slightly move up relative to the new start position
    } else {
        // Reset the title to its original size and position when at the top
        textElement.style.fontSize = '13rem'; // Original size
        textElement.style.top = '2%';
        textElement.style.transform = 'translate(-50%, -18%)'; // Centered position
    }
});

function toggleMenu() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.classList.toggle('visible'); // Toggle the 'visible' class
}

