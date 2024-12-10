<template>
    <div>
        <div class="title">{{ translate('gameTitle') }}</div>
        <h2>{{ translate('playScore') }}</h2>
        <h2>{{ result }}</h2>

        <div v-show="textVisible" class="endGame">{{ translate('endPlayText') }}</div>

        <h2>{{ translate('gameTime') }}</h2>
        <h2>{{ currentTime }}</h2>

        <div class="press">
            <select class="btn" v-model="numbers" @change="selectLevel" v-if="!gameStarted">
                <option value="" disabled selected hidden >выберите сложность</option>
                <option :value="leve1">9</option>
                <option :value="leve2">16</option>
                <option :value="leve3">25</option>
            </select>
            <button class="btn" @click="startGame" v-if="!gameStarted">{{ translate('startBtn') }}</button>
        </div>

        <div class="grid" :style="{ gridTemplateColumns: `repeat(${columns}, 1fr)` }">
            <div v-for="index in numbers" :key="index" class="square" :class="{ mole: index === hitPosition }"
                @mousedown="hitSquare(index)"></div>
        </div>
    </div>
</template>

<script>
import translateMixin from '@/mixins/translateMixin';

export default {
    data() {
        return {
            startStr: 'startStr',
            leve1: 9,
            leve2: 16,
            leve3: 25,
            numbers: 9,
            result: 0,
            hitPosition: null,
            currentTime: 15,
            initialTime: 15,
            timerId: null,
            countDownTimerId: null,
            gameStarted: false,
            textVisible: false,
            endPlayText: 'endPlayText',
        };
    },
    computed: {
        columns() {
            return Math.sqrt(this.numbers);
        },
    },
    mixins: [translateMixin],
    methods: {
        selectLevel() {
            if (this.numbers === this.leve1) {
                this.numbers = this.leve1;
            }
            if (this.numbers === this.leve2) {
                this.numbers = this.leve2;
            }
            if (this.numbers === this.leve3) {
                this.numbers = this.leve3;
            }
        },
        randomSquare() {
            this.hitPosition = Math.floor(Math.random() * this.numbers) + 1;
        },
        hitSquare(index) {
            if (index === this.hitPosition) {
                this.result++;
                this.hitPosition = null;
            }
        },
        moveMole() {
            this.timerId = setInterval(() => {
                this.randomSquare();
            }, 650);
        },
        countDown() {
            if (this.currentTime > 0) {
                this.currentTime--;
                if (this.currentTime === 0) {
                    clearInterval(this.countDownTimerId);
                    clearInterval(this.timerId);
                    this.textVisible = true;
                    this.gameStarted = false;
                    this.currentTime = this.initialTime;
                }
            }
        },
        startGame() {
            this.textVisible = false;
            this.gameStarted = true;
            this.result = 0;
            this.currentTime = this.initialTime;
            this.moveMole();
            this.countDownTimerId = setInterval(() => {
                this.countDown();
            }, 1000);
        },
    },
};
</script>

<style scoped>
.grid {
    display: grid;
    grid-gap: 5px;
    width: 60%;
    margin: 0 auto;
    margin-bottom: 100px;
}

.square {
    height: 0;
    padding-top: 100%;
    border: solid black 1px;
}

.mole {
    background-image: url(../assets/img/tooth.png);
    background-size: cover;
}

.endGame {
    display: flex;
    justify-content: center;
    align-content: center;
    color: black;
    font-size: 40px;
}
.press{
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
.btn{
    max-width: 200px;
}
@media screen and (max-width: 768px){
    .grid {
    
    width: 80%;
    
    }
}
@media screen and (max-width: 425px){
    .grid {    
        width: 90%; 
    }
}
</style>