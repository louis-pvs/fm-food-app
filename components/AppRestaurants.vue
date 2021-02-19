<template>
  <section class="restaurantinfo">
    <h1>Restaurants</h1>
    <AppSelect @onSelectChange="selectedRestaurant = $event" />
    <br />
    <hr />
    <br />
    <div v-for="item in filteredRestaurantInfos" :key="item.id">
      <h2>
        {{ item.name }}
      </h2>
      <p>Delivery Time: {{ item.deliveryTime }}</p>
      <p>Rating: {{ item.rating }}</p>
      <p v-if="item.freeDelivery" class="label">
        <span>Free Delivery</span>
      </p>
      <div class="row">
        <div
          v-for="menuItem in item.menu"
          :key="menuItem.id"
          class="items"
          :style="`background: url('/${menuItem.img}') no-repeat center center;`"
        >
          <div class="iteminfo">
            <div>
              <h4>
                {{ menuItem.item }}
              </h4>
              <p>{{ priceFormatting(menuItem.price) }}</p>
            </div>
            <nuxt-link :to="`/items/${menuItem.id}`">
              <button class="ghost">View Restaurant</button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppSelect from '@/components/AppSelect.vue'

export default {
  components: {
    AppSelect,
  },
  props: {
    datasource: {
      type: [Array, Object],
      required: true,
    },
  },
  data() {
    return {
      selectedRestaurant: '',
    }
  },
  computed: {
    filteredRestaurantInfos() {
      if (this.selectedRestaurant) {
        return this.datasource.filter((restaurantInfo) => {
          const restaurantName = restaurantInfo.name.toLowerCase()
          return restaurantName.includes(this.selectedRestaurant.toLowerCase())
        })
      }
      return this.datasource
    },
  },
  methods: {
    priceFormatting: (amount) => `$${amount.toFixed(2)}`,
  },
}
</script>
