<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-sky-300 p-8 overflow-x-clip">
    <div
      class="flex flex-col flex-grow items-center justify-center sm:mt-[12vh]">
      <Hero />
      <ChatBox :showChat class="mt-3" />
    </div>
    <Footer class="mt-auto pt-2 -mb-4" />
  </div>
</template>

<script setup>
// import './index.css'; // Import Tailwind CSS
// import Hero from '@/components/Hero.vue'
// import ChatBox from '@/components/ChatBox.vue'
// import Footer from '@/components/Footer.vue'
// import { ref, onMounted, watch, nextTick } from 'vue';

//show hide chat
const showChat = ref(false)

onMounted(() => {
  setTimeout(() => {
    showChat.value = true
  }, 2000)
  setTimeout(() => {
    showChat.value = false
    console.log('showChat 10', showChat.value)
  }, 7000)
})

</script>

<style scoped>
/* Custom class for the chat window height */
.h-400px {
  height: 400px;
  /* Fixed height */
}

/* Responsive adjustment for smaller screens */
@media (max-width: 768px) {
  .h-400px {
    height: 100vh;
    /* Full viewport height on smaller devices */
  }
}

/* Fade Transition for Single Items and Groups */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-move {
  transition: transform 0.5s;
}
</style>
