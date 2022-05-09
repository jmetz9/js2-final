<template>
  <div>
    <b-list-group>
      <b-list-group-item v-for="character in characters" :key="character.characterName">
        <CharacterTab :name="character.characterName"></CharacterTab>
      </b-list-group-item>
    </b-list-group>
    <b-button class="mt-3" variant="outline-success" to="/create-a-character"> Create a Character </b-button>
  </div>

</template>

<script>
import CharacterTab from "@/components/CharacterTab";
import {db} from "@/firebase";

export default {
  name: "CharactersPage",
  components: {CharacterTab, },
  data (){
    return {characters: []}
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