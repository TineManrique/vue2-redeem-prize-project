<template>
  <div class="signup-page">
    <b-card>
      <SignUpLoginForm formType="register" @on-submit-form="register"/>
    </b-card>
    <div class="text-center">
      <router-link :to="{name: 'Login'}">
        <span>Already have an account?</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import SignUpLoginForm from '../components/SignUpLoginForm';
import { userSignUp } from '../api/users.api';
import { redirectToPath } from '../utils/common';

export default {
  components: {
    SignUpLoginForm
  },
  methods: {
    async register(formData) {
      try {
        const response = await userSignUp(formData);

        if (response.data && response.data.isSuccess) {
          redirectToPath('/login');
        }
      } catch(error) {
        console.log(error);
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
    .card {
      width: 80%;
      margin: 0 auto;
      border-radius: 5px;
    }
  }
</style>