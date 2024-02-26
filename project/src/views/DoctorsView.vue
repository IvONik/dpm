<template>
        <div class="title">Наши доктора</div>
        <div class="container">
            <div class="part1" >
               <div v-if="currentId === '1'"> <DoctorVasilevaComp/></div>
               <div v-if="currentId === '3'"> <DoctorKiryanova/></div>
               <div v-if="currentId === '2'"> <DoctorSurikov/></div>
               <div v-if="currentId === '4'"> <DoctorIvanov/></div>
            </div>
            <div class="right__part">               
                <div class="right__part__item" 
                style="white-space: pre-line;"                 
                v-for="item in doctorsArray" :key="item.id" @click=show(item.id)  
                :class="{'actived': active === item.id}"
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
                    active: null,
                },
                {
                    id: '2',
                    name: 'Дмитрий',
                    lustName: 'Суриков',
                    education: 'СПБГУ',
                    active: null,
                },
                {
                    id: '3',
                    name: 'Ольга',
                    lustName: 'Кирьянова',
                    education: '!-ый Медицинский университет',
                    active: null,
                },
                {
                    id: '4',
                    name: 'Григорий',
                    lustName: 'Иванов',
                    education: 'СПБГУ',
                    active: null,
                },
                
            ],
            currentId: '1', 
        };
    },   
    methods: {
        show(id){           
            this.currentId = id 
            this.active = this.currentId;
        }
    },
    created(){
        this.active = this.currentId;
    },
    components: { 
        DoctorVasilevaComp, 
        DoctorKiryanova, DoctorSurikov, DoctorIvanov 
    },    
};
</script>

<style lang="scss" scoped>
.container{
    display: flex;
    justify-content: center;
    
}
.part1{    
    background-color: rgba(255, 255, 255, 0.7);
   
}
.right__part{
    width: 30%;
    &__item{
        margin-bottom: 20px;
        font-size: 25px;
        background-color: 	#64ABD0;        
        border: 1px solid #141618;
        border-radius: 20px;
        cursor: pointer;
        padding: 16px 6px 16px 6px;
    }
}
.actived{    
    background-color: #235B79;
    transition: .2s;
    color: #FFD973;
    
}
.right__part__item:hover{    
    background-color: rgba(124, 161, 165, 0.9);   
    transition: .5s;    
    color: rgb(197, 221, 242);
}
@media screen and (max-width: 768px){
    .container{
        
    }
    .right__part{
    
    &__item{        
        font-size: 20px;
        padding-top: 8px;
        padding-bottom: 8px;

        
    }
}
}
@media screen and (max-width: 425px){
    .container{
        display: flex;
        flex-direction: column-reverse;
    }
    .right__part{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 6px;
        padding-top: 0px;

            &__item{
                margin-bottom: 6px;
            }
    }
    .part1{
        width: 100%;
    }
}
</style>
