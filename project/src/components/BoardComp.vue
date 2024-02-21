<!-- <template>
    <div class="board">
        <div class="board__item up" v-for="item in itemBoardUP" 
        :class="{ 'active': activeIndex === true }"

       

        >
            {{ item }}

        </div>

        <!-- <div class="board__item down"
            v-for="item in itemBoardDown">
                {{ item }}              
            </div> -->
        <button @click="start()">Start</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            itemBoardUP: [],            
            number: 24,
            activeIndex:[],
        };
    },
    methods: {
        start() {
            for (let i = 0; i < this.number; i++) {
                this.itemBoardUP[i] = i;
            }
            setInterval(() => {
                const index = Math.floor(Math.random() * (12 - 0)) + 0;
                
                console.log(index);
                this.activeIndex[index] = true;
               return index;
            }, 900);
           
        },
        isActive(index) {
      // Проверка, является ли элемент активным
        return this.activeIndex[index] === true;
    },
        
    },
}
</script>

<style lang="scss" scoped>
@import '../assets/style/vars';

.board {

    width: $widhtSite;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-between;
    padding-bottom: 20px;

    &__item {
        // position: relative;
        width: 7%;
        height: 8%;
        background-color: grey;
        // border: 1 solid grey;
        margin: 5px;


    }
}

.active {
    background-color: #fff;
}
</style> -->