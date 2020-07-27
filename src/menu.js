const menuPage = () => {
  const contentElement = document.createElement('div');
  contentElement.id = 'menuContent';
  contentElement.classList.add('content', 'container', 'menu-list');
  const heading = document.createElement('h1');
  heading.innerHTML = 'THE DELICIOUS DISHES';

  contentElement.appendChild(heading);

  document.body.appendChild(contentElement);
};

export default menuPage;