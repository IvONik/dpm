<template>
    <NavComp />
    <div class="forma">
        <input type="text" required placeholder="ваше имя" v-model="name" class="input input__name">        
        <textarea maxlength="420" required placeholder="текст" class="input input__text" v-model="text"></textarea>
        <button class="btn" @click="addreview(arg, event)">оставить отзыв</button>
    </div>
</template>

<script>
import { db } from '@/main.js';
import { collection, addDoc } from "firebase/firestore"; 
 

import NavComp from '@/components/NavComp.vue';
    export default {
       data(){
        return{
            name:'',
            text:'',
            date:'',
        }
            
       }, 
       methods:{
        async addreview(){
           
            const docRef = await addDoc(collection(db, "reviews"), {
                name: this.name,
                text: this.text,
                date: new Date().getTime(),
                });
                console.log("Document written with ID: ", docRef.id);
        }
       },
       components:{NavComp}
    }
</script>

<style lang="scss" scoped>
.forma{
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 360px;
    margin-left: auto;
    margin-right: auto;
}
.input__name{
    height: 40px;
}
.input__text{
    height: 350px;
}

.input {
    font-size: 20px;    
    // background-color: rgb(174, 207, 241);
    border-radius: 15px;
    margin-bottom: 8px;
    padding-left: 15px;
    padding-right: 15px;
    border: 0;
    font-size: 20px;
}
.btn {    
    width: 360px;
    height: 40px;
    border-radius: 15px;
    background-color: rgb(148, 165, 196);
    border: 0;
    font-size: 20px;
    margin-bottom: 8px;
}
.btn:hover{    
    background-color: #64ABD0;
    transition: .2s;

}
</style>