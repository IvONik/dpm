<template>
    <NavComp />


    <form class="card auth-card" @submit.prevent="submitHandler">
        <div class="card-content"> <div class="title">Войдите в личный кабинет</div>

            <div class="input-field">
                <label for="email">Email</label>
                <br>
                <input id="email" type="email" v-model.trim="email" required>
            </div>
            <div class="input-field">
                <label for="password">Пароль</label>
                <br>
                <input id="password" type="password" v-model.trim="password" required>


            </div>
        </div>
        <div class="card-action">
            <div>
                <button class="btn waves-effect waves-light auth-submit" type="submit">Войти
                </button>
                <br>
                или
                <br>
                <router-link to="/register"><button class="btn">Зарегистрироваться</button></router-link>
            </div>

        </div>
    </form>
</template>

<script>
import NavComp from '@/components/NavComp.vue';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
    name: 'DiplomSignupView',
    data() {
        return {
            email: '',
            password: '',
        };
    },
    mounted() {
    },
    methods: {
        async submitHandler() {
            // const formData = {
            //     email: this.email,
            //     password: this.password
            // }
            const auth = getAuth();
                signInWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {                    
                    const user = userCredential.user;
                    this.$router.push('/LK') 
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert('Проверьте логин или пароль')
                });
                
        },
    },
    components: { NavComp }
};
</script>

<style lang="scss" scoped>
.title{
    font-size: 50px;
    font-weight: 600;
    margin-bottom: 30px;
}
.card{
    width: 70%;
    background-color: rgb(182, 236, 236);
    border-radius: 15px;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
}
.input-field {
    margin-bottom: 16px;

}
input {
    width: 360px;
    height: 40px;
    background-color: rgb(240, 243, 246);
    border-radius: 15px;
    margin-bottom: 10px;
    padding-left: 15px;
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
    margin-bottom: 10px;
}
.btn:hover{
    background-color: rgba(124, 161, 165, 0.9);

}
</style>