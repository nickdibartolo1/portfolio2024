// const imgs = document.querySelectorAll('.carousel__img');
// const prevButton = document.querySelector('.prev');
// const nextButton = document.querySelector('.next');
// const carouselContainer = document.querySelector('.carousel__container');
// let currentIndex = 0;
// const totalimgs = imgs.length;

// // Update carousel to show the correct image
// function showImage(index) {
//   if (index < 0) {
//     currentIndex = totalimgs - 1;
//   } else if (index >= totalimgs) {
//     currentIndex = 0;
//   }
//   const translateValue = -currentIndex * 100;
//   carouselContainer.style.transform = `translateX(${translateValue}%)`;
// }

// // Next button click event
// nextButton.addEventListener('click', () => {
//   currentIndex++;
//   showImage(currentIndex);
// });

// // Previous button click event
// prevButton.addEventListener('click', () => {
//   currentIndex--;
//   showImage(currentIndex);
// });

