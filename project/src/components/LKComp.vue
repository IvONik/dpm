<template>
    <div class="page">
        <div class="part1">
            <div class="title">{{translate('lkTitle')}}</div>
            здесь будет календарь
        </div>
        <div class="small__part">
            <button class="btn" @click="logout()">{{translate('btnLogOut')}}</button>
            <button class="btn" @click="addReview()">{{translate('btnAddReviews')}}</button>

        </div>
    </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
import { mapState, mapMutations } from 'vuex';
import translateMixin from '@/mixins/translateMixin';


export default {
    data() {
        return {
            buttons: 'Выйти',
            loading: true,
        };
    },
    methods: {
        ...mapMutations(['IS_AUTH', 'SET_USERID', 'SET_USER_NAME']),
        async logout() {
            const auth = getAuth();
            signOut(auth)
                .then(() => {
                    this.$router.push('/');
                    console.log('logout');
                    this.IS_AUTH(false);
                    this.SET_USERID('');
                    this.SET_USER_NAME('')

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
    mixins: [translateMixin],

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
    width: 100%;
    // height: 40px;
    border-radius: 15px;
    background-color: #64ABD0;
    border: 0;
    font-size: 20px;
    margin-bottom: 10px;
    padding: 4px 0 4px 0;
}

.btn:hover {
    background-color: #FFD973;

}
@media screen and (max-width: 425px){
    .page{
        justify-content: space-around;
        flex-direction: column-reverse;
        align-items: center;
    }
    .small__part{
        width: 60%;
    }
    .part1{
        width: 90%;
    }
}
</style>