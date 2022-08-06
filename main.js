import { getItems } from "./api.js";

let items = [];

const filterItems = (category) => {
  const items = document.getElementsByClassName("list-item");
  for (const item of items) {
    if (item.children[1].children[1].innerText !== category) {
      item.style = "display: none;";
    } else {
      item.style = "display: block;";
    }
  }
};

const displayRows = () => {
  for (const item of items) {
    const listItem = document.createElement("div");
    listItem.classList = "list-item";

    const category = document.createElement("div");
    category.innerText = item.category;
    category.classList = "category";

    const nameWrapper = document.createElement("div");
    nameWrapper.classList = "name-wrapper";

    const name = document.createElement("div");
    name.classList = "name";
    name.innerText = `${item.fname} ${item.lname}`;

    nameWrapper.append(name);

    const textIcon = document.createElement("div");
    textIcon.classList = "text-icon";
    textIcon.innerText = `${item.fname.slice(0, 1).toUpperCase()}${item.lname
      .slice(0, 1)
      .toUpperCase()}`;
    listItem.prepend(textIcon);

    nameWrapper.append(category);

    listItem.append(nameWrapper);
    document.getElementById("list").append(listItem);
  }
};

const displayCategories = () => {
  const categories = [...new Set(items.map((item) => item.category))];
  const categoriesWrapper = document.createElement("div");
  categoriesWrapper.classList = "category-wrapper";
  document.getElementById("wrapper").append(categoriesWrapper);

  for (const category of categories) {
    const categoryItem = document.createElement("div");
    categoryItem.innerText = category;
    categoryItem.classList = "category";
    categoryItem.style = "margin-right: 5px; cursor: pointer;";
    categoryItem.onclick = () => filterItems(category);
    categoriesWrapper.append(categoryItem);
  }
};

const exec = async () => {
  items = await getItems();

  displayCategories();
  displayRows();
};

exec();
