<template>
    <div>
        
        <div class="title">{{ translate(title) }}</div>
        <!-- <ul>
            <li v-for="item in list" :key="item.id" class="text list">{{ translate(item) }}</li>
        </ul> -->
        <p class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo tempora quasi blanditiis? Laudantium sint, nesciunt iste voluptate, pariatur ipsa hic, nisi praesentium ratione atque vero! Ea id expedita eligendi ipsum beatae vel qui voluptatibus non dolore cupiditate architecto ab corrupti.</p>
        <p class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo tempora quasi blanditiis? Laudantium sint, nesciunt iste voluptate, pariatur ipsa hic, nisi praesentium ratione atque vero! Ea id expedita eligendi ipsum beatae vel qui voluptatibus non dolore cupiditate architecto ab corrupti distinctio optio tempore, praesentium doloribus voluptate numquam perspiciatis eaque obcaecati? Accusantium iste, assumenda magni distinctio asperiores cum fugiat modi id, autem.</p>
    </div>
</template>

<script>
import translateMixin from '@/mixins/translateMixin';

export default {
    name: 'DiplomHomeView',
    data() {
        return {
            title: 'mainTitle',
            list:[
                'mainstring1',
                'mainstring2',
                'mainstring3',
                'mainstring4',    
            ]
        };
    },
    mixins: [translateMixin],
};
</script>

<style lang="scss" scoped>

</style>