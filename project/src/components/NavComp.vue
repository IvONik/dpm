<template>
    <div class="box">
        <router-link class="box__item" 
        
        @click="e => e.target.classList.add('active')"  
            v-for="button in linkArray" :key="button.id" :to="button.url">{{ button.nameLink }}
            <!-- <img :src="button.img" alt="img" class="svg"> -->
        </router-link>
    </div>
</template>

<script>
import img1 from '@/assets/img/Ресурс 1.svg';
import img2 from '@/assets/img/Ресурс 2.svg';
import img3 from '@/assets/img/Ресурс 3.svg';
import img4 from '@/assets/img/Ресурс 4.svg';
import img5 from '@/assets/img/Ресурс 5.svg';
import img6 from '@/assets/img/Ресурс 6.svg';
import img8 from '@/assets/img/abstract-wavy-background1.jpg';

export default {
    name: 'DiplomNavComp',

    data() {
        return {
            linkArray: [
                {
                    id: '0',
                    nameLink: 'Главная',
                    url: '/',
                    // img: img1,
                    active: false,
                },
                {
                    id: '1',
                    nameLink: 'Лечение',
                    url: '/therapy',
                    // img: img2,
                    active: false,
                },
                {
                    id: '2',
                    nameLink: 'Протезирование',
                    url: '/prosthetics',
                    // img: img4,
                    active: false,
                },
                {
                    id: '3',
                    nameLink: 'Установка брекет Систем',
                    url: '/bracket',
                    // img: img4,
                    active: false,
                },
                {
                    id: '4',
                    nameLink: 'Профессиональная чистка',
                    url: '/clean',
                    // img: img5,
                    active: false,
                },
                {
                    id: '5',
                    nameLink: 'Как нас найти',
                    url: '/contact',
                    // img: img6,
                    active: false,
                },
                {
                    id: '6',
                    nameLink: 'Наши врачи',
                    url: '/doctors',
                    // img: img8,
                    active: false,
                },
                {
                    id: '7',
                    nameLink: 'Отзывы',
                    url: '/reviews',
                    // img: img1,
                    active: false,
                },
                {
                    id: '8',
                    nameLink: 'Записаться на прием',
                    url: '/signup',
                    // img: img1,
                    active: false,
                },

            ]
        };
    },
    methods: {
        press() {
            // this.linkArray.active = !this.linkArray.active;
                        
        },
    }
};
</script>

<style lang="scss" scoped>


.box {
    display: grid;
    grid-column: auto;
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
        justify-content: space-between;
        padding-left: 30px;
        padding-right: 30px;
        // box-sizing: border-box;
        align-items: center;
        gap: 15px;
        font-size: 25px;
        text-align: center;
        justify-content: center;
    }

}

.box__item:hover {
    background-color: rgba(255, 255, 255, 0.742);
    transition: .2s;
}

.active{
    background-color: rgba(255, 255, 255, 0.88);
    box-shadow: 0px 2px 2px 2px #4f4f54;
}
.svg {
    height: 60px;
}
// @click="e => e.target.classList.toggle('active')"  
//  @click="press()" :style="{ 'backgroundColor': active ? 'white' : '' }"
</style>