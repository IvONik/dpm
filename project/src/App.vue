<template>
  <!-- <nav>
    <NavComp/>    
  </nav> -->
  <router-view/> 
</template>

<script>
import NavComp from './components/NavComp.vue';

export default {
    component: {
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
 
}
body{  
  // background-image: url(./assets/img/abstract-wavy-background1.jpg);
  background-color: rgb(23, 44, 67);
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

</style>
