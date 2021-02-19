<template>
  <main class="container">
    <AppHeader />
    <AppRestaurants :datasource="restaurantInfos" />
  </main>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppRestaurants from '@/components/AppRestaurants'
export default {
  components: {
    AppHeader,
    AppRestaurants,
  },
  computed: {
    restaurantInfos() {
      return this.$store.state.fooddata
    },
  },
}
</script>

<style>
.row {
  margin: 30px 0 60px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 0;
}
</style>
