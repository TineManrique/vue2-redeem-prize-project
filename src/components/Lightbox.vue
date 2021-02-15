<template>
    <b-modal v-model="showModal" hide-footer>
        <slot></slot>
    </b-modal>
</template>

<script>
export default {
    data() {
        return {
            showModal: true
        }
    }
}
</script>

<style lang="scss">
    .modal-header, .modal-footer {
        border: none;
        border-bottom: none;
    }
</style>