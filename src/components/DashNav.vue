<template>
    <div class="flex justify-center w-full fixed bottom-0 left-0 z-10 bg-dark">
        <div class="w-80 p-3 bg-Owngreen flex justify-around rounded-sm align-middle relative">
            <RouterLink to="/product" class="w-12 h-12 bg-green-700 rounded-full"></RouterLink>
            <RouterLink to="/setting" class="w-12 h-12 bg-green-700 rounded-full"></RouterLink>
            <RouterLink to="/" class="w-16 h-16 rounded-full bg-green-700 absolute bottom-12"></RouterLink>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            div: "lorem ispum dollar isit amet",
        }
    }
}
</script>
<style scoped>
    
</style>