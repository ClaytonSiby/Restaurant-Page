const Contact = (() => {
  const contactPage = () => {
    const content = document.getElementById('content');
    const contactForm = document.createElement('form');
    const name = document.createElement('input');
    const email = document.createElement('input');
    const text = document.createElement('input');

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
