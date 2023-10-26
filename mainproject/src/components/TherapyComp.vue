<template>
    <div>
        <img :src="img" alt="" width="50">
            <div class="therapy__title">Лечение современными технологиями</div>
        jsnfvjkrevngfjkdrnvjkdrgfnvjk
        <div class="therapy">           
            
            <p class="therapy__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, pariatur vitae. Quam dicta delectus vitae dolor esse nesciunt officia. </p>
            <ul class="therapy__text">
                <li>Современное оборудование</li>
                <li>Лучшие материалы</li>
                <li>Передовые технологии</li>
            </ul>
            <p class="therapy__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta repellat est quidem? Tempore, incidunt, numquam quis pariatur sed saepe minima nostrum maxime ipsam.</p>
        </div>
    </div>
</template>

<script>
import img1 from '@/assets/img/Ресурс 1.svg';

export default {
    name: 'DiplomTherapyComp',

    data() {
        return {
            img: img1,
            
        };
    },


    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.therapy{
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
    &__text{
        text-align: left;
    }
}
</style>