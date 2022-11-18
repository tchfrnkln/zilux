<template>
    <div class="bg-dark w-full min-h-screen flex p-6 text-color-def pb-24">
        <div class="w-full p-6 flex flex-col justify-center">
            <!-- product -->
            <div class="w-full flex flex-col md:flex-row justify-center overflow-hidden">
                <!-- head -->
                <div class="p-6 flex justify-center align-middle flex-col md:flex-row relative">
                    <!-- url to copy link and share -->
                    <div class="w-6 h-6 bg-yellow-800 rounded absolute top-0 right-0 cursor-pointer"></div>
                    <!-- image top -->
                    <div class="w-52 h-52 md:h-72 md:w-72 cursor-pointer hover bg-gray-600 shadow rounded mx-1 mb-5 relative">      
                        <div class="w-full bg-gray-800 opacity-60 absolute bottom-0 right-0 p-2 flex justify-center">
                            <p class="w-2 h-2 rounded-full bg-white mr-1"></p>
                            <p class="w-2 h-2 rounded-full bg-white mr-1"></p>
                        </div>
                    </div>
                    <!-- name reviews sales -->
                    <div class="max-w-sm md:p-6">
                        <p class="text-xs font-bold text-Owngreen">Over {{sales}} verified sales</p>
                        <h1 class="text-2xl font-bold">{{product_name}}</h1>
                        <!-- button -->
                        <div class="m-4 flex flex-col">
                            <p class="cursor-pointer"><p class="text-Owngreen font-bold">4.5 star</p> of 1000reviews</p>
                            <a class="p-4 mt-6 capitalize bg-Owngreen rounded w-60 text-dark font-bold shadow text-center" href="./cart">Place an order</a>
                        </div>
                    </div>
                </div>
                <!-- contents brief -->
                <div class="flex p-6">
                    <div class="bg-yellow-700 p-6 md:m-4 rounded text-dark h-max">
                        <h2 class="text-xl font-bold">{{product_name}}</h2>
                        <div class="p-3">{{lorem}}
                        </div>
                    </div>
                </div>
            </div>
            <!-- more like products -->
            <h1 class="text-2xl capitalize text-Owngreen font-bold">More Like this</h1>
            <div class="flex p-3 flex-col overflow-hidden">
                <div class="w-max md:w-full grid grid-cols-2 md:grid-cols-4 justify-center m-4 gap-2">
                    <div class="w-32 h-32 md:w-52 md:h-52 rounded bg-gray-700"></div>
                    <div class="w-32 h-32 md:w-52 md:h-52 rounded bg-gray-700"></div>
                    <div class="w-32 h-32 md:w-52 md:h-52 rounded bg-gray-700"></div>
                    <div class="w-32 h-32 md:w-52 md:h-52 rounded bg-gray-700"></div>
                </div>
            </div>
            <div class="p-6">
                {{lorem}}<br>{{lorem}}
            </div>
            <div class="m-4 flex flex-col">
                <p class="cursor-pointer">
                <p class="text-Owngreen font-bold">4.5 star</p> of 1000reviews</p>
                <a class="p-4 mt-6 capitalize bg-Owngreen rounded w-60 text-dark font-bold shadow text-center" href="./cart">Place
                    an order</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            product_name:"Name of Product or Service - Plus a One sentence catch phrase",
            sales: 1000,
            more_content: false,
            lorem: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ad alias sit debitis modi quibusdam blanditiis perferendis inventore rem sed esse iste, qui, commodi repellendus suscipit dignissimos cupiditate accusantium consequuntur? inventore rem sed esse iste, qui, commodi repellendus suscipit dignissimos cupiditate accusantium consequuntur?",
        }
    }
}
</script>
<style scoped>
    
</style>