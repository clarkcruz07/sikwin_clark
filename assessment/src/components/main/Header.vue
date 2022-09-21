<template>
    <div class="header-wrapper">
        <div class="header">
            <div>
                <img :src="require(`@/assets/img/ho_me.png`)">
            </div>
            <div>
                <img :src="require(`@/assets/img/ho_lo.png`)">
            </div>
            <div>
                <img :src="require(`@/assets/img/ho_li.png`)">
            </div>
        </div>
    </div>
</template>
<style scoped>
.header-wrapper{
    width: 100%;
    position: fixed;
    background: inherit;
    z-index: 1;
}
.header{
    width:95%;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
}
</style>
