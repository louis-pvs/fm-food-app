<template>
  <div>
    <div class="content">
      <AppMenu />
      <Nuxt />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppMenu from '@/components/AppMenu'
import AppFooter from '@/components/AppFooter.vue'
export default {
  components: {
    AppMenu,
    AppFooter,
  },
}
</script>

<style>
html {
  font-family: 'Mulish', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-weight: 300;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Poppins', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-weight: 600;
}
</style>
