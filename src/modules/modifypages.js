const ModifyPages = (() => {

  const addActiveClass = (listItem) => {
    listItem.classList.add('active');
  }
    
  const removeActiveClass = (listItem) => {
    listItem.classList.remove('active');
  }

  const clearPage = () => {
    let content = document.getElementById('content');
    let listItems = document.querySelectorAll('li');

    content.removeChild(content.lastChild);

    listItems.forEach(item => removeActiveClass(item));
  }

  const homeActive = () => {
    let home = document.querySelector('.home');

    addActiveClass(home);
  }

  const menuActive = () => {
    let menu = document.querySelector('.menu');

    addActiveClass(menu);
  }

  const contactActive = () => {
    let contact = document.querySelector('.contact');

    addActiveClass(contact);
  }

  return { homeActive, menuActive, contactActive, clearPage };

})();

export default ModifyPages;
