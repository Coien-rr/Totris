import localforage from 'localforage'

localforage.config({
  storeName: 'categoryStore',
})

const categoryStoreInit = () => {
  console.log('categoryStoreInit!')
}

const localSetItem = (key, value) => {
  localforage.setItem(`Category-${key}`, value)
}

export default { categoryStoreInit, localSetItem }
