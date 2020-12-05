import { NavBar } from './modules/navbar';
import { Home } from './modules/home';
import { Contact } from './modules/contact';
import { Menu } from './modules/menu';
import { ModifyPages } from './modules/modify';

document.addEventListener('DOMContentLoaded', (event) => {
    NavBar.navigation();
    Home.displayHomepage();
});
