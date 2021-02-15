<template>
  <div>
    <RewardHeader />
    <PrizeList :prizes="prizes"/>
    <TermsAndPrivacy />
  </div>
</template>

<script>
import PrizeList from '../components/PrizeList.vue'
import RewardHeader from '../components/RewardHeader.vue'
import TermsAndPrivacy from '../components/TermsAndPrivacy.vue'

export default {
  name: 'Home',
  components: {
    RewardHeader,
    PrizeList,
    TermsAndPrivacy
  },
  data() {
    return {
      prizes: [
        { id: 1, name: 'Flyaway', description: 'This is sample description for Reward 1', image_url: 'https://homepages.cae.wisc.edu/~ece533/images/monarch.png', quantity: 9 },
        { id: 2, name: 'Flyaway', description: 'This is sample description for Reward 2', image_url: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png', quantity: 1 },
        { id: 3, name: 'Flyaway', description: 'This is sample description for Reward 3', image_url: 'https://homepages.cae.wisc.edu/~ece533/images/fruits.png', quantity: 9 },
        { id: 4, name: 'Flyaway', description: 'This is sample description for Reward 4', image_url: 'https://homepages.cae.wisc.edu/~ece533/images/peppers.png', quantity: 9 },
        { id: 5, name: 'Flyaway', description: 'This is sample description for Reward 5', image_url: 'https://homepages.cae.wisc.edu/~ece533/images/sails.png', quantity: 9 },
        { id: 6, name: 'Flyaway', description: 'This is sample description for Reward 6', image_url: 'https://homepages.cae.wisc.edu/~ece533/images/watch.png', quantity: 9 },
      ]
    }
  }
}
</script>
