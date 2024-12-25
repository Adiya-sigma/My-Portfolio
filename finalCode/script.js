
  
function closeWelcomeModal() {
    const modal = document.getElementById('welcome-modal');
    modal.style.display = 'none';
  }
  
  window.onload = function () {
    const modal = document.getElementById('welcome-modal');
    modal.style.display = 'flex';
  };
  
  function showContent(section) {
    const sections = ['main-content', 'projects-section', 'about-section', 'contact-section'];
    
    // Скрываем все секции
    sections.forEach(sec => {
      document.getElementById(sec).style.display = 'none';
    });
  
    // Показываем выбранную секцию
    document.getElementById(`${section}-section`).style.display = 'block';
  }
  
      function showProjectDetails(title, description, imageSrc) {
        const sections = ['main-content', 'projects-section', 'about-section', 'contact-section'];
        sections.forEach(sec => {
          document.getElementById(sec).classList.remove('active-section');
        });
    };