<template>
  <nav>
    <ul>
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/restaurants">Restaurants</nuxt-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      value: 'my value',
    }
  },
}
</script>

<style lang="scss" scoped>
.test {
  color: red;
}
</style>
