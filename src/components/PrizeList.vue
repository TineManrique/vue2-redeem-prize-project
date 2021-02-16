<template>
    <div class="prize-list">
        <div class="prize-list__text">
            <h3>Here is the full list of prizes that you can win.</h3>
        </div>
        <b-container>
            <b-row>
                <b-col v-for="prize in prizes" :key="prize._id" md="4" sm="6">
                    <PrizeItem :prizeItem="prize"/>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import PrizeItem from './PrizeItem.vue';

export default {
    components: {
        PrizeItem
    },
    props: {
        prizes: {
            type: Array
        }
    }
}
</script>

<style lang="scss" scoped>
    .prize-list {
        background-color: $background-grey;
        &__text {
            padding: 64px 0 70px 0;
            text-align: center;
            h3 {
                font-weight: 100;
            }
        }
        &__items {
            margin: 0 52px 72px 68px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            &--card {
                flex: 0 1 32.4%;
                margin-bottom: 18px;
                @include breakpoint(mobileonly) {
                    flex: unset;
                }
            }
        }
    }
</style>
