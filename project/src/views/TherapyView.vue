<template>
    <div>
        <p class="text">Score: {{ score }}</p>
        <button class="btn" @click="startGame" :disabled="isGameRunning">Start Game</button>
        <div class="containerGame">
            <div v-show="textVisible">{{ loserText }}</div>
            <div class="gameBoard">
                <div class="gameBoard__item" v-for="(item, index) in itemBoardUP" :key="index"
                    :class="{ 'highlighted': index === activeIndex }" @click="handleClick(index)">
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'DiplomTherapyView',
    data() {
        return {
            itemBoardUP: [],
            numbers: 24,
            activeIndex: null,
            score: 0,
            isGameRunning: false,
            isGameOver: false,
            loserText: 'Вы можете потерять свой зуб.',
            textVisible: false,
            timer: 1,
            timeGameOver: null,
        };
    },
    methods: {
        startGame() {
            this.isGameRunning = true;
            this.textVisible = false;
            this.isGameOver = false;
            for (let i = 0; i < this.numbers; i++) {
                this.itemBoardUP[i] = i;
            }
            this.score = 0;
            this.playRound();
        },       
        // resetGame() {
        //     this.isGameRunning = false;
        //     this.isGameOver = false;
        //     this.textVisible = false;
        //     this.activeIndex = null;
        //     this.score = 0;
        // },        
        playRound() {            
            let playerClicked = false; 

            const itemClickedHandler = () => {
                playerClicked = true;
                clearInterval(this.timeGameOver); 
                document.removeEventListener('itemClicked', itemClickedHandler);
            };

            setTimeout(() => {
                if (!playerClicked) {
                    const randomIndex = Math.floor(Math.random() * this.itemBoardUP.length);
                    this.activeIndex = randomIndex;
                    setTimeout(() => {
                        this.activeIndex = null;
                    }, 1000);

                    this.timeGameOver = setInterval(() => {
                        if (this.timer === 0) {
                            clearInterval(this.timeGameOver);
                            this.isGameRunning = false;
                            this.textVisible = true;
                            this.isGameOver = true;
                        } else {
                            this.timer--;
                        }
                    }, 1500);

                    document.addEventListener('itemClicked', itemClickedHandler);
                }
            }, 1000);
        },
       
        handleClick(index) {
            if (index === this.activeIndex) {
                this.score++;
                document.dispatchEvent(new Event('itemClicked')); 
                this.playRound();
            }
        },
    },
    
};
</script>

<style lang="scss" scoped>
@import '../assets/style/vars';

.containerGame {
    background-image: url(../assets/img/mauth.jpg);
    background-size: cover;
    background-position: center;
    margin-bottom: 30px;

}

.gameBoard {
    width: 100%;
    height: $widhtSite*0.6;
    width: $widhtSite;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-between;
    padding-bottom: 20px;
    padding-top: 20px;

    &__item {
        width: 8%;
        height: 14%;
    }
}

.highlighted {
    background-color: rgb(87, 85, 85);
    border-radius: 50%;
}

.lose {
    color: red;
    background-color: rgb(52, 35, 35);
    border-radius: 15px;

}
</style>