<template>
    <div class="tournament-wrapper">
        <div class="tournament-left">
            <div>
                <img :src="require(`@/assets/img/ho_mo.png`)"> 
            </div>
            <div>
            <span> KEN </span> <img :src="require(`@/assets/img/ho_vi.png`)"> <span class="yellow"> 7 </span> 
            <div>$<span class="yellow">1221212123</span></div>
            </div>
        
        </div>

        <div class="tournament-right">

            <div>
                <img :src="require(`@/assets/img/ho_no@2x.png`)"> 
            </div>
            <div> :Dragon Boat Festival holiday!holiday!holiday!holiday!</div>
        </div>
    </div>
</template>
<style scoped>
.tournament-wrapper{
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    flex-wrap: wrap;
}
.yellow{
    color:  #f7cf70;
}
.tournament-left, .tournament-right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
}
.tournament-left div:nth-child(1), .tournament-right div:nth-child(1) {
    padding-right: 10px;
}
</style>