const Menu = (() => {
  const menuListing = () => {
    // create DOM elements
    const content = document.getElementById('content');
    const main = document.createElement('div');
    const mainHeader = document.createElement('header');
    const mainBody = document.createElement('section');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    const item1 = document.createElement('div');
    const menuItem1Top = document.createElement('div');
    const menuItem1Bottom = document.createElement('div');
    const titleForItem1 = document.createElement('p');
    const imageForItem1 = document.createElement('div');
    const priceForItem1 = document.createElement('p');
    const buttonForItem1 = document.createElement('button');

    const item2 = document.createElement('div');
    const menuItem2Top = document.createElement('div');
    const menuItem2Bottom = document.createElement('div');
    const titleForItem2 = document.createElement('p');
    const imageForItem2 = document.createElement('div');
    const priceForItem2 = document.createElement('p');
    const buttonForItem2 = document.createElement('button');

    const item3 = document.createElement('div');
    const menuItem3Top = document.createElement('div');
    const menuItem3Bottom = document.createElement('div');
    const titleForItem3 = document.createElement('p');
    const imageForItem3 = document.createElement('div');
    const priceForItem3 = document.createElement('p');
    const buttonForItem3 = document.createElement('button');

    const item4 = document.createElement('div');
    const menuItem4Top = document.createElement('div');
    const menuItem4Bottom = document.createElement('div');
    const titleForItem4 = document.createElement('p');
    const imageForItem4 = document.createElement('div');
    const priceForItem4 = document.createElement('p');
    const buttonForItem4 = document.createElement('button');

    const item5 = document.createElement('div');
    const menuItem5Top = document.createElement('div');
    const menuItem5Bottom = document.createElement('div');
    const titleForItem5 = document.createElement('p');
    const imageForItem5 = document.createElement('div');
    const priceForItem5 = document.createElement('p');
    const buttonForItem5 = document.createElement('button');

    const item6 = document.createElement('div');
    const menuItem6Top = document.createElement('div');
    const menuItem6Bottom = document.createElement('div');
    const titleForItem6 = document.createElement('p');
    const imageForItem6 = document.createElement('div');
    const priceForItem6 = document.createElement('p');
    const buttonForItem6 = document.createElement('button');

    // assigning class attributes to UI elements
    main.classList = 'menu-wrapper';
    mainHeader.classList = 'menu-header';
    mainBody.classList = 'menu-section';
    h1.classList = 'header-menu-title';
    p.classList = 'header-menu-text';

    item1.classList = 'menu-item';
    menuItem1Top.classList = 'menu-item-top';
    menuItem1Bottom.classList = 'menu-item-bottom';
    titleForItem1.classList = 'menu-item-title';
    imageForItem1.classList = 'menu-item-image item-1-image';
    priceForItem1.classList = 'menu-item-price';
    buttonForItem1.classList = 'menu-item-button btn btn-success';

    item2.classList = 'menu-item';
    menuItem2Top.classList = 'menu-item-top';
    menuItem2Bottom.classList = 'menu-item-bottom';
    titleForItem2.classList = 'menu-item-title';
    imageForItem2.classList = 'menu-item-image item-2-image';
    priceForItem2.classList = 'menu-item-price';
    buttonForItem2.classList = 'menu-item-button btn btn-success';

    item3.classList = 'menu-item';
    menuItem3Top.classList = 'menu-item-top';
    menuItem3Bottom.classList = 'menu-item-bottom';
    titleForItem3.classList = 'menu-item-title';
    imageForItem3.classList = 'menu-item-image item-3-image';
    priceForItem3.classList = 'menu-item-price';
    buttonForItem3.classList = 'menu-item-button btn btn-success';

    item4.classList = 'menu-item';
    menuItem4Top.classList = 'menu-item-top';
    menuItem4Bottom.classList = 'menu-item-bottom';
    titleForItem4.classList = 'menu-item-title';
    imageForItem4.classList = 'menu-item-image item-4-image';
    priceForItem4.classList = 'menu-item-price';
    buttonForItem4.classList = 'menu-item-button btn btn-success';

    item5.classList = 'menu-item';
    menuItem5Top.classList = 'menu-item-top';
    menuItem5Bottom.classList = 'menu-item-bottom';
    titleForItem5.classList = 'menu-item-title';
    imageForItem5.classList = 'menu-item-image item-5-image';
    priceForItem5.classList = 'menu-item-price';
    buttonForItem5.classList = 'menu-item-button btn btn-success';

    item6.classList = 'menu-item';
    menuItem6Top.classList = 'menu-item-top';
    menuItem6Bottom.classList = 'menu-item-bottom';
    titleForItem6.classList = 'menu-item-title';
    imageForItem6.classList = 'menu-item-image item-6-image';
    priceForItem6.classList = 'menu-item-price';
    buttonForItem6.classList = 'menu-item-button btn btn-success';

    // assigning textContent for the title of each menu-item
    titleForItem1.textContent = 'Omelette with morcilla';
    titleForItem2.textContent = 'Shrimp brochette';
    titleForItem3.textContent = 'Grilled Cheese with tomato';
    titleForItem4.textContent = 'Tapas of Cheese and Peppers';
    titleForItem5.textContent = 'Random Mixed Tapas';
    titleForItem6.textContent = 'Tankard of smoked scratchings';
    h1.textContent = 'Our Restaurant Menu';
    p.textContent = 'Share a meal with the ones you love!';

    priceForItem1.textContent = '$ 3,50';
    priceForItem2.textContent = '$ 7,00';
    priceForItem3.textContent = '$ 6,00';
    priceForItem4.textContent = '$ 4,00';
    priceForItem5.textContent = '$ 3,20';
    priceForItem6.textContent = '$ 9,00';

    buttonForItem1.textContent = 'Place Order';
    buttonForItem2.textContent = 'Place Order';
    buttonForItem3.textContent = 'Place Order';
    buttonForItem4.textContent = 'Place Order';
    buttonForItem5.textContent = 'Place Order';
    buttonForItem6.textContent = 'Place Order';

    // appending child elements to their corresponding parent elements
    menuItem1Top.appendChild(imageForItem1);
    menuItem1Bottom.appendChild(titleForItem1);
    menuItem1Bottom.appendChild(priceForItem1);
    menuItem1Bottom.appendChild(buttonForItem1);
    item1.appendChild(menuItem1Top);
    item1.appendChild(menuItem1Bottom);

    menuItem2Top.appendChild(imageForItem2);
    menuItem2Bottom.appendChild(titleForItem2);
    menuItem2Bottom.appendChild(priceForItem2);
    menuItem2Bottom.appendChild(buttonForItem2);
    item2.appendChild(menuItem2Top);
    item2.appendChild(menuItem2Bottom);

    menuItem3Top.appendChild(imageForItem3);
    menuItem3Bottom.appendChild(titleForItem3);
    menuItem3Bottom.appendChild(priceForItem3);
    menuItem3Bottom.appendChild(buttonForItem3);
    item3.appendChild(menuItem3Top);
    item3.appendChild(menuItem3Bottom);

    menuItem4Top.appendChild(imageForItem4);
    menuItem4Bottom.appendChild(titleForItem4);
    menuItem4Bottom.appendChild(priceForItem4);
    menuItem4Bottom.appendChild(buttonForItem4);
    item4.appendChild(menuItem4Top);
    item4.appendChild(menuItem4Bottom);

    menuItem5Top.appendChild(imageForItem5);
    menuItem5Bottom.appendChild(titleForItem5);
    menuItem5Bottom.appendChild(priceForItem5);
    menuItem5Bottom.appendChild(buttonForItem5);
    item5.appendChild(menuItem5Top);
    item5.appendChild(menuItem5Bottom);

    menuItem6Top.appendChild(imageForItem6);
    menuItem6Bottom.appendChild(titleForItem6);
    menuItem6Bottom.appendChild(priceForItem6);
    menuItem6Bottom.appendChild(buttonForItem6);
    item6.appendChild(menuItem6Top);
    item6.appendChild(menuItem6Bottom);

    mainBody.appendChild(item1);
    mainBody.appendChild(item2);
    mainBody.appendChild(item3);
    mainBody.appendChild(item4);
    mainBody.appendChild(item5);
    mainBody.appendChild(item6);

    mainHeader.appendChild(h1);
    mainHeader.appendChild(p);
    main.appendChild(mainHeader);
    main.appendChild(mainBody);
    content.appendChild(main);
  };

  return { menuListing };
})();

export default Menu;
