<template>
  <div class="footer-wrapper">
    <div class="footer">
          <div><img :src="require(`@/assets/img/ho_ho1@2x.png`)"></div>
          <div><img :src="require(`@/assets/img/ho_ac2@2x.png`)"></div>
          <div><img :src="require(`@/assets/img/ho_wa2@2x.png`)"></div>
          <div><img :src="require(`@/assets/img/ho_co2@2x.png`)"></div>
          <div><img :src="require(`@/assets/img/ho_my2@2x.png`)"></div>
    </div>        
  </div>
</template>
<style scoped>
.footer-wrapper{
  background: #303032;
  bottom: 0;
  position: fixed;
  width: 100%;
}
.footer{  
    width: 95%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
}
.footer img {
    transform: scale(0.6);
}
</style>