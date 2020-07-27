const homePage = () => {
  const contentElement = document.createElement('div');
  contentElement.id = 'homeContent';
  contentElement.classList.add('content', 'container');

  const cardFactory = (heading, body, small) => ({ heading, body, small });

  const cardObject = {
    cardOne: cardFactory('Discount', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque ex corrupti earum! Debitis dolorem quis provident temporibus at, voluptatibus voluptates corrupti rem corporis illo molestias quae quibusdam eos autem cum adipisci.', 'learn More'),

    cardTwo: cardFactory('About', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque ex corrupti earum! Debitis dolorem quis provident temporibus at, voluptatibus voluptates corrupti rem corporis illo molestias quae quibusdam eos autem cum adipisci.', 'learn More'),

    cardThree: cardFactory('Meet Staff', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque ex corrupti earum! Debitis dolorem quis provident temporibus at, voluptatibus voluptates corrupti rem corporis illo molestias quae quibusdam eos autem cum adipisci.', 'learn More'),
  };

  const cardPannel = document.createElement('div');
  cardPannel.classList.add('add-panel');

  Object.keys(cardObject).forEach(key => {
    const card1 = document.createElement('div');
    card1.classList.add('card');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const small = document.createElement('small');

    h2.innerHTML = cardObject[key].heading;
    p.innerHTML = cardObject[key].body;
    small.innerHTML = cardObject[key].small;

    card1.appendChild(h2);
    card1.appendChild(p);
    card1.appendChild(small);
    cardPannel.appendChild(card1);
  });

  contentElement.appendChild(cardPannel);

  document.body.appendChild(contentElement);
};

export default homePage;