const Menu = (() => {

  const menuListing = () => {
    let content = document.getElementById('content');
    let main = document.createElement('div');
    let h1 = document.createElement('h1');
  
    main.appendChild(h1);
    content.appendChild(main);
  };

  return { menuListing };
})();

export default Menu;
