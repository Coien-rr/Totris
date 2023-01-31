import { getLocalStorage, setLocalStorage } from '../../utils/localStoreTool'

const localStorageName = 'my-local-category'
const theDefault = {
  id: 1,
  name: 'Totris',
  icon: '🎯',
  isActive: 'true',
}

const item = {
  id: 2,
  name: 'todoServer',
  icon: '🗃️',
  isActive: 'false',
}

const arr = [theDefault, item]

setLocalStorage(localStorageName, arr)
// console.log(localStorage.getItem(localStorageName))
// setLocalStorage(localStorageName, item)

const getCategories = () => {
  return getLocalStorage(localStorageName) || arr
}

const undateCategory = () => {
  setLocalStorage(localStorageName, arr)
}

const createNewCategory = (category) => {
  
}

export { getCategories, createNewCategory }
