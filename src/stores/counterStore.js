import { defineStore } from 'pinia'

const counterStore = defineStore('counterStore', {
    state: () => {
        return { count: 0 }
    },
    actions: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        },
    },
})

export default counterStore