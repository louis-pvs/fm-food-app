<template>
  <fieldset @change="$emit('onRadioChange', $event.target.value)">
    <legend>{{ radioFor }}</legend>
    <label v-for="option in radioOptions" :key="option" :for="option">
      <input
        :id="option"
        v-model="selectedRadioOption"
        type="radio"
        :name="option"
        :value="option"
      />
      <span>{{ option }}</span>
      <br />
    </label>
  </fieldset>
</template>

<script>
export default {
  props: {
    radioFor: {
      type: String,
      default: () => 'Options',
    },
    radioOptions: {
      type: [Array, Object],
      default: () => [],
      required: true,
    },
  },
  data() {
    return {
      selectedRadioOption: '',
    }
  },
}
</script>
