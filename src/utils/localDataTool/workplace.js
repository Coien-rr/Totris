import localforage from 'localforage'

const workplaceTable = 'workplaceTable'

const localSetItem = async (key, value) => {
  const workplaceKey = `${workplaceTable}/${key}`
  return await localforage.setItem(workplaceKey, value)
}

const getCategoryDataById = async (key) => {
  const workplaceKey = `${workplaceTable}/${key}`
  return await localforage.getItem(workplaceKey)
}

export { localSetItem, getCategoryDataById }
