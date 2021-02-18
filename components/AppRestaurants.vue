<template>
  <section class="restaurantinfo">
    <h1>Restaurants</h1>
    <hr />
    <br />
    <div v-for="restaurantInfo in restaurantInfos" :key="restaurantInfo.id">
      <h2>{{ restaurantInfo.name }}</h2>
      <p>Delivery Time: {{ restaurantInfo.deliveryTime }}</p>
      <p>Rating: {{ restaurantInfo.rating }}</p>
      <p v-if="restaurantInfo.freeDelivery" class="label">
        <span>Free Delivery</span>
      </p>
      <div class="row">
        <div
          v-for="menuItem in restaurantInfo.menu"
          :key="menuItem.id"
          class="items"
          :style="`background: url('/${menuItem.img}') no-repeat center center;`"
        >
          <div class="iteminfo">
            <div>
              <h4>{{ menuItem.item }}</h4>
              <p>{{ priceFormatting(menuItem.price) }}</p>
            </div>
            <button class="ghost">View Restaurant</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    restaurantInfos() {
      return this.$store.state.fooddata
    },
  },
  methods: {
    priceFormatting: (amount) => `$${amount.toFixed(2)}`,
  },
}
</script>
