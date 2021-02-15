<template>
  <div>
    <RewardHeader />
    <RewardDetail :prize="prize"/>
    <TermsAndPrivacy />
  </div>
</template>

<script>
import RewardDetail from '../components/RewardDetail.vue'
import RewardHeader from '../components/RewardHeader.vue'
import TermsAndPrivacy from '../components/TermsAndPrivacy.vue'

export default {
  components: {
    RewardHeader,
    RewardDetail,
    TermsAndPrivacy
  },
  data() {
    return {
        prize : {
          id: 1, name: 'Flyaway', description: 'This is sample description for Reward 1', image_url: 'https://homepages.cae.wisc.edu/~ece533/images/monarch.png', quantity: 9
        }
    }
  }
}
</script>

<style>

</style>


