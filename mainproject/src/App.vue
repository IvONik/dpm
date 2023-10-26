<template>
  <ButtonComp v-for="button in buttonArray" :key="button.id" :button="button"/>
 
  <TherapyComp/>
</template>

<script>

import TherapyComp from './components/TherapyComp.vue';
import img1 from '@/assets/img/Ресурс 1.svg';
import img2 from '@/assets/img/Ресурс 2.svg';
import img3 from '@/assets/img/Ресурс 3.svg';
import img4 from '@/assets/img/Ресурс 4.svg';
import img5 from '@/assets/img/Ресурс 5.svg';
import img6 from '@/assets/img/Ресурс 6.svg';
import img8 from '@/assets/img/abstract-wavy-background1.jpg';
import ButtonComp from './components/ButtonComp.vue';



export default {
  name: 'App',
  data() {
    return {
      buttonArray: [
      {
        title:'Лечение',
        img: img1,
        active: false,
      },
      {
        title:'Имплантация',
        img:img2,
        active: false,
      },
      {
        title: 'Установка брекет систем',
        img:img4,
        active: false,
      },
      {
        title:'Контакты',
        img:img5,
        active: false,
      },
      {
        title:'Запись на прием',
        img:img5,
        active: false,
      },
      {
        title:'Отзывы',
        img:img6,
        active: false,
      },
     ],
     pic:img8,
    };
  },
  methods:{
    press(){
      this.buttonArray.active = !this.buttonArray.active;
}
  },
  components: {
    TherapyComp,
    ButtonComp
}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
  display: grid;
  grid-column: auto;
  grid-template-columns: repeat( auto-fit, minmax(400px, 1fr) );
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
body{
  background-image: url(./assets/img/abstract-wavy-background1.jpg);
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.bigBox{  
  justify-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
}

</style>
