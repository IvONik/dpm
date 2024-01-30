
<template>
    <div class="loader-container">
      <div class="loader"></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        
      };
    },
  };
  </script>
  
  <style scoped>
  .loader-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30vh;
  }
  
  .loader {
    border: 8px solid #2E3784;
    border-top: 8px solid #FFC700;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  </style>
  