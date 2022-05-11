<template>
  <div class="row justify-content-center">
    <div class="col-6">
      <b-list-group class="mt-3" >
        <b-list-group-item v-for="character in characters" :key="character.characterName" >
          <CharacterTab :name="character.characterName" :race="character.characterRace" :c-class="character.characterClass" button v-b-modal.stats></CharacterTab>
          <b-modal id="stats" cancel-disabled>
            <p v-for="info in information" :key="info.value">{{info.text}}: {{character[info.value]}}</p>
          </b-modal>
        </b-list-group-item>

      </b-list-group>
      <b-button class="mt-3" variant="outline-success" to="/create-a-character"> Create a Character </b-button>
    </div>

  </div>

</template>

<script>
import CharacterTab from "@/components/CharacterTab";
import {db} from "@/firebase";

export default {
  name: "CharactersPage",
  components: {CharacterTab, },
  data (){
    return {
      characters: [],
      information: [
        {value: 'characterName', text: 'Name'},
        {value: 'characterClass', text: 'Class'},
        {value: 'characterRace', text: 'Race'},
        {value: 'strength', text: 'Strength'},
        {value: 'dexterity', text: 'Dexterity'},
        {value: 'constitution', text: 'Constitution'},
        {value: 'intelligence', text: 'Intelligence'},
        {value: 'wisdom', text: 'Wisdom'},
        {value: 'charisma', text: 'Charisma'},
      ],
    }
  },
  props: {
    auth: Object,
  },
  firestore() {
    console.log(this.auth)

    return {
      characters: db.collection("users").doc(this.auth.uid).collection("characters")
    }
  },
}
</script>

<style scoped>

</style>