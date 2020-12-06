const Home = (() => {
  const displayHomepage = () => {
    // query elements from the DOM
    const content = document.getElementById('content');

    // create new DOM elements
    const heroSection = document.createElement('section');
    const heroHeader = document.createElement('header');
    const headerTitle = document.createElement('h1');
    const heroSectionDescription = document.createElement('div');
    const descriptionText = document.createElement('h4');
    const seeMenuBtn = document.createElement('button');

    // add class attributes
    heroSection.classList = 'hero-section';
    heroHeader.classList = 'hero-header';
    heroSectionDescription.classList = 'hero-description';
    seeMenuBtn.classList = 'btn btn-success';
    seeMenuBtn.setAttribute('id','view-menu');

    // assign textContent to elements
    headerTitle.textContent = 'SibyRestaurant';
    descriptionText.textContent = 'Get a true gastronomic experience!';
    seeMenuBtn.textContent = 'View Menu';

    // append children to parent elements
    heroHeader.appendChild(headerTitle);
    heroSection.appendChild(heroHeader);
    heroSectionDescription.appendChild(descriptionText);
    heroSectionDescription.appendChild(seeMenuBtn);
    heroSection.appendChild(heroSectionDescription);
    content.appendChild(heroSection);
  };

  return { displayHomepage };
})();

export default Home;
