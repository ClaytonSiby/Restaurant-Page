const Home = (() => {

  const displayHomepage = () => {
    // query elements from the DOM
    let content = document.getElementById('content');

    // create new DOM elements
    let heroSection = document.createElement('section');
    let heroHeader = document.createElement('header');
    let headerTitle = document.createElement('h1');
    let heroSectionDescription = document.createElement('div');
    let descriptionText = document.createElement('h4');
    let seeMenuBtn = document.createElement('button');

    // add class attributes
    heroSection.classList = "hero-section";
    heroHeader.classList = "hero-header";
    heroSectionDescription.classList = "hero-description";
    seeMenuBtn.classList = "btn btn-success";

    // assign textContent to elements
    headerTitle.textContent = 'SibyRestaurant';
    descriptionText.textContent = 'Get a true gastronomic experience!'
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
