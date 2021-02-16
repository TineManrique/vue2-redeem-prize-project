<template>
  <div class="login-page">
    <b-card>
      <SignUpLoginForm formType="login" @on-submit-form="login"/>
    </b-card>
    <div class="text-center">
      <router-link :to="{name: 'SignUp'}">
        <span>Not yet a user?</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import SignUpLoginForm from '../components/SignUpLoginForm';
import { userLogin } from '../api/users.api.js';
import { redirectToPath, setLocalStorageData } from '../utils/common';

export default {
  components: {
    SignUpLoginForm
  },
  methods: {
    async login(formData) {
      try {
        const response = await userLogin(formData);
        if (response.data && response.data.isSuccess) {
          setLocalStorageData('token', response.data.token);
          redirectToPath('/');
        }
      } catch(error) {
        console.log(error);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .login-page {
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