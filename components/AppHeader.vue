<template>
  <div>
    <section class="masthead" role="img" aria-label="Food app hero background">
      <div class="masthead__content">
        <h1>Nuxt Food App</h1>
        <nuxt-link to="/restaurants">
          <button>See Restaurant</button>
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.masthead {
  display: inline-block;
  position: relative;
  text-align: center;
  width: 100%;
  padding-top: 20%;
  overflow: hidden;
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 37%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url('../assets/headerimg.jpg') no-repeat center center scroll;
  background-size: cover;
}

.masthead__content {
  display: inline-block;
  position: absolute;
  width: 90%;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}

h1 {
  font-style: normal;
  font-weight: bold;
  color: #eee;
  font-size: 10vmin;
  letter-spacing: 0.03em;
  line-height: 1;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
  margin-bottom: 40px;
}

button {
  background: #098191;
  transition: background ease 0.25s;
  border-radius: 6px;
  display: inline-block;
  border: none;
  padding: 0.75rem 1.5rem;
  margin: 0;
  text-decoration: none;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
}
button:hover {
  background: #63b6b8;
}
button:focus {
  outline: 1px solid #fff;
  outline-offset: -4px;
}
</style>
