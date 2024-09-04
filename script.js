
// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to open the modal with the clicked image
function openModal(imageSrc) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImage.src = imageSrc;
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

