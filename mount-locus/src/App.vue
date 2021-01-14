<template>
  <div id="nav"></div>
  <navbar />
  <!-- <bootstraptable v-show="displayOnHome" /> -->
  <logo v-show="checkComponent" />

  <router-view />
  <!-- <login></login> -->
</template>

<script>
export default {
  data() {
    return {
      formsList: ['login', 'register', 'home']
    };
  },
  computed: {
    checkComponent() {
      if (
        this.$route.matched.some(({ name }) => this.formsList.includes(name)) ||
        this.$route.fullPath.indexOf('home') >= 0
      ) {
        console.log('ROUTE', this.$route);
        return false;
      } else {
        console.log('ROUTE', this.$route);
        return true;
      }
    },
    displayOnHome() {
      if (this.$route.matched.some(({ name }) => name === 'home')) {
        console.log('ROUTE', this.$route);
        return true;
      } else {
        console.log('ROUTE', this.$route);
        return false;
      }
    }
  }
};
</script>
