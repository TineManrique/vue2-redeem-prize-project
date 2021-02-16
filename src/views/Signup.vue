<template>
  <div class="signup-page">
    <FormCard formType="register" @on-submit-form="register"/>
    <div class="text-center">
      <router-link :to="{name: 'Login'}">
        <span>Already have an account?</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import FormCard from '../components/FormCard';
import { userSignUp } from '../api/users.api';
import { redirectToPath } from '../utils/common';

export default {
  components: {
    FormCard
  },
  methods: {
    async register(formData) {
      try {
        const response = await userSignUp(formData);

        if (response.data && response.data.isSuccess) {
          redirectToPath('/login');
        }
      } catch(error) {
        alert('Registration failed. Try again.');
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