<template>
  <div
    class="custom_input_group"
    :class="{'d-flex justify-content-center align-items-center' : preText}"
    :style="preText ? 'margin-left: 18px' : ''"
  >
    <span
      class="me-1"
      v-if="preText"
    >
      {{ preText }}
    </span>
    <input
      v-if="isInput"
      class="form-control custom_input"
      :placeholder="placeholder"
      @click="useFunction ? emitFunction() : ''"
    >
    <textarea
      v-if="isTextArea"
      class="form-control custom_input"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  props: {
    preText: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    useFunction: {
      type: Boolean,
      default: false
    },
    isInput: {
      type: Boolean,
      default: false
    },
    isTextArea: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    emitFunction () {
      this.$emit('emitFunction')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
.custom_input_group {
  border-radius: 8px;
  background-color: $text_primary-100;
  padding: 16px;
}
.custom_input {
  background: transparent;
  border: none;
}
</style>
