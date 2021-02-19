<template>
  <main class="container restaurant">
    <AppRestaurants :datasource="restaurantInfos" />
  </main>
</template>

<script>
import AppRestaurants from '@/components/AppRestaurants.vue'
export default {
  components: {
    AppRestaurants,
  },
  computed: {
    restaurantInfos() {
      return this.$store.state.fooddata
    },
  },
}
</script>
