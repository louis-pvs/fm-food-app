<template>
  <div class="container">
    <h2>Cart</h2>
    <p v-if="!cart.length">
      Your cart is empty,
      <strong>
        <nuxt-link to="/restaurants">
          go add something from restaurants
        </nuxt-link>
      </strong>
    </p>
    <table v-if="cart.length">
      <thead>
        <tr>
          <th>Item</th>
          <th>Add Ons</th>
          <th>Amount</th>
          <th>Total Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cart" :key="item.id">
          <td>
            {{ item.item }}
            <span v-if="item.option">- {{ item.option }}</span>
          </td>
          <td>
            <spam v-for="addOn in item.addOns" :key="addOn" class="comma">
              {{ addOn }}
            </spam>
          </td>
          <td>{{ item.quantity }}</td>
          <td>{{ priceFormatting(item.subtotal) }}</td>
        </tr>
        <tr>
          <td colspan="3"></td>
          <td class="total">Total: {{ priceFormatting(totalAmount) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart
    },
    totalAmount() {
      return this.$store.getters.totalAmount
    },
  },
  methods: {
    priceFormatting: (price) => `$ ${price.toFixed(2)}`,
  },
}
</script>
