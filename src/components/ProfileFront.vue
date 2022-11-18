<template>
    <div class="p-6 flex flex-col bg-dark text-color-def relative">
        <!-- Top header -->
        <div class="w-full text-center fixed top-0 left-0 p-6 pt-10 flex justify-center flex-col bg-dark z-10">
            <div class="flex justify-center">
                <h1 class="text-Owngreen font-bold text-3xl">{{bus_name}}</h1>
                <div class="mr-3 relative">
                    <p class="w-2 h-2 bg-Owngreen rounded-full animate-ping transition duration-500 absolute top-0 left-0">
                    </p>
                    <p class="w-2 h-2 bg-Owngreen rounded-full absolute top-0 left-0"></p>
                </div>
            </div>
            <h3 class="pt-4">{{u_name}}</h3>
            <h4 class="text-Owngreen p-2 font-bold text-xs">{{review}} star</h4>
        </div>
        <!-- body -->
        <div class="flex justify-center my-28">
            <div class="w-80 justify-center flex-col align-middle grid grid-cols-2">
                <div class="flex my-4 p-6 justify-center flex-col align-middle border-b-gray-700 rounded-xl shadow-lg cursor-pointer" v-for="pro in profile" :key="pro">
                    <div class="w-full p-6 flex justify-center">
                        <div class="w-8 h-8 bg-gray-600 rounded-full"></div>
                    </div>
                    <h1 class="font-bold text-center">{{pro.head}}</h1>
                </div>        
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            bus_name: "Ziluz co.",
            u_name: "@zilus",
            review: 4.2,
            profile: [{ head: "Customers", link: "" }, { head: "Reviews", link: "" }, { head: "Top Products", link: "" },{head: "Stories", link: "" }]
        }
    },
    methods:{
        
    }
}
</script>
<style scoped>
    .list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>