async function loadWorks() {
  const grid = document.getElementById('works-grid');
  if (!grid) return;

  try {
    const res = await fetch('/data/works.json');
    if (!res.ok) throw new Error('Не удалось загрузить работы');
    const works = await res.json();
    if (!Array.isArray(works) || works.length === 0) {
      grid.innerHTML = '<p>Добавьте свои фото в папку assets/works и опишите их в data/works.json.</p>';
      return;
    }

    grid.innerHTML = works.map(work => {
      const { title = 'Работа', description = '', image, alt = title } = work;
      if (!image) return '';
      return `
        <article class="card work">
          <img src="${image}" alt="${alt}" loading="lazy" width="640" height="800">
          <div>
            <h3>${title}</h3>
            <p class="caption">${description}</p>
          </div>
        </article>
      `;
    }).join('');
  } catch (e) {
    console.error(e);
    grid.innerHTML = '<p>Не удалось загрузить портфолио. Проверьте файл data/works.json.</p>';
  }
}

document.addEventListener('DOMContentLoaded', loadWorks);
