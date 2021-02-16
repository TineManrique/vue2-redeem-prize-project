<template>
    <div class="confirm-modal text-center">
        <h3>Are you Sure?</h3>
        <div>
            <img :src="prize.image_url" :alt="prize.name">
        </div>
        <h4>Redeem for a {{ prize.name }}?</h4>
        <div class="redeem-modal__button">
            <button class="mr-4" @click="confirmRedeem(true)">Yes</button>
            <button @click="confirmRedeem(false)">No</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        prize: {
            _id: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            image_url: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    },
    methods: {
        confirmRedeem(isConfirmed) {
            this.$emit('confirm', isConfirmed);
        }
    }
}
</script>

<style lang="scss" scoped>
    .confirm-modal {
        h3 {
            font-weight: 900;
        }
        img {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            margin-bottom: 34px;
            margin-top: 22px;
        }
        .redeem-modal {
            &__button {
                display: inline-flex;
                margin-top: 25px;
            }
        }
        button {
            width: 154px;
            height: 37px;
            margin: 30px 0;
        }
    }
</style>