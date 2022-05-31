<script setup>
import { Icon } from '@iconify/vue'
import counterStore from "./stores/counterStore"
import themeStore from "./stores/themeStore"
</script>

<template>
    <div :class="themeStore().darkMode ? 'bg-[#181818] text-[#fcfcfc]' : 'bg-[#fcfcfc] text-[#181818]'"
        class="h-screen flex flex-col items-center justify-center select-none">
        <h1 class="text-4xl font-light animate-bounce">VueJS App</h1>
        <h1 class="text-lg font-light my-4">{{ $t('message.hello') }}</h1>
        <div class="flex items-center mb-12 mt-4">
            <Icon @click="counterStore().decrement"
                :class="themeStore().darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-300 text-gray-900'"
                class="text-4xl mx-1 cursor-pointer rounded-full p-2 focus:outline-none" icon="ph-minus" />
            <p class="text-4xl mx-4">{{ counterStore().count }}</p>
            <Icon @click="counterStore().increment"
                :class="themeStore().darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-300 text-gray-900'"
                class="text-4xl mx-1 cursor-pointer rounded-full p-2 focus:outline-none" icon="ph-plus" />
        </div>
        <div class="flex">
            <Icon @click="themeStore().toggleTheme" class="text-2xl mx-1 cursor-pointer focus:outline-none"
                icon="ph-moon" v-tooltip="'Change Theme'" />
            <Icon class="focus:border-none active:border-none visited:border-none  text-2xl mx-1 cursor-pointer"
                icon="ph-translate" @click="$i18n.locale = $i18n.locale === 'en' ? 'fa' : 'en'"
                v-tooltip="'Change Language'" />
        </div>
        <div class="absolute bottom-4 right-8">
            <a href="https://vitejs.dev/" target="_blank">
                <Icon class="text-2xl mx-1 focus:outline-none" icon="file-icons:vite" v-tooltip="'ViteJS'" />
            </a>
            <a href="https://vuejs.org/" target="_blank">
                <Icon class="text-2xl mx-1 focus:outline-none" icon="teenyicons:vue-outline" v-tooltip="'VueJS'" />
            </a>
            <a href="https://windicss.org/" target="_blank">
                <Icon class="text-2xl mx-1 focus:outline-none" icon="mdi:weather-windy" v-tooltip="'Windi CSS'" />
            </a>
            <a href="https://iconify.design/" target="_blank">
                <Icon class="text-2xl mx-1 focus:outline-none" icon="simple-icons:iconify" v-tooltip="'Iconify'" />
            </a>
            <a href="https://vue-i18n.intlify.dev/" target="_blank">
                <Icon class="text-2xl mx-1 focus:outline-none" icon="ph:globe-stand-bold" v-tooltip="'Vue i18n'" />
            </a>
            <a href="https://pinia.vuejs.org/" target="_blank">
                <Icon class="text-2xl mx-1 focus:outline-none" icon="icon-park-outline:pineapple" v-tooltip="'Pinia'" />
            </a>
        </div>
    </div>
</template>