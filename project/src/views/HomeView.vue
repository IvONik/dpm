<template>
    <div>
        <NavComp/>
        <div class="title">{{ this.title }}</div>
        <ul>
            <li v-for="item in list" :key="item.id" class="text">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
import NavComp from '@/components/NavComp.vue';

export default {
    name: 'DiplomHomeView',
    data() {
        return {
            title: 'Здоровье ваших зубов - наша забота',
            list:[
                'Наши врачи постоянно повышают квалификации.',
                'Мы работаем на современном оборудовании',
                'Мы не экономими на расходных материалах',
                'Дорожим нашими клиентами',
    
            ]
        };
    },
    mounted() {
    },
    methods: {},
    components: { NavComp }
};
</script>

<style lang="scss" scoped>
.title{
    font-size: 50px;
    font-weight: 600;
    margin-bottom: 30px;
}
.text{
    display: flex;

    font-size: 30px;
    margin-bottom: 10px;
}
</style>