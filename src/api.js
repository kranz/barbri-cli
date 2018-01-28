import {
  products,
} from './dummy-data'

let cachedProducts = null

export function getProducts () {
  return new Promise((res) => {
    if (cachedProducts === null) {
      cachedProducts = products
      return setTimeout(() => res(cachedProducts), 800)
    }
    return res(cachedProducts)
  })
}
