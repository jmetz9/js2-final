<template>
  <div>
    <p class="text-primary"><u>{{name}}: {{race}} {{cClass}}</u></p>
  </div>
</template>

<script>
export default {
  name: "CharacterTab",
  props: {
    name: String,
    race: String,
    cClass: String,
  },
}
</script>

<style scoped>

</style>