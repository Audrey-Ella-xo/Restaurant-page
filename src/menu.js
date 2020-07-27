const menuPage = () => {
  const contentContainer = document.createElement('div');
  contentContainer.id = 'menuContent';
  contentContainer.classList.add('content', 'container', 'menu-list');
  const title = document.createElement('h2');
  title.innerHTML = 'Mouth Watering Menu';

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
  contentContainer.appendChild(title);
  contentContainer.appendChild(starter);
  contentContainer.appendChild(main);
  contentContainer.appendChild(dessert);

  document.body.appendChild(contentContainer);
};

export default menuPage;