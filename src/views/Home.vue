<template>
  <div>
    <OverlaySpinner :show="isLoading">
      <RewardHeader />
      <PrizeList :v-if="prizes && prizes.length" :prizes="prizes"/>
      <TermsAndPrivacy />
    </OverlaySpinner>
  </div>
</template>

<script>
import PrizeList from '../components/PrizeList.vue'
import RewardHeader from '../components/RewardHeader.vue'
import TermsAndPrivacy from '../components/TermsAndPrivacy.vue'
import OverlaySpinner from '../components/shared/OverlaySpinner.vue'
import { getAllPrizes } from '../api/prizes.api.js';

export default {
  name: 'Home',
  components: {
    RewardHeader,
    PrizeList,
    TermsAndPrivacy,
    OverlaySpinner,
  },
  data() {
    return {
      prizes: [],
      isLoading: true,
      isLoggedIn: false
    }
  },
  mounted() {
    this.getAllPrizes();
  },
  methods: {
    async getAllPrizes() {
      try {
        const response = await getAllPrizes();
        this.prizes = response.data;

        this.isLoading = false;
      } catch(error) {
        this.isLoading = false;
      }
    },
  }
}
</script>
