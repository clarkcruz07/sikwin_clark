<template>
  <div>
        <BannerSlider />
        <GameSlider />
        <TournamentList />
        <GamesList />
  </div>
</template>

<script>
import BannerSlider from './page-content/BannerSlider'
import GameSlider from './page-content/GameSlider'
import TournamentList from './page-content/TournamentList'
import GamesList from './page-content/GamesList'
export default {
  name: 'App',
  components: {
    BannerSlider,
    GameSlider,
    TournamentList,
    GamesList
  }
}
</script>