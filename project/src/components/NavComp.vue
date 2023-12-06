<template>
    <div class="box">
        <router-link class="box__item"     
            v-for="button in linkArray" :key="button.id" :to="button.url"  active-class="active">{{ button.nameLink }}        
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
                    nameLink: 'Записаться на прием',
                    url: '/signup',
                },

            ]
        };
    },
    methods: {
        
    }
};
</script>

<style lang="scss" scoped>


.box {    
    display: grid;
    // grid-column: auto;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 12px;
    margin-bottom: 50px;

    &__item {
        width: 350px;
        height: 80px;
        border: 1px solid #141618;
        border-radius: 20px;
        color: black;
        // background-color: white;
        background-color: rgba(255, 255, 255, 0.5);
        box-shadow: 0px 10px 20px 2px #4f4f54;
        display: flex;        
        // padding-left: 30px;
        // padding-right: 30px;        
        align-items: center;
        // gap: 15px;
        font-size: 25px;
        // text-align: center;
        justify-content: center;
    }
}

.box__item:hover {
    background-color: rgba(255, 255, 255, 0.742);
    transition: .2s;
}
.active{
    background-color: rgba(255, 255, 255, 0.9);
    // box-shadow: 0px 2px 2px 2px #4f4f54;
    transition: .2s;
}
</style>