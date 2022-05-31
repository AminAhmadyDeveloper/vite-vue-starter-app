import { defineStore } from 'pinia'

const themeStore = defineStore('themeStore', {
    state: () => {
        return { darkMode: false }
    },
    actions: {
        toggleTheme() {
            this.darkMode = !this.darkMode
        },
    },
})

export default themeStore