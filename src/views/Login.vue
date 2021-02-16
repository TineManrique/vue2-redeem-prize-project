<template>
  <div class="login-page">
    <FormCard formType="login" @on-submit-form="login"/>
    <div class="text-center">
      <router-link :to="{name: 'SignUp'}">
        <span>Not yet a user?</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import FormCard from '../components/FormCard';
import { userLogin } from '../api/users.api.js';
import { redirectToPath, setLocalStorageData } from '../utils/common';

export default {
  components: {
    FormCard
  },
  methods: {
    async login(formData) {
      try {
        const response = await userLogin(formData);
        if (response.data && response.data.isSuccess) {
          setLocalStorageData('token', response.data.token)
          redirectToPath('/');
        }
      } catch(error) {
        alert('Login failed. Please check email and password');
        // TODO: A toast message or a modal can be created. 
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .login-page {
    background-color: $background-grey;
    padding: 40px;
    height: 600px;
  }
</style>