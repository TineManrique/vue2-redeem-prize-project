<template>
    <div class="congrats-modal text-center">
        <h3>Congratulations!</h3>
        <h4>You redeemed a {{ prize.name }}.</h4>
        <div class="redeem-modal__button">
            <router-link :to="{name: 'Home'}">
                <button>More Prizes</button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        prize: {
            id: {
                type: Number,
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
}
</script>

<style lang="scss" scoped>
    .congrats-modal {
        h3 {
            font-weight: 900;
        }
        a {
            text-decoration: none;
            cursor: pointer;
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