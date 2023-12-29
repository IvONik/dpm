<template>
    <NavComp />
    <form class="card auth-card" @submit.prevent="submitHandler">
        <div class="card-content"> <div class="title">Войдите в личный кабинет</div>
            <div class="input-field">
                <div class="label"><label for="email">Email</label></div>
                <br>
                <input id="email" type="email" v-model.trim="email" required>
            </div>
            <div class="input-field">
                <div class="label"><label for="password">Пароль</label></div>
                <br>
                <input id="password" type="password" v-model.trim="password" required>
            </div>
        </div>
        <div class="card-action">
            <div>
                <button class="btn waves-effect waves-light auth-submit" type="submit">Войти
                </button>
                <br>
                <div class="label">или</div>
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
            const auth = getAuth();
                signInWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {                    
                    const user = userCredential.user;
                    this.$router.push('/LK')   
                    this.$store.state.auth = true                  
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
.label{
    margin-bottom: 0px;
    color: #c1d9f0;
    //color: $colorText;
    
}

.card{    
    font-size: 20px;    
    width: 70%;
    background-color: #2E3784;
    border-radius: 15px;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
}
.input-field {
    margin-bottom: 8px;

}
input {
    font-size: 20px;
    width: 360px;
    height: 40px;
    background-color: rgb(240, 243, 246);
    border-radius: 15px;
    margin-bottom: 8px;
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
    margin-bottom: 8px;
}
.btn:hover{
    
    background-color: #64ABD0;
    transition: .2s;

}
</style>