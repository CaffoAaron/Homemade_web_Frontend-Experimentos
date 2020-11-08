<template>
    <v-main class="grey lighten-3">
        <v-container>
            <v-row>
                <v-col>
                    <v-row class="mb-10">
                        <h1>{{recipe[0].nameRecipe}}</h1>
                    </v-row>
                    <v-row></v-row>
                    <h2>Ingredientes:</h2>
                    <v-col cols="2" class="mb-10">
                        <v-simple-table dense class="blue-grey lighten-4">
                            <template v-slot:default>
                                <thead>
                                <tr>
                                    <th class="text-left">
                                        Nombre
                                    </th>
                                    <th class="text-left">
                                        Cantidad
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr
                                        v-for="item in ingredients"
                                        :key="item.name"
                                >
                                    <td>{{ item.name }}</td>
                                </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-col>
                    <h2 class="text-lg-center">Como prepararlo:</h2>
                    <v-row>
                        <v-col cols="2"></v-col>
                        <v-col>
                            <v-timeline
                                    align-top
                                    :dense="$vuetify.breakpoint.smAndDown"
                            >
                                <v-timeline-item
                                        v-for="(step, i) in recipeSteps"
                                        :key="i"
                                        :color="color1"
                                        :icon="icon"
                                        :icon-color="iconColor"

                                        fill-dot
                                >
                                    <v-card
                                            :color="color2"
                                            dark
                                    >
                                        <v-card-title class="black--text">
                                            Paso #{{i+1}}
                                        </v-card-title>
                                        <v-card-text class="white text--primary">
                                            <p>{{step.instructions}}</p>
                                        </v-card-text>
                                    </v-card>
                                </v-timeline-item>
                            </v-timeline>
                        </v-col>
                        <v-col cols="2"></v-col>
                    </v-row>
                </v-col>
                <v-col cols="2">
                    <v-sheet rounded="lg">
                        <v-card :loading="loading" class="mx-auto my-auto" max-width="374">
                            <template slot="progress">
                                <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                            </template>
                            <v-card-title >Autor de la receta</v-card-title>
                            <v-img height="250"
                                   src="https://scontent.flim18-2.fna.fbcdn.net/v/t1.0-1/p200x200/109269283_150877966608453_528725338939827879_o.jpg?_nc_cat=110&ccb=2&_nc_sid=7206a8&_nc_eui2=AeEEeXSbMsE0pnq-vvGw2SLhS85kQouizrBLzmRCi6LOsFkJCnZ1ANXxY9A93bE6fvU-CQxbcirsSnCGCcceVI7r&_nc_ohc=xnGJiWNTzGgAX9nqoXd&_nc_ht=scontent.flim18-2.fna&tp=6&oh=05913df711631b86591546a8ee09f963&oe=5FC89569"
                            ></v-img>
                            <v-card-title>Alison Sempertegui</v-card-title>
                            <v-card-text>
                                <v-row align="center" class="mx-0">
                                    <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>
                                    <div class="grey--text ml-4">
                                        4.5 (413)
                                    </div>
                                </v-row>
                                <div class="my-4 subtitle-1">
                                    Date: 31-08-1999
                                </div>

                                <div>email de contacto: alichip1999@hotmail.com</div>
                            </v-card-text>
                            <v-card-actions>

                                <v-btn
                                        color="red"
                                        text

                                >
                                    <router-link to="/">
                                        <span class="mr-2">Revisa su perfil</span>
                                    </router-link>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "recipe",
        data: () => ({
            drawer: false,
            recipeSteps:[],
            errors: [],
            recipe: [],
            ingredients: [],
            loading: false,
            selection: 1,
            color1: 'green accent-2',
            color2: 'light-green accent-2',
            icon: 'mdi-book-variant',
            iconColor: 'deep-purple accent-1',
        }),

        methods: {
            reserve () {
                this.loading = true
                setTimeout(() => (this.loading = false), 2000)
            },
        },

        created() {
            axios.get('https://homemadeapi.azurewebsites.net/api/recipesteps/recipeid?recipeId=1')
                .then(response =>{
                    this.recipeSteps = response.data;
                    console.log('data: ');
                    console.log(response.data);
                })
                .catch(e=>{
                    this.errors.push(e);
                })
            axios.get('https://homemadeapi.azurewebsites.net/api/recipe')
            .then(response =>{
                this.recipe = response.data;
                console.log('data: ');
                console.log(response.data);
            })
            .catch(e=>{
                this.errors.push(e);
            })
            axios.get('https://homemadeapi.azurewebsites.net/api/ingredient')
                .then(response =>{
                    this.ingredients = response.data;
                    console.log('data: ');
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
