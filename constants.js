const rows = 10;
const firstName = "Omar";
const lastName = "Dulaimi";
const categories = ["cats", "code", "people"];

export const constants = {
  apiUrl: `http://www.filltext.com/?rows=${rows}&fname=${firstName}&lname=${lastName}&category=${JSON.stringify(
    categories
  )}`,
};
