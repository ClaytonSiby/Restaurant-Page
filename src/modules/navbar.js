const NavBar = (() => {
  const navigation = () => {
    const content = document.getElementById('content');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const homeListItem = document.createElement('li');
    const menuListItem = document.createElement('li');
    const contactListItem = document.createElement('li');
    const ankorHome = document.createElement('a');
    const ankorMenu = document.createElement('a');
    const ankorContact = document.createElement('a');

    // add class attributes
    nav.classList = 'navbar';
    ul.classList = 'navbar-nav';
    homeListItem.classList = 'nav-item';
    menuListItem.classList = 'nav-item';
    contactListItem.classList = 'nav-item';
    ankorHome.classList = 'nav-link active';
    ankorHome.setAttribute('id', 'home');
    ankorMenu.classList = 'nav-link';
    ankorMenu.setAttribute('id', 'menu');
    ankorContact.classList = 'nav-link';
    ankorContact.setAttribute('id', 'contact');

    // set textContent on UI elements
    ankorHome.textContent = 'Home';
    ankorMenu.textContent = 'Menu';
    ankorContact.textContent = 'Contact';

    // append child elements to parents
    homeListItem.appendChild(ankorHome);
    menuListItem.appendChild(ankorMenu);
    contactListItem.appendChild(ankorContact);
    ul.appendChild(homeListItem);
    ul.appendChild(menuListItem);
    ul.appendChild(contactListItem);
    nav.appendChild(ul);
    content.appendChild(nav);
  };

  return { navigation };
})();

export default NavBar;
