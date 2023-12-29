<template>
    <div>
        <NavComp/>
        <div class="title">Ваши отзывы</div>
        <button class="btn" @click="add()">Оставить отзыв</button>
    </div>
</template>

<script>
    import NavComp from '@/components/NavComp.vue';
    export default {
        data() {
        return {};
    },
    
    methods: {
        add(){
            if (this.$store.state.auth=== false){
                this.$router.push('/signup') 
            }else{
                console.log("Можно оставить отзыв");
            }
        }
    },
    components: { NavComp }
    
};

</script>

<style lang="scss" scoped>
.btn {    
    width: 360px;
    height: 40px;
    border-radius: 15px;
    background-color: rgb(148, 165, 196);
    border: 0;
    font-size: 20px;
    margin-bottom: 8px;
}
.btn:hover{
    
    background-color: #64ABD0;
    transition: .2s;

}
</style>