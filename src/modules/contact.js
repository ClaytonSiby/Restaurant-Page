const Contact = (() => {
  const contactPage = () => {
    const content = document.getElementById('content');
    const contactHeader = document.createElement('div');
    const headerTitle = document.createElement('h2');
    const formWrapper = document.createElement('div');
    const contactForm = document.createElement('form');
    const nameFormGroup = document.createElement('div');
    const emailFormGroup = document.createElement('div');
    const textFormGroup = document.createElement('div');
    const actionsGroup = document.createElement('div');
    const labelForName = document.createElement('label');
    const labelForEmail = document.createElement('label');
    const labelForText = document.createElement('label');
    const name = document.createElement('input');
    const email = document.createElement('input');
    const text = document.createElement('textarea');
    const formBtn = document.createElement('button');

    // setAttributes on the DOM elements
    labelForName.setAttribute('for', 'name');
    labelForEmail.setAttribute('for', 'email');
    labelForText.setAttribute('for', 'content');
    name.setAttribute('type', 'text');
    email.setAttribute('type', 'email');
    text.setAttribute('type', 'textarea');
    name.setAttribute('placeholder', 'Enter your name');
    email.setAttribute('placeholder', 'Enter your email address');
    formBtn.setAttribute('type', 'submit');
    name.setAttribute('id', 'name');
    email.setAttribute('id', 'email');
    text.setAttribute('id', 'content');
    formBtn.classList = 'btn btn-success';

    // add classes to DOM elements
    contactHeader.classList = 'contact-header';
    headerTitle.classList = 'header-title';
    formWrapper.classList = 'form-wrapper';
    contactForm.classList = 'contact-form';
    nameFormGroup.classList = 'form-group';
    emailFormGroup.classList = 'form-group';
    textFormGroup.classList = 'form-group';

    // set textContent on the DOM elements
    labelForName.textContent = 'Name: ';
    labelForEmail.textContent = 'Email: ';
    labelForText.textContent = 'Content: ';
    formBtn.textContent = 'Submit';
    headerTitle.textContent = 'Contact Us Via Email';
    
    // append child elements to respective parent elements
    nameFormGroup.appendChild(labelForName);
    nameFormGroup.appendChild(name);

    emailFormGroup.appendChild(labelForEmail);
    emailFormGroup.appendChild(email);

    textFormGroup.appendChild(labelForText);
    textFormGroup.appendChild(text);

    actionsGroup.appendChild(formBtn);

    contactHeader.appendChild(headerTitle);

    contactForm.appendChild(nameFormGroup);
    contactForm.appendChild(emailFormGroup);
    contactForm.appendChild(textFormGroup);
    contactForm.appendChild(actionsGroup);
    formWrapper.appendChild(contactHeader);
    formWrapper.appendChild(contactForm);
    content.appendChild(formWrapper);
  };

  return { contactPage };
})();

export default Contact;
