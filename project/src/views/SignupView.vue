<template>
    <NavComp />    
    <div v-if="!this.$store.state.auth">
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
    </div>
    <div v-if="this.$store.state.auth"><LKComp/>
        
    </div>
    
</template>

<script>
import NavComp from '@/components/NavComp.vue';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import PersonalAccount from './PersonalAccount.vue';
import LKComp from '@/components/LKComp.vue';
import { mapState, mapMutations } from 'vuex';

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
        ...mapMutations(['IS_AUTH','SET_USERID']),
        async submitHandler() {  
            const auth = await getAuth();
                signInWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {                    
                    const user = userCredential.user;
                    // this.$router.push('/LK')   
                    this.$router.push('/lk/'+ user.uid) 
                    this.IS_AUTH(true)
                    this.SET_USERID(user.uid)
                    // this.$store.state.auth = true 
                    // this.$store.commit('IS_AUTH', true); 
                    // this.$store.state.userID =  user.uid  
                    // console.log(this.$store.state.userID);  
                    // console.log(this.$store.state.auth);          
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert('Проверьте логин или пароль')
                });                
        },        
    },
    components: { NavComp, PersonalAccount, LKComp },
   computed:{
    ...mapState(['userID'])
   }
    
};
</script>

<style lang="scss" scoped>
</style>