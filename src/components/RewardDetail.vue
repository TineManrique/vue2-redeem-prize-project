<template>
  <div>
    <div class="reward-detail">
      <b-container class="redeeem-detail">
        <b-row>
          <b-col sm="12" md="6">
            <img :src="prize.image_url" :alt="prize.name">
          </b-col>
          <b-col sm="12" md="6">
            <b-card class="redeem-card">
              <b-card-text><h2>Win a {{ prize.name }}</h2></b-card-text>
              <hr>
              <div class="redeem-card__button">
                <b-button @click="openConfirmation" :disabled="!isRedeemable">Redeem ></b-button>
              </div>
              <small class="text-danger" v-if="!isLoggedInUser">
                To redeem this prize, kindly login to your account
              </small>
              <hr>
              <small>{{prize.quantity}} left in stock</small>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
      <hr>
      <b-container class="description">
        <b-row>
          <b-col lg="3" sm="12">
            <h3>Description</h3>
          </b-col>
          <b-col lg="8" sm="12">
            <h5>{{ prize.description }}</h5>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="modals">
      <Lightbox v-if="showConfirmModal">
        <ConfirmModal :prize="prize" @confirm="confirmRedeem"/>
      </Lightbox>
      <Lightbox v-if="showCongratsModal">
        <CongratsModal :prize="prize" />
      </Lightbox>
      </div>
    </div>
</template>

<script>
import Lightbox from './shared/Lightbox.vue';
import ConfirmModal from './ConfirmModal.vue';
import CongratsModal from './CongratsModal.vue';
import { redeemPrize } from '../api/prizes.api.js';

export default {
  props: {
    isLoggedInUser: {
      type: Boolean
    },
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
  data() {
    return {
      isRedeemable: this.prize.quantity > 0 && this.isLoggedInUser || false,
      showConfirmModal: false,
      showCongratsModal: false,
    }
  },
  components: {
    Lightbox, ConfirmModal, CongratsModal
  },
  methods: {
    openConfirmation() {
      this.showConfirmModal = true;
    },
    confirmRedeem(isConfirmed) {
      this.$emit('is-loading', true);
      this.showConfirmModal = false;
      if (isConfirmed) {
        this.redeemPrize();
      }
    },
    async redeemPrize() {
      try {
        const response = await redeemPrize(this.$route.params.id);
        this.prize = response.data;
        this.showCongratsModal = true;

        this.$emit('is-loading', false);
      } catch(error) {
        this.$emit('is-loading', false);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .reward-detail {
    margin: 20px;
    @include breakpoint(laptop) {
      margin: 40px 150px 100px 150px;
    }
    img {
      width: 100%;
      height: 400px;
      @include breakpoint(mobileonly) {
        height: 250px;
      }
    }
    .redeeem-detail {
      margin-bottom: 50px;
    }
    .redeem-card {
      padding-bottom: 20px;
      padding-top: 0;
      .card-text {
        margin-bottom: 70px;
        @include breakpoint(mobileonly) {
          margin-bottom: 0;
        }
        h2 {
          font-weight: 800;
        }
      }
      &__button {
        a {
            text-decoration: none;
            cursor: pointer;
        }
        button {
            cursor: pointer;
            background-color: $yellow-button;
            color: $black-text;
            width: 230px;
            height: 44px;
            border-radius: 28px;
            border: none;
            font-weight: 600;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 30px 0;
            &:disabled {
              cursor: not-allowed;
            }
            @include breakpoint(mobileonly) {
              width: 150px;
            }
        }
      }
    }
    .description {
      margin-top: 50px;
      h3 {
        font-weight: 800;
      }
    }
  }
</style>