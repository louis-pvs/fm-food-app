<template>
  <div>
    <label :for="selectFor">What {{ selectFor }} do you want?</label>
    <select
      :id="selectFor"
      :name="selectFor"
      @change="$emit('onSelect', $event.target.value)"
    >
      <option disabled selected>Please pick one</option>
      <option v-for="option in selectOptions" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    selectFor: {
      type: String,
      default: () => 'cuisine',
    },
    selectOptions: {
      type: Array,
      default: () => ['Dim sum', 'Taco', 'Pizza'],
    },
  },
}
</script>
