<template>
    <div>
        <p class="text">{{ translate('playScore') }}: {{ score }}</p>
        <select class="btn" v-model="numbers" @change="selectLevel">
            <option value="startStr" disabled hidden>выберите сложность</option>
            <option value="9">9</option>
            <option value="16">16</option>
        </select>
        <button class="btn" @click="startGame" :disabled="isGameRunning">{{ translate('startBtn') }}</button>
        <div v-show="textVisible" class="endGame">{{ translate(loserText) }}</div>



        <div class="containerGame">
            <div v-if="isGameRunning">
                
                <div class="gameBoard" :style="{ gridTemplateColumns: `repeat(${columns}, 1fr)`, gridTemplateRows: `repeat(${rows}, 1fr)` }">
                    <div class="gameBoard__item" v-for="(item, index) in itemBoardUP" :key="index"
                        :class="{ 'highlighted': index === activeIndex }" @click="handleClick(index)">
                        <div class="dot" v-if="index === activeIndex"></div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import translateMixin from '@/mixins/translateMixin';

export default {
    name: 'DiplomTherapyView',
    data() {
        return {
            itemBoardUP: [],
            numbers: 'startStr', 
            activeIndex: null,
            score: 0,
            isGameRunning: false,
            isGameOver: false,
            loserText: 'endPlayText',
            textVisible: false,
            timer: 1,
            timeGameOver: null,

            
        };
    },
    computed: {
        rows() {
            return Math.sqrt(this.numbers);
        },
        columns() {
            return this.rows; 
        },
    },
    methods: {
        selectLevel(){
            if(this.numbers === 9){
                this.numbers = 9
            }
            if(this.numbers === 16){
                this.numbers = 16
            }
        },
        startGame() {
            this.activeIndex = null;
            this.isGameRunning = true;
            this.textVisible = false;
            this.isGameOver = false;
            this.timer = 1; 
            this.score = 0;
            this.itemBoardUP = Array.from({ length: this.numbers }, (_, i) => i);
            this.playRound();
        },
        playRound() {    
                  
            let playerClicked = false; 

            const itemClickedHandler = () => {
                playerClicked = true;
                clearInterval(this.timeGameOver); 
                document.removeEventListener('itemClicked', itemClickedHandler);
                
            };

            setTimeout(() => {
                if (!playerClicked) {
                    const randomIndex = Math.floor(Math.random() * this.numbers);
                    this.activeIndex = randomIndex;

                    this.timeGameOver = setInterval(() => {
                        if (this.timer === 0) {
                            clearInterval(this.timeGameOver);
                            this.isGameRunning = false;
                            this.textVisible = true;
                            this.isGameOver = true;
                        } else {
                            this.timer--;
                        }
                    }, 1000);

                    document.addEventListener('itemClicked', itemClickedHandler);
                }
            }, 1500);
        },
        handleClick(index) {
            if (index === this.activeIndex) {
                this.clickEnabled = false; 
                this.score++;
                document.dispatchEvent(new Event('itemClicked')); 
                this.playRound();
            }
        },
    },
    mixins: [translateMixin],
};
</script>

<style lang="scss" scoped>
@import '../assets/style/vars';

.gameBoard {
    background-color: #f0c9c9;
    width: 100%;
    max-width: 500px; 
    margin: 0 auto;
    display: grid;
    gap: 5px; 

    &__item {
        background-image: url(../assets/img/tooth.png);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        aspect-ratio: 1 / 1; 
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .dot {
        width: 10px;
        height: 10px;
        background-color: black;
        border-radius: 50%;
    }
}

.highlighted {
    background-color: rgb(87, 85, 85);
    border-radius: 50%;
}

.endGame {
    display: flex;
    justify-content: center;
    align-content: center;
    color: black;
    font-size: 40px;
}
</style>
