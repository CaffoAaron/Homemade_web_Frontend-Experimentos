<template>
  <v-main class="grey lighten-3">
    <v-container>
      <v-row>
        <v-col>
          <v-sheet min-height="70vh" rounded="lg">

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

          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import axios from 'axios'

export default {
name: "perfil-chef",
  computed: {
    currentUser() {
      console.log(this.$store.state.auth.user);
      return this.$store.state.auth.user;
    },
    currentUserFullName() {
      return `${this.currentUser.firstName} ${this.currentUser.lastName}`;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  },
  data: () => ({
    drawer: false,
    recipes:[],
    errors: [],
    loading: false,
    selection: 1,
  }),
  methods: {
    reserve () {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },
  },

  created() {
    axios.get('https://localhost:44300/api/recipe/id?id='+ this.currentUser.id)
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
