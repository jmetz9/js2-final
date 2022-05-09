<template>
 <div>
    <b-form @submit.prevent="search" class="mt-3">
      <label>Search Type</label>
      <b-form-select :options="searchTypes" v-model="searchType" ></b-form-select>
      <label class="mt-3">Search Term</label>
      <b-form-input placeholder="Enter Search Term" v-model="searchString"  required></b-form-input>
      <br>
      <b-button type="submit" variant="primary">Search</b-button>
    </b-form>
    <p id="results"></p>
 </div>
</template>

<script>
const axios = require("axios").default

export default {
  name: "SearchPage",
  data(){
    return {
      searchTypes: [
        {value: 'equipment',text: 'Equipment'},
        {value: 'spells', text: 'Spells'},
        {value: 'feats', text: 'Feats'},
        {value: 'skills', text: 'Skills'},

      ],
      searchType: 'equipment',
      searchString: '',
    }
  },
  methods: {
    search(){
      let url = 'https://www.dnd5eapi.co/api/'
      if(this.searchType){
        url += this.searchType;
        if(this.searchString){
          url += '?name=' + this.searchString.replaceAll(' ', '-');
        }
      }


      axios.get(url).then(response => {
        console.log(response.data)

      })
    }
  }
}
</script>

<style scoped>

</style>