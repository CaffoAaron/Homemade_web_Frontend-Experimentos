<template>
  <v-layout row wrap align-center>
    <v-flex xs8 offset-md2>
      <v-text-field
          v-model="nameRecipe"
          append-icon="mdi-magnify"
          label="Search"
      ></v-text-field>
      <v-btn color="red" append-icon="mdi-magnify" @click="search(nameRecipe)"> Buscar </v-btn>
      <div  v-for="recipe in recipes" :key="recipe.nameRecipe" >
        <v-card class="my-0" >
          <v-img height="200px" v-bind:src="recipe.img"></v-img>
          <v-card-title>{{ recipe.nameRecipe }}</v-card-title>
          <v-card-subtitle>{{ recipe.instructions }}</v-card-subtitle>
          <v-card-actions>
            <v-btn color="orange lighten-2" v-bind:href="recipe.url" text>
              <router-link to="/homechef/recipe">
                <span>Ver Mas</span>
              </router-link>
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from "axios";

export default {
  name: "search-recipe",
  data: () => ({
    nameRecipe: '',
    recipes:[]
  }),
  created() {
    this.fetch();
  },
  methods: {
    fetch(){
      const params = {
        name: this.nameRecipe
      };
      axios.get('https://localhost:44300//api/recipe', {params})
          .then(response =>{
            this.recipes = response.data;
            console.log(response.data);
          })
          .catch(e=>{
            this.errors.push(e);
          })
    },
    search(){
      axios.get('https://localhost:44300/api/recipe/name?name='+ this.nameRecipe)
          .then(response =>{
            this.recipes = response.data;
            console.log(response.data);
          })
          .catch(e=>{
            this.errors.push(e);
          })
    }
  }
}
</script>

<style scoped>

</style>
