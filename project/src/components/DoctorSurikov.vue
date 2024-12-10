<template>
    <div>
        <h2>{{ translate('doctor2') }}</h2>
        <img :src="img" class="img">
        <p><span>{{ translate('edication') }}: </span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, eius?</p>
        <p><span>{{ translate('workExperience') }}: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem, ipsum dolor.</p>

    </div>
</template>

<script>
import img from '@/assets/img/person2.png';
import translateMixin from '@/mixins/translateMixin';


export default {
    data() {
        return {
            img: img
        }
    },
    mixins: [translateMixin], 
}
</script>

<style lang="scss" scoped>
span {
    font-size: 25px;
    font-style: oblique;
}

img {
    width: 250px;
}

h2 {
    font-size: 30px;
    color: rgb(42, 36, 19);
}
</style>