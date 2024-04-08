<template>
    <div class="flex flex-col items-center justify-center mb-6 rounded-lg">
        <picture v-glitch>
            <source
                srcset="@/assets/1500x500.jpg"
                media="(min-width: 768px)"
            />
            <img
                src="@/assets/1500x500.jpg"
                alt="My Image"
                class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 h-auto
                min-w-[200px] 
                rounded-lg mx-auto hover:shadow-md transition-shadow animate-once"
            />
        </picture>
        <div class="cursor-default">
            <h1 v-glitch class="text-4xl font-bold text-pretty text-pink-100 text-center mt-8">
                {{ title }}
            </h1>
            <h2 class="text-3xl text-pretty text-pink-100 text-center">
                <span v-glitch class="italic text-orange-300 text-xl font-light  hover:font-mono hover:font-bold hover">w/ </span>
                <span v-glitch class="text-cyan-900 font-medium text-3xl font-mono tracking-[-.1em] "> {{ name }}</span>
            </h2>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('Illya Fefelov');
const title = ref('Full Iron Design ');

// Add your logic here

</script>

<style scoped>
.hero {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 5px;
}
</style>
