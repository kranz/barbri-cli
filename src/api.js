import {
  foods,
} from './dummy-data'

let cachedFoods = null

export function getFoods () {
  return new Promise((res) => {
    if (cachedFoods === null) {
      cachedFoods = foods
      return setTimeout(() => res(cachedFoods), 800)
    }
    return res(cachedFoods)
  })
}
