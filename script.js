const recipes = [
  {
    id: 1,
    title: "Bolo de cenoura com cobertura de chocolate",
    category: "Tradicional",
    collection: "Cafe da tarde",
    time: "40 min",
    servings: "10 fatias",
    description: "Classico de familia com massa fofinha e cobertura cremosa.",
    ingredients: [
      "3 cenouras medias picadas",
      "4 ovos",
      "1 xicara de oleo",
      "2 xicaras de farinha de trigo",
      "2 xicaras de acucar",
      "1 colher de sopa de fermento",
      "1 lata de creme de leite",
      "4 colheres de sopa de chocolate em po"
    ],
    steps: [
      "Bata cenoura, ovos e oleo no liquidificador ate ficar liso.",
      "Misture com farinha, acucar e fermento em uma tigela.",
      "Asse em forno preaquecido a 180 graus por cerca de 40 minutos.",
      "Leve chocolate e creme de leite ao fogo baixo ate engrossar e cubra o bolo."
    ]
  },
  {
    id: 2,
    title: "Bolo de chocolate intenso",
    category: "Chocolate",
    collection: "Assinatura",
    time: "40 min",
    servings: "12 fatias",
    description: "Massa escura e umida com toque de cafe para realcar o sabor.",
    ingredients: [
      "2 xicaras de farinha de trigo",
      "1 xicara de chocolate em po 50%",
      "1 xicara e meia de acucar",
      "3 ovos",
      "1 xicara de leite morno",
      "1/2 xicara de oleo",
      "1 colher de sopa de fermento",
      "1 colher de cha de cafe soluvel"
    ],
    steps: [
      "Misture os secos em uma tigela ampla.",
      "Adicione ovos, leite, oleo e cafe, mexendo ate a massa ficar uniforme.",
      "Leve ao forno a 180 graus por 35 a 40 minutos.",
      "Finalize com ganache ou acucar polvilhado."
    ]
  },
  {
    id: 3,
    title: "Bolo de laranja com calda citrica",
    category: "Frutado",
    collection: "Leves e frescos",
    time: "35 min",
    servings: "8 fatias",
    description: "Leve, aromatico e perfeito para cafe da manha ou lanche.",
    ingredients: [
      "1 laranja inteira sem sementes",
      "3 ovos",
      "1/2 xicara de oleo",
      "2 xicaras de farinha de trigo",
      "1 xicara e meia de acucar",
      "1 colher de sopa de fermento",
      "1/2 xicara de suco de laranja para a calda"
    ],
    steps: [
      "Bata laranja, ovos e oleo no liquidificador.",
      "Incorpore a mistura aos ingredientes secos.",
      "Asse por 35 minutos em forno medio.",
      "Reduza o suco com um pouco de acucar e regue o bolo ainda morno."
    ]
  },
  {
    id: 4,
    title: "Bolo de coco gelado",
    category: "Festa",
    collection: "Momentos de festa",
    time: "40 min",
    servings: "14 pedacos",
    description: "Molhadinho, embrulhado no charme das festas de aniversario.",
    ingredients: [
      "3 ovos",
      "2 xicaras de farinha de trigo",
      "1 xicara de leite",
      "1 xicara e meia de acucar",
      "2 colheres de sopa de manteiga",
      "1 colher de sopa de fermento",
      "200 ml de leite de coco",
      "Coco ralado para finalizar"
    ],
    steps: [
      "Bata ovos, acucar e manteiga ate clarear.",
      "Acrescente farinha, leite e fermento.",
      "Asse em forno medio por cerca de 40 minutos, ate dourar, e corte em quadrados.",
      "Regue com leite de coco, passe no coco ralado e gele antes de servir."
    ]
  },
  {
    id: 5,
    title: "Bolo de banana com canela",
    category: "Frutado",
    collection: "Cafe da tarde",
    time: "40 min",
    servings: "9 fatias",
    description: "Receita aconchegante com cobertura crocante de acucar e especiarias.",
    ingredients: [
      "4 bananas maduras amassadas",
      "2 ovos",
      "1/2 xicara de oleo",
      "2 xicaras de farinha de trigo",
      "1 xicara de acucar mascavo",
      "1 colher de sopa de canela",
      "1 colher de sopa de fermento"
    ],
    steps: [
      "Misture bananas, ovos e oleo.",
      "Junte farinha, acucar mascavo, canela e fermento.",
      "Despeje em forma untada e cubra com banana fatiada.",
      "Asse por cerca de 40 minutos."
    ]
  },
  {
    id: 6,
    title: "Bolo red velvet simples",
    category: "Festa",
    collection: "Assinatura",
    time: "40 min",
    servings: "12 fatias",
    description: "Visual marcante, miolo macio e cobertura leve de cream cheese.",
    ingredients: [
      "2 xicaras de farinha de trigo",
      "1 colher de sopa de chocolate em po",
      "1 xicara e meia de acucar",
      "2 ovos",
      "1 xicara de buttermilk",
      "1/2 xicara de manteiga",
      "Corante vermelho culinario",
      "1 colher de sopa de fermento"
    ],
    steps: [
      "Bata manteiga, acucar e ovos ate obter um creme claro.",
      "Intercale secos e buttermilk, adicionando o corante no fim.",
      "Asse em forno medio por 35 a 40 minutos.",
      "Depois de frio, cubra com creme de cream cheese."
    ]
  },
  {
    id: 7,
    title: "Bolo de trigo caseiro",
    category: "Tradicional",
    collection: "Classicos caseiros",
    time: "35 min",
    servings: "10 fatias",
    description: "Receita simples e macia, perfeita para cafe fresco e manteiga.",
    ingredients: [
      "3 ovos",
      "2 xicaras de farinha de trigo",
      "1 xicara e meia de acucar",
      "1 xicara de leite",
      "3 colheres de sopa de manteiga",
      "1 colher de sopa de fermento"
    ],
    steps: [
      "Bata os ovos, o acucar e a manteiga ate formar um creme claro.",
      "Adicione a farinha de trigo e o leite aos poucos, mexendo bem.",
      "Misture o fermento delicadamente no final.",
      "Leve ao forno preaquecido a 180 graus por cerca de 35 minutos."
    ]
  },
  {
    id: 8,
    title: "Bolo de milho cremoso",
    category: "Tradicional",
    collection: "Classicos caseiros",
    time: "45 min",
    servings: "12 fatias",
    description: "Textura cremosa por dentro e sabor de festa junina o ano todo.",
    ingredients: [
      "1 lata de milho escorrido",
      "3 ovos",
      "1 xicara de leite",
      "1/2 xicara de oleo",
      "1 xicara de acucar",
      "1 xicara de flocao de milho",
      "1 colher de sopa de fermento"
    ],
    steps: [
      "Bata todos os ingredientes no liquidificador, deixando o fermento por ultimo.",
      "Despeje em forma untada.",
      "Asse em forno preaquecido a 180 graus por 40 a 45 minutos.",
      "Espere amornar antes de desenformar."
    ]
  },
  {
    id: 9,
    title: "Bolo de fuba com erva-doce",
    category: "Tradicional",
    collection: "Cafe da tarde",
    time: "40 min",
    servings: "10 fatias",
    description: "Receita perfumada e macia, perfeita para acompanhar cafe passado.",
    ingredients: [
      "2 xicaras de fuba",
      "1 xicara de farinha de trigo",
      "1 xicara e meia de acucar",
      "3 ovos",
      "1 xicara de leite",
      "1/2 xicara de oleo",
      "1 colher de sopa de erva-doce",
      "1 colher de sopa de fermento"
    ],
    steps: [
      "Misture ovos, leite, oleo e acucar.",
      "Acrescente fuba, farinha e erva-doce.",
      "Finalize com o fermento e mexa delicadamente.",
      "Asse por cerca de 40 minutos em forno medio."
    ]
  },
  {
    id: 10,
    title: "Bolo de maca com canela",
    category: "Frutado",
    collection: "Leves e frescos",
    time: "40 min",
    servings: "12 fatias",
    description: "Massa aromatica com pedacos de maca e cobertura levemente crocante.",
    ingredients: [
      "2 macas picadas",
      "3 ovos",
      "1 xicara de acucar mascavo",
      "2 xicaras de farinha de trigo",
      "1/2 xicara de oleo",
      "1 colher de sopa de canela",
      "1 colher de sopa de fermento"
    ],
    steps: [
      "Bata ovos, acucar e oleo.",
      "Junte farinha, canela e fermento.",
      "Misture as macas picadas na massa.",
      "Leve ao forno medio por cerca de 40 minutos, ate dourar."
    ]
  },
  {
    id: 11,
    title: "Bolo de limao com glacado",
    category: "Frutado",
    collection: "Leves e frescos",
    time: "35 min",
    servings: "9 fatias",
    description: "Leve, fresco e com cobertura doce na medida certa.",
    ingredients: [
      "3 ovos",
      "1 xicara de leite",
      "1/2 xicara de oleo",
      "2 xicaras de farinha de trigo",
      "1 xicara e meia de acucar",
      "Suco e raspas de 2 limoes",
      "1 colher de sopa de fermento"
    ],
    steps: [
      "Misture ovos, leite, oleo e acucar.",
      "Adicione farinha, raspas e suco de limao.",
      "Finalize com fermento e asse por 35 minutos em forno medio.",
      "Cubra com glacado simples de acucar e limao."
    ]
  },
  {
    id: 12,
    title: "Bolo formigueiro",
    category: "Tradicional",
    collection: "Classicos caseiros",
    time: "40 min",
    servings: "10 fatias",
    description: "Receita divertida com granulado espalhado pela massa branca.",
    ingredients: [
      "3 ovos",
      "2 xicaras de farinha de trigo",
      "1 xicara e meia de acucar",
      "1 xicara de leite",
      "3 colheres de sopa de manteiga",
      "1/2 xicara de granulado",
      "1 colher de sopa de fermento"
    ],
    steps: [
      "Bata manteiga, acucar e ovos ate formar um creme.",
      "Adicione leite e farinha aos poucos.",
      "Misture granulado e fermento por ultimo.",
      "Asse em forno medio por cerca de 40 minutos, ate crescer e dourar."
    ]
  },
  {
    id: 13,
    title: "Bolo de pao de mel",
    category: "Chocolate",
    collection: "Assinatura",
    time: "40 min",
    servings: "12 fatias",
    description: "Sabor marcante de especiarias, mel e chocolate em uma massa macia.",
    ingredients: [
      "2 xicaras de farinha de trigo",
      "1 xicara de leite morno",
      "1/2 xicara de mel",
      "1 xicara de acucar mascavo",
      "2 colheres de sopa de chocolate em po",
      "1 colher de cha de canela",
      "1 pitada de cravo em po",
      "1 colher de sopa de fermento"
    ],
    steps: [
      "Misture mel, leite e acucar mascavo.",
      "Acrescente farinha, chocolate e especiarias.",
      "Junte o fermento delicadamente.",
      "Asse por 40 minutos e finalize com cobertura de chocolate."
    ]
  },
  {
    id: 14,
    title: "Bolo de prestigio",
    category: "Chocolate",
    collection: "Momentos de festa",
    time: "45 min",
    servings: "14 fatias",
    description: "Camadas de chocolate e coco para quem gosta de bolo mais indulgente.",
    ingredients: [
      "2 xicaras de farinha de trigo",
      "1 xicara de chocolate em po",
      "3 ovos",
      "1 xicara e meia de acucar",
      "1 xicara de leite",
      "1/2 xicara de oleo",
      "1 colher de sopa de fermento",
      "Recheio de coco cremoso"
    ],
    steps: [
      "Prepare a massa misturando secos e depois liquidos.",
      "Asse em duas formas ou em uma forma grande por cerca de 45 minutos e corte o bolo ao meio depois de assado.",
      "Recheie com creme de coco.",
      "Cubra com brigadeiro mole e coco ralado."
    ]
  },
  {
    id: 15,
    title: "Bolo de abacaxi caramelizado",
    category: "Frutado",
    collection: "Leves e frescos",
    time: "45 min",
    servings: "12 fatias",
    description: "Visual bonito e contraste delicioso entre fruta e caramelo.",
    ingredients: [
      "Rodelas de abacaxi",
      "1 xicara de acucar para caramelizar",
      "3 ovos",
      "2 xicaras de farinha de trigo",
      "1 xicara de leite",
      "1 xicara e meia de acucar",
      "1/2 xicara de manteiga",
      "1 colher de sopa de fermento"
    ],
    steps: [
      "Caramelize o fundo da forma e disponha as rodelas de abacaxi.",
      "Bata os ingredientes da massa ate ficar lisa.",
      "Despeje sobre o abacaxi com cuidado.",
      "Asse por cerca de 45 minutos, ate dourar, e desenforme ainda morno."
    ]
  },
  {
    id: 16,
    title: "Bolo de cafe com chocolate",
    category: "Chocolate",
    collection: "Cafe da tarde",
    time: "40 min",
    servings: "10 fatias",
    description: "Intenso e aromatico, ideal para quem gosta de sabores mais profundos.",
    ingredients: [
      "2 xicaras de farinha de trigo",
      "1 xicara de acucar",
      "1/2 xicara de chocolate em po",
      "1 xicara de cafe coado morno",
      "3 ovos",
      "1/2 xicara de oleo",
      "1 colher de sopa de fermento"
    ],
    steps: [
      "Misture os ingredientes secos.",
      "Adicione ovos, oleo e cafe morno.",
      "Mexa ate obter uma massa homogenea.",
      "Asse por 35 a 40 minutos."
    ]
  },
  {
    id: 17,
    title: "Bolo de nozes com doce de leite",
    category: "Festa",
    collection: "Momentos de festa",
    time: "45 min",
    servings: "14 fatias",
    description: "Uma opcao elegante para datas especiais e comemoracoes.",
    ingredients: [
      "2 xicaras de farinha de trigo",
      "1 xicara de nozes picadas",
      "4 ovos",
      "1 xicara e meia de acucar",
      "1 xicara de leite",
      "1/2 xicara de manteiga",
      "1 colher de sopa de fermento",
      "Doce de leite para rechear"
    ],
    steps: [
      "Bata manteiga, acucar e ovos ate ficar cremoso.",
      "Adicione farinha, leite e nozes picadas.",
      "Misture o fermento no final e asse em forno medio por cerca de 45 minutos.",
      "Depois de frio, recheie e cubra com doce de leite."
    ]
  }
];

const state = {
  search: "",
  category: "Todas",
  collection: "Todas",
  selectedId: recipes[0].id,
  favorites: new Set(JSON.parse(localStorage.getItem("cake-favorites") || "[]")),
  favoritesOnly: false,
  visibleCount: 8
};

const recipeGrid = document.getElementById("recipeGrid");
const categoryFilters = document.getElementById("categoryFilters");
const collectionFilters = document.getElementById("collectionFilters");
const searchInput = document.getElementById("searchInput");
const detailTitle = document.getElementById("detailTitle");
const detailDescription = document.getElementById("detailDescription");
const detailMeta = document.getElementById("detailMeta");
const ingredientsList = document.getElementById("ingredientsList");
const stepsList = document.getElementById("stepsList");
const resultsText = document.getElementById("resultsText");
const emptyState = document.getElementById("emptyState");
const loadMoreButton = document.getElementById("loadMoreButton");
const recipeCount = document.getElementById("recipeCount");
const surpriseButton = document.getElementById("surpriseButton");
const showFavoritesButton = document.getElementById("showFavoritesButton");
const featuredTitle = document.getElementById("featuredTitle");
const featuredDescription = document.getElementById("featuredDescription");
const featuredCategory = document.getElementById("featuredCategory");
const featuredTime = document.getElementById("featuredTime");
const featuredCard = document.getElementById("featuredCard");
const detailPanel = document.getElementById("detailPanel");
const recipeModal = document.getElementById("recipeModal");
const recipeModalBackdrop = document.getElementById("recipeModalBackdrop");
const recipeModalClose = document.getElementById("recipeModalClose");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalMeta = document.getElementById("modalMeta");
const modalIngredients = document.getElementById("modalIngredients");
const modalSteps = document.getElementById("modalSteps");
const modalMedia = document.getElementById("modalMedia");

const categories = ["Todas", ...new Set(recipes.map((recipe) => recipe.category))];
const collections = ["Todas", ...new Set(recipes.map((recipe) => recipe.collection))];
const recipeById = new Map(recipes.map((recipe) => [recipe.id, recipe]));
const categoryImageMap = {
  tradicional: "assets/tradicional.svg",
  chocolate: "assets/chocolate.svg",
  frutado: "assets/frutado.svg",
  festa: "assets/festa.svg"
};
let searchTimer;

function saveFavorites() {
  localStorage.setItem("cake-favorites", JSON.stringify([...state.favorites]));
}

function getFilteredRecipes() {
  return recipes.filter((recipe) => {
    const searchTerm = state.search.toLowerCase();
    const matchesSearch =
      recipe.title.toLowerCase().includes(searchTerm) ||
      recipe.description.toLowerCase().includes(searchTerm) ||
      recipe.category.toLowerCase().includes(searchTerm);
    const matchesCategory =
      state.category === "Todas" || recipe.category === state.category;
    const matchesCollection =
      state.collection === "Todas" || recipe.collection === state.collection;
    const matchesFavorite = !state.favoritesOnly || state.favorites.has(recipe.id);

    return matchesSearch && matchesCategory && matchesCollection && matchesFavorite;
  });
}

function updateFeatured(recipe) {
  featuredTitle.textContent = recipe.title;
  featuredDescription.textContent = recipe.description;
  featuredCategory.textContent = recipe.category;
  featuredTime.textContent = recipe.time;
}

function animatePanel(panel) {
  panel.classList.remove("is-updating");
  void panel.offsetWidth;
  panel.classList.add("is-updating");
}

function renderCategories() {
  categoryFilters.innerHTML = categories
    .map(
      (category) => `
        <button
          class="chip ${state.category === category ? "active" : ""}"
          data-category="${category}"
          type="button"
        >
          ${category}
        </button>
      `
    )
    .join("");

}

function renderCollections() {
  collectionFilters.innerHTML = collections
    .map(
      (collection) => `
        <button
          class="chip ${state.collection === collection ? "active" : ""}"
          data-collection="${collection}"
          type="button"
        >
          ${collection}
        </button>
      `
    )
    .join("");

}

function getVisualClass(recipe) {
  return categoryImageMap[recipe.category.toLowerCase()] || "assets/festa.svg";
}

function renderDetails(recipe) {
  if (!recipe) {
    detailTitle.textContent = "Nenhuma receita selecionada";
    detailDescription.textContent = "Escolha outro filtro para continuar explorando.";
    detailMeta.innerHTML = "";
    ingredientsList.innerHTML = "";
    stepsList.innerHTML = "";
    return;
  }

  detailTitle.textContent = recipe.title;
  detailDescription.textContent = recipe.description;
  detailMeta.innerHTML = `
    <span>${recipe.category}</span>
    <span>${recipe.time}</span>
    <span>${recipe.servings}</span>
  `;
  ingredientsList.innerHTML = recipe.ingredients.map((item) => `<li>${item}</li>`).join("");
  stepsList.innerHTML = recipe.steps.map((step) => `<li>${step}</li>`).join("");
}

function renderRecipes(list) {
  const visibleRecipes = list.slice(0, state.visibleCount);
  recipeGrid.innerHTML = visibleRecipes
    .map((recipe, index) => {
      const isFavorite = state.favorites.has(recipe.id);
      const isSelected = state.selectedId === recipe.id;
      return `
        <article class="recipe-card ${isSelected ? "selected" : ""}" data-id="${recipe.id}">
          <div class="recipe-visual" data-visual-label="${recipe.title}">
            <img src="${getVisualClass(recipe)}" alt="${recipe.title}" loading="lazy" decoding="async" />
          </div>
          <div class="recipe-card-header">
            <span class="recipe-number">${String(index + 1).padStart(2, "0")}</span>
            <button
             class="favorite-button ${isFavorite ? "active" : ""}"
              data-favorite-id="${recipe.id}"
              type="button"
              aria-label="Favoritar ${recipe.title}"
            >
              ${isFavorite ? "&#9829;" : "&#9825;"}
            </button>
          </div>
          <span class="recipe-tag">${recipe.category}</span>
          <h3>${recipe.title}</h3>
          <p class="recipe-description">${recipe.description}</p>
          <div class="recipe-meta">
            <span class="recipe-time">${recipe.time}</span>
            <span class="recipe-time">${recipe.servings}</span>
            <span class="recipe-time">${recipe.collection}</span>
          </div>
          <div class="recipe-card-footer">
            <button data-open-id="${recipe.id}" type="button">Ver preparo</button>
          </div>
        </article>
      `;
    })
    .join("");

  loadMoreButton.classList.toggle("hidden", list.length <= state.visibleCount);
}

function openModal(recipe) {
  modalTitle.textContent = recipe.title;
  modalDescription.textContent = recipe.description;
  modalMeta.innerHTML = `
    <span>${recipe.category}</span>
    <span>${recipe.collection}</span>
    <span>${recipe.time}</span>
    <span>${recipe.servings}</span>
  `;
  modalIngredients.innerHTML = recipe.ingredients.map((item) => `<li>${item}</li>`).join("");
  modalSteps.innerHTML = recipe.steps.map((step) => `<li>${step}</li>`).join("");
  modalMedia.className = "recipe-modal-media";
  modalMedia.innerHTML = `<img src="${getVisualClass(recipe)}" alt="${recipe.title}" decoding="async" />`;
  recipeModal.classList.remove("hidden");
  recipeModal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  recipeModal.classList.add("hidden");
  recipeModal.setAttribute("aria-hidden", "true");
}

function ensureValidSelection(list) {
  if (!list.length) {
    state.selectedId = null;
    return null;
  }

  const stillVisible = list.some((recipe) => recipe.id === state.selectedId);
  if (!stillVisible) {
    state.selectedId = list[0].id;
  }

  return recipeById.get(state.selectedId);
}

function render() {
  renderCategories();
  renderCollections();

  const filteredRecipes = getFilteredRecipes();
  const selectedRecipe = ensureValidSelection(filteredRecipes);

  renderRecipes(filteredRecipes);
  renderDetails(selectedRecipe);

  if (selectedRecipe) {
    updateFeatured(selectedRecipe);
  }

  recipeCount.textContent = String(recipes.length);
  resultsText.textContent = `${filteredRecipes.length} receita${filteredRecipes.length === 1 ? "" : "s"} encontrada${filteredRecipes.length === 1 ? "" : "s"}`;
  emptyState.classList.toggle("hidden", filteredRecipes.length !== 0);
}

searchInput.addEventListener("input", (event) => {
  clearTimeout(searchTimer);
  const nextValue = event.target.value;
  searchTimer = setTimeout(() => {
    state.search = nextValue;
    state.visibleCount = 8;
    render();
  }, 80);
});

surpriseButton.addEventListener("click", () => {
  const filteredRecipes = getFilteredRecipes();
  const pool = filteredRecipes.length ? filteredRecipes : recipes;
  const randomRecipe = pool[Math.floor(Math.random() * pool.length)];
  state.selectedId = randomRecipe.id;
  state.favoritesOnly = false;
  animatePanel(detailPanel);
  animatePanel(featuredCard);
  render();
  document.getElementById("detailPanel").scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });
});

showFavoritesButton.addEventListener("click", () => {
  state.favoritesOnly = !state.favoritesOnly;
  showFavoritesButton.textContent = state.favoritesOnly ? "Ver todas" : "Ver favoritas";
  state.visibleCount = 8;
  render();
});

loadMoreButton.addEventListener("click", () => {
  state.visibleCount += 8;
  render();
});

categoryFilters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  state.visibleCount = 8;
  render();
});

collectionFilters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-collection]");
  if (!button) return;
  state.collection = button.dataset.collection;
  state.visibleCount = 8;
  render();
});

recipeGrid.addEventListener("click", (event) => {
  const favoriteButton = event.target.closest("[data-favorite-id]");
  if (favoriteButton) {
    const recipeId = Number(favoriteButton.dataset.favoriteId);
    if (state.favorites.has(recipeId)) {
      state.favorites.delete(recipeId);
    } else {
      state.favorites.add(recipeId);
    }
    saveFavorites();
    render();
    return;
  }

  const button = event.target.closest("[data-open-id]");
  if (!button) return;
  const recipeId = Number(button.dataset.openId);
  state.selectedId = recipeId;
  const recipe = recipeById.get(recipeId);
  if (recipe) {
    animatePanel(detailPanel);
    animatePanel(featuredCard);
    render();
    openModal(recipe);
  }
});

recipeModalBackdrop.addEventListener("click", closeModal);
recipeModalClose.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !recipeModal.classList.contains("hidden")) {
    closeModal();
  }
});

render();
