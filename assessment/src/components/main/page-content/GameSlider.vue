<template>
    <div class="game-slider">
        <div class="game-title"><span>Hot Game</span></div>
        <div class="slick-image">
            <slick ref="slick" 
            data-slick='{"slidesToShow": 4, 
            "slidesToScroll": 1, 
            "arrows": false}'>
                <div class="img-wrapper"><img :src="require(`@/assets/img/imageList.b86c905a.jpg`)"></div>
                <div class="img-wrapper"><img :src="require(`@/assets/img/imageList.b86c905a.jpg`)"></div>
                <div class="img-wrapper"><img :src="require(`@/assets/img/imageList.b86c905a.jpg`)"></div>
                <div class="img-wrapper"><img :src="require(`@/assets/img/imageList.b86c905a.jpg`)"></div>
                <div class="img-wrapper"><img :src="require(`@/assets/img/imageList.b86c905a.jpg`)"></div>
            </slick>
        </div>
    </div>
</template>
<style scoped>
.game-slider {
    width: 95%;
    margin: 0 auto;
}
.game-slider img {
    width: 85%;
    border-radius: 20px;
}
.game-title{
    padding: 10px 0;
    color:  #f7cf70;
}
</style>