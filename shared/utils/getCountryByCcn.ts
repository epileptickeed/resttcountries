import axios from "axios";

export default async function getCountryByCcn(ccn: string) {
  if (ccn) {
    const query = `https://restcountries.com/v3.1/alpha/${ccn}`;
    const { data } = await axios.get(`${query}`);
    return { data };
  }
}
