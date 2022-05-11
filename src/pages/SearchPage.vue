<template>
 <div>
    <b-form @submit.prevent="search" class="mt-3">
      <label>Search Type</label>
      <b-form-select :options="searchTypes" v-model="searchType" ></b-form-select>
      <label class="mt-3">Search Term</label>
      <b-form-input placeholder="Enter Search Term" v-model="searchString"  required></b-form-input>
      <br>
      <b-button type="submit" variant="primary">Search</b-button>
      <p> I had troubles getting the results to show on the page so I put in a console.log that shows the results in the
        console to show that it at least works (if that counts for anything)</p>
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