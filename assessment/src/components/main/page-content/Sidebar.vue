<template>
    <div class="sidebar">        
        <div class="img-wrapper" >
            <img :src="require(`@/assets/img/ho_us1@3x.png`)" >
        </div>
        <div class="img-wrapper">
            <img :src="require(`@/assets/img/ho_li2@3x.png`)">
        </div>
        <div class="img-wrapper">
            <img :src="require(`@/assets/img/ho_sp2@3x.png`)">
            </div>
        <div class="img-wrapper"><img :src="require(`@/assets/img/ho_lo2@3x.png`)"></div>
        <div class="img-wrapper"><img :src="require(`@/assets/img/ho_po2@3x.png`)"></div>
        <div class="img-wrapper"><img :src="require(`@/assets/img/ho_ga2@3x.png`)"></div>

    </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style scoped>

.sidebar{
    width: 25%;
}
.sidebar img{
    width: 50%;
}
</style>