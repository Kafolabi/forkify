export const toggleSelector = '#themeToggle';
export const icon = '.fa-sun';
export const image = '.header__logo';
export const lightLogo = new URL('../../img/logo.png', import.meta.url).href; // Update to use lightLogo
export const darkLogo = new URL('../../img/forkify-light.png', import.meta.url)
  .href;

export default class ThemeToggle {
  constructor(toggleSelector) {
    this.toggle = document.querySelector(toggleSelector);
    this.body = document.body;
    this.icon = document.querySelector(icon);
    this.image = document.querySelector(image);

    this.init();
  }

  init() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    this.body.setAttribute('data-theme', savedTheme);
    this.toggle.checked = savedTheme === 'dark';
    if (savedTheme === 'dark') {
      this.icon.classList.add('i__left', 'fa-sun');
      this.icon.classList.remove('i__right', 'fa-moon');
      this.image.src = darkLogo; // Update to use darkLogo
    } else {
      this.icon.classList.add('i__right', 'fa-moon');
      this.icon.classList.remove('i__left', 'fa-sun');
      this.image.src = lightLogo; // Update to use lightLogo
    }
    console.log(this.icon.classList);

    this.toggle.addEventListener('change', this.handleToggle.bind(this));
  }

  handleToggle() {
    const theme = this.toggle.checked ? 'dark' : 'light';
    if (this.icon) {
      if (theme === 'dark') {
        this.icon.classList.add('i__left', 'fa-sun');
        this.icon.classList.remove('i__right', 'fa-moon');
        this.image.src = darkLogo; // Update to use darkLogo
      } else {
        this.icon.classList.add('i__right', 'fa-moon');
        this.icon.classList.remove('i__left', 'fa-sun');
        this.image.src = lightLogo; // Update to use lightLogo
      }
    }
    console.log(this.icon.classList);

    this.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
}
