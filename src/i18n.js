import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        message: {
            hello: 'Hello World',
        }
    },
    fa: {
        message: {
            hello: 'سلام دنیا'
        }
    }
}


const i18n = createI18n({
    locale: 'fa',
    fallbackLocale: 'en',
    messages,
})

export default i18n