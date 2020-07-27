const contactPage = () => {
  const contentContainer = document.createElement('div');
  contentContainer.id = 'contactContent';
  contentContainer.classList.add('content', 'container');

  const title = document.createElement('h2');
  title.innerHTML = 'Contact us at: ';
  const address = document.createElement('p');
  address.innerHTML = 'Address: 2145, Billings Avenue, Norbert mcCauly Street, Davidson road. P.O box 100, 22345 forest drive.';
  const telephone = document.createElement('p');
  telephone.innerHTML = 'Call us at: 1234567888';

  contentContainer.appendChild(title);
  contentContainer.appendChild(address);
  contentContainer.appendChild(telephone);

  document.body.appendChild(contentContainer);
};

export default contactPage;