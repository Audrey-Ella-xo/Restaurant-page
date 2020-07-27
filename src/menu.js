const menuPage = () => {
  const contentElement = document.createElement('div');
  contentElement.id = 'menuContent';
  contentElement.classList.add('content', 'container', 'menu-list');
  const heading = document.createElement('h2');
  heading.innerHTML = 'THE DELICIOUS DISHES';

  const starter = document.createElement('div');
  starter.innerHTML = `
    <h3>Starter</h3>
    <ul>
        <li>Lorem ipsum dolor sit amet.............. #50</li>
        <li>Lorem ipsum dolor sit amet.............. #50</li>
        <li>Lorem ipsum dolor sit amet.............. #50</li>
        <li>Lorem ipsum dolor sit amet.............. #50</li>
    </ul>
  `;

  const main = document.createElement('div');
  main.innerHTML = `
  <h3>Main course</h3>
  <ul>
      <li>Lorem ipsum dolor sit amet.............. #50</li>
      <li>Lorem ipsum dolor sit amet.............. #50</li>
      <li>Lorem ipsum dolor sit amet.............. #50</li>
      <li>Lorem ipsum dolor sit amet.............. #50</li>
  </ul>

  <ul>
      <li>Lorem ipsum dolor sit amet.............. #50</li>
      <li>Lorem ipsum dolor sit amet.............. #50</li>
      <li>Lorem ipsum dolor sit amet.............. #50</li>
      <li>Lorem ipsum dolor sit amet.............. #50</li>
  </ul>
  `;

  const dessert = document.createElement('div');
  dessert.innerHTML = `
  <h3>Desert</h3>
                <ul>
                    <li>Lorem ipsum dolor sit amet.............. #50</li>
                    <li>Lorem ipsum dolor sit amet.............. #50</li>
                    <li>Lorem ipsum dolor sit amet.............. #50</li>
                    <li>Lorem ipsum dolor sit amet.............. #50</li>
                </ul>
  `;
  contentElement.appendChild(heading);
  contentElement.appendChild(starter);
  contentElement.appendChild(main);
  contentElement.appendChild(dessert);

  document.body.appendChild(contentElement);
};

export default menuPage;