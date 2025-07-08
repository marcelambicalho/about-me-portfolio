document.addEventListener('DOMContentLoaded', function() {
  // Get the buttons
  const hobbiesBtn = document.querySelector('.hobbies-button');
  const interestsBtn = document.querySelector('.interests-button');

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



