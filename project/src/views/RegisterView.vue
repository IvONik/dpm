<template>
    
    <form class="card auth-card" @submit.prevent="submitHandler">
        <div class="card-content">
            <div class="title">{{ translate('btnRegister') }}</div>

            <div class="input-field" 
            :class="{ 'error__input': textUserVisible === true }" 
            @click="newInput">
                <div class="label">
                    <label for="email">Email</label>
                    <br>
                </div>
                <input id="email" type="email" v-model.trim="email" required>
                <p v-show="textUserVisible" class="error__input">{{ textUser }}</p>
            </div>

            <div class="input-field" @click="newInput">
                <div class="label">
                    <label for="name">{{ translate('enterYourName') }}</label>
                    <br>
                </div>
                <input id="name" type="text" v-model.trim="name" required>
                <p v-show="textNameVisible" class="error__input">{{ textName }}</p>
            </div>

            <div class="input-field" 
            :class="{ 'error__input': textPasswordVisible === true }" @click="newInput">
                <label for="password">{{ translate('passwordRegister') }}</label>
                <br>
                <input id="password" type="password" v-model.trim="password" required>
                <p v-show="textPasswordVisible" class="error__inpu">{{ textPassword }}</p>
            </div>

        </div>
        <div class="card-action">
            <div>
                <button class="btn">{{ translate('btnRegister') }}</button>
            </div>
        </div>
    </form>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from '@/main.js';
import { collection, addDoc } from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database";
import { mapState, mapMutations } from 'vuex';
import translateMixin from '@/mixins/translateMixin';

export default {
    data() {
        return {
            email: '',
            password: '',
            name: '',
            textUser: 'Такой пользователь уже существует',
            textPassword: 'Пароль должен состоять минимум из 6 символов',
            textName: 'Нам важно знать ваше имя',
            textUserVisible: false,
            textPasswordVisible: false,
            textNameVisible: false,
        };
    },
    methods: {
        ...mapMutations(['IS_AUTH','SET_USERID', 'SET_USER_NAME']),
        async submitHandler() {
            try {
                const auth = getAuth();
                const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
                const user = userCredential.user; 
                const db = getDatabase();
                    set(ref(db, 'users/' + user.uid), {
                        username: this.name,
                        email: this.email,                        
                    });

                this.IS_AUTH(true)
                this.SET_USERID(user.uid)
                this.SET_USER_NAME(this.name)
                this.$router.push('/lk/' + user.uid) 
                
            } catch (error) {
                const errorCode = error.code;
                const errorMessage = error.message;

                if (errorCode === "auth/email-already-in-use") {
                    this.textUserVisible = true;
                }
                if (errorCode === "auth/weak-password") {
                    this.textPasswordVisible = true;
                }
            }
        },        
        newInput() {
            this.textUserVisible = false;
            this.textPasswordVisible = false; 
        }
    },
    computed:{
    ...mapState(['userID'])
   },
   mixins: [translateMixin],
   
}
</script>

<style lang="scss" scoped>

</style>