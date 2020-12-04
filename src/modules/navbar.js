const NavBar = (() => {

    const navigation = () => {
        let content = document.getElementById('content');
        let nav = document.createElement('nav');
        let ul = document.createElement('ul');
        let homeListItem = document.createElement('li');
        let menuListItem = document.createElement('li');
        let contactListItem = document.createElement('li');
        let aboutListItem = document.createElement('li');
        let ankorHome = document.createElement('a');
        let ankorMenu = document.createElement('a');
        let ankorContact = document.createElement('a');
        let ankorAbout = document.createElement('a');
      
        // add class attributes
        nav.classList = "navbar";
        ul.classList = "navbar-nav";
        homeListItem.classList = "nav-item";
        menuListItem.classList = "nav-item";
        contactListItem.classList = "nav-item";
        aboutListItem.classList = "nav-item";
        ankorHome.classList = "nav-link home";
        ankorMenu.classList = "nav-link menu";
        ankorContact.classList = "nav-link contact";
        ankorAbout.classList = "nav-link about";
      
        // set textContent on UI elements
        ankorHome.textContent = "Home";
        ankorMenu.textContent = "Menu";
        ankorContact.textContent = "Contact";
        ankorAbout.textContent = "About";

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
