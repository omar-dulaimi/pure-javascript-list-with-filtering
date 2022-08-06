const getItems = async () => {
  try {
    const response = await fetch(
      "http://www.filltext.com/?rows=10&fname=omar&lname=dulaimi&category=[%22cats%22,%20%22code%22,%20%22people%22]"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("An error occurred!", error?.message);
    return [];
  }
};

const exec = async () => {
  const items = await getItems();
  const categories = [...new Set(items.map((item) => item.category))];

  const categoriesWrapper = document.createElement("div");
  categoriesWrapper.classList = "category-wrapper";
  document.getElementById("wrapper").append(categoriesWrapper);

  for (const category of categories) {
    const categoryItem = document.createElement("div");
    categoryItem.innerText = category;
    categoryItem.classList = "category";
    categoryItem.style = "margin-right: 5px;";
    categoriesWrapper.append(categoryItem);
  }

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

exec();
