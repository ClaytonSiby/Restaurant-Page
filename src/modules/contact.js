const Contact = (() => {

  const contactPage = () => {
    let content = document.getElementById('content');
    let contactForm = document.createElement('form');
    let name = document.createElement('input');
    let email = document.createElement('input');
    let text = document.createElement('input');

    name.setAttribute('type', 'text');
    email.setAttribute('type', 'email');
    text.setAttribute('type', 'textarea');

    contactForm.appendChild(name);
    contactForm.appendChild(email);
    contactForm.appendChild(text);
    content.appendChild(contactForm);
  };

  return { contactPage };
})();

export default Contact;
