window.addEventListener('DOMContentLoaded', () => {
  // スクロール後にヘッダーの背景と文字色を切り替える
  const header = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.backgroundColor = 'rgba(245, 245, 245, 0.88)';
      header.style.backdropFilter = 'blur(5px)';
      document.querySelectorAll('.nav a, .lang').forEach(el => {
        el.style.color = '#333';
      });
    } else {
      header.style.backgroundColor = 'transparent';
      header.style.backdropFilter = 'none';
      document.querySelectorAll('.nav a, .lang').forEach(el => {
        el.style.color = '#fff';
      });
    }
  });
});