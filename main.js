import { getItems } from "./api.js";
import { displayCategories, displayRows, getCategories } from "./helpers.js";

let items = [];

(async () => {
  items = await getItems();
  const categories = getCategories(items);
  displayCategories(categories);
  displayRows(items);
})();
