const toggleButton = document.getElementById('toggleButton');
const toggleButton1 = document.getElementById('toggleButton1');
const thirdSection = document.querySelector('.third-section');
const hiddenSection = document.getElementById('hiddenSection');

hiddenSection.style.display = 'none';
hiddenSection1.style.display = 'none';
hiddenSection2.style.display = 'none';

toggleButton.addEventListener('click', () => {
  thirdSection.style.display = 'none';
  hiddenSection1.style.display = 'flex';  
  hiddenSection.style.display = 'flex';

    // слайдер
    
    const slider = document.querySelector('.slider');
    const slideWidth = slider.clientWidth;
    let currentIndex = 0;

    function slideNext() {
      currentIndex++;
        if (currentIndex >= 3) {
        currentIndex = 0;
        }
        slider.style.transform = `translateX(-${slideWidth * currentIndex + 225}px)`;
    }

    function slidePrev() {
      currentIndex--;
       if (currentIndex < 0) {
        currentIndex = 2;
        }
      slider.style.transform = `translateX(-${slideWidth * currentIndex + 225}px)`;
    }

document.querySelector('.prev-button').addEventListener('click', slidePrev);
document.querySelector('.next-button').addEventListener('click', slideNext);
});

toggleButton1.addEventListener('click', () => {
  hiddenSection1.style.display = 'none';
  hiddenSection2.style.display = 'flex';
});

// пагинация

const numberOfBlocks = document.querySelectorAll('.card-row').length;

const paginationContainer = document.getElementById('pagination-buttons');

for (let i = 1; i <= numberOfBlocks; i++) {
  const button = document.createElement('a');
  button.href = '#';
  button.classList.add('pagination-button');
  if (i === 1) {
    button.classList.add('active');
  }
  button.textContent = i;
  button.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelectorAll('.card-row').forEach((block) => {
      block.style.display = 'none';
    });
    document.getElementById(`block${i}`).style.display = 'flex';
    paginationButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
  });
  paginationContainer.appendChild(button);
}

document.querySelectorAll('.card-row').forEach((block, index) => {
  if (index !== 0) {
    block.style.display = 'none';
  }
});

const paginationButtons = document.querySelectorAll('.pagination-button');
paginationButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    paginationButtons.forEach((btn) => {
      btn.classList.remove('active');
      btn.style.backgroundColor = 'lightgray';
      btn.style.border = '1px solid black';
      btn.style.color = 'black';
    });
    button.classList.add('active');
    button.style.backgroundColor = 'red';
    button.style.color = 'white';
  });
});














  
  
  
   
  