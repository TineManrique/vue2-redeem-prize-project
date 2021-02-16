<template>
  <div>
    <Navbar :user="loggedInUser"/>
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
        loggedInUser: {
          firstName: '',
          lastName: ''
        }
      }
    },
    updated() {
      const user = getLocalStorageData('userDetail');
      this.loggedInUser.firstName = user ? user.firstName : '';
      this.loggedInUser.lastName = user ? user.lastName : '';
    }
}
</script>