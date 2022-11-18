<template>
    <div class="bg-dark text-color-def md:p-6 min-h-screen pb-24">
        <!-- top -->
        <div class="flex justify-between align-middle">
            <h1 class="text-Owngreen text-left px-24 font-bold p-6 text-2xl capitalize">Cart</h1>
            <div class="m-6 w-7 h-7 bg-yellow-600 rounded cursor-pointer"></div>
        </div>
        <!-- waiting checkout -->
        <div class="p-6 my-10">
            <div class="flex justify-center align-middle">
                <div class="w-44 h-44 bg-gray-600 rounded"></div>
                <div class="flex flex-col max-w-xs p-4">
                    <h1 class="font-bold text-Owngreen">Name of product</h1>
                    <p class="w-32 text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum repellat</p>
                    <a href="./thank_you" class=" mt-5 cursor-pointer p-4 bg-Owngreen text-center text-dark font-bold uppercase text-sm rounded">Checkout</a>
                </div>
            </div>
        </div>
        <!-- has not made purchase -->
        <div class="py-6 text-center">
            <p class="text-3xl text-gray-600 font-bold p-6 mb-10">Your cart is empty</p>
            <a class="p-4 bg-Owngreen text-dark font-bold text-xs rounded capitalize shadow cursor-pointer" href="./how_to">How to place your first order</a>
        </div>
        <!-- has bought -->
        <div class="w-full flex justify-center flex-col overflow-hidden">
            <h1 class="text-Owngreen text-center font-bold p-6 text-2xl capitalize">Ordered Items({{ordered.length}})</h1>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            ordered: [{ product: "Name of Product or services", unit: 100, amt: 10000, },
                { product: "Name of Product or services", unit: 100, amt: 10000, }
            ]
        }        
    }
}
</script>
<style scoped>
    
</style>