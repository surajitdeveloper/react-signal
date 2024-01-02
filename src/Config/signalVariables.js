import { signal } from '@preact/signals-react'

import { LOGIN_API } from './constant'

const states = signal({
  machineTypeList: [
    { machineId: 1, machineType: 'Machine type 1' },
    { machineId: 2, machineType: 'Machine type 2' },
    { machineId: 3, machineType: 'Machine type 3' }
  ],
  subModuleList: [
    { subModuleId: 1, subModule: 'Sub Module 1' },
    { subModuleId: 2, subModule: 'Sub Module 2' },
    { subModuleId: 3, subModule: 'Sub Module 3' }
  ],
  sitesList: [
    { siteId: 1, sites: 'Sites 1' },
    { siteId: 2, sites: 'Sites 2' },
    { siteId: 3, sites: 'Sites 3' }
  ],
  errorMessage: [{ name: LOGIN_API, status: '', message: '' }]
})

const updateValue = (input, value) => {
  states.value = { ...states.value, [input]: value }
}

export { states, updateValue }
