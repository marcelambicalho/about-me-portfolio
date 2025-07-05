// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the buttons
  const hobbiesBtn = document.querySelector('.hobbies-button');
  const interestsBtn = document.querySelector('.interests-button');

  // Toggle function for hobbies
  hobbiesBtn.addEventListener('click', function() {
    const hobParagraphs = document.querySelectorAll('.hob-p');
    hobParagraphs.forEach(p => {
      if (p.style.display === 'block') {
        p.style.display = 'none';
      } else {
        p.style.display = 'block';
      }
    });
  });

  // Toggle function for interests
  interestsBtn.addEventListener('click', function() {
    const intParagraphs = document.querySelectorAll('.int-p');
    intParagraphs.forEach(p => {
      if (p.style.display === 'block') {
        p.style.display = 'none';
      } else {
        p.style.display = 'block';
      }
    });
  });
});



