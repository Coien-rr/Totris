import localforage from 'localforage'

const workplaceTable = 'workplaceTable'

const localSetItem = (key, value) => {
  const workplaceKey = `${workplaceTable}/${key}`
  return localforage.setItem(workplaceKey, value)
}

const getCategoryDataById = async (key) => {
  const workplaceKey = `${workplaceTable}/${key}`
  return await localforage.getItem(workplaceKey)
}

export default { localSetItem, getCategoryDataById }
