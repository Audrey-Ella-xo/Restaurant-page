const contactPage = () => {
  const contentElement = document.createElement('div');
  contentElement.id = 'contactContent';
  contentElement.classList.add('content', 'container');

  const title = document.createElement('h2');
  title.innerHTML = 'Contact us at: ';
  const address = document.createElement('p');
  address.innerHTML = 'Address: 2145, Billings Avenue, Norbert mcCauly Street, Davidson road. P.O box 100, 22345 forest drive.';
  const telephone = document.createElement('p');
  telephone.innerHTML = 'Call us at: 1234567888';

  contentElement.appendChild(title);
  contentElement.appendChild(address);
  contentElement.appendChild(telephone);

  document.body.appendChild(contentElement);
};

export default contactPage;