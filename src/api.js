import axios from 'axios'


// let cachedFoods = null
/*
import {
  foods,
} from './dummy-data'

export function getFoods () {
  return new Promise((res) => {
    if (cachedFoods === null) {
      cachedFoods = foods
      return setTimeout(() => res(cachedFoods), 800)
    }
    return res(cachedFoods)
  })
}
*/
// const apiurl = 'http://dc02.kranz.cloud:8080/testapi/api/foods'
export function getFoods () {
  const apiurl = 'http://dc02.kranz.cloud:3000/barbri/odata/FoodsApi?$expand=Attachments'
  return axios.get(apiurl)
  .then(function (response) {
    return response.data.value;
  })
  .catch(function (error) {
    console.log(error);
  });
}

export function getRecipes () {
  const apiurl = 'http://dc02.kranz.cloud:3000/barbri/odata/RecipesApi'
  return axios.get(apiurl)
  .then(function (response) {
    return response.data.value;
  })
  .catch(function (error) {
    console.log(error);
  });
}
