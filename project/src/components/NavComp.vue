<template>
    <div class="box">
        <router-link class="box__item"     
            v-for="button in linkArray" 
            :key="button.id" 
            :to="button.url"             
            :class="{ 'active': isLinkActive(button.url) }"    
            >{{ button.nameLink }}            
        </router-link>        
    </div>
</template>

<script>
export default {
    name: 'DiplomNavComp',

    data() {
        return {
            linkArray: [
                {
                    id: '0',
                    nameLink: 'Главная',
                    url: '/',                  
                },
                {
                    id: '1',
                    nameLink: 'Лечение',
                    url: '/therapy',                
                },
                {
                    id: '2',
                    nameLink: 'Протезирование',
                    url: '/prosthetics',            
                },
                {
                    id: '3',
                    nameLink: 'Установка брекет Систем',
                    url: '/bracket',
                },
                {
                    id: '4',
                    nameLink: 'Профессиональная чистка',
                    url: '/clean',
                },
                {
                    id: '5',
                    nameLink: 'Как нас найти',
                    url: '/contact',
                },
                {
                    id: '6',
                    nameLink: 'Наши врачи',
                    url: '/doctors',
                },
                {
                    id: '7',
                    nameLink: 'Отзывы',
                    url: '/reviews',
                },
                {
                    id: '8',                    
                    nameLink: 'Личный кабинет',
                    url: '/signup',
                },                

            ]
        };
    },
    computed: {
        isAuthenticated() {        
            return this.$store.state.auth;
        },
  },
    methods: {
        isLinkActive(url) {           
            return this.$route.path === url || (url === '/signup' && this.$route.path === '/LK' && this.$route.path === '/addReview');       
        },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/style/_vars.scss'; 

.box {    
    display: grid;    
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 12px;
    margin-bottom: 50px;

    &__item {
        width: 350px;
        height: 80px;
        // border: 1px solid #64ABD0;
        // border-radius: 20px;
        // color: #c1d9f0;  
        color: $colorText;           
        display: flex;  
        @include border;    
        align-items: center;        
        font-size: 25px;        
        justify-content: center;
        
    }
}

.box__item:hover {
    background-color: rgba(124, 161, 165, 0.9);
    transition: .2s;
    color: #141618;
}
.active{
    background-color: rgba(124, 161, 165, 0.9);   
    transition: .2s;    
    color: rgb(197, 221, 242);
}
</style>