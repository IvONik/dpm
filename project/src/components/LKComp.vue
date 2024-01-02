<template>
   
        <div class="page">
                <div class="part1">
                    <div class="title">Записаться на прием</div>
                    здесь будет календарь
                </div>
                <div class="small__part">
                    <button class="btn" @click="logout()" >Выйти</button>
                    <button class="btn" >Оставить отзыв</button>

                </div>
            </div>
    
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
    export default {
        data() {
            return {
                buttons: 'Выйти',
            };
        },
        methods:{
            async logout(){
                const auth = getAuth();
                signOut(auth).then(() => {                
                this.$router.push('/') 
                console.log('logout');
                this.$store.state.auth = false
                }).catch((error) => {
                // An error happened.
                });
            }
        },
        computed:{

        },
    }
</script>

<style lang="scss" scoped>
.page{
    display: flex;
    justify-content: space-around;
}
.part1{   
    height: 400px;
}

.small__part{
    width: 30%;
}
.btn {
    width: 360px;
    height: 40px;
    border-radius: 15px;
    background-color: #64ABD0;
    border: 0;
    font-size: 20px;
    margin-bottom: 10px;
}
.btn:hover{
    background-color: #FFD973;

}
</style>