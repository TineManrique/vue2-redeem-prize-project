<template>
  <div>
    <b-overlay :show="show" rounded="sm">
        <slot></slot>
    </b-overlay>
  </div>
</template>

<script>
  export default {
    props: {
        show: {
            type: Boolean
        }
    }
  }
</script>