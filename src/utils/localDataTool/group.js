import localforage from 'localforage'

localforage.config({
  storeName: 'groupStore',
})

const localSetItem = (key, value) => {
  localforage.setItem(key, value)
}

const getGroupDataById = async (key) => {
  return await localforage.getItem(key)
}

export default { localSetItem, getGroupDataById }
