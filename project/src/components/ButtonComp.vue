<template>
    <div class="siteWidth">
    <div class="bigBox">
      <div  class="box" @click="press()" :style="{'backgroundColor': active ? 'white' : ''}">        
        {{ button.title }}
         <img :src="button.img" alt="img" class="svg" >
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

    mounted() {
        
    },

    methods: {
        press(){
            this.active = !this.active;    
                   
        },
    },
};
</script>

<style lang="scss" scoped>

.box{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 380px;
    height: 150px;
    border: 1px solid #141618 ;
    border-radius: 40px;
    color: black;
    // background-color: white;
    background-color: rgba(255,255,255,0.5);
    box-shadow: 0px 10px 20px 2px #4f4f54;
  gap: 12px;  
  
}
.box:active{
  box-shadow: 0px 2px 2px 2px #808992;
  transition: .2s;
}
.svg{
  height: 60px;
}
</style>