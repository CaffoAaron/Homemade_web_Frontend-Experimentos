<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="8">
          <v-card class="elevation-12">
            <v-window v-model="step">
              <v-window-item :value="1">
                <v-row>
                  <v-col cols="12" md="8">
                    <v-card-title class="text-center display-2 orange--text text--accent-3 mx-6">Iniciar Sesion</v-card-title>
                    <v-card-text class="mt-12">
                      <v-form v-model="isValid">
                        <v-text-field
                            label="Correo electronico"
                            v-model="email"
                            :rules="[v => !!v || 'Se requiere correo electronico']"
                            required
                            prepend-icon="mdi-email"
                        >
                        </v-text-field>
                        <v-text-field
                            label="Contraseña"
                            prepend-icon="mdi-lock"
                            v-model="password"
                            type="password"
                            :rules="[v => !!v || 'Se requiere contraseña']"
                            required
                        >
                        </v-text-field>
                      </v-form>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn class="mx-9" rounded color="orange accent-3" :disabled="!isValid">Iniciar Sesion</v-btn>
                    </v-card-actions>
                  </v-col>
                  <v-col cols="11" md="4" class="orange accent-3">
                    <v-card-text class="black--text mt-12">
                      <h1 class="text-center display-1">Bienvenido a Homemade</h1>
                      <h5 class="text-center">Ingrese sus datos personales y comience a viajar con nosotros</h5>
                      <v-card-actions>
                        <v-btn class="mx-13" rounded outlined="" dark>Registrarse</v-btn>
                      </v-card-actions>
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-window-item>
            </v-window>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
name: "login-form",
  data(){
    return{
      email: null,
      password:null,
      isValid:true
    }
  }
}
</script>

<style scoped>

</style>
