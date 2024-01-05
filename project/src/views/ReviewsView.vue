<template>
    <NavComp />
    <div class="title">Ваши отзывы</div>
    <div class="buttons">
        <button class="btn" @click="add()">Оставить отзыв</button>
        <button class="btn" @click="sortDesc()">Сортировать (сначала новые)</button>
        <button class="btn" @click="sortAsc()">Сортировать (сначала старые)</button>
    </div>
    <div class="container">
        <div v-for="item in reviews" :key="item.id" class="container__rev">
            <div class="container__rev__title">{{ item.name }}</div>{{ item.text }}
        </div>
    </div>
</template>

<script>
import { db } from '@/main.js';
import { collection, query, where, getDocs } from "firebase/firestore";
import NavComp from '@/components/NavComp.vue';

export default {
    data() {
        return {
            reviews: [],
        };
    },

    methods: {
        add() {
            if (this.$store.state.auth === false) {
                this.$router.push('/signup')
            } else {
                this.$router.push('/addReview')
                console.log("Можно оставить отзыв");
            }
        },
        sortAsc() {            
            const sortedAsc = this.reviews.sort(
                (objA, objB) => Number(objA.date) - Number(objB.date),
            );
        },
        sortDesc() {
            const sortedAsc = this.reviews.sort(
                (objB, objA) => Number(objA.date) - Number(objB.date),
            );
        },
    },
    async created() {
        try {
            const q = query(collection(db, "reviews"));
            const querySnapshot = await getDocs(q); // Ожидание разрешения промиса
            querySnapshot.forEach((doc) => {
                this.reviews.push(doc.data())
                // console.log(doc.id, " => ", doc.data());
            });
        } catch (err) {
            console.error("Ошибка при получении данных из Firestore:", err);
        }
    },
    components: { NavComp }

};

</script>

<style lang="scss" scoped>
@import '../assets/style/_vars.scss';

.buttons {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 12px;
}

.btn {

    // width: 350px;
    height: 40px;
    border-radius: 15px;
    background-color: rgb(148, 165, 196);
    border: 0;
    font-size: 20px;
    margin-bottom: 16px;
}

.btn:hover {
    background-color: #64ABD0;
    transition: .2s;
}

.container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 12px;

    &__rev {
        margin-bottom: 50px;
        width: 350px;
        height: 350px;
        color: $colorText;
        display: flex;
        @include border;
        align-items: center;
        font-size: 20px;
        justify-content: center;
        flex-direction: column;
        background-color: rgba(58, 77, 79, 0.9);
        word-break: break-all;

        &__title {
            font-size: 25px;
            font-weight: 600;
            margin-bottom: 10px;
            color: #FFBF73;

        }
    }
}
</style>