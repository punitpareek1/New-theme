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

});


