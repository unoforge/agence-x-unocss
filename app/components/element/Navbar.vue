<template>
    <header class="absolute inset-x-0 top-0 z50 py6">
        <div class="w-full px5 sm-px10 md-px12 lg-px5 mx-a max-w-7xl">
            <nav class="w-full flex justify-between gap-6 relative">
                <div class="min-w-max inline-flex relative">
                    <nuxt-link to="/" class="relative flex items-center gap-3">
                        <span class="flex">
                            <span class="w3 h6 rd-l-full flex bg-emerald-6"></span>
                            <span class="h6 rd-r-full flex bg-teal-4 mt1.5"></span>
                        </span>
                        <div class="inline-flex text-lg text-fg-title font-semibold">
                            Estavis
                        </div>
                    </nuxt-link>
                </div>

                <div aria-hidden="true" class="fixed bg-border-gray-7/50 inset-0 backdrop-filter backdrop-blur-xl bg-neutral-8/40" 
                     :class="navIsOpen ? 'flex lg-hidden' : 'hidden lg:!hidden'">
                </div>
                <div class="absolute lg-relative w-full flex duration-300 ease-linear
                    top-full lg-top b b-border lg-b-0 flex-col lg-flex-row gap-y-6 gap-x-4
                    lg-justify-between lg-items-center bg-bg lg-bg-transparent"
                    :class="navIsOpen ? 'translate-y-0 visible op-100' : 'translate-y-10 invisible op-0 lg-op-100 lg-visible lg-translate-y-0'">
                    <ul class="px-6 lg-px-0 pt-6 lg-pt0 flex flex-col lg-flex-row gap-y-4 gap-x-3 text-lg text-fg w-full lg-justify-center lg-items-center"
                        >
                        <li v-for="navItem in navItems" :key="navItem.id">
                            <nuxt-link to="#" class="duration-300 font-medium ease-linear hover-text-emerald-6 py3">
                                {{ navItem.text }}
                            </nuxt-link>
                        </li>
                    </ul>

                    <div class="lg-min-w-max flex items-center sm-w-max w-full pb-6 lg-pb0 px6 lg-px0">
                        <nuxt-link to="#" class="justify-center w-full sm-w-max btn btn-sm rd-md btn-outline btn-outline-gray">
                            Get Started
                        </nuxt-link>
                    </div>
                </div>

                <div class="min-w-max flex items-center gap-x-3">
                    <ui-toggle-theme />
                    <button aria-label="toggle navbar" @click="toggleNavBar()" 
                       class="lg-hidden lg-invisible outline-none w7 hauto flex flex-col relative bg-transparent">
                        <span class="w6 h0.5 rd-full transition-all duration-300 ease-linear"
                            :class="navIsOpen ? 'translate-y-1.5 rotate-40' : ''"></span>
                        <span class="w6 origin-center mt1 h0.5 rd-ful transition-all duration-300"
                            ease-linear :class="navIsOpen ? 'op-0 scale-x-0' : ''"></span>
                        <span class="w6 mt1 h0.5 rd-ful transition-all duration-300 ease-linear"
                            :class="navIsOpen ? '-translate-y-1.5 -rotate-40' : ''"></span>
                    </button>
                </div>
            </nav>
        </div>
    </header>
</template>
<script setup>
const navIsOpen = useState('navIsOpen', () => false)
const navItems = [
    {
        id: 1,
        text: "Home",
        href: "/",
    },
    {
        id: 2,
        text: "Services",
        href: "/",
    },
    {
        id: 3,
        text: "About us",
        href: "/",
    },
    {
        id: 4,
        text: "Features",
        href: "/",
    }
]

function toggleNavBar() {
    navIsOpen.value = !navIsOpen.value
    document.body.classList.toggle("overflow-y-auto")
}
function closeNavBar() {
    navIsOpen.value = false
    ocument.body.classList.add("overflow-y-auto")
}
</script>