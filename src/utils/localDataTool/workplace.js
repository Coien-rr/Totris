import localforage from 'localforage'

function setStoreName() {
  localforage.config({
    storeName: 'workplaceStore',
  })
}

const localSetItem = (key, value) => {
  setStoreName()
  return localforage.setItem(key, value)
}

const getCategoryDataById = async (key) => {
  setStoreName()
  console.log('get category data by id')
  return await localforage.getItem(key)
}

export default { localSetItem, getCategoryDataById }
