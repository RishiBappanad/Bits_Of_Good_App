// script.js
document.getElementById('togglePassion').addEventListener('click', () => {
    const passion = document.querySelector('.card p:nth-child(4)');
    if (passion.style.display === 'none') {
      passion.style.display = 'block';
    } else {
      passion.style.display = 'none';
    }
  });
  
