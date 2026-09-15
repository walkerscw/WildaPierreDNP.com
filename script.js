'use strict';
const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());
const menu = document.querySelector('.menu-toggle');
const navigation = document.getElementById('navigation');
if (menu && navigation) {
  menu.hidden = false;
  navigation.dataset.collapsible = 'true';
  const closeMenu = () => { navigation.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); };
  menu.addEventListener('click', () => { const open = navigation.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && navigation.classList.contains('open')) { closeMenu(); menu.focus(); } });
}
