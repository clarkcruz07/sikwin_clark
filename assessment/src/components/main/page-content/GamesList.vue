<template>
<div>
    <div class="games-list">
    <Sidebar />
    <div class="games-list-inner">
        <div class="img-wrapper"><img :src="require(`@/assets/img/game-image.dcbb90ad.png`)"></div>
        <div class="img-wrapper"><img :src="require(`@/assets/img/game-image-2.000b53bd.png`)"></div>
        <div class="img-wrapper"><img :src="require(`@/assets/img/game-image.dcbb90ad.png`)"></div>
        <div class="img-wrapper"><img :src="require(`@/assets/img/game-image-2.000b53bd.png`)"></div>
        <div class="img-wrapper"><img :src="require(`@/assets/img/game-image-2.000b53bd.png`)"></div>
    </div>
    </div>
    
</div>
    
</template>
<script>
import Sidebar from './Sidebar'
export default {
  name: 'App',
  components: {
    Sidebar
  }
}
</script>
<style scoped>
.games-list {
    display: flex;
    width: 95%;
    margin: 0 auto;
    justify-content: space-between;
}
.games-list-inner {
    width: 75%;
}
.games-list-inner img {
    width: 100%;
}
</style>