<template>
  <div class="signup-page">
    <OverlaySpinner :show="isLoading"> 
      <FormCard formType="register" @on-submit-form="register"/>
      <div class="text-center">
        <router-link :to="{name: 'Login'}">
          <span>Already have an account?</span>
        </router-link>
      </div>
    </OverlaySpinner>
  </div>
</template>

<script>
import FormCard from '../components/FormCard';
import { userSignUp } from '../api/users.api';
import { redirectToPath } from '../utils/common';
import OverlaySpinner from '../components/OverlaySpinner.vue';

export default {
  components: {
    FormCard, OverlaySpinner
  },
  data() {
    return {
        isLoading: false,
    }
  },
  methods: {
    async register(formData) {
      this.isLoading = true
      try {
        const response = await userSignUp(formData);

        if (response.data && response.data.isSuccess) {
          this.isLoading = false
          redirectToPath('/login')
        }
      } catch(error) {
        this.isLoading = false
        alert('Registration failed. Try again.')
        // TODO: A toast message or a modal can be created. 
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .signup-page {
    background-color: $background-grey;
    padding: 40px;
    height: auto;
  }
</style>