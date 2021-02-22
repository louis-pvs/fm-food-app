import axios from 'axios'

export const state = () => ({
  fooddata: [],
  errorMessage: '',
  cart: [],
})

export const getters = {
  totalAmount: (state) => {
    if (!state.cart) return 0
    return state.cart.reduce((total, item) => total + +item.subtotal, 0)
  },
  cartQuantity: (state) => 0 || state.cart.length,
}

export const mutations = {
  setFooddata: (state, payload) => (state.fooddata = payload),
  setErrorMsg: (state, payload) => (state.errorMessage = payload),
  addFoodToCart: (state, payload) => state.cart.push(payload),
}

export const actions = {
  async getFooddata({ commit, state }) {
    if (state.fooddata.length) return
    await axios({
      method: 'GET',
      url:
        'https://dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.AWS_API_KEY,
      },
    })
      .then((res) => res.data)
      .then((data) => commit('setFooddata', data))
      .catch((err) => commit('setErrorMsg', err.message))
  },
}
