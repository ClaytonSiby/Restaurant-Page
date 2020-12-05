import NavBar from './modules/navbar';
import Home from './modules/home';
import Contact from './modules/contact';
import Menu from './modules/menu';
import ModifyPages from './modules/modifypages';

const displayHome = () => {
  ModifyPages.clearPage();
  Home.displayHomepage();
  ModifyPages.homeActive();
}

const displayMenu = () => {
  ModifyPages.clearPage();
  Menu.menuListing();
  ModifyPages.menuActive();
}

const displayContact = () => {
  ModifyPages.clearPage();
  Contact.contactPage();
  ModifyPages.contactActive();
}


NavBar.navigation();
Home.displayHomepage();

// select all nav-list items
const home = document.querySelector('#home');
const menu = document.querySelector('#menu');
const contact = document.querySelector('#contact');

home.addEventListener('click', () => {
  displayHome();
});

menu.addEventListener('click', () => {
  displayMenu();
});

contact.addEventListener('click', () => {
  displayContact();
});

