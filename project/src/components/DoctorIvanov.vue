<template>
    <div>
        <h2 class="subtitle">Иванов Григорий</h2>
        <img :src="img"  class="img">
        <p><span>Образование: </span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, sequi accusantium inventore modi quisquam delectus?</p>
        <p><span>Опыт работы: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem, ipsum dolor.</p>

    </div>
</template>

<script>
import img from '@/assets/img/person4.webp'
    export default {
        data(){
            return{
                img: img
            }
        }
    }
</script>

<style lang="scss" scoped>
span{
    font-size: 25px;
    font-style: oblique;
}
img{
    width: 250px;
}
</style>