<template>

    <div v-if="smallScreen === true">
        <nav class="box">
            <div class="box__nav">
                <router-link class="box__item text" v-for="button in linkArray" :key="button.id" :to="button.url"
                    :class="{ 'active': isLinkActive(button.url) }">
                    <img :src="button.img" alt="img" class="png">
                </router-link>
            </div>
            <div class="hello">                
                <input type="checkbox" id="toggle" @change="toggleTheme">
                {{ this.$store.state.userName }}
                <input type="checkbox" id="toggleLang" @change="toggleLocale">
            </div>
        </nav>
    </div>

    <div v-else>
        <div class="hello">
            <input type="checkbox" id="toggle" @change="toggleTheme">
            {{ this.$store.state.userName }}
            <input type="checkbox" id="toggleLang" v-model="locale" @change="toggleLocale">
        </div>
        <nav class="box">
            <router-link class="box__item text" v-for="button in linkArray" :key="button.id" :to="button.url"
                :class="{ 'active': isLinkActive(button.url) }">
                {{ translate(button.nameLink) }}
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
import { mapState, mapMutations } from 'vuex';
import { mapActions } from 'vuex';
import translateMixin from '@/mixins/translateMixin';

export default {
    name: 'DiplomNavComp',

    data() {
        return {
            linkArray: [
                {
                    id: '0',
                    nameLink: 'homePage',
                    url: '/',
                    img: homeBG,
                },
                {
                    id: '1',
                    nameLink: 'gamePage',
                    url: '/therapy',
                    img: tooth,
                },
                {
                    id: '5',
                    nameLink: 'contactPage',
                    url: '/contact',
                    img: pinimg,
                },
                {
                    id: '6',
                    nameLink: 'ourDoctorsPage',
                    url: '/doctors',
                    img: doctorimg,
                },
                {
                    id: '7',
                    nameLink: 'reviewsPage',
                    url: '/reviews',
                    img: starimg,
                },
                {
                    id: '8',
                    nameLink: `lkPage`,
                    url: '/lk',
                    img: lk,
                },
            ],
            smallScreen: false,
            locale: 'ru',
        };
    },
    computed: {
        isAuthenticated() {
            return this.$store.state.auth;
        },
    },
    mixins: [translateMixin],
    methods: {
        ...mapMutations(["SET_LOCALE"]),
        isLinkActive(url) {
            // return this.$route.path === url || (url === '/signup' && this.$route.path === '/LK' && this.$route.path === '/addReview');
            // return this.$route.path === url || (url === '/lk' && this.$route.path.startsWith('/lk/'));
            return this.$route.path === url || (url === '/lk' && this.$route.path.startsWith('/lk/'));
        },
        onResize() {
            this.smallScreen = window.innerWidth <= 425;
        },
        toggleTheme() {
            this.$store.dispatch('toggleTheme')
        },
        toggleLocale(event) {
            this.SET_LOCALE(event.target.checked ? 'en' : 'ru')
        },


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