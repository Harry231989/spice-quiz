const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');
// const textArea = document.querySelector('.textArea');
const questionElement = document.querySelector('[data-js="personalMessage"]');
const amountLeft = document.querySelector('[data-js="amountLeft"]');
const maxLength = questionElement.getAttribute('maxlength');
// Second counting part

// Form Event
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  console.log(data);

  printAllElement(data);
  form.reset();
});

function printAllElement(newData) {
  const listAll = document.createElement('section');
  listAll.classList.add('question-card');
  const newImage = document.createElement('img');
  newImage.src = './assets/bookmark.png';

  newImage.classList.add('question-card__icon');
  const textFirst = document.createElement('h2');
  textFirst.classList.add('question-card__title');
  const textSecond = document.createElement('button');
  textSecond.classList.add('question-card__button');
  const tags = document.createElement('div');
  tags.classList.add('question-card__tags');

//   Event for bookmark
  newImage.addEventListener('click', () => {
    if (newImage.src.endsWith('bookmark.png')) {
      newImage.src = './assets/bookmark_filled.png';
    } else {
      newImage.src = './assets/bookmark.png';
    }
  });

//  InnerText for button
  tags.addEventListener('click', () => {
    if (tags.style.display === 'none') {
      tags.style.display = 'block';
      tags.textContent = 'hide answer';
    } else {
      tags.style.display = 'none';
      tags.textContent = 'show answer';
    }
  });


  newImage.textContent = newData.img;
  textFirst.textContent = newData.first;
  textSecond.textContent = newData.second;
  tags.textContent = newData.tags;

  listAll.append(newImage, textFirst, textSecond, tags);
  todoList.append(listAll);
}

// textArea.addEventListener('input', (e) => {
//   let total = 5;
//   const allInput = e.target.value;
//   if (allInput.length >= total) {
//     console.log('heyyyy');
//   }
// });




const updateAmountLeft = (value) => {
  amountLeft.innerText = value;
};

updateAmountLeft(maxLength);

questionElement.addEventListener('input', () => {
  updateAmountLeft(maxLength - questionElement.value.length);
});
