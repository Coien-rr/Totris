import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useWorkplaceStore } from '~/store'
import { localWorkplace } from '~/utils/localDataTool'

describe('Workplace Store tests', () => {
  beforeEach(() => {
    // 创建一个新 pinia，并使其处于激活状态，这样它就会被任何 useStore() 调用自动接收
    // 而不需要手动传递：
    // `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('use activeWorkplaceId() to get activeWorkplace', () => {
    const workplaceStore = useWorkplaceStore()
    expect(workplaceStore.getActiveWorkplaceId).toEqual(1)
  })
})

describe('Workplace LocalStore', () => {
  it('use localSetItem() to set local data', () => {
    const workplaceData = [
      { id: 1, name: 'Totris', icon: '🎯', isActive: 'true' },
      { id: 2, name: 'todoServer', icon: '🗃️', isActive: 'false' },
    ]
    localWorkplace.localSetItem('workplaceData', workplaceData).then((value) => {
      console.log(value)
    }).catch((err) => {
      console.error(err)
    })
  })
})
