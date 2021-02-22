<template>
  <fieldset @change="$emit('onRadioChange', $event.target.value)">
    <legend>{{ checkboxFor }}</legend>
    <label v-for="option in checkboxOptions" :key="option" :for="option">
      <input
        :id="option"
        v-model="selectedCheckboxOptions"
        type="checkbox"
        :name="checkboxFor"
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
    checkboxFor: {
      type: String,
      default: () => 'Options',
    },
    checkboxOptions: {
      type: [Array, Object],
      default: () => [],
      required: true,
    },
  },
  data() {
    return {
      selectedCheckboxOptions: [],
    }
  },
}
</script>
