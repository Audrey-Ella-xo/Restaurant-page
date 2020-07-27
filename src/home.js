const homePage = () => {
  const contentElement = document.createElement('div');
  contentElement.id = 'homeContent';
  contentElement.classList.add('content', 'container');

  const cardPannel = document.createElement('div');
  cardPannel.classList.add('add-panel');

  const card1 = document.createElement('div');
  card1.classList.add('card');
  const h2 = document.createElement('h2');
  h2.innerHTML = 'Discount';
  card1.appendChild(h2);
  const p = document.createElement('p');
  p.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque ex corrupti earum! Debitis dolorem quis provident temporibus at, voluptatibus voluptates corrupti rem corporis illo molestias quae quibusdam eos autem cum adipisci.';
  card1.appendChild(p);
  const small = document.createElement('small');
  small.innerHTML = 'Learn More';
  card1.appendChild(small);
  cardPannel.appendChild(card1);

  contentElement.appendChild(cardPannel);

  document.body.appendChild(contentElement);
};

export default homePage;