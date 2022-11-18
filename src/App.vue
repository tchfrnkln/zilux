<script setup>
import { RouterLink, RouterView } from 'vue-router'
import DashNavVue from './components/DashNav.vue';
</script>

<template>
  <div class="w-screeen min-h-screen bg-dark">
    <RouterView/>
  </div>
    <DashNavVue/>
</template>

<style>
.bg-dark {
      background: #222222;
      /* background:rgb(206, 205, 205); */
      /* background:#052475; */
    }
  
    .text-dark {
      color: #222222;
      /* color: whitesmoke; */
    }
  
    .bg-Owngreen {
      background: #0FE042;
      /* background:#053712; */
    }
  
    .text-Owngreen {
      color: #0FE042;
      /* color: #053712; */
    }
  
    .text-color-def {
      /* color: black; */
      color: whitesmoke;
    }
  
    button {
      cursor: pointer;
    }
  
    .only_text button {
      display: none;
    }
        /* general transitions */
        .v-enter-active,
        .v-leave-active {
          transition: opacity 0.5s ease;
        }
    
        .v-enter-from,
        .v-leave-to {
          opacity: 0;
        }
</style>
