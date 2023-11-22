<template>
    <div>
        <h2>Васильева Елена</h2>
        <img :src="img"  class="img">
        <p><span>Образование: </span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, eius?</p>
        <p><span>Опыт работы: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem, ipsum dolor.</p>

    </div>
</template>

<script>
import img from '@/assets/img/person.jpg'
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