import { combineReducers } from 'redux'

const addOne = (state = 0, action) => {
  return state + 1;
}
const addTwo = (state = 10, action) => {
  return state + 2;
}
export default combineReducers({
  addOne,
  addTwo
})
