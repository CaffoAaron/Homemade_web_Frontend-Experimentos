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
                  <router-link to="/">
                    <span class="mr-2">Volver a mi perfil</span>
                  </router-link>


                  <v-avatar left>
                    <v-icon>mdi-account-circle</v-icon>
                  </v-avatar>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-sheet>
        </v-col>

        <v-col>
          <v-sheet min-height="70vh" rounded="lg">

            <v-card>
              <v-card-title>Cambio de contraseña</v-card-title>
              <v-card-text>
                <v-form v-model="isValidPasword">
                  <h4>Escriba su nuevo contraseña</h4>
                  <v-text-field
                      label="Password"
                      v-model="password"
                      type="password"
                      :rules="passwordRules"
                      error-count="5"
                      required>
                  </v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" :disabled="!isValidPasword">Guardar</v-btn>
              </v-card-actions>
            </v-card>

            <v-card>
              <v-card-title>Cambio de email</v-card-title>
              <v-card-text>
                <v-form v-model="isValidEmail">
                  <h4>Escriba su nuevo email</h4>
                  <v-text-field
                      label="Email"
                      v-model="email"
                      :rules="emailRules"
                      error-count="2"
                      required>
                  </v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" :disabled="!isValidEmail">Guardar</v-btn>
              </v-card-actions>
            </v-card>


            <v-card>
              <v-card-title>Edicion de datos publicos</v-card-title>
              <v-card-text>
                <v-form v-model="isValid">
                  <h4>Nombre</h4>
                  <v-text-field
                      label=Alison
                      v-model="firstname"
                      :rules="nameRules"
                      error-count="2"
                      required>
                  </v-text-field>
                  <h4>Apellido</h4>
                  <v-text-field
                      label=Sempertegui
                      v-model="lastname"
                      :rules="nameRules"
                      error-count="2"
                      required>
                  </v-text-field>
                  <h4>Fecha de nacimiento</h4>
                  <v-text-field
                      label=31-08-1999
                      v-model="dateuser"
                      type="date"
                      :rules="dateRules"
                      error-count="2"
                      required>
                  </v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" :disabled="!isValid">Guardar</v-btn>
              </v-card-actions>
            </v-card>


          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>


export default {
name: "edit-perfil",
  data: () => ({
    loading: false,
    selection: 1,
    email: null,
    password: null,
    isValid: true,
    isValidPasword: true,
    isValidEmail: true,
    firstname: null,
    dateuser: null,
    lastname: null,
    dateRules: [
      v => !!v || 'Name is required',
    ],
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 20 || 'Name must be less than 20 characters',
    ],
    emailRules:[
      v => !!v || 'Email is required',
      v => /.+@.+/.test(v) || 'Email must be valid',
    ],
    passwordRules:[
      v => !!v || 'Password is required',
      v => (v && v.length >= 5) || 'Password must have at least 5 characters',
      v => /(?=.*[A-Z])/.test(v) || 'Password must have one uppercase character',
      v => /(?=.*\d)/.test(v) || 'Must have one number',
      v => /([!@#$%])/.test(v) || 'Must have one special character [!@#$%]'
    ]
  }),
  methods: {
    reserve () {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },
  },

}
</script>

<style scoped>

</style>
