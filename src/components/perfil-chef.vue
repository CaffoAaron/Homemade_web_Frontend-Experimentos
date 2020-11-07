<template>
  <v-main class="grey lighten-3">
    <v-container>
      <v-row>
        <v-col cols="2">
          <v-sheet rounded="lg">
            <v-card
                :loading="loading"
                class="mx-auto my-auto"
                max-width="374"
            >
              <template slot="progress">
                <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                ></v-progress-linear>
              </template>

              <v-img
                  height="250"
                  src="https://scontent.flim18-2.fna.fbcdn.net/v/t1.0-1/p200x200/109269283_150877966608453_528725338939827879_o.jpg?_nc_cat=110&ccb=2&_nc_sid=7206a8&_nc_eui2=AeEEeXSbMsE0pnq-vvGw2SLhS85kQouizrBLzmRCi6LOsFkJCnZ1ANXxY9A93bE6fvU-CQxbcirsSnCGCcceVI7r&_nc_ohc=xnGJiWNTzGgAX9nqoXd&_nc_ht=scontent.flim18-2.fna&tp=6&oh=05913df711631b86591546a8ee09f963&oe=5FC89569"
              ></v-img>

              <v-card-title>Alison Sempertegui</v-card-title>

              <v-card-text>
                <v-row
                    align="center"
                    class="mx-0"
                >
                  <v-rating
                      :value="4.5"
                      color="amber"
                      dense
                      half-increments
                      readonly
                      size="14"
                  ></v-rating>

                  <div class="grey--text ml-4">
                    4.5 (413)
                  </div>
                </v-row>

                <div class="my-4 subtitle-1">
                  Date: 31-08-1999
                </div>

                <div>email de contacto: alichip1999@hotmail.com</div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-title>Ultimas recetas subidas</v-card-title>

              <v-card-text>
                <v-chip-group
                    v-model="selection"
                    active-class="deep-purple accent-4 white--text"
                    column
                >
                  <v-chip>Arroz con pollo</v-chip>

                  <v-chip>Ceviche de pollo</v-chip>

                  <v-chip>lasaña</v-chip>

                  <v-chip>Papa Rellena</v-chip>
                </v-chip-group>
              </v-card-text>

              <v-card-actions>

                <v-btn
                    color="red"
                    text
                    @click="seguir"
                >
                  Seguir
                  <v-icon>mdi-star</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-sheet>
        </v-col>

        <v-col>
          <v-sheet min-height="70vh" rounded="lg">

            <div v-for="recipe in recipes" :key="recipe.title">
              <v-card class="my-0" >
                <v-img height="200px" v-bind:src="recipe.urlToImage"></v-img>
                <v-card-title>{{ recipe.title }}</v-card-title>
                <v-card-subtitle>{{ recipe.description }}</v-card-subtitle>
                <v-card-actions>
                  <v-btn color="orange lighten-2" v-bind:href="recipe.url" text>
                    Ver mas
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
  data: () => ({
    drawer: false,
    apiKey: '7841bcc3c61644dca9903fb1e579ee65',
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
    axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.apiKey)
        .then(response =>{
          this.recipes = response.data.articles;
          console.log('data: ');
          console.log(response.data.articles);
        })
        .catch(e=>{
          this.errors.push(e);
        })
  }
}
</script>


<style scoped>

</style>
