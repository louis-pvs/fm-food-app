import axios from 'axios'

export const state = () => ({
  fooddata: [],
  errorMessage: '',
})

// export const getters = {
//   getterValue: (state) => {
//     return state.value
//   },
// }

export const mutations = {
  setFooddata: (state, payload) => (state.fooddata = payload),
  setErrorMsg: (state, payload) => (state.errorMessage = payload),
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
