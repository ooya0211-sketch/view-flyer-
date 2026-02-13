const stores = [
  {
    name: "サンシャイン",
    area: "南御座",
    flyer: "https://tokubai.co.jp"
  },
  {
    name: "エースワン",
    area: "薊野",
    flyer: "https://www.ace1.co.jp"
  },
  {
    name: "マルナカ",
    area: "一宮",
    flyer: "https://tokubai.co.jp"
  },
  {
    name: "イオン高知",
    area: "秦南町",
    flyer: "https://tokubai.co.jp"
  }
];

const storeList = document.getElementById("storeList");
const searchBox = document.getElementById("searchBox");
const sortSelect = document.getElementById("sortSelect");

function displayStores(data) {
  storeList.innerHTML = "";
  
  data.forEach(store => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h2>${store.name}</h2>
      <p>エリア：${store.area}</p>
      <a href="${store.flyer}" target="_blank" class="button">チラシを見る</a>
    `;

    storeList.appendChild(card);
  });
}

function filterAndSort() {
  let filtered = [...stores];
  
  const keyword = searchBox.value.toLowerCase();
  if (keyword) {
    filtered = filtered.filter(store =>
      store.name.toLowerCase().includes(keyword)
    );
  }

  if (sortSelect.value === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name, "ja"));
  }

  displayStores(filtered);
}

searchBox.addEventListener("input", filterAndSort);
sortSelect.addEventListener("change", filterAndSort);

displayStores(stores);
