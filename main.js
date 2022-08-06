const items = [
  { fname: "omar", lname: "dulaimi", category: "people" },
  { fname: "omar", lname: "dulaimi", category: "code" },
  { fname: "omar", lname: "dulaimi", category: "people" },
  { fname: "omar", lname: "dulaimi", category: "code" },
];

for (const item of items) {
  const listItem = document.createElement("div");
  listItem.classList = "list-item";

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

  const category = document.createElement("div");
  category.innerText = item.category;
  category.classList = "category";

  nameWrapper.append(category);

  listItem.append(nameWrapper);
  document.getElementById("list").append(listItem);
}
