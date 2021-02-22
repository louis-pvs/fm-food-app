<template>
  <main class="container container--center">
    <div class="container__content content__row">
      <section class="content__column">
        <div
          class="image"
          role="img"
          :style="`background: url('/${currentItem.img}') no-repeat center center`"
          :aria-label="currentItem.description"
        ></div>
        <h2>Description</h2>
        <p>{{ currentItem.description }}</p>
      </section>
      <section class="content__column">
        <h2>
          {{ currentItem.item }}
        </h2>
        <h3>Price: {{ priceFormatting(currentItem.price) }}</h3>
        <AppToaster v-if="cartAdded">
          <p>
            <strong>{{ currentItem.item }}</strong> added to cart!
          </p>
          <p>
            <nuxt-link to="/restaurants"
              >Have a look on other restaurants</nuxt-link
            >
          </p>
        </AppToaster>
        <div class="quantity">
          <input
            id="quantity"
            v-model="quantity"
            type="number"
            name="quantity"
            min="1"
          />
          <button class="primary" @click="addToCart">
            Add to Cart - {{ priceFormatting(subtotal) }}
          </button>
        </div>
        <AppRadioGroup
          v-if="currentItem.options"
          radio-for="Options"
          :radio-options="currentItem.options"
          @onRadioChange="selectedOption = $event"
        />
        <AppCheckboxGroup
          v-if="currentItem.addOns"
          input-type="checkbox"
          checkbox-for="Add Ons"
          :checkbox-options="currentItem.addOns"
          @onRadioChange="selectedAddOns.push($event)"
        />
      </section>
    </div>
  </main>
</template>

<script>
import AppRadioGroup from '@/components/AppRadioGroup.vue'
import AppToaster from '@/components/AppToaster.vue'
import AppCheckboxGroup from '@/components/AppCheckboxGroup.vue'

export default {
  components: {
    AppRadioGroup,
    AppCheckboxGroup,
    AppToaster,
  },
  data() {
    return {
      id: this.$route.params.id,
      quantity: 1,
      selectedOption: '',
      selectedAddOns: [],
      cartAdded: false,
    }
  },
  computed: {
    restaurantInfos() {
      return this.$store.state.fooddata
    },
    subtotal() {
      return this.currentItem.price * this.quantity
    },
    currentItem() {
      let item
      for (let i = 0; i < this.restaurantInfos.length; i++) {
        const restaurantInfo = this.restaurantInfos[i]
        for (let ii = 0; ii < restaurantInfo.menu.length; ii++) {
          const menuItem = restaurantInfo.menu[ii]
          if (menuItem.id === this.id) item = menuItem
          if (item) break
        }
        if (item) break
      }
      return item
    },
  },

  methods: {
    addToCart() {
      this.cartAdded = true
      const newFoodToCart = {
        id: this.currentItem.id,
        item: this.currentItem.item,
        quantity: this.quantity,
        option: this.selectedOption,
        addOns: this.selectedAddOns,
        subtotal: this.subtotal,
      }
      this.$store.commit('addFoodToCart', newFoodToCart)
    },
    priceFormatting: (amount) => `$${amount.toFixed(2)}`,
  },
}
</script>

<style lang="scss" scoped>
.image {
  display: inline-block;
  width: 400px;
  height: 400px;
}
.container--center {
  text-align: center;
}
.container__content {
  margin: 0 auto;
  text-align: left;
  max-width: 80%;
  padding: 5% 0;
}
.content__row {
  display: inline-block;
  position: relative;
  width: 100%;
}
.content__column {
  float: left;
  width: 50%;
}
</style>
