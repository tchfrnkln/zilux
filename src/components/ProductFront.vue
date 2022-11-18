<template>
<div class="bg-dark pb-20 text-color-def p-6 min-h-screen relative">
    <h1 class="w-full fixed top-0 right-0 capitalize text-2xl font-bold p-6 text-Owngreen bg-dark px-10 z-10">{{itms}}({{prods.length}})</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 p-6 mt-16">
        <div class="flex p-2 flex-col shadow cursor-pointer mx-3 transition delay-75 duration-500 relative" v-for="prod in prods" :key="prod">
            <!-- products image and descr -->
            <a class="flex justify-center relative" :href="prod.to">
                <div class="w-56 h-56 bg-gray-700 rounded-sm"></div>
                <div class="px-4 text-left w-56 flex justify-center alin-middle flex-col">
                    <h2 class="font-bold text-Owngreen p-2">{{prod.name}}</h2>
                    <p class="not-italic font-medium text-sm">{{prod.dscr}}</p>
                </div>
                <div class="absolute bottom-0 right-0 text-Owngreen text-xs font-bold">{{store_stars}}</div>
            </a>
            <div class="w-7 h-7 absolute top-0 right-0 bg-yellow-800 rounded" @mouseenter="prod.copy = true" @mouseleave="prod.copy = false" @click="prod.copied='link copied'">
                <transition>
                    <p v-if="prod.copy" class="text-xs w-max text-color-def mt-12 text-center bg-gray-600 p-2 rounded ,mr-12">{{prod.copied}}</p>
                </transition>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            itms:"Selling Now",
            prods: [{ name: "Product 1", dscr: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", to: "main", copy: false, copied: "copy link" }, { name: "Product 1", dscr: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", to: "main", copy: false, copied:"copy link" }],
            store_stars:4.8,
            reviews: 10000,
        }
    }
}
</script>
<style scoped>

</style>