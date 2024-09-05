
function togglePopup() {
    const popupBox = document.getElementById('popup-box');
    if (popupBox.style.display === 'block') {
        popupBox.style.display = 'none';
    } else {
        popupBox.style.display = 'block';
    }
}
function closePopup(){
    const popupBox=document.getElementById('popup-box');
    popupBox.style.display='none';
    sessionStorage.setItem('popupShown', 'false');
}




document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
        alert('Service selected: ' + card.querySelector('h2').innerText);
    });
});




document.getElementById("contact-form").addEventListener("submit",function(event) {
    event.preventDefault();
    alert("Thank you! Your message has been sent.");
    document.getElementById("contact-form").reset();
});







const modal = document.getElementById("blogModal");
const modalText = document.getElementById("modal-text");
const closeModal = document.querySelector(".close");


const blogPosts = {
    1: "Fabric Care Tips: Make your bed sheets last longer by following proper washing and drying techniques. Use mild detergent, wash with cold water, and avoid using high heat.",
    2: "Seasonal Trends: Explore vibrant colors and patterns that are trending this season. From soft pastels to bold geometrics, find the perfect bed sheet style to match the season.",
    3: "Eco-Friendly Fabrics: Eco-friendly materials like organic cotton and bamboo offer sustainable and comfortable bedding options. They're soft, durable, and great for the environment.",
    4: "Luxury Bed Sheets: Discover what makes bed sheets truly luxurious. From high thread count to premium materials like Egyptian cotton and silk, learn how to choose the best for your comfort."
};

document.querySelectorAll('.read-more').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const postId = link.getAttribute('data-post');
        modalText.innerHTML = blogPosts[postId];
        modal.style.display = "flex";
    });
});

// Function to close 
closeModal.addEventListener('click', () => {
    modal.style.display = "none";
});

// Close modal if clicked outside of content
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});








