<template>
  <div v-show="checkComponent" id="view-employee">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>{{ name }}</h4>
      </li>
      <li class="collection-item">
        Nume si prenume:
        <div class="chip ">{{ selectedTourist.numePrenume }}</div>
      </li>
      <li class="collection-item">
        Grupa Montana:
        <div class="chip ">{{ selectedTourist.grupaMontana }}</div>
      </li>
      <li class="collection-item">
        Traseu :
        <div class="chip ">
          {{ selectedTourist.traseu.denumire }}
        </div>
        Marcaj vizual :
        <div class="chip marcajvizual ">
          {{ selectedTourist.traseu.marcajVizual }}
        </div>
      </li>
      <li class="collection-item">
        Latitudine:
        <div class="chip ">{{ selectedTourist.latitudine }}</div>
      </li>
      <li class="collection-item">
        Longitudine:
        <div class="chip ">{{ selectedTourist.longitudine }}</div>
      </li>
      <li class="collection-item">
        Telefon:
        <div class="chip ">{{ selectedTourist.telefon }}</div>
      </li>
      <li class="collection-item">
        Data:
        <div class="chip ">{{ selectedTourist.data }}</div>
      </li>
      <li class="collection-item">
        Imagine Principala:
        <div><img v-bind:src="selectedTourist.imagine1" /></div>
      </li>
      <li class="collection-item">
        Imagine Secundara:
        <div><img v-bind:src="selectedTourist.imagine2" /></div>
      </li>
    </ul>
    <button @click="routeBack" class="btn grey">Back</button>
    <button @click="deleteTourist" class="btn red">Delete</button>
  </div>
</template>

<script>
import TouristService from '../services/TouristService.js';

export default {
  name: 'view-tourist',
  data() {
    return {
      selectedTourist: {}
    };
  },
  created() {
    this.getTouristDetails(this.$route.params.tourist_id);
  },
  computed: {
    checkComponent() {
      if (this.$route.matched.some(({ name }) => name === 'home')) {
        console.log('ROUTE', this.$route);
        return false;
      } else {
        console.log('ROUTE', this.$route);
        return true;
      }
    }
  },

  methods: {
    async getTouristDetails(touristId) {
      TouristService.getTouristById(touristId).then(result => {
        console.log(result);
        this.selectedTourist = result.tourist;
      });
    },
    async deleteTourist() {
      if (confirm('Are you sure?')) {
        TouristService.deleteTouristById(this.$route.params.tourist_id).then(
          result => {
            console.log(result);
          }
        );
      }
      this.routeBack();
    },
    routeBack() {
      this.$router.push('/home');
    }
  },
  beforeRouteEnter(to) {
    console.log('TOURIST ID AFTER ROUTE', to.params);
  },
  watch: {
    $route: 'getTouristDetails'
  }
};
</script>

<style scoped>
li {
  align-content: center;
  font-family: century-gothic, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: medium;
}
.chip {
  margin-left: 25px;
}

.chip.marcajvizual {
  margin-left: 5px;
}

.tableheader {
  font-size: 150%;
}

.fa {
  margin-left: auto;
  margin-right: 15px;
}

.btn {
  margin-left: 15px;
  margin-bottom: 35px;
}
</style>
