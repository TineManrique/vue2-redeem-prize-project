<template>
  <div class="login-page">
    <OverlaySpinner :show="isLoading"> 
      <FormCard formType="login" @on-submit-form="login"/>
      <div class="text-center">
        <router-link :to="{name: 'SignUp'}">
          <span>Not yet a user?</span>
        </router-link>
      </div>
    </OverlaySpinner>
  </div>
</template>

<script>
import FormCard from '../components/FormCard';
import { userLogin } from '../api/users.api.js';
import { redirectToPath, setLocalStorageData } from '../utils/common';
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
    async login(formData) {
      this.isLoading = true
      try {
        const response = await userLogin(formData)
        if (response.data && response.data.isSuccess) {
          this.isLoading = false
          setLocalStorageData('token', response.data.token)
          redirectToPath('/');
        }
      } catch(error) {
        this.isLoading = false
        alert('Login failed. Please check email and password')
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