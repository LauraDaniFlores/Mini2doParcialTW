document.addEventListener('DOMContentLoaded', function () {
	const tabs = document.querySelectorAll('.tabs li');
	const slides = document.querySelectorAll('.carousel-slide');
	const prevBtn = document.getElementById('prevBtn');
	const nextBtn = document.getElementById('nextBtn');
	let currentSlideIndex = 0;
  
	function showSlide(index) {
	  tabs.forEach(tab => tab.classList.remove('is-active'));
	  slides.forEach(slide => slide.classList.remove('is-active'));
  
	  tabs[index].classList.add('is-active');
	  slides[index].classList.add('is-active');
	  currentSlideIndex = index;
	}
  
	function showNextSlide() {
	  let nextIndex = currentSlideIndex + 1;
	  if (nextIndex >= slides.length) {
		nextIndex = 0;
	  }
	  showSlide(nextIndex);
	}
  
	function showPrevSlide() {
	  let prevIndex = currentSlideIndex - 1;
	  if (prevIndex < 0) {
		prevIndex = slides.length - 1;
	  }
	  showSlide(prevIndex);
	}
  
	tabs.forEach((tab, index) => {
	  tab.addEventListener('click', () => {
		showSlide(index);
	  });
	});
  
	prevBtn.addEventListener('click', showPrevSlide);
	nextBtn.addEventListener('click', showNextSlide);
  });
  