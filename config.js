// config.js

document.getElementById('save-config').addEventListener('click', function() {
    const bgColor = document.getElementById('bg-color').value;
    const textColor = document.getElementById('text-color').value;
  
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = textColor;
  
    localStorage.setItem('bgColor', bgColor);
    localStorage.setItem('textColor', textColor);
  });
  
  // Cargar colores guardados al iniciar
  document.addEventListener('DOMContentLoaded', function() {
    const savedBgColor = localStorage.getItem('bgColor');
    const savedTextColor = localStorage.getItem('textColor');
  
    if (savedBgColor) {
      document.body.style.backgroundColor = savedBgColor;
    }
  
    if (savedTextColor) {
      document.body.style.color = savedTextColor;
    }
  });
  