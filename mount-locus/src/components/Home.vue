<template>
  <div class="home">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>Turisti</h4>
      </li>
      <li class="collection-item tableheader">
        <div class="chip orange">Nume si prenume</div>
        <div class="chip light blue">Grupa Montana</div>
        <div class="chip green">Telefon</div>
        <div class="chip yellow">Latitudine</div>
        <div class="chip cyan">Longitudine</div>
        <div class="chip ">Data</div>
      </li>
      <br />
      <br />
      <br />
      <li
        v-for="tourist in tourists"
        v-bind:key="tourist.id"
        class="collection-item"
      >
        <div class="chip orange ">{{ tourist.value.numePrenume }}</div>
        <div class="chip light blue">{{ tourist.value.grupaMontana }}</div>
        <div class="chip green">{{ tourist.value.telefon }}</div>
        <div class="chip yellow">{{ tourist.value.latitudine }}</div>
        <div class="chip cyan ">{{ tourist.value.longitudine }}</div>
        <div class="chip">{{ tourist.value.data }}</div>

        <router-link
          v-bind:to="{
            name: 'view-tourist',
            params: { tourist_id: tourist.id }
          }"
          class="secondary-content"
        >
          <i class="fa fa-search"></i
        ></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import TouristService from '../services/TouristService.js';

export default {
  name: 'Home',
  data() {
    return {
      tourists: []
    };
  },
  created() {
    this.getTouristsData();
  },
  methods: {
    async getTouristsData() {
      TouristService.getTourists().then(result => {
        console.log(result['tourists']);
        // this.tourists = result;
        for (var i in result['tourists'])
          this.tourists.push({ id: i, value: result['tourists'][i] });
      });
    }
  },
  components: {
    // Login,
    // HelloWorld,
    // Selectpicker
    // BootstrapTable
  }
};
</script>

<style scoped>
h4 {
  align-content: center;
  font-family: century-gothic, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: xx-large;
}
.chip {
  margin-right: 25px;
}

.tableheader {
  font-size: 150%;
}

.fa {
  margin-left: auto;
  margin-right: 15px;
}
</style>
