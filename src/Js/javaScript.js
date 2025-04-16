// Переключение вкладок
const documentsTab = document.getElementById('documents-tab');
const requisitesTab = document.getElementById('requisites-tab');
const documentsBtn = document.getElementById('text1');
const requisitesBtn = document.getElementById('text2');

// По умолчанию активна вкладка "Документы"
documentsTab.classList.add('active');
documentsBtn.classList.add('active');

documentsBtn.addEventListener('click', () => {
  documentsTab.classList.add('active');
  requisitesTab.classList.remove('active');
  documentsBtn.classList.add('active');
  requisitesBtn.classList.remove('active');
});

requisitesBtn.addEventListener('click', () => {
  requisitesTab.classList.add('active');
  documentsTab.classList.remove('active');
  requisitesBtn.classList.add('active');
  documentsBtn.classList.remove('active');
});

// Обработка загрузки фото
const photoInput = document.getElementById('photoInput');
const preview = document.getElementById('preview');

photoInput.addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      preview.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Удаление кнопки "Выбрать фото" при клике на input
const removeH1Button = document.getElementById('photoInput');
const h1Element = document.getElementById('knopka');

removeH1Button.addEventListener('click', function() {
  if (h1Element) {
    h1Element.remove();
  }
});

// Регистрация Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/src/Js/service-worker.js')
    .then(() => console.log('Service Worker зарегистрирован!'))
    .catch(err => console.error('Ошибка регистрации Service Worker:', err));
}

// Предотвращение прокрутки
window.addEventListener('scroll', (e) => {
  e.preventDefault();
  window.scrollTo(0, 0); /* Всегда держит страницу вверху */
});