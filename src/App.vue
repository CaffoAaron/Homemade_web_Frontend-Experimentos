<template>
  <v-app>
    <v-app-bar app color="orange" flat>
      <v-container class="py-0 fill-height">
        <v-avatar
            class="mr-10"
            color="grey darken-1"
            size="32"
        >
          <v-img
              height="65"
              src="https://scontent.flim18-2.fna.fbcdn.net/v/t1.0-1/p200x200/109269283_150877966608453_528725338939827879_o.jpg?_nc_cat=110&ccb=2&_nc_sid=7206a8&_nc_eui2=AeEEeXSbMsE0pnq-vvGw2SLhS85kQouizrBLzmRCi6LOsFkJCnZ1ANXxY9A93bE6fvU-CQxbcirsSnCGCcceVI7r&_nc_ohc=xnGJiWNTzGgAX9nqoXd&_nc_ht=scontent.flim18-2.fna&tp=6&oh=05913df711631b86591546a8ee09f963&oe=5FC89569"
          ></v-img>
        </v-avatar>
        <v-toolbar-title class="text-h4">Homemade</v-toolbar-title>

        <v-divider
            class="mx-5"
            vertical
        ></v-divider>

        <v-btn
            depressed
            rounded
            href="https://github.com/vuetifyjs/vuetify/releases/latest"
            target="_blank"
            text>
          <span class="mr-2">Buscar</span>

        </v-btn>
        <v-divider
            class="mx-5"
            vertical
        ></v-divider>

        <v-btn
            depressed
            rounded
            target="_blank"
            text
        >
          <router-link to="/homechef/recipe">
            <span class="mr-2">Mis Recetas</span>
          </router-link>

        </v-btn>

        <v-divider
            class="mx-5"
            vertical
        ></v-divider>

        <v-btn
            depressed
            rounded
            target="_blank"
            text
        >
          <router-link to="/hoomechef/menbresia">
            <span class="mr-2">Menbresia</span>
          </router-link>

        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
              dense
              flat
              hide-details
              rounded
              solo-inverted
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>



export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
