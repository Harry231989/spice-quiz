// All Variables
const newIcon = document.querySelector('.question-card__icon');
const showMessage = document.querySelector('.question-card__button');
const showMessage_1 = document.querySelector('.question-card__answer');



// EVENT LISTENER
// Bookmark notification in index.html
newIcon.addEventListener('click', () => {
  if (newIcon.src.endsWith('bookmark.png')) {
    newIcon.src = './assets/bookmark_filled.png';
  } else {
    newIcon.src = './assets/bookmark.png';
  }
});


// show Message in index.html
showMessage.addEventListener('click', () => {
    if(showMessage_1.style.display === 'none'){
      showMessage_1.style.display = 'block';
      showMessage.textContent = 'hide answer';
    } else {
        showMessage_1.style.display = 'none';
         showMessage.textContent = 'show answer';
    }
})

