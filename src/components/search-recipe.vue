<template>
  <v-layout row wrap align-center>
    <v-flex xs8 offset-md2>
      <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
      ></v-text-field>
      <div v-for="recipe in recipes" :key="recipe.nameRecipe">
        <v-card class="my-0" >
          <v-img height="200px" src="https://www.delperu.org/wp-content/uploads/2020/01/papa-rellena-de-carne_800x533.jpg"></v-img>
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
    search: '',
    recipes:[]
  }),
  created() {
    axios.get('https://homemadeapi.azurewebsites.net/api/recipe')
        .then(response =>{
          this.recipes = response.data;
          console.log(response.data);
        })
        .catch(e=>{
          this.errors.push(e);
        })
  }
}
</script>

<style scoped>

</style>
