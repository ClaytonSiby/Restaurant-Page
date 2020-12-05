const ModifyPages = (() => {
  const addActiveClass = (listItem) => {
    listItem.classList.add('active');
  };

  const removeActiveClass = (listItem) => {
    listItem.classList.remove('active');
  };

  const clearPage = () => {
    const content = document.getElementById('content');
    const listItems = document.querySelectorAll('li');

    content.removeChild(content.lastChild);

    listItems.forEach(item => removeActiveClass(item));
  };

  const homeActive = () => {
    const home = document.querySelector('.home');

    addActiveClass(home);
  };

  const menuActive = () => {
    const menu = document.querySelector('.menu');

    addActiveClass(menu);
  };

  const contactActive = () => {
    const contact = document.querySelector('.contact');

    addActiveClass(contact);
  };

  return {
    homeActive, menuActive, contactActive, clearPage,
  };
})();

export default ModifyPages;
