<template>
    <NavComp/>
  <router-view/> 
</template>

<script>
import NavComp from './components/NavComp.vue';

export default {
    components: {
        NavComp,       
    },    
}
</script>

<style lang="scss">

#app { 
  text-align: center;  
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
 
}
body{ 
  background-color: rgb(23, 44, 67); 
  align-items: center;
}

</style>
