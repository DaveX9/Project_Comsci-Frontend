const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', function() {
        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
});
//----------------------------------------
  const openModalButton = document.getElementById('openModalButton');
  const closeModalButton = document.getElementById('closeModalButton');
  const cookieModal = document.getElementById('cookieModal');
  const acceptCookiesButton = document.getElementById('acceptCookiesButton');
  const closeModal = document.getElementById('closeModal');
  const saveSettings = document.getElementById('saveSettings');

  openModalButton.addEventListener('click', function() {
      cookieModal.style.display = 'block';
  });

  closeModalButton.addEventListener('click', function() {
      cookieModal.style.display = 'none';
  });

  closeModal.addEventListener('click', function() {
      cookieModal.style.display = 'none';
  });

  saveSettings.addEventListener('click', function() {
      cookieModal.style.display = 'none';
  });

  acceptCookiesButton.addEventListener('click', function() {
      alert('คุกกี้ทั้งหมดถูกยอมรับ');
      document.querySelector('.cookie-banner').style.display = 'none';
  });