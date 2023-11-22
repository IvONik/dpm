<template>
    
        <NavComp/>
        <h2>Наши доктора</h2>
        <div class="container">
            <div class="left__part">
               <div v-if="currentId === '1'"> <DoctorVasilevaComp/></div>
               <div v-if="currentId === '3'"> <DoctorKiryanova/></div>
               <div v-if="currentId === '2'"> <DoctorSurikov/></div>
               <div v-if="currentId === '4'"> <DoctorIvanov/></div>
            </div>
            <div class="right__part">               
                <div class="right__part__item" style="white-space: pre-line;" v-for="item in doctorsArray" :key="item.id" @click=show(item.id)                
                >{{ item.name}} {{  item.lustName }}
                </div>                
            </div>
        </div>
    
</template>

<script>
import DoctorIvanov from '@/components/DoctorIvanov.vue';
import DoctorKiryanova from '@/components/DoctorKiryanova.vue';
import DoctorSurikov from '@/components/DoctorSurikov.vue';
import DoctorVasilevaComp from '@/components/DoctorVasilevaComp.vue';
import NavComp from '@/components/NavComp.vue';

export default {
    name: 'DiplomDoctorsView',
    data() {
        return {
            doctorsArray: [
                {
                    id: '1',
                    name: 'Елена',
                    lustName: 'Васильева',
                    education: 'СПБГУ',
                },
                {
                    id: '2',
                    name: 'Дмитрий',
                    lustName: 'Суриков',
                    education: 'СПБГУ',
                },
                {
                    id: '3',
                    name: 'Ольга',
                    lustName: 'Кирьянова',
                    education: '!-ый Медицинский университет',
                },
                {
                    id: '4',
                    name: 'Григорий',
                    lustName: 'Иванов',
                    education: 'СПБГУ',
                },
                
            ],
            currentId: '1',
            
        };
    },
    mounted() {
        
    },
    methods: {
        show(id){
            this.currentId = id 
        }
    },
    components: { NavComp, DoctorVasilevaComp, DoctorKiryanova, DoctorSurikov, DoctorIvanov }
};
</script>

<style lang="scss" scoped>
.container{
    display: flex;
    justify-content: space-around;
}
.left__part{
    width: 50%;
}
.right__part{
    width: 50%;
    padding-top: 30px;
    &__item{
        margin-bottom: 20px;
        font-size: 25px;
    }
}

</style>
