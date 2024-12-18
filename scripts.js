
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const searchInput = document.getElementById('searchInput');
const gptCards = document.querySelectorAll('.card');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();
    gptCards.forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase();
        if (title.includes(filter)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});


// form
const requestAdBtn = document.querySelector('.buttons .btn');
const modalOverlay = document.getElementById('modalOverlay');
const closeModal = document.getElementById('closeModal');
const adForm = document.getElementById('adForm');
const gptCardsContainer = document.getElementById('gptCards');

// Show the form modal
requestAdBtn.addEventListener('click', () => {
    modalOverlay.classList.add('active');
});

// Close the form modal
closeModal.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

// Handle form submission
adForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get input values
    const profilePicInput = document.getElementById('profilePic');
    const name = document.getElementById('name').value;
    const thoughts = document.getElementById('thoughts').value;

    // Validate file upload
    if (profilePicInput.files.length === 0) {
        alert('Please upload a profile picture.');
        return;
    }

    const file = profilePicInput.files[0];
    const reader = new FileReader();

    // Read the uploaded file
    reader.onload = function (event) {
        const profilePicURL = event.target.result;

        // Create a new card
        const newCard = document.createElement('div');
        newCard.classList.add('card');
        newCard.setAttribute('data-title', name);
        newCard.innerHTML = `
            <div class="card-body position-relative">
                <img src="${profilePicURL}" alt="Profile" class="card-img-top">
                <h3>${name}</h3>
                <p>${thoughts}</p>
                <span>New</span>
                <i class="bi bi-trash delete-icon position-absolute" title="Delete" style="top: 10px; right: 10px; cursor: pointer; font-size: 1.5rem; color: red;"></i>
            </div>
        `;

        // Add functionality to the delete icon
        const deleteIcon = newCard.querySelector('.delete-icon');
        deleteIcon.addEventListener('click', () => {
            newCard.remove(); // Remove the card
        });

        // Append the new card to the cards container
        gptCardsContainer.appendChild(newCard);

        // Clear and close the form
        adForm.reset();
        modalOverlay.classList.remove('active');
    };

    // Trigger file read
    reader.readAsDataURL(file);
});


// plus button
const toggleFormBtn = document.getElementById('toggleFormBtn');
const formModal = document.getElementById('formModal');
const closeFormBtn = document.getElementById('closeFormBtn');
const movieForm = document.getElementById('movieForm');
const movieCardsSection = document.getElementById('movieCardsSection');
const starRating = document.getElementById('starRating');

// Toggle form modal
toggleFormBtn.addEventListener('click', () => {
    formModal.classList.add('active');
});

closeFormBtn.addEventListener('click', () => {
    formModal.classList.remove('active');
});

// Create star rating
let selectedRating = 0;
for (let i = 1; i <= 5; i++) {
    const star = document.createElement('i');
    star.classList.add('bi', 'bi-star');
    star.dataset.value = i;

    star.addEventListener('click', () => {
        selectedRating = i;
        updateStarRating();
    });

    starRating.appendChild(star);
}

function updateStarRating() {
    const stars = starRating.querySelectorAll('i');
    stars.forEach(star => {
        star.classList.remove('active', 'bi-star-fill');
        star.classList.add('bi-star');
        if (star.dataset.value <= selectedRating) {
            star.classList.add('active', 'bi-star-fill');
        }
    });
}








window.onload = function() {
    // Show the ad container after the page is loaded
    setTimeout(function() {
      document.getElementById('adContainer').style.bottom = '0';
    }, 1000); // Ad will appear 1 second after page load
  };
  
  function closeAd() {
    document.getElementById('adContainer').style.bottom = '-100px'; // Hide the ad by moving it below the screen
  }
  









  