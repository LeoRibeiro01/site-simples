document.addEventListener('DOMContentLoaded', (event) => {
  const body = document.body;
  const toggleButton = document.getElementById('toggleButton');

  function toggleColors() {
      if (body.classList.contains('green-background')) {
          body.classList.remove('green-background');
          body.classList.add('black-background');
      } else {
          body.classList.remove('black-background');
          body.classList.add('green-background');
      }
  }

  toggleButton.addEventListener('click', toggleColors);
});
