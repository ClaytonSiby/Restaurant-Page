const NavBar = (() => {
  const navigation = () => {
    const content = document.getElementById('content');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const homeListItem = document.createElement('li');
    const menuListItem = document.createElement('li');
    const contactListItem = document.createElement('li');
    const aboutListItem = document.createElement('li');
    const ankorHome = document.createElement('a');
    const ankorMenu = document.createElement('a');
    const ankorContact = document.createElement('a');
    const ankorAbout = document.createElement('a');

    // add class attributes
    nav.classList = 'navbar';
    ul.classList = 'navbar-nav';
    homeListItem.classList = 'nav-item';
    menuListItem.classList = 'nav-item';
    contactListItem.classList = 'nav-item';
    aboutListItem.classList = 'nav-item';
    ankorHome.classList = 'nav-link home';
    ankorMenu.classList = 'nav-link menu';
    ankorContact.classList = 'nav-link contact';
    ankorAbout.classList = 'nav-link about';

    // set textContent on UI elements
    ankorHome.textContent = 'Home';
    ankorMenu.textContent = 'Menu';
    ankorContact.textContent = 'Contact';
    ankorAbout.textContent = 'About';

    // append child elements to parents
    homeListItem.appendChild(ankorHome);
    menuListItem.appendChild(ankorMenu);
    contactListItem.appendChild(ankorContact);
    aboutListItem.appendChild(ankorAbout);
    ul.appendChild(homeListItem);
    ul.appendChild(menuListItem);
    ul.appendChild(contactListItem);
    ul.appendChild(aboutListItem);
    nav.appendChild(ul);
    content.appendChild(nav);
  };

  return { navigation };
})();

export default NavBar;
