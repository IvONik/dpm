<template>
    <div v-if="$store.state.auth">
        <div v-if="isCompleted === false">
        <div class="forma">           

            <textarea minlength="2" maxlength="420" required placeholder="text" class="input input__text"
                v-model="text">
            </textarea>

            <div class="rating">
                <div class="rating__star" 
                    v-for="n in 5" :key="n" 
                    @click="addRating(n)"                     
                    @mouseover="hoveredStar(n)"
                    :class="{ 'hovered': n <= hoveredRating, 'rating__star_active': n <= rating }" 
                    @mouseout="mouseoutStar(n)">&#9733;
                </div>
            </div>

            <button class="btn btn__rev" @click="addReview()">{{translate('btnAddReviews')}}
            </button>
        </div>
        </div>
        <div v-if="isCompleted === true">
            <h2 class="title">{{translate('addReviewTitle')}}</h2>
        </div>
    </div>
    <div v-if="!$store.state.auth" > 
        <SignupView/>        
    </div>
</template>

<script>
import { db } from '@/main.js';
import { collection, addDoc } from "firebase/firestore";
import SignupView from '@/views/SignupView.vue';
import translateMixin from '@/mixins/translateMixin';

export default {
    data() {
        return {
            username: '',
            text: '',
            date: '',
            isCompleted: false,
            rating: null,
            hoveredRating: null,
        }
    },
    methods: {
        async addReview() {
            try {
                if (this.text.length >= 2) { 
                    const docRef = await addDoc(collection(db, "reviews"), {
                        name: this.$store.state.userName,
                        text: this.text,
                        date: new Date().getTime(),
                        rating: this.rating,
                    });

                    this.isCompleted = true;
                } else {
                    alert("Поля должны содержать минимум 2 символа");
                }
            } catch (err) {
                alert("Что-то пошло не так");
                console.error(err);
            }
        },        
        addRating(item) {
            this.rating = item
        },
        hoveredStar(item) {
            this.hoveredRating = item;
        },
        mouseoutStar() {
            this.hoveredRating = null
        }
    },
    components:{
        SignupView
    },
    mixins: [translateMixin],
}
</script>

<style lang="scss" scoped>
@import '../assets/style/vars';

input {
}

textarea {
    background-color: #e2f0f6;
    
}

.forma {
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    max-width: 360px;
    margin-left: auto;
    margin-right: auto;
    align-items: center;

}

.input__name {
    height: 40px;
}

.input__text {
    height: 350px;
}

.input {
    font-size: 20px;
    border-radius: 15px;
    margin-bottom: 8px;
    padding-left: 15px;
    padding-right: 15px;
    border: 0;
    font-size: 20px;
}

.btn {
    max-width: 360px;
    height: 40px;
    border-radius: 15px;
    background-color: rgb(148, 165, 196);
    border: 0;
    font-size: 20px;
    margin-bottom: 8px;
}

.btn:hover {
    background-color: #64ABD0;
    transition: .2s;

}

.rating {
    display: flex;
    align-items: center;
    font-size: 35px;
    color: #f2e3d2;
    gap: 6px;
}

.rating__star {
    &.hovered {
        color: #FFC700;
        font-size: 37px;
        transform: all .1s;
    }
}
.rating__star_active{
    color: #FFC700;
    font-size: 37px;
}

</style>