<template>
  <div class="prize-detail-page">
    <OverlaySpinner :show="isLoading"> 
      <div v-if="prize">
        <RewardHeader />
        <RewardDetail :prize="prize" :isLoggedInUser="isLoggedInUser" @is-loading="setRedeemLoading"/>
        <TermsAndPrivacy />
      </div>
    </OverlaySpinner>
  </div>
</template>

<script>
import RewardDetail from '../components/RewardDetail.vue'
import RewardHeader from '../components/RewardHeader.vue'
import TermsAndPrivacy from '../components/TermsAndPrivacy.vue'
import OverlaySpinner from '../components/shared/OverlaySpinner.vue';
import { getPrize } from '../api/prizes.api';
import { getLocalStorageData } from '../utils/common';

export default {
  components: {
    RewardHeader,
    RewardDetail,
    TermsAndPrivacy,
    OverlaySpinner
  },
  data() {
    return {
        prize : null,
        isLoading: true,
        isLoggedInUser: false,
    }
  },
  mounted () {
    this.getPrize();
    this.isLoggedInUser = this.checkIfLoggedIn();
  },
  methods: {
    async getPrize() {
      try {
        const response = await getPrize(this.$route.params.id);
        this.prize = response.data;

        this.isLoading = false;
      } catch(error) {
        this.isLoading = false;
      }
    },
    setRedeemLoading(isLoading) {
      this.isLoading = isLoading;
    },
    checkIfLoggedIn() {
      return getLocalStorageData('token') != null && getLocalStorageData('userDetail') != null;
    }
  }
}
</script>

<style lang="scss" scoped>
  .prize-detail-page {
    background-color: $background-grey;
  }
</style>


