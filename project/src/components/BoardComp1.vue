<template>
    
      <!-- <div class="gameBoard">
          <div
          class="gameBoard__item"
          v-for="(item, index) in itemBoardUP" :key="index"
          :class="{ 'highlighted': index === activeIndex }" @click="handleClick(index)">
            {{ item }}
          </div>
      </div>
      <p v-if="score > 0">Score: {{ score }}</p>
      <button @click="startGame" :disabled="isGameRunning">Start Game</button> -->
    
  </template>
  
  <!-- <script>
  export default {
    data() {
      return {
        itemBoardUP: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        activeIndex: null,
        score: 0,
        isGameRunning: false,
      };
    },
    methods: {
      startGame() {
        this.isGameRunning = true;
        this.score = 0;
        this.playRound();
      },
      playRound() {
        this.activeIndex = null;
  
        setTimeout(() => {
          const randomIndex = Math.floor(Math.random() * this.itemBoardUP.length);
          this.activeIndex = randomIndex;
  
          setTimeout(() => {
            this.activeIndex = null;
          }, 1000);
        }, 1000);
      },
      handleClick(index) {
        if (this.isGameRunning && index === this.activeIndex) {
          this.score++;
          this.playRound();
        }
      },
    },
  };
  </script>
  
  <style>
  .gameBoard{
    display: flex;
    justify-content: center;
    &__item{
        width: 20%;
        height: 7%;
    }
  }
  .highlighted {
    background-color: lightgreen;
  }
  </style> -->
  