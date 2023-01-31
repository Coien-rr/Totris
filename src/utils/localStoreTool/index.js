function checkParam(key, value) {
  if (typeof key !== 'string')
    throw new Error('key is required to string')

  if (typeof value !== 'object' || value === undefined)
    throw new Error('value is required')
}

const setLocalStorage = (key, value) => {
  checkParam(key, value)
  // value to string
  const str = JSON.stringify(value)
  localStorage.setItem(key, str)
}

const getLocalStorage = (key) => {
  if (typeof key !== 'string')
    throw new Error('key is required to string')

  const data = localStorage.getItem(key)
  return JSON.parse(data)
}

export { setLocalStorage, getLocalStorage }
