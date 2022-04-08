const URL = "https://api.musement.com/api/v3/cities";

const q = (selector) => document.querySelector(selector);
const ul = q("ul");
const button = q("button");

const formatMaxText = (text) => text.split(".")[0];
const formatMinText = (text) => text.split(" ").slice(0, 25).join(" ") + " ...";



//mostra città popolari
const getData = async() => {
  const response = await fetch (URL);
  const data = await response.json();
  const results = data.filter((item) =>
  item.show_in_popular ===  true );
  q("ul").innerHTML = results.map((item)=> 
  `<li>
  <img src=${item.cover_image_url} alt="">
  <h2>${item.name}</h2>
  <p>${formatMinText(item.content)}</p>
  </li>`).join("");
}
getData();

//mostra tutte le città 
const getDataAll = async() => {
  const response = await fetch (URL);
  const data = await response.json();
  q("ul").innerHTML = data.map((item)=> 
  `<li>
  <img src=${item.cover_image_url} alt="">
  <h2>${item.name}</h2>
  <p>${formatMinText(item.content)}</p>
  </li>`).join("");
}

//testo sul pulsante e cards 
button.addEventListener("click", () => {
  const initialText = 'Mostra tutte le città';
  if (button.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    button.textContent = 'Mostra città popolari';
    getDataAll();
  } else {
    button.textContent = initialText;
    getData();
  }
});

    


   