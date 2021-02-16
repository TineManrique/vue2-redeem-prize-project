<template>
  <div>
    <Navbar :user="loggedInUser" :isLoggedInUser="isLoggedIn"/>
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import { getLocalStorageData } from './utils/common.js';

export default {
    components: {
      Navbar
    },
    data() {
      return {
        isLoggedIn: false,
        loggedInUser: {
          firstName: '',
          lastName: ''
        }
      }
    },
    updated() {
      this.checkIfLoggedInUser();
    },
    methods: {
      checkIfLoggedInUser() {
        const user = getLocalStorageData('userDetail');
        this.loggedInUser.firstName = user ? user.firstName : '';
        this.loggedInUser.lastName = user ? user.lastName : '';
        this.isLoggedIn = user != null;
      }
    }
}
</script>