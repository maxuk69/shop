function openCatalog() {
    document.getElementById("xernya").classList.toggle('active')
}

function openPudcatalog() {
    document.getElementById("pudcatalog").classList.toggle('active')
}


const swiper = new Swiper('.swiper-container', {
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

