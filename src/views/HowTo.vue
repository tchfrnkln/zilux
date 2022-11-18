<template>
    <div class="w-full bg-dark flex justify-center align-middle p-6 pb-24">
        <div class="w-max p-6 relative">
            <h1 class="py-6 capitalize text-Owngreen text-2xl absolute font-bold">How to place your first order</h1>
            <div class="w-60 mt-24 bg-Owngreen rounded text-center flex flex-col justify-center align-middle p-6 text-sm text-dark shadow-lg" v-for="h in how_order">
                <div class="flex justify-center p-4">
                    <div class="w-32 h-16 bg-gray-700 rounded"></div>
                </div>
                <p class="capitalize p-2 font-bold">{{h.hd}}</p>
                <p>{{h.bdy}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            how_order: [{ hd: "Steps", bdy: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, nobis." }, { hd: "Steps", bdy: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, nobis." }, { hd: "Steps", bdy: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, nobis." }, { hd: "Steps", bdy: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, nobis." }],
            
        }
    }
}
</script>
<style scoped>
    
</style>