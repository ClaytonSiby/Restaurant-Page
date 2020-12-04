const Menu = (() => {

  const menuListing = () => {
    // create DOM elements
    const content = document.getElementById('content');
    const main = document.createElement('div');
    const mainHeader = document.createElement('header');
    const mainBody = document.createElement('section');
    const h1 = document.createElement('h1');

    const item1 = document.createElement('div');
    const titleForItem1 = document.createElement('p');
    const imageForItem1 = document.createElement('div');
    const priceForItem1 = document.createElement('p');
    const buttonForItem1 = document.createElement('button');

    const item2 = document.createElement('div');
    const titleForItem2 = document.createElement('p');
    const imageForItem2 = document.createElement('div');
    const priceForItem2 = document.createElement('p');
    const buttonForItem2 = document.createElement('button');

    const item3 = document.createElement('div');
    const titleForItem3 = document.createElement('p');
    const imageForItem3 = document.createElement('div');
    const priceForItem3 = document.createElement('p');
    const buttonForItem3 = document.createElement('button');

    const item4 = document.createElement('div');
    const titleForItem4 = document.createElement('p');
    const imageForItem4 = document.createElement('div');
    const priceForItem4 = document.createElement('p');
    const buttonForItem4 = document.createElement('button');

    const item5 = document.createElement('div');
    const titleForItem5 = document.createElement('p');
    const imageForItem5 = document.createElement('div');
    const priceForItem5 = document.createElement('p');
    const buttonForItem5 = document.createElement('button');

    const item6 = document.createElement('div');
    const titleForItem6 = document.createElement('p');
    const imageForItem6 = document.createElement('div');
    const priceForItem6 = document.createElement('p');
    const buttonForItem6 = document.createElement('button');

    // assigning class attributes to UI elements
    main.classList = "menu-wrapper";
    mainHeader.classList = "menu-header";
    mainBody.classList = "menu-section";
    h1.classList = "header-menu-title";

    item1.classList = "menu-item";
    titleForItem1.classList = "menu-item-title";
    imageForItem1.classList = "menu-item-image item-1-image";
    priceForItem1.classList = "menu-item-price";
    buttonForItem1.classList = "menu-item-button";

    item2.classList = "menu-item";
    titleForItem2.classList = "menu-item-title";
    imageForItem2.classList = "menu-item-image item-2-image";
    priceForItem2.classList = "menu-item-price";
    buttonForItem2.classList = "menu-item-button";

    item3.classList = "menu-item";
    titleForItem3.classList = "menu-item-title";
    imageForItem3.classList = "menu-item-image item-3-image";
    priceForItem3.classList = "menu-item-price";
    buttonForItem3.classList = "menu-item-button";

    item4.classList = "menu-item";
    titleForItem4.classList = "menu-item-title";
    imageForItem4.classList = "menu-item-image item-4-image";
    priceForItem4.classList = "menu-item-price";
    buttonForItem4.classList = "menu-item-button";

    item5.classList = "menu-item";
    titleForItem5.classList = "menu-item-title";
    imageForItem5.classList = "menu-item-image item-5-image";
    priceForItem5.classList = "menu-item-price";
    buttonForItem5.classList = "menu-item-button";

    item6.classList = "menu-item";
    titleForItem6.classList = "menu-item-title";
    imageForItem6.classList = "menu-item-image item-6-image";
    priceForItem6.classList = "menu-item-price";
    buttonForItem6.classList = "menu-item-button";

    // assigning textContent for the title of each menu-item
    titleForItem1.textContent = "Omelette with morcilla";
    titleForItem2.textContent = "Shrimp brochette";
    titleForItem3.textContent = "Grilled Cheese with tomato";
    titleForItem4.textContent = "Tapas of Cheese and Peppers";
    titleForItem5.textContent = "Random Mixed Tapas";
    titleForItem6.textContent = "Tankard of smoked scratchings";
    h1.textContent = "Our Restaurant Menu";

    priceForItem1.textContent = "$ 3,50";
    priceForItem2.textContent = "$ 7,00";
    priceForItem3.textContent = "$ 6,00";
    priceForItem4.textContent = "$ 4,00";
    priceForItem5.textContent = "$ 3,20";
    priceForItem6.textContent = "$ 9,00";

    buttonForItem1.textContent = "Place Order";
    buttonForItem2.textContent = "Place Order";
    buttonForItem3.textContent = "Place Order";
    buttonForItem4.textContent = "Place Order";
    buttonForItem5.textContent = "Place Order";
    buttonForItem6.textContent = "Place Order";

    // appending child elements to their corresponding parent elements
    item1.appendChild(imageForItem1);
    item1.appendChild(titleForItem1);
    item1.appendChild(priceForItem1);
    item1.appendChild(buttonForItem1);

    item2.appendChild(imageForItem2);
    item2.appendChild(titleForItem2);
    item2.appendChild(priceForItem2);
    item2.appendChild(buttonForItem2);

    item3.appendChild(imageForItem3);
    item3.appendChild(titleForItem3);
    item3.appendChild(priceForItem3);
    item3.appendChild(buttonForItem3);

    item4.appendChild(imageForItem4);
    item4.appendChild(titleForItem4);
    item4.appendChild(priceForItem4);
    item4.appendChild(buttonForItem4);

    item5.appendChild(imageForItem5);
    item5.appendChild(titleForItem5);
    item5.appendChild(priceForItem5);
    item5.appendChild(buttonForItem5);

    item6.appendChild(imageForItem6);
    item6.appendChild(titleForItem6);
    item6.appendChild(priceForItem6);
    item6.appendChild(buttonForItem6);

    mainBody.appendChild(item1);
    mainBody.appendChild(item2);
    mainBody.appendChild(item3);
    mainBody.appendChild(item4);
    mainBody.appendChild(item5);
    mainBody.appendChild(item6);
  
    mainHeader.appendChild(h1);
    main.appendChild(mainHeader);
    main.appendChild(mainBody);
    content.appendChild(main);
  };

  return { menuListing };
})();

export default Menu;
