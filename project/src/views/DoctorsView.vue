<template>
    <div class="title">{{ translate('ourDoctors') }}</div>
    <div class="container">
        <div class="part1">
            <div v-if="currentId === '1'">
                <DoctorVasilevaComp />
            </div>
            <div v-if="currentId === '3'">
                <DoctorKiryanova />
            </div>
            <div v-if="currentId === '2'">
                <DoctorSurikov />
            </div>
            <div v-if="currentId === '4'">
                <DoctorIvanov />
            </div>
        </div>
        <div class="right__part">
            <div class="right__part__name" style="white-space: pre-line;" v-for="item in doctorsArray" :key="item.id"
                @click=show(item.id) :class="{ 'actived': active === item.id }">{{ translate(item.name) }} {{ item.lustName }}
            </div>
        </div>
    </div>
</template>

<script>
import DoctorIvanov from '@/components/DoctorIvanov.vue';
import DoctorKiryanova from '@/components/DoctorKiryanova.vue';
import DoctorSurikov from '@/components/DoctorSurikov.vue';
import DoctorVasilevaComp from '@/components/DoctorVasilevaComp.vue';
import translateMixin from '@/mixins/translateMixin';

export default {
    name: 'DiplomDoctorsView',
    data() {
        return {
            doctorsArray: 
            [
                {
                    id: '1',
                    name: 'doctor1',
                    education: 'СПБГУ',
                    active: null,
                },
                {
                    id: '2',
                    name: 'doctor2',
                    education: 'СПБГУ',
                    active: null,
                },
                {
                    id: '3',
                    name: 'doctor3',
                    education: '1-ый Медицинский университет',
                    active: null,
                },
                {
                    id: '4',
                    name: 'doctor4',
                    education: 'СПБГУ',
                    active: null,
                },
             ],
            currentId: '1',
        };
    },
    mixins: [translateMixin],
    methods: {
        show(id) {
            this.currentId = id
            this.active = this.currentId;
        },
    },
    created() {        
        this.active = this.currentId;
    }, 
    components: {
        DoctorVasilevaComp,
        DoctorKiryanova,
        DoctorSurikov,
        DoctorIvanov
    },
    
};
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
}

.part1 {
    background-color: rgba(119, 152, 236, 0.7);
    color: black;

}

.right__part {
    width: 30%;

    &__name {
        margin-bottom: 20px;
        font-size: 25px;
        background-color: #64ABD0;
        border: 1px solid #141618;
        border-radius: 20px;
        cursor: pointer;
        padding: 16px 6px 16px 6px;
    }
}

.actived {
    background-color: #235B79;
    transition: .2s;
    color: #FFD973;
}

.right__part__name:hover {
    background-color: rgba(45, 97, 103, 0.9);
    transition: .5s;
    color: rgb(197, 221, 242);
}

@media screen and (max-width: 768px) {

    .right__part {
        display: flex;
        flex-direction: column;
        gap: 0;

        &__name {
            font-size: 20px;
            padding-top: 8px;
            padding-bottom: 8px;
        }
    }
}

@media screen and (max-width: 510px) {
    .container {
        display: flex;
        flex-direction: column-reverse;
    }

    .right__part {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 6px;
        padding-top: 0px;

        &__name {
            margin-bottom: 6px;
        }
    }

    .part1 {
        width: 100%;
    }
}

@media screen and (max-width: 425px) {
    .container {
        display: flex;
        flex-direction: column;
    }
}
</style>@/translatorService/en.js
