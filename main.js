function openCatalog() {
    document.getElementById("xernya").classList.toggle('active')
}

function openPudcatalog() {
    document.getElementById("pudcatalog").classList.toggle('active')
}

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    a11y: {
        paginationBulletMessage: 'Текст {{index}}'
    }
  });