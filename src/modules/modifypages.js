const ModifyPages = (() => {
  const addActiveClass = (listItem) => {
    listItem.classList.add('active');
  };

  const removeActiveClass = (listItem) => {
    listItem.classList.remove('active');
  };

  const clearPage = () => {
    const content = document.getElementById('content');

    content.removeChild(content.lastChild);
  };

  const homeActive = () => {
    const menu = document.querySelector('#menu');
    const home = document.querySelector('#home');
    const contact = document.querySelector('#contact');

    removeActiveClass(menu);
    removeActiveClass(contact);
    addActiveClass(home);
  };

  const menuActive = () => {
    const menu = document.querySelector('#menu');
    const home = document.querySelector('#home');
    const contact = document.querySelector('#contact');

    removeActiveClass(home);
    removeActiveClass(contact);
    addActiveClass(menu);
  };

  const contactActive = () => {
    const contact = document.querySelector('#contact');
    const menu = document.querySelector('#menu');
    const home = document.querySelector('#home');

    removeActiveClass(home);
    removeActiveClass(menu);
    addActiveClass(contact);
  };

  return {
    homeActive, menuActive, contactActive, clearPage,
  };
})();

export default ModifyPages;
