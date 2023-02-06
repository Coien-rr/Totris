import localforage from 'localforage'

const categoryTable = 'categoryTable'

const localSetItem = (key, value) => {
  const categoryKey = `${categoryTable}/${key}`
  localforage.setItem(categoryKey, value)
}

const getCategoryById = async (key) => {
  const categoryKey = `${categoryTable}/${key}`
  return await localforage.getItem(categoryKey)
}

export { getCategoryById, localSetItem }
