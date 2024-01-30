<template>
    <NavComp />
    <div class="title">Ваши отзывы</div>
    <div class="buttons">
        <button class="btn" @click="add()">Оставить отзыв</button>
        <button class="btn" @click="sortDesc()">Сортировать (сначала новые)</button>
        <button class="btn" @click="sortAsc()">Сортировать (сначала старые)</button>
    </div>
    
    <div v-if="loading === true">
        <LoaderComp/>
    </div>
    
    <div class="container">
        <div v-for="item in paginatedReviews" :key="item.id" class="container__rev">
            <div class="container__rev__title">{{ item.name }}</div>{{ item.text }}
        </div>        
    </div>
    
        <div class="pagination">            
            <div v-for="page in pages" class="pages"
            @click="pageClick(page)"
            :class="{'activePage': page === pageNumber}">
                {{ page }}
            </div>            
        </div>
</template>

<script>
import { db } from '@/main.js';
import { collection, query, where, getDocs } from "firebase/firestore";
import NavComp from '@/components/NavComp.vue';
import LoaderComp from '@/components/LoaderComp.vue';

export default {
    data() {
        return {
            reviews: [],
            reviewsPerPage: 6,
            pageNumber: 1,
            loading: true,
        };
    },
    methods: {
        add() {
            if (this.$store.state.auth === false) {
                this.$router.push('/signup')
            } else {
                this.$router.push('/addReview')                
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
        pageClick(page){
            this.pageNumber = page;
        },
    },

    async created() {        
            try {
                const q = query(collection(db, "reviews"));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    this.reviews.push(doc.data()) 
                    this.loading = false;                   
                });
                
            } catch (err) {
                console.error("Ошибка при получении данных из Firestore:", err);
            }      
    },  
    computed:{
        pages(){           
            return Math.ceil(this.reviews.length / this.reviewsPerPage);
        },
        paginatedReviews(){
            let from = (this.pageNumber -1) * this.reviewsPerPage;
            let to = from + this.reviewsPerPage;
            return this.reviews.slice(from, to);
        }
    },
    components: { NavComp , LoaderComp},
};

</script>

<style lang="scss" scoped>
@import '../assets/style/_vars.scss';

.buttons {
    // display: grid;
    // grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    // gap: 12px;
    display: grid;    
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 12px;
    justify-items: center;
    margin-left: auto;
    margin-right: auto;
}
.btn {
    width: 350px;
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
    // height: 750px;
    
    
    &__rev {
        margin-bottom: 30px;        
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
.pagination{
    display: flex;    
    flex-wrap: wrap;
    justify-content: center;
    gap: 4px;   
    
}
.pages{
    display: flex;  
    width: 40px;
    justify-content: center;
    padding: 10px;
    border: solid 1px black;
    border-radius: 15px;
}
.pages:hover{
    background-color: #FFBF73;
}
.activePage{
    background-color: #64ABD0;
}
</style>