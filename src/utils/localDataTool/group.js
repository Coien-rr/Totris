import localforage from 'localforage'

function setStoreName() {
  localforage.config({
    storeName: 'groupStore',
  })
}

const localSetItem = (key, value) => {
  setStoreName()
  localforage.setItem(key, value)
}

const getGroupDataById = async (key) => {
  setStoreName()
  return await localforage.getItem(key)
}

export default { localSetItem, getGroupDataById }
