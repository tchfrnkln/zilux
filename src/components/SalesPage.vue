<template>    
<keep-alive>
    <div class="p-6 flex justify-center align-middle bg-dark text-color-def">
        <form method="post" enctype="multipart/form-data" action="http://localhost:5175/upload" class="my-10 w-80 max-w-sm md:max-w-md mb-24">
            
            <div class="p-6">
                <input type="file" name="avt">
                <input type="submit" value="submit" class="cursor-pointer bg-green-700 p-4 m-4 rounded">
            </div>
            
            
            
            <h1 class="text-Owngreen text-sm font-medium text-right border-2 border-transparent border-b-green-700 rounded px-4 cursor-pointer">editable</h1>
            
            <div class="my-2 w-full flex justify-center flex-col">
                <div class="text-xl text-center py-6 font-bold capitalize" contenteditable="true">{{product_name}}</div>                
                <div class="font-normal p-4" contenteditable="true">{{contents}}</div>
                <div class="flex justify-center align-middle w-70 h-48 bg-gray-700 rounded m-6" contenteditable="true">
                </div>
                <div class="font-normal p-4" contenteditable="true">{{contents}}</div>       
                <div class="w-70 h-48 bg-gray-700 rounded m-6" contenteditable="true"></div>
                <div class="font-normal p-4" contenteditable="true">{{contents}}</div>       
            </div>
            <div class="w-full flex justify-center align-middle">
                <a href="./product" class="w-80 text-center m-6 p-4 text-dark bg-Owngreen font-bold rounded shadow transistion duration-700">Create</a>
            </div>
        </form>
    </div>
</keep-alive>
</template>
<script>
export default {
    data() {
        return {
            ct:0,
            product_name:"Product name",
            contents:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, repudiandae deserunt voluptate quasi hic illum minima consequuntur, distinctio magni, explicabo dolor laudantium? Quibusdam eligendi quaerat praesentium sit delectus ab! Commodi!",
        }
    }, methods: {
        
    }
}
</script>
<style scoped>
    
</style>