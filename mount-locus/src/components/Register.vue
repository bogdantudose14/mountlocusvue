<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col s12 m8 offset-m2">
          <div class="login card-panel grey lighten-4 black-text center">
            <h3>Register</h3>
            <form action="index.html">
              <div class="input-field">
                <i class="material-icons prefix">email</i>
                <input
                  placeholder="Email Address"
                  type="email"
                  id="email"
                  v-model="email"
                />
                <label for="email"></label>
              </div>
              <div class="input-field">
                <i class="material-icons prefix">lock</i>
                <input
                  placeholder="Password"
                  type="password"
                  id="password"
                  v-model="password"
                />
                <label for="password"></label>
              </div>
              <button
                v-on:click="register"
                class="btn btn-large btn-extended grey lighten-4 black-text"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'register',
  data: function() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    register: function(e) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            console.log('User after register', user);
            localStorage.setItem('isLoggedIn', true);
            alert(`Account Created for ${this.email}`);
            this.$router.push({ path: '/home' });
          },
          err => {
            alert(err.message);
          }
        );
      e.preventDefault();
    }
  }
};
</script>
