<template>
<div class="bg-dark p-6 min-h-screen pb-32">
    <h1 class="text-Owngreen text-left px-24 font-bold p-6 text-2xl capitalize">{{top}}</h1>
    <div class="p-6 flex justify-center align-middle relative">
        <div class="w-80 bg-dark rounded-sm flex justify-center align-middle flex-col">
            <div v-for="set in sets" :key="set" class="flex flex-col">
                <!-- contents -->
                <transition>
                <div class="flex flex-row m-4 p-5 justify-between bg-gray-700 rounded-lg">
                    <h2 class="text-white font-bold">{{set.h2}}</h2>
                    <a class="text-Owngreen text-sm cursor-pointer" @click="set.bool = !set.bool; if(set.bool){set.val = 'save'}else{set.val = 'edit'}">{{set.val}}</a>
                </div>
                </transition>
                <!-- set vals -->
                <transition>
                    <div v-if="set.bool" class="m-4 p-5 bg-gray-600 rounded flex justify-center flex-col text-color-def">
                        Set 1 - value
                        Set 1 - value
                        Set 1 - value
                    </div>
                </transition>
            </div>
        </div>
    </div>
    <div class="w-full flex justify-center">
        <a class="text-sm font-bold shadow rounded-full w-52 p-4 bg-Owngreen border-2 border-gray-800 text-dark flex justify-center align-center" href="./page">new</a>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            top:"settings",
            sets: [{ h2: "Theme", bool: false, val: "edit" }, { h2: "Payment", bool: false, val:"edit"}, { h2: "Currency", bool: false, val:"edit"}],
        }
    },
    methods: {
    }
}
</script>
<style scoped>
    
</style>