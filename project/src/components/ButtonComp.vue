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

.box{
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // justify-content: center;
    // width: 380px;
    // height: 150px;
    // border: 1px solid #c1d9f0;
    // border-radius: 40px;
    // color: black;
    // // background-color: white;
    // background-color: rgba(255,255,255,0.5);
    // box-shadow: 0px 10px 20px 2px #4f4f54;
    // gap: 12px;    
}

</style>