import { defineStore } from 'pinia'

interface TTBaseStore {
  headerActiveTap: string
  [prop: string]: any
}

export const useTTBaseStore = defineStore('TTBaseStore', {
  state: () => {
    const TTBaseStoreState: TTBaseStore = {
      headerActiveTap: '',
    }
    return TTBaseStoreState
  },
  actions: {
    setHeaderActiveTap(name: string) {
      this.headerActiveTap = name
    },
  },
})
