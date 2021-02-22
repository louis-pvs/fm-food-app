<template>
  <nav>
    <ul>
      <li>
        <nuxt-link to="/"><AppLogo /></nuxt-link>
      </li>
      <li><nuxt-link to="/restaurants">Restaurants</nuxt-link></li>
    </ul>
    <nuxt-link to="/cart">
      cart
      <small v-if="cartQuantity" class="smallnum">{{ cartQuantity }}</small>
    </nuxt-link>
  </nav>
</template>

<script>
import AppLogo from '@/components/AppLogo.vue'
export default {
  components: {
    AppLogo,
  },
  data() {
    return {
      value: 'my value',
    }
  },
  computed: {
    cartQuantity() {
      return this.$store.getters.cartQuantity
    },
  },
}
</script>

<style lang="scss" scoped>
.test {
  color: red;
}
</style>
