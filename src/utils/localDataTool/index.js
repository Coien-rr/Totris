import localforage from 'localforage'
import localCategory from './category'
import localGroup from './group'

localforage.config({
  name: 'localTotris',
})

const localForageInit = () => {
  localforage.ready().then(() => {
    console.log('localForage is ready!')
    // category.localSetItem(1, 'testValue')
  })
}

export { localForageInit, localCategory, localGroup }
