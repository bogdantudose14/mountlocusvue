<template>
  <nav>
    <div class="nav-wrapper orange">
      <div class="container">
        <router-link to="/" v-on:click="logout" class="brand-logo"
          >MountLocus</router-link
        >
        <ul class="right hide-on-med-and-down">
          <li v-if="checkComponent">
            <router-link to="/login">Login</router-link>
          </li>
          <li v-if="checkComponent">
            <router-link to="/register">Register</router-link>
          </li>
          <li v-if="!checkComponent">
            <button v-on:click="logout" class="btn black white-text">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'navbar',
  data() {
    return {
      isLoggedIn: false,
      currentUser: false
    };
  },
  created() {
    if (firebase.auth().currentUser) {
      console.log('CURRENT USER IS', firebase.auth().currentUser);
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser.email;
    } else {
      console.log('ELSEELSE', firebase.auth().currentUser);
    }
  },
  computed: {
    checkComponent() {
      if (this.$route.matched.some(({ name }) => name === 'home')) {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    logout: function() {
      localStorage.setItem('isLoggedIn', false);
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.go({ path: '/' });
        });
    }
  }
};
</script>

<style scoped>
.email {
  padding-right: 10px;
}
</style>
