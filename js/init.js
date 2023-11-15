/**
 * Init
 * Author: Taigo Ito (https://qwel.design/)
 * Location: Fukui, Japan
 * @package Miyazakifarm
 */

// ヘッダーとロゴ色の管理
const header = document.querySelector('.--transparent');
if (header) {

  // ロゴを変更
  const logo = document.querySelector('.gNav__siteBrand img');
  if (window.innerWidth >= 1200) {
    logo.setAttribute('src', '/data/uploads//logo_miyazakifarm_white.svg');
  }

  // ヘッダーホバー時、ロゴを変更
  header.addEventListener('mouseover', () => {
    logo.setAttribute('src', '/data/uploads//logo_miyazakifarm.svg');
  });
  header.addEventListener('mouseout', () => {
    if (window.innerWidth >= 1200 && !(window.innerHeight < window.scrollY)) {
      logo.setAttribute('src', '/data/uploads//logo_miyazakifarm_white.svg');
    }
  });

  // スクロールを監視し、ヘッダー色を変更
  window.addEventListener('scroll', () => {
    if (window.innerHeight < window.scrollY) {
      header.classList.remove('--transparent');
      logo.setAttribute('src', '/data/uploads//logo_miyazakifarm.svg');
    } else {
      header.classList.add('--transparent');
      if (window.innerWidth >= 1200) {
        logo.setAttribute('src', '/data/uploads//logo_miyazakifarm_white.svg');
      }
    }
  });
}
