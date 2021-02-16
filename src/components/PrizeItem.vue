<template>
    <div class="prize-card">
        <b-card
            :img-src="prizeItem.image_url"
            :img-alt="prizeItem.name"
            img-top
            tag="article"
            class="mb-4">
            <b-card-text>
                <div class="prize-name">
                    <h3> Win a {{prizeItem.name}} </h3>
                </div>
            </b-card-text>
            <div class="redeem-button">
                <router-link :to="{name: 'PrizeDetail', params: { id: prizeItem._id }}">
                    <button>
                        Redeem
                        <font-awesome-icon icon="greater-than"></font-awesome-icon>
                    </button>
                </router-link>
            </div>
        </b-card>
    </div>
</template>

<script>

export default {
    props: {
        prizeItem: {
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
}
</script>

<style lang="scss" scoped>
    .prize-card {
        .fa-greater-than {
            font-size: 8px;
            margin-left: 9px;
            margin-top: 3px;
        }
        img {
            width: 100%;
            height: 250px;
            border-radius: 5px 5px 0 0;
        }
        .prize-name {
            margin: 64px 0;
            text-align: center;
            h3 {
                font-weight: 800;
            }
        }
        .redeem-button {
            display: flex;
            align-items: center;
            justify-content: center;
            a {
                text-decoration: none;
                cursor: pointer;
            }
            button {
                width: 160px;
                height: 44px;
                border-radius: 28px;
                border: none;
                font-weight: 600;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 38px;
            }
        } 
    }
</style>