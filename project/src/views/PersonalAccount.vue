<template>
    <div>
        <NavComp/>
            <div class="page">
                <div class="big__part">
                    <div class="title">Записаться на прием</div>
                    здесь будет календарь
                </div>
                <div class="small__part">
                    <button class="btn" @click="logout()" >Выйти</button>
                </div>
            </div>
    </div>
</template>

<script>
import NavComp from '@/components/NavComp.vue';
import { getAuth, signOut } from "firebase/auth";

    export default {
        data() {
            return {
                buttons: 'Выйти',
            };
        },
        methods:{
            logout(){
                const auth = getAuth();
                signOut(auth).then(() => {                
                this.$router.push('/') 
                console.log('logout');
                }).catch((error) => {
                // An error happened.
                });
            }
        },
        components: { NavComp }
}
</script>

<style lang="scss" scoped>
.page{
    display: flex;
    justify-content: space-around;
}
.big__part{
    width: 60%;
    border: 1px solid black;
    border-radius: 15px;
    height: 400px;
}

.small__part{
    width: 30%;
}
.btn {
    width: 360px;
    height: 40px;
    border-radius: 15px;
    background-color: rgb(217, 196, 255);
    border: 0;
    font-size: 20px;
    margin-bottom: 10px;
}
.btn:hover{
    background-color: rgb(142, 86, 245);

}
</style>