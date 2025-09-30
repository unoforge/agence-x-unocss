<script setup>
const logos = [
    {
        id:1,
        label:"Spotify",
        logo:"/logos/spotify.png"
    },
    {
        id:2,
        label:"Spotify",
        logo:"/logos/spotify.png"
    },
    {
        id:3,
        label:"Spotify",
        logo:"/logos/spotify.png"
    },
    {
        id:4,
        label:"Spotify",
        logo:"/logos/spotify.png"
    },
    {
        id:5,
        label:"Paypal",
        logo:"/logos/paypallogo.png"
    },
    {
        id:6,
        label:"Spotify",
        logo:"/logos/spotify.png"
    },
]
</script>
<template>
    <section class="py20">
        <div class="max-w-7xl mx-auto px5 sm-px10 md-px12 lg-px5 space-y-10">
            <div class="text-center space-y-6 max-w-2xl mx-auto">
                <h1 class="text-3xl font-bold text-fg-title capitalize">Trusted by companies like</h1>
            </div>
            <div class="flex justify-center flex-wrap gap4 children:flex children:items-center children:justify-center">
                <div v-for="logo in logos" :key="logo.id" class="p4 sm-p5 rd-lg border border-gray-1 dark-border-gray-9 group min-wmax">
                    <NuxtImg :src="logo.logo" height="60" :alt="logo.label" class="h7 sm-h10 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover-scale-105"/>
                </div>
            </div>
        </div>
    </section>
</template>