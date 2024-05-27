const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('change', () => {
  if(toggleButton.checked){
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
  }
  else{
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
  }
});