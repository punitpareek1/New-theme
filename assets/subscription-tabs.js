window.addEventListener('DOMContentLoaded', (event) => {
    const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
    let producttab = document.querySelector('.main-content');
  const productTabs = document.querySelectorAll('.tab button');
  const productTabsContent = document.querySelectorAll('.tab_data');


// Tabbed component

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
  document
    .querySelector(`.tablinks[data-current-active="${clicked.dataset.tab}"]`)
    .classList.add('active');
  document
    .querySelector(`.current-active-content-${clicked.dataset.tab}`)
    .classList.add('active-content');
});

  
  producttab.addEventListener('click', function(e){
  const clicked = e.target.closest('.tab button');

    if(clicked == null) return ;
    
    // Remove active classes
  productTabs.forEach(t => t.classList.remove('active'));
  productTabsContent.forEach(c => c.classList.remove('active-content'));
    
    // Activate tab
  clicked.classList.add('active');
    
    // Activate content area
  document
    .querySelector(`.product-content-tab-${clicked.dataset.tab}`)
    .classList.add('active-content');
    
  });
  
  
  producttab.addEventListener('click', function (e) {
  e.preventDefault();
    let plusBtn = e.target.closest('.icon-plus');
    let minusBtn = e.target.closest('.icon-minus');
    let inputBoxLot = this.querySelector('.operations__content--active .number-input-field input[type="number"]');
      
    if(plusBtn){

        let currentQty = Number(inputBoxLot.value) + 1;
        inputBoxLot.value = currentQty;
      
    }else if(minusBtn){
        inputBoxLot.value = (inputBoxLot.value > 1) ? inputBoxLot.value - 1 : 1;
   }
    
  })
  
//   slide show product
  
  	
//   let slidesAll = document.querySelectorAll('.product-slideshow-pagination a');

//   let nextBtn = document.querySelector('.product-slideshow-next');
//   let prevBtn = document.querySelector('.product-slideshow-previous');
  
  producttab.addEventListener('click', function(e){
  	e.preventDefault();
    let slide = e.target.closest('.operations__content--active .product-slideshow-pagination-item');
    if(slide == null) return;
          let productImage = document.querySelector('.operations__content--active .product-big-image img');
    let currAllSlides = document.querySelectorAll('.operations__content--active .product-slideshow-pagination a');
    currAllSlides.forEach((slide) => slide.classList.remove('active'))
    slide.classList.add('active');
    productImage.src= slide.dataset.highRes;
    
  });
  
  producttab.addEventListener('click', function(e){
  let slides = document.querySelector('.operations__content--active .product-slideshow-pagination');
      let nextBtn = e.target.closest('.operations__content--active .product-slideshow-next');
    if(nextBtn == null) return;
    
    let currAllSlides = document.querySelectorAll('.operations__content--active .product-slideshow-pagination a');
    let productImage = document.querySelector('.operations__content--active .product-big-image img');
    let activeSlide = slides.querySelector('.active');
    let nextIndex = Number(activeSlide.getAttribute('tabindex')) + 1;
    console.log(nextBtn, 'nextBtn', activeSlide, '*************', nextIndex);
    
    if(nextIndex <= currAllSlides.length){
      this.setAttribute('tabindex', nextIndex);
      currAllSlides.forEach((slide) => slide.classList.remove('active'))
      let nextslide = slides.querySelector(`a[tabindex="${nextIndex}"]`);
      nextslide.classList.add('active');
      productImage.src = nextslide.dataset.highRes;
      
    }else {

      this.setAttribute('tabindex', 1);
      currAllSlides.forEach((slide) => slide.classList.remove('active'))
      let nextslide = slides.querySelector(`a[tabindex="${1}"]`);
      nextslide.classList.add('active');
      productImage.src = nextslide.dataset.highRes;

    }
  
  })
  
   producttab.addEventListener('click', function(e){
  let slides = document.querySelector('.operations__content--active .product-slideshow-pagination');
      let prevBtn = e.target.closest('.operations__content--active .product-slideshow-previous');
    if(prevBtn == null) return;
    
    let currAllSlides = document.querySelectorAll('.operations__content--active .product-slideshow-pagination a');
    let productImage = document.querySelector('.operations__content--active .product-big-image img');
    let activeSlide = slides.querySelector('.active');
    let nextIndex = Number(activeSlide.getAttribute('tabindex')) - 1;
    
    if(nextIndex != 0){
      this.setAttribute('tabindex', nextIndex);
      currAllSlides.forEach((slide) => slide.classList.remove('active'))
      let nextslide = slides.querySelector(`a[tabindex="${nextIndex}"]`);
      nextslide.classList.add('active');
      productImage.src = nextslide.dataset.highRes;
      
    }else {
      this.setAttribute('tabindex', currAllSlides.length);
      currAllSlides.forEach((slide) => slide.classList.remove('active'))
      let nextslide = slides.querySelector(`a[tabindex="${currAllSlides.length}"]`);
      nextslide.classList.add('active');
      productImage.src = nextslide.dataset.highRes;

    }
  
  })
  
  
});


