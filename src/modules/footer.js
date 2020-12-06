const Footer = (() => {
    const theFooter = () => {
      const content = document.getElementById('content');
      const footer = document.createElement('footer');
      const rightFooter = document.createElement('div');
      const leftFooter = document.createElement('div');
      const midFooter = document.createElement('div');
      const logo = document.createElement('p');
      const allRightsReserved = document.createElement('p');
      const socialLinks = document.createElement('p');
      const fbLink = document.createElement('span');
      const linkedIn = document.createElement('span');
      const twitterLink = document.createElement('span');
      const icon1 = document.createElement('i');
      const icon2 = document.createElement('i');
      const icon3 = document.createElement('i');

      // add classes to DOM elements
      footer.classList = 'footer';
      rightFooter.classList = 'right-footer';
      leftFooter.classList = 'left-footer';
      midFooter.classList = 'mid-footer';
      logo.classList = 'logo';
      allRightsReserved.classList = 'rights-reserved';
      socialLinks.classList = 'social-links';
      fbLink.classList = 'social-link';
      linkedIn.classList = 'social-link';
      twitterLink.classList = 'social-link';
      icon1.classList = 'fab fa-facebook-f';
      icon2.classList = 'fab fa-linkedin-in';
      icon3.classList = 'fab fa-twitter';

      // add text content to DOM elements
      logo.textContent = 'SibyRestaurant';
      allRightsReserved.innerHTML = "&copy; 2020 all rights reserved."

      // append child elements to respective parent elements
      fbLink.appendChild(icon1);
      linkedIn.appendChild(icon2);
      twitterLink.appendChild(icon3);

      leftFooter.appendChild(logo);
      midFooter.appendChild(allRightsReserved);
      rightFooter.appendChild(socialLinks);

      socialLinks.appendChild(fbLink);
      socialLinks.appendChild(linkedIn);
      socialLinks.appendChild(twitterLink);

      footer.appendChild(leftFooter);
      footer.appendChild(midFooter);
      footer.appendChild(rightFooter);
      content.appendChild(footer);
    };
  
    return { theFooter }
})();

export default Footer;
