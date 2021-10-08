import fetchJsonp from "fetch-jsonp";

const API_ENDPOINT = 'https://zipcloud.ibsnet.co.jp/api/search';

export const Address = {
  get: (inputPostalCode: string) => {
    return fetchJsonp(`${API_ENDPOINT}?zipcode=${inputPostalCode}`)
      .then((res) => res.json())
  }
};
