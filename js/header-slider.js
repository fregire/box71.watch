(function(){
	// Модуль - Header slider
	var btnPrev = document.querySelector(".slider-head__arrow--prev");
	var btnNext = document.querySelector(".slider-head__arrow--next");
	var headerSlides = document.querySelectorAll(".slider-head__item");
	var nextIndexElem = document.querySelector(".slider-head__index-next");
	var prevIndexElem = document.querySelector(".slider-head__index-prev");
	var MAX_INDEX = headerSlides.length;
	var currentIndex = 0;
	var screenWidth = document.body.clientWidth;

	prevIndexElem.innerHTML = "0" + MAX_INDEX;
	btnPrev.style.backgroundImage = headerSlides[headerSlides.length - 1].style.backgroundImage;
	btnNext.style.backgroundImage = headerSlides[1].style.backgroundImage;

	var clearActiveClass = function(){
		for(var i = 0; i < headerSlides.length; i++){
			headerSlides[i].classList.remove("slider-head__item--current");
		}
	}
	var changeIndexNumber = function(elemNext, elemPrev, index, maxIndex, minIndex){
		var indexPrev, indexNext;
		if(index === minIndex){
			indexPrev = maxIndex;
		}
		if(index === maxIndex){
			indexNext = minIndex;
		} 
		var resultNext = indexNext || index + 1;
		var resultPrev = indexPrev || index - 1;

		changeBtnBG(btnPrev, btnNext, resultPrev, resultNext);

		elemNext.innerHTML = "0" + resultNext;
		elemPrev.innerHTML = "0" + resultPrev;
	}
	var changeBtnBG = function(btnPrev, btnNext, indexPrev, indexNext){
		btnPrev.style.backgroundImage = headerSlides[indexPrev - 1].style.backgroundImage;
		btnNext.style.backgroundImage = headerSlides[indexNext - 1].style.backgroundImage;
	}	
	var moveToNextSlide = function(){
		if(currentIndex >= MAX_INDEX - 1){
			currentIndex = -1;
		}
		clearActiveClass();
		currentIndex++;

		headerSlides[currentIndex].classList.add("slider-head__item--current");

		var index = headerSlides[currentIndex].getAttribute("data-index");
		changeIndexNumber(nextIndexElem, prevIndexElem, parseInt(index), MAX_INDEX, 1);
	}

	var moveToPrevSlide = function(){
		if(currentIndex === 0){
			currentIndex = MAX_INDEX;
		}
		clearActiveClass();
		currentIndex--;

		headerSlides[currentIndex].classList.add("slider-head__item--current");

		var index = headerSlides[currentIndex].getAttribute("data-index");
		changeIndexNumber(nextIndexElem, prevIndexElem, parseInt(index), MAX_INDEX, 1);

	}
	btnNext.addEventListener("click", moveToNextSlide);
	btnPrev.addEventListener("click", moveToPrevSlide);
	window.addEventListener("load", function(){
		setInterval(moveToNextSlide, 6000);
	});
})();