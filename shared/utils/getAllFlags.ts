import axios from "axios";

export default async function getAllFlags(
  userQuery: string,
  continent: string
) {
  // const url = `https://restcountries.com/v3.1`;

  // const urlParts = [];

  // if (userQuery) {
  //   urlParts.push(userQuery === "" ? "all" : `name/${userQuery}`);
  // }

  // if (continent) {
  //   urlParts.push(continent === "" ? "all" : `region/${continent}`);
  // }

  // const query = `${url}/${
  //   urlParts.length > 0 ? `${urlParts.join("/")}` : `all`
  // }`;

  let query = "https://restcountries.com/v3.1/all";
  if (userQuery) {
    const newQuery =
      userQuery === ""
        ? "https://restcountries.com/v3.1/all"
        : `https://restcountries.com/v3.1/name/${userQuery}`;
    query = newQuery;
  }
  if (continent) {
    const newQuery =
      continent === ""
        ? "https://restcountries.com/v3.1/all"
        : `https://restcountries.com/v3.1/region/${continent}`;

    query = newQuery;
  }
  const { data } = await axios.get(`${query}`);
  return data;
}
