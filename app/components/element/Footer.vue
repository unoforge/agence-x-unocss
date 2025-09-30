<script setup>
const footerLinks = [
    {
        id: 1,
        title: "Navigation",
        items: [
            {
                id: 1,
                label: 'Item',
                link: '#'
            },
            {
                id: 2,
                label: 'Item',
                link: '#'
            },
            {
                id: 3,
                label: 'Item',
                link: '#'
            },
            {
                id: 4,
                label: 'Item',
                link: '#'
            },
        ]
    },
    {
        id: 2,
        title: "Navigation",
        items: [
            {
                id: 1,
                label: 'Item',
                link: '#'
            },
            {
                id: 2,
                label: 'Item',
                link: '#'
            },
            {
                id: 3,
                label: 'Item',
                link: '#'
            },
            {
                id: 4,
                label: 'Item',
                link: '#'
            },
        ]
    },
    {
        id: 3,
        title: "Navigation",
        items: [
            {
                id: 1,
                label: 'Item',
                link: '#'
            },
            {
                id: 2,
                label: 'Item',
                link: '#'
            },
            {
                id: 3,
                label: 'Item',
                link: '#'
            },
            {
                id: 4,
                label: 'Item',
                link: '#'
            },
        ]
    }
]
</script>
<template>
    <footer pt="16 md:20" bg="neutral-1 dark:neutral-9">
        <div px="5 sm:10 md:12 lg:5" class="max-w-7xl mx-auto">
            <div text="neutral-7 dark:neutral-3" border-b="~ neutral-2 dark:neutral-8"
                class="w-full grid grid-cols-2 lg-grid-cols-4 gap-8 pb4">
                <div class="flex">
                    <nuxt-link to="#">
                        <span
                            class="text-transparent bg-clip-text bg-gradient-to-tr from-emerald-8 to-teal-4 font-bold text-2xl">U</span>
                        Unify-Ui
                    </nuxt-link>
                </div>
                <div class="flex items-center space-x-2">
                    <span i-carbon-location flex text-xl></span>
                    <span>Lubumbashi-RDC</span>
                </div>
                <div class="flex items-center space-x-2">
                    <span i-carbon-phone flex text-xl></span>
                    <span>+243 ......</span>
                </div>
                <div class="flex items-center space-x-2">
                    <span i-carbon-email flex text-2xl></span>
                    <span>info@dcssarl</span>
                </div>
            </div>
            <nav text="neutral-7 dark:neutral-3" class="grid grid-cols-2 md-grid-cols-3 lg-grid-cols-4 gap-y-10 gap-8 py-10">
                <div v-for="footerItem in footerLinks" :key="footerItem.id" class="space-y-5">
                    <h1 text="lg neutral-9 dark:neutral-1" class="font-semibold">
                        {{ footerItem.title }}
                    </h1>
                    <ul class="space-y-3">
                        <li v-for="item in footerItem.items" :key="item.id">
                            <nuxt-link :to="item.link" class="hover-text-emerald-6 dark-hover-text-emerald-5 duration-200">
                                {{ item.label }}
                            </nuxt-link>
                        </li>
                    </ul>
                </div>

                <div class="space-y-5 col-span-2 md-col-span-3 lg-col-span-1">
                    <h1 text="lg neutral-9 dark:neutral-1" class="font-semibold">
                        Subscribe to our newsletter
                    </h1>
                    <p class="max-w-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores debitis ex temporibus
                    </p>
                    <form action="" class="grid w-full relative max-w-xl">
                        <div class="flex flex-col gap-3 w-full relative">
                            <input type="email" bg="neutral-2 dark:neutral-8" un-border="~ neutral-3 dark:neutral-7"
                                class="w-full outline-none px3 py3 rd-full" placeholder="johndoe@gmail.com">
                            <button
                            border="~ transparent hover:#172554"
                                un-after="absolute content-empty inset-x-0 aspect-square scale-0 op-70 origin-center duration-300 ease-linear rd-full top-0 left-0 bg-#172554 hover:op-100 hover:scale-[2.5]"
                                class="w-full py3 sm-py0 sm-w-max sm-absolute sm-right-1 sm-inset-y-1 px4 text-sm flex sm-items-center justify-center outline-none bg-emerald-6 text-white rd-3xl relative overflow-hidden">
                                <span relative z10>
                                    Subscribe
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </nav>

            <div border-t="~ neutral-2 dark:neutral-8" un-text="neutral-7 dark:neutral-3"
                class="w-full flex flex-col md-flex-row gap-4 items-center sm-justify-between py3">
                <div text="center sm:left" class="flex sm-min-w-max">
                    <p> &copy; 2023 UnifyUI. All right reserved </p>
                </div>
                <div class="flex justify-center sm-justify-end w-full gap-3">
                    <nuxt-link to="#" aria-label="social link">
                        <span i-carbon-logo-facebook text-2xl flex></span>
                    </nuxt-link>
                    <nuxt-link to="#" aria-label="social link">
                        <span i-carbon-logo-linkedin text-2xl flex></span>
                    </nuxt-link>
                    <nuxt-link to="#" aria-label="social link">
                        <span i-carbon-logo-twitter text-2xl flex></span>
                    </nuxt-link>
                    <nuxt-link to="#" aria-label="social link">
                        <span i-carbon-logo-instagram text-2xl flex></span>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </footer>
</template>