import { constants } from "./constants.js";

export const getItems = async () => {
  try {
    const response = await fetch(constants.apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("An error occurred!", error?.message);
    return [];
  }
};
