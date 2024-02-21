<template>
    <div v-if="smallScreen === true">
        <nav class="box">
            <router-link class="box__item text" v-for="button in linkArray" :key="button.id" :to="button.url"
                :class="{ 'active': isLinkActive(button.url) }">
                <img :src="button.img" alt="img" class="png">
            </router-link>
        </nav>
    </div>

    <div v-else>
        <nav class="box">
            <router-link class="box__item text" v-for="button in linkArray" :key="button.id" :to="button.url"
                :class="{ 'active': isLinkActive(button.url) }">
                {{ button.nameLink }}
                <img :src="button.img" alt="img" class="png">
            </router-link>
        </nav>
    </div>
</template>

<script>

import homeBG from '@/assets/img/home_2.png';
import doctorimg from '@/assets/img/doctor.png';
import pinimg from '@/assets/img/phone-call.png';
import starimg from '@/assets/img/rating.png';
import tooth from '@/assets/img/tooth.png';
import lk from '@/assets/img/client.png';


export default {
    name: 'DiplomNavComp',

    data() {
        return {
            linkArray: [
                {
                    id: '0',
                    nameLink: 'Главная',
                    url: '/',
                    img: homeBG,
                },
                {
                    id: '1',
                    nameLink: 'Поиграем?',
                    url: '/therapy',
                    img: tooth,
                },
                {
                    id: '5',
                    nameLink: 'Как нас найти',
                    url: '/contact',
                    img: pinimg,
                },
                {
                    id: '6',
                    nameLink: 'Наши врачи',
                    url: '/doctors',
                    img: doctorimg,
                },
                {
                    id: '7',
                    nameLink: 'Отзывы',
                    url: '/reviews',
                    img: starimg,
                },
                {
                    id: '8',
                    nameLink: 'Личный кабинет',
                    url: '/lk',
                    img: lk,
                },
            ],
            smallScreen: false,
        };
    },
    computed: {
        isAuthenticated() {
            return this.$store.state.auth;
        },
    },
    methods: {
        isLinkActive(url) {
            // return this.$route.path === url || (url === '/signup' && this.$route.path === '/LK' && this.$route.path === '/addReview');
            return this.$route.path === url || (url === '/lk' && this.$route.path.startsWith('/lk/'));


        

        },
        onResize() {
            this.smallScreen = window.innerWidth <= 425;
        }
    },
    created() {
        window.addEventListener('resize', this.onResize);
        this.onResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.onResize)
    },

};
</script>

<style lang="scss" scoped></style>