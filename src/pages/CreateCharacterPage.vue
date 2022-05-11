<template>
  <div>
    <b-button to="/characters" class="mt-3" variant="outline-primary">Go Back</b-button>
    <div class="row justify-content-center">
      <b-form @submit.prevent="createCharacter" class="col-6 ">
        <h3 class="mt-5"><u>Basic Info</u></h3>
        <label>Enter Name</label>
        <b-form-input placeholder="Enter Name" class="mt-3" v-model="character.characterName" required></b-form-input>
        <label>Select Class</label>
        <b-form-select :options="classes" v-model="character.characterClass" class="mt-3" required></b-form-select>
        <label>Select Race</label>
        <b-form-select :options="races" v-model="character.characterRace" class="mt-3" required></b-form-select>
        <h3 class="mt-5"><u>Stat Modifiers</u></h3>
        <div v-for="stat in stats" :key="stat.value" class="mt-3">
          <label>{{ stat.text }}</label>
          <b-form-select :options="modifiers" v-model="character[stat.value]" required></b-form-select>
        </div>
        <b-button type="submit" variant="success" class="mt-3">Create</b-button>
        <p>As long as the form is fully completed your character will be created. I just couldn't figure out how to take you back to the main page afterwards</p>
      </b-form>
    </div>

  </div>
</template>

<script>
import {db} from '../firebase/index';
import Character from "@/models/Character";

export default {
  name: "CreateCharacterPage",
  props: {auth: Object},
  data(){
    return {
      classes: [
        {value: 'Barbarian', text: 'Barbarian'},
        {value: 'Bard', text: 'Bard'},
        {value: 'Cleric', text: 'Cleric'},
        {value: 'Druid', text: 'Druid'},
        {value: 'Fighter', text: 'Fighter'},
        {value: 'Monk', text: 'Monk'},
        {value: 'Paladin', text: 'Paladin'},
        {value: 'Ranger', text: 'Ranger'},
        {value: 'Rogue', text: 'Rogue'},
        {value: 'Sorcerer', text: 'Sorcerer'},
        {value: 'Warlock', text: 'Warlock'},
        {value: 'Wizard', text: 'Wizard'},
      ],

      races: [
        {value: 'Dragonborn', text: 'Dragonborn'},
        {value: 'Dwarf', text: 'Dwarf'},
        {value: 'Elf', text: 'Elf'},
        {value: 'Gnome', text: 'Gnome'},
        {value: 'Half-Elf', text: 'Half-Elf'},
        {value: 'Half-Orc', text: 'Half-Orc'},
        {value: 'Halfling', text: 'Halfling'},
        {value: 'Human', text: 'Human'},
        {value: 'Tiefling', text: 'Tiefling'},
      ],

      stats: [
        {value: 'strength', text: 'Strength'},
        {value: 'dexterity', text: 'Dexterity'},
        {value: 'constitution', text: 'Constitution'},
        {value: 'intelligence', text: 'Intelligence'},
        {value: 'wisdom', text: 'Wisdom'},
        {value: 'charisma', text: 'Charisma'},
      ],

      modifiers: [
        {value: '-5', text: '-5'},
        {value: '-4', text: '-4'},
        {value: '-3', text: '-3'},
        {value: '-2', text: '-2'},
        {value: '-1', text: '-1'},
        {value: '0', text: '0'},
        {value: '+1', text: '+1'},
        {value: '+2', text: '+2'},
        {value: '+3', text: '+3'},
        {value: '+4', text: '+4'},
        {value: '+5', text: '+5'},
      ],

      character: new Character()
    }

  },
  methods: {
    createCharacter(){
      db.collection("users").doc(this.auth.uid).collection("characters").add(this.character).then(() => {
        console.log("character added")
      })
      .catch(e => console.log(e))
    }
  }

}
</script>

<style scoped>

</style>