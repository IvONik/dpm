<template>
    <div>
        <NavComp />
        <div class="notFound">
            <div class="title">404 Такой страницы нет.</div>
            <div class="text">Мы вернемся на главный экран через:</div>
            <div class="timer title">{{ timer }} </div>
            <div class="text">секунд.</div>
        </div>
    </div>
</template>

<script>
import NavComp from '@/components/NavComp.vue';
export default {
    data() {
        return {
            timer: 10,
            timeReturnTohome: null,
        }
    },   
    components: { NavComp },       
    methods:{
        startTimer(){
            this.timeReturnTohome = setInterval(() => {
            if (this.timer === 0) {                
                clearTimeout(this.timeReturnTohome)
                this.$router.push('/')               
            } else {
                this.timer--
            }
            }, 1000) 
        },
        stopTimer(){
            if (this.timer === 0) {
                clearTimeout(this.timeReturnTohome)
            }
        },
    },
    mounted(){
        this.startTimer()
    },
    destroyed(){
        this.stopTimer()
    }
}
</script>

<style lang="scss" scoped>
.notFound {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.timer {
    margin-bottom: 10px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 1);
}
</style>
