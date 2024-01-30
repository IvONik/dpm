<template>
    
    <div class="page">
        <div class="part1">
            <div class="title">Записаться на прием</div>
            здесь будет календарь
        </div>
        <div class="small__part">
            <button class="btn" @click="logout()">Выйти</button>
            <button class="btn" @click="addReview()">Оставить отзыв</button>

        </div>
    </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
import { mapState, mapMutations } from 'vuex';

export default {
    data() {
        return {
            buttons: 'Выйти',
            loading: true,
        };
    },
    methods: {
        ...mapMutations(['IS_AUTH', 'SET_USERID']),
        async logout() {
            const auth = getAuth();
            signOut(auth)
                .then(() => {
                this.$router.push('/');
                console.log('logout');
                this.IS_AUTH(false);
                this.SET_USERID('');                
                // this.$store.state.auth = false;                
            }).catch((error) => {
                console.log(error);
            });
        },
        addReview() {
            this.$router.push('/addReview');
        }
    },
    computed: {
        ...mapState(['auth'])
    },
    
}
</script>

<style lang="scss" scoped>
.page {
    display: flex;
    justify-content: space-around;
}

.part1 {
    height: 400px;
}

.small__part {
    width: 30%;
}

.btn {
    // min-width: 200px;
    width: 100%;
    height: 40px;
    border-radius: 15px;
    background-color: #64ABD0;
    border: 0;
    font-size: 20px;
    margin-bottom: 10px;
}

.btn:hover {
    background-color: #FFD973;

}
</style>