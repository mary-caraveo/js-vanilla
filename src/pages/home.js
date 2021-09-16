import getData from '../utils/getData';

const home = async () => {
  const characters = await getData();

  const view = `
    <div class="characters">
    ${characters.results.map(character => `
      <article class="character-item">
      <img class="home-image" src="${character.image}" alt="${character.name}"/>
          <a href="#/${character.id}/">
          <h2 class="name-image">${character.name}</h2>
          </a>
      </article>
      `).join('')}
    </div>
    `;

  return view;
};

export default home;