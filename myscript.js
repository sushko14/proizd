function clock() {
  let date = new Date(),
    year = date.getFullYear(),
    month = ((date.getMonth() + 1) < 10) ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1),
    day = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate(),
    hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
    minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
    seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
  // document.getElementById('time').innerHTML = hours + ':' + minutes;
  document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds;
  document.getElementById('month').innerHTML = day + '.' + month;
  document.getElementById('strok').innerHTML = day + '.' + month + '.' + year + ' - ' + day + '.' + month + '.' + year;
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

