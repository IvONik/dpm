<template>
    <div class="reviews__box">
        <div class="title">Ваши отзывы</div>
        <div class="buttons">
            <button class="btn" @click="add()">Оставить отзыв</button>
            <select class="btn" v-model="selectedOptionTime" @change="selectChangeTime">
                <option value="startTime">Сортировка по времени:</option>
                <option value="old">сначала новые</option>
                <option value="new">сначала старые</option>
            </select>
            <select class="btn" v-model="selectedOptionRating" @change="selectChangeRating">
                <option value="startRating">Сортировка по рейтингу:</option>
                <option value="firstGood" selected>сначала хорошие</option>
                <option value="firstBad">сначала плохие</option>
            </select>
        </div>
        <div v-if="loading === true">
            <LoaderComp />
        </div>
        <div class="container">
            <div v-for="item in paginatedReviews" :key="item.id" class="container__rev">
                <div class="container__rev__title">{{ item.name }}
                    <div class="rating">
                        <span v-for="n in item.rating" :key="n">&#9733;</span>
                    </div>
                </div>
                <div class="container__scroll">{{ item.text }}</div>
            </div>
        </div>
       

        <div class="pagination">
            <button class="pages" 
                @click="prevPages" 
                v-if="pageNumber > maxVisiblePages"                
                >...
            </button>

            <div v-for="page in visiblePages" class="pages" @click="pageClick(page)" :class="{ 'activePage': page === pageNumber }">
                {{ page }}
            </div>

            <button class="pages" 
                @click="nextPages" 
                v-if="hasNextPages"                
                >
                ...
            </button>
            
        </div>

    </div>
</template>

<script>
import { db } from '@/main.js';
import { collection, query, where, getDocs } from "firebase/firestore";
import LoaderComp from '@/components/LoaderComp.vue';

export default {
    data() {
        return {
            reviews: [],
            reviewsPerPage: 6,
            pageNumber: 1,
            loading: true,
            selectedOptionTime: "startTime",
            selectedOptionRating: "startRating",            
            maxVisiblePages: 5,
        };
    },
    methods: {
        add() {
            if (this.$store.state.auth === false) {
                this.$router.push('/lk/')
            } else {
                this.$router.push('/addReview')
            }
        },
        selectChangeTime() {
            if (this.selectedOptionTime === "new") {
                const sortedAsc = this.reviews.sort(
                    (objA, objB) => Number(objA.date) - Number(objB.date),
                );
            } if (this.selectedOptionTime === "old") {
                const sortedAsc = this.reviews.sort(
                    (objB, objA) => Number(objA.date) - Number(objB.date),
                );
            }
        },
        selectChangeRating() {
            if (this.selectedOptionRating === "firstGood") {
                const sortedAscRating = this.reviews.sort(
                    (objB, objA) => Number(objA.rating) - Number(objB.rating),
                );
            } if (this.selectedOptionRating === "firstBad") {
                const sortedAscRating = this.reviews.sort(
                    (objA, objB) => Number(objA.rating) - Number(objB.rating),
                );
            }
        },        
        pageClick(page) {
            this.pageNumber = page;
        },
        nextPages() { 
            this.pageNumber = this.visiblePages[this.visiblePages.length - 1] + 1;
        },
        prevPages(){           
            this.pageNumber = this.visiblePages[this.visiblePages.length - 1] - 1;
        }
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
    computed: {
        pages() {
            return Math.ceil(this.reviews.length / this.reviewsPerPage);
        },
        paginatedReviews() {
            let from = (this.pageNumber - 1) * this.reviewsPerPage;
            let to = from + this.reviewsPerPage;
            return this.reviews.slice(from, to);
        },
        visiblePages() {
            
            const lastPage = Math.ceil(this.reviews.length / this.reviewsPerPage);
            let startPage = Math.max(1, this.pageNumber - Math.floor(this.maxVisiblePages / 2));
            let endPage = Math.min(lastPage, startPage + this.maxVisiblePages - 1);

            if (endPage - startPage + 1 < this.maxVisiblePages) {
                startPage = Math.max(1, endPage - this.maxVisiblePages + 1);
            }

            return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
        },
    
    hasNextPages() {
      return this.visiblePages[this.visiblePages.length - 1] < Math.ceil(this.reviews.length / this.reviewsPerPage);
    },
    },
    components: {
        LoaderComp
    },
};

</script>

<style lang="scss" scoped>
@import '../assets/style/_vars.scss';


</style>