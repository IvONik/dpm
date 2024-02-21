<template>
    <div>
        
        <LKComp />

        <!-- <div class="page">
                <div class="part1">
                    <div class="title">Записаться на прием</div>
                    здесь будет календарь
                </div>
                <div class="small__part">
                    <button class="btn" @click="logout()" >Выйти</button>
                </div>
            </div> -->
    </div>
</template>

<script>
import LKComp from '@/components/LKComp.vue';
// import { getAuth, signOut } from "firebase/auth";

export default {
    components: {
        LKComp
    },
   
}
</script>

<style lang="scss" scoped></style>