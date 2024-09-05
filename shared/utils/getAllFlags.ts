import axios from 'axios';

export default async function getAllFlags(userQuery: string) {
  const query =
    userQuery === ''
      ? 'https://restcountries.com/v3.1/all'
      : `https://restcountries.com/v3.1/name/${userQuery}`;
  const { data } = await axios.get(`${query}`);
  return data;
}
