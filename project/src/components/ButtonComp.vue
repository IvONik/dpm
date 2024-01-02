<template>
    <div class="siteWidth">
    <div class="bigBox">
      <div  class="box" >        
        {{ button.title }}        
      </div>
    
    </div>
   
  </div>
</template>

<script>
export default {
    name: 'DiplomButtonComp',
    props:{
        button: Object,
    },
    data() {
        return {
            active: false,
        };
    },
    methods: {
       
    },
};
</script>

<style lang="scss" scoped>

</style>