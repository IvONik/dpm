<template>
    
    <div :class="currentTheme">
        <NavComp />
        <router-view />
    </div>
      
</template>


<script>
import NavComp from './components/NavComp.vue';
import { mapGetters } from 'vuex';

export default {
    components: {
        NavComp,
    },
    computed: {
        ...mapGetters(['currentTheme']),
    },
}
</script>

<style lang="scss">
.light{
   
    background-color: #c5def3;
    color: #0f1114;
}

.dark{
    background-color: rgb(32, 62, 93);
    color: #c1d9f0;
}
</style>
