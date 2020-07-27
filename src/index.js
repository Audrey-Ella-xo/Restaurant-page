import './style.css';
import homePage from './home';
import contactpage from './contact';
import menuPage from './menu';

const header = () => {
  const topContainer = document.createElement('div');
  const logo = document.createElement('h1');
  logo.innerText = "Ella's Diner";
  topContainer.appendChild(logo);

  const navBar = document.createElement('nav');
  navBar.innerHTML = `
    <nav>
      <ul class="navigation">
          <li class="nav-item" id="home">Home</li>
          <li class="nav-item" id="menu">Menu</li>
          <li class="nav-item" id="contact">Contact</li>
      </ul>
    </nav>
  `;
  topContainer.appendChild(navBar);

  document.body.appendChild(topContainer);
};

header();

function render() {
  homePage();
  contactpage();
  menuPage();

  const menu = document.getElementById('menu');
  const home = document.getElementById('home');
  const contact = document.getElementById('contact');
  const homeContent = document.getElementById('homeContent');
  const menuContent = document.getElementById('menuContent');
  const contactContent = document.getElementById('contactContent');

  home.addEventListener('click', () => {
    homeContent.style.display = 'block';
    contactContent.style.display = 'none';
    menuContent.style.display = 'none';
  });

  contact.addEventListener('click', () => {
    homeContent.style.display = 'none';
    contactContent.style.display = 'block';
    menuContent.style.display = 'none';
  });

  menu.addEventListener('click', () => {
    homeContent.style.display = 'none';
    contactContent.style.display = 'none';
    menuContent.style.display = 'block';
  });
}

window.onload = render();