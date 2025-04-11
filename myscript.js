function getUkrainianMonth(monthNumber) {
  const months = [
      'січ.', 'лют.', 'бер.', 'квіт.', 'трав.', 'черв.',
      'лип.', 'серп.', 'вер.', 'жовт.', 'лист.', 'груд.'
  ];
  return months[monthNumber];
}

function clock() {
  let date = new Date();
  let targetTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1, 5, 0, 0);
  let timeDiff = targetTime - date;
  
  let remainingHours = Math.floor(timeDiff / (1000 * 60 * 60));
  let remainingMinutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  let remainingSeconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  remainingHours = (remainingHours < 10) ? '0' + remainingHours : remainingHours;
  remainingMinutes = (remainingMinutes < 10) ? '0' + remainingMinutes : remainingMinutes;
  remainingSeconds = (remainingSeconds < 10) ? '0' + remainingSeconds : remainingSeconds;

  document.getElementById('clock').innerHTML = remainingHours + ':' + remainingMinutes + ':' + remainingSeconds;
  document.getElementById('month').innerHTML = date.getDate() + ' ' + getUkrainianMonth(date.getMonth()) + ' ' + date.getFullYear() + ' р.';
  document.getElementById('strok').innerHTML = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear() + ' - ' + date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
}
setInterval(clock, 1000);
clock();

document.addEventListener('DOMContentLoaded', function () {
  // Перевірка, чи існують дані про відео в Local Storage
  if (localStorage.getItem('videoData')) {
    // Якщо так, встановіть ці дані в src відео-елемента
    console.log('Відео існує у local storage');
    document.getElementById('myVideo').src = URL.createObjectURL(localStorage.getItem('videoData'));
  }

  function updateViewportSizes() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const browserViewportWidth = document.documentElement.clientWidth;
    const browserViewportHeight = document.documentElement.clientHeight;

    const viewportSize = document.getElementById('viewportSize');
    const browser = document.getElementById('browserViewportSize')
    viewportSize.textContent = `${viewportWidth} x ${viewportHeight}`;
    browser.textContent = `${browserViewportWidth} x ${browserViewportHeight}`;
  }

  // updateViewportSizes();
  // window.addEventListener('resize', updateViewportSizes);

  function toggleFullScreen() {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { // Firefox
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
      document.documentElement.msRequestFullscreen();
    }
  }


});

// Завантаження відео і збереження його в Local Storage
document.getElementById('myVideo').addEventListener('loadeddata', function () {
  // Збережіть файл в Local Storage
  var blob = new Blob([new Uint8Array(localStorage.getItem('videoData'))], { type: 'video/mp4' });
  localStorage.setItem('videoBlob', blob);
});

