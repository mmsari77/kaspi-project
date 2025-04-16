const photoInput = document.getElementById('photoInput');
const preview = document.getElementById('preview');

photoInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            preview.src = event.target.result;
        }
        reader.readAsDataURL(file);
    }
});
const removeH1Button = document.getElementById('photoInput');
const h1Element = document.getElementById('knopka');

removeH1Button.addEventListener('click', function() {
    if (h1Element) {
        h1Element.remove();
    }
});
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/src/Js/service-worker.js')
      .then(() => console.log('Service Worker зарегистрирован!'))
      .catch(err => console.error('Ошибка регистрации Service Worker:', err));
  }
  