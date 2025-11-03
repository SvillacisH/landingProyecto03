const renderIllustrations = async () => {
  try {
    const response = await fetch('ilustraciones.json');
    if (!response.ok) throw new Error(`Error HTTP ${response.status}`);
    const illustrations = await response.json();

    const container = document.getElementById('projects-section');
    container.innerHTML = '';

    illustrations.forEach(item => {
      const card = document.createElement('a');
      card.href = 'javascript:void(0)';
      card.className = `
        group relative overflow-hidden rounded-xl bg-zinc-100 p-6
        hover:bg-zinc-200/75 active:bg-zinc-200
        dark:bg-zinc-900 dark:hover:bg-zinc-800/75 dark:active:bg-zinc-800
        flex flex-col transition
      `;

      card.innerHTML = `
        <h3 class="text-lg font-semibold text-zinc-950 dark:text-zinc-50">${item.title}</h3>
        <h4 class="text-sm text-zinc-500 dark:text-zinc-400">${item.año}</h4>
        <p class="text-justify mt-2 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3">
          ${item.description}
        </p>

        <div class="mt-6 overflow-hidden rounded-xl aspect-[2/3] transition duration-150 ease-out group-hover:scale-105">
          <img src="${item.imgUrl}"
               alt="${item.title}"
               class="object-cover w-full h-full">
        </div>
      `;

      container.appendChild(card);
    });

  } catch (err) {
    console.error('Error cargando ilustraciones:', err);
  }
};

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', renderIllustrations);
