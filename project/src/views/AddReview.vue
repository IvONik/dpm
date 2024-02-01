<template>
    <NavComp />
    <div v-if="isComplited === false">
        <div class="forma">
            <input minlength="2" type="text" required placeholder="Ваше имя" v-model="name" class="input input__name">
            <textarea minlength="2" maxlength="420" required placeholder="текст" class="input input__text"
                v-model="text"></textarea>
            <button class="btn" @click="addreview(arg, event)">оставить отзыв</button>
        </div>
    </div>
    <div v-if="isComplited === true">
        <h2 class="title">Спасибо, ваше мнение очень важно для нас</h2>
    </div>
</template>

<script>
import { db } from '@/main.js';
import { collection, addDoc } from "firebase/firestore";
// import { collection, query, where, getDocs } from "firebase/firestore"; 

import NavComp from '@/components/NavComp.vue';
export default {
    data() {
        return {
            name: '',
            text: '',
            date: '',
            isComplited: false,
        }

    },
    methods: {
        //    async checkReviewsIsSend(){
        //     const userId = this.$store.state.userID;
        //     console.log(userId);
        //         try {
        //             const q = query(collection(db, "reviews"), where("uid", "==", userId));
        //             const querySnapshot = await getDocs(q);

        //             querySnapshot.forEach((doc) => {            
        //             console.log(doc.id, " => ", doc.data());
        //             });
        //         } catch (error) {
        //             console.error("Error fetching data: ", error);
        //         }          

        //     }
        async addreview() {
            try {
                if (this.name.length && this.text.length >= 2) {
                    const docRef = await addDoc(collection(db, "reviews"), {
                        name: this.name,
                        text: this.text,
                        date: new Date().getTime(),
                    });
                    // console.log("Document written with ID: ", docRef.id);
                    this.isComplited = true;
                }
                else {
                    alert("Поля должны содержать минимум 2 символа")
                }
            } catch (err) {
                console.log(err);
            }
        }
    },
    components: { NavComp }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/vars';
input{
    background-color: $colorText;
}
textarea{
    background-color: #e2f0f6;;
}
.forma {
    display: flex;
    justify-content: center;
    flex-direction: column;
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
    // background-color: rgb(174, 207, 241);
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

}</style>