import { createApp } from 'vue';
import App from './App.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import NavigationBar from './components/NavigationBar.vue';
import Logo from './components/Logo.vue';
import router from './router';
// import Selectpicker from './components/Selectpicker.vue';
// import BootstrapTable from './components/Bootstraptable.vue';
import firebase from 'firebase';
import './components/firebaseInit';
// import Vue from 'vue';
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// createApp(App)
//   .use(router)
//   .mount('#app');
// const app = createApp(App);
// app.use(router);

// app.component('login', Login);
// app.component('register', Register);
// app.component('navbar', NavigationBar);
// app.component('logo', Logo);
// // app.component('selectpicker', Selectpicker);
// // app.component('bootstraptable', BootstrapTable);

// app.mount('#app');

let app;
firebase.auth().onAuthStateChanged(function(user) {
  console.log(user);
  if (!app) {
    app = createApp(App);
    app.use(router);
    // app.use(BootstrapVue);
    // app.use(IconsPlugin);
    app.component('login', Login);
    app.component('register', Register);
    app.component('navbar', NavigationBar);
    app.component('logo', Logo);
    app.mount('#app');

    // Make BootstrapVue available throughout your project
    // Vue.use(BootstrapVue);
    // Optionally install the BootstrapVue icon components plugin
    // Vue.use(IconsPlugin);
  }
});
