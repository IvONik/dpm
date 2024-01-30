<template>
    <div>
        <NavComp/>
        <div class="title">{{ this.title }}</div>
        <ul>
            <li v-for="item in list" :key="item.id" class="text">{{ item }}</li>
        </ul>
        <p class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo tempora quasi blanditiis? Laudantium sint, nesciunt iste voluptate, pariatur ipsa hic, nisi praesentium ratione atque vero! Ea id expedita eligendi ipsum beatae vel qui voluptatibus non dolore cupiditate architecto ab corrupti distinctio optio tempore, praesentium doloribus voluptate numquam perspiciatis eaque obcaecati? Accusantium iste, assumenda magni distinctio asperiores cum fugiat modi id, autem praesentium architecto! Voluptatibus, fuga laborum maiores optio iusto consequatur hic iure odio cupiditate laudantium animi facere aspernatur mollitia, nesciunt eveniet repellendus impedit! Nobis provident, quia vero modi, maiores maxime id possimus nihil consequuntur exercitationem numquam non sequi repellat animi voluptatibus! Repellat ipsum vero itaque amet temporibus voluptas placeat quis eveniet aut, necessitatibus, maxime obcaecati a vel laborum qui ratione distinctio commodi quam sapiente laudantium. Fugit incidunt, autem ex aliquid amet nisi molestiae, ipsum nemo dolor dolore iure vel libero repellendus! Cum ut, beatae vel sit expedita fugiat veniam vitae asperiores mollitia nostrum at amet dolor repellendus, velit aperiam voluptate. Unde praesentium dignissimos omnis culpa optio molestias repellendus architecto rem adipisci laboriosam tempora error facere accusamus quasi enim dicta, nobis exercitationem animi laborum delectus possimus. Sunt excepturi hic unde dolorum ullam? Et distinctio iure asperiores numquam sapiente explicabo molestiae laudantium?</p>
        <p class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo tempora quasi blanditiis? Laudantium sint, nesciunt iste voluptate, pariatur ipsa hic, nisi praesentium ratione atque vero! Ea id expedita eligendi ipsum beatae vel qui voluptatibus non dolore cupiditate architecto ab corrupti distinctio optio tempore, praesentium doloribus voluptate numquam perspiciatis eaque obcaecati? Accusantium iste, assumenda magni distinctio asperiores cum fugiat modi id, autem praesentium architecto! Voluptatibus, fuga laborum maiores optio iusto consequatur hic iure odio cupiditate laudantium animi facere aspernatur mollitia, nesciunt eveniet repellendus impedit! Nobis provident, quia vero modi, maiores maxime id possimus nihil consequuntur exercitationem numquam non sequi repellat animi voluptatibus! Repellat ipsum vero itaque amet temporibus voluptas placeat quis eveniet aut, necessitatibus, maxime obcaecati a vel laborum qui ratione distinctio commodi quam sapiente laudantium. Fugit incidunt, autem ex aliquid amet nisi molestiae, ipsum nemo dolor dolore iure vel libero repellendus! Cum ut, beatae vel sit expedita fugiat veniam vitae asperiores mollitia nostrum at amet dolor repellendus, velit aperiam voluptate. Unde praesentium dignissimos omnis culpa optio molestias repellendus architecto rem adipisci laboriosam tempora error facere accusamus quasi enim dicta, nobis exercitationem animi laborum delectus possimus. Sunt excepturi hic unde dolorum ullam? Et distinctio iure asperiores numquam sapiente explicabo molestiae laudantium?</p>
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

</style>