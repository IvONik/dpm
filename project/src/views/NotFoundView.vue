<template>
    <div>
        <div class="notFound">
            <div class="title">{{ translate('notFoundTitle') }}</div>
            <div class="text">{{ translate('notFoundText') }}</div>
            <div class="timer title">{{ timer }} </div>
            <div class="text">{{ translate('notFoundTime') }}</div>
        </div>
    </div>
</template>

<script>
import translateMixin from '@/mixins/translateMixin';

export default {
    data() {
        return {
            timer: 10,
            timeReturnTohome: null,
        }
    },       
    methods:{
        startTimer(){
            this.timeReturnTohome = setInterval(() => {
            if (this.timer === 0) {                
                clearInterval(this.timeReturnTohome)
                this.$router.push('/')               
            } else {
                this.timer--
            }
            }, 1000) 
        },
        stopTimer(){
            
            if (this.timeReturnTohome !== null) {
                clearInterval(this.timeReturnTohome);
            }          
          
        },
    },
    mounted(){
        this.startTimer()
    },    
    destroyed(){
        this.stopTimer()
        
    },
    mixins: [translateMixin],
    
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
