function checkZoomLevel() {
    const zoomLevel = window.devicePixelRatio;
    const header = document.querySelector('header');
    
    if (zoomLevel === 1) {
      header.style.position = 'fixed';  // Fix the header when zoom level is 100%
    } else {
      header.style.position = 'static'; // Make the header static when zooming in/out
    }
  }
  
  // Check zoom level on page load
  checkZoomLevel();
  
  // Check zoom level when the window is resized (since zooming often triggers resize)
  window.addEventListener('resize', checkZoomLevel);
  