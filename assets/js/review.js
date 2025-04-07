/*main js for review.html*/
let selectedRating = 0;

// Handle star selection
const stars = document.querySelectorAll('.star');
stars.forEach(star => {
  star.addEventListener('click', () => {
    selectedRating = parseInt(star.getAttribute('data-value'));
    stars.forEach(s => s.classList.remove('selected'));
    for (let i = 0; i < selectedRating; i++) {
      stars[i].classList.add('selected');
    }
  });
});

// Load reviews from localStorage
window.onload = () => {
  const saved = JSON.parse(localStorage.getItem('reviews') || '[]');
  saved.forEach(displayReview);
};

function submitReview() {
  const name = document.getElementById('name').value || "Anonymous";
  const bookTitle = document.getElementById('bookTitle').value;
  const reviewText = document.getElementById('reviewText').value;

  if (!bookTitle || !reviewText || selectedRating === 0) {
    alert("Please fill in all required fields and select a rating.");
    return;
  }
  const review = {
    name,
    bookTitle,
    rating: selectedRating,
    text: reviewText,
    date: new Date().toLocaleDateString()
  };

  displayReview(review);
  saveReviewToLocalStorage(review);

  // Reset form
  document.getElementById('name').value = '';
  document.getElementById('bookTitle').value = '';
  document.getElementById('reviewText').value = '';
  selectedRating = 0;
  stars.forEach(s => s.classList.remove('selected'));
}

function displayReview(review) {
  const container = document.createElement('div');
  container.className = 'review';
  container.innerHTML = `
    <h3>${review.bookTitle}</h3><br>
    <p>${review.text}</p>
    <div class="stars">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
    <small>By ${review.name} on ${review.date}</small>

  `;
  const list = document.getElementById('reviewList');
  list.insertBefore(container, list.firstChild);
}

function saveReviewToLocalStorage(review) {
  let reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
  reviews.unshift(review);
  localStorage.setItem('reviews', JSON.stringify(reviews));
}
