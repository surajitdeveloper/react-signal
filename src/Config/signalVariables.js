import { signal } from '@preact/signals-react'

export const states = signal({
  username: '',
  password: '',
  machineType: 'Machine type 1',
  subModule: 'Sub Module 1',
  sites: 'Sites 1',
  machineName: ''
})

export const updateValue = (input, value) => {
  states.value = { ...states.value, [input]: value }
}
