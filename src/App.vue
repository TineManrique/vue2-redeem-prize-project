<template>
  <div>
    <Navbar :user="loggedInUser"/>
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
    components: {
      Navbar
    },
    data() {
      return {
        loggedInUser: {
          firstName: 'John',
          lastName: "Smith"
        }
      }
    }
}
</script>