<template>
    <div v-if="!this.$store.state.auth">
        <form class="card auth-card" @submit.prevent="submitHandler">
            <div class="card-content">
                <div class="title">Войдите в личный кабинет</div>

                <div class="input-field"
                    :class="{ 'error__input': textUserVisible === true }" 
                    @click="newInput">
                    <div class="label"><label for="email">Email</label></div>
                    <br>
                    <input id="email" type="email" v-model.trim="email" required>
                    <p v-show="textUserVisible" class="error__input">{{ textUser }}</p>
                </div>

                <div class="input-field"                
                @click="newInput" >
                    <div class="label"><label for="password">Пароль</label></div>
                    <br>
                    <input id="password" type="password" v-model.trim="password" required>                    
                </div>
            </div>
            
            <div class="card-action">
                <div>
                    <button class="btn" type="submit">Войти
                    </button>
                    <br>
                    <div class="label">или</div>
                    <br>
                    <router-link to="/register"><button class="btn">Зарегистрироваться</button></router-link>
                </div>
            </div>
        </form>
    </div>
    <LKComp v-if="$store.state.auth" />
</template>

<script>

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import PersonalAccount from './PersonalAccount.vue';
import LKComp from '@/components/LKComp.vue';
import { mapState, mapMutations } from 'vuex';
import { getDatabase, ref, onValue } from "firebase/database";

export default {
    name: 'DiplomSignupView',
    data() {
        return {
            email: '',
            password: '',
            textUser: 'Проверьте ваш логин или пароль',            
            textUserVisible: false,           
        };
    },    
    methods: {
        ...mapMutations(["IS_AUTH", "SET_USERID", "SET_USER_NAME"]),
        async submitHandler() {
            try {
                const auth = getAuth();
                const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
                const user = userCredential.user;

                this.$router.push("/lk/" + user.uid);
                this.IS_AUTH(true);
                this.SET_USERID(user.uid);
                this.SET_USER_NAME(await this.getName());
                console.log(this.$store.state.userName);

            } catch (error) {
                const errorCode = error.code;                
                if (errorCode === "auth/invalid-credential") {
                    this.textUserVisible = true;                    
                }                
            }
        },
        async getName() {
            try {
                const db = getDatabase();
                const auth = getAuth();

                const userId = auth.currentUser.uid;
                let username = "";

                await onValue(ref(db, "/users/" + userId), (snapshot) => {
                    username = (snapshot.val() && snapshot.val().username) || "Anonymous";
                });
                console.log(userId);
                console.log(username);
                return username;
            } catch (err) {
                console.error(err);
                return "Anonymous";
            }
        },
        newInput() {
            this.textUserVisible = false;
            this.textPasswordVisible = false; 
        }
    },
    components: {
        PersonalAccount, LKComp
    },
    computed: {
        ...mapState(['userID', 'userName'])
    },
};
</script>

<style lang="scss" scoped>
</style>