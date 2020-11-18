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
                            label="Nombre"
                            v-model="name"
                            :rules="[v => !!v || 'Se requiere nombre']"
                            required
                            prepend-icon="mdi-account"
                        >
                        </v-text-field>
                        <v-text-field
                            label="Apellido"
                            v-model="lastname"
                            :rules="[v => !!v || 'Se requiere apellido']"
                            required
                            prepend-icon="mdi-account"
                        >
                        </v-text-field>
                        <v-text-field
                            label="Correo electronico"
                            v-model="email"
                            :rules="emailRules"
                            required
                            prepend-icon="mdi-email"
                        >
                        </v-text-field>
                        <v-text-field
                            label="Contraseña"
                            v-model="password"
                            type="password"
                            :rules="passwordRules"
                            required
                            prepend-icon="mdi-lock"
                        >
                        </v-text-field>
                        <v-text-field
                            label=31-08-1999
                            v-model="dateuser"
                            type="date"
                            :rules="dateRules"
                            error-count="2"
                            required
                            prepend-icon="mdi-calendar-account">
                        </v-text-field>
                        <v-text-field
                            label="Genero"
                            v-model="gender"
                            :rules="[v => !!v || 'Se requiere ingresar genero']"
                            required
                            prepend-icon="mdi-gender-male-female"
                        ></v-text-field>
                      </v-form>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn class="mx-9" rounded color="orange accent-3" :disabled="!isValid">Registrarse</v-btn>
                    </v-card-actions>
                  </v-col>
                  <v-col cols="11" md="4" class="orange accent-3">
                    <v-card-text class="black--text mt-12">
                      <h1 class="text-center display-1">Bienvenido a Homemade</h1>
                      <h5 class="text-center">Si ya tiene una cuenta, inicie sesion</h5>
                      <v-card-actions>
                        <v-btn class="mx-13" rounded outlined="" dark>Iniciar Sesion</v-btn>
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
name: "register-form",
  data(){
    return{
      email:null,
      password:null,
      isValid:null,
      emailRules: [
        v=> !!v || 'Se requiere correo electronico',
        v=> /.+@.+/.test(v) || 'El correo electronico debe ser valido'
      ],
      passwordRules: [
        v => !!v || 'Se requiere contraseña',
        v => (v && v.length >=8) || 'La contraseña debe tener al menos 8 caracteres',
        v => /(?=.*[A-Z])/.test(v) || 'El correo electrónico debe tener una mayúscula',
        v => /(?=.*d)/.test(v) || 'Debe tener un numero',
        v => /([!@#$%])/.test(v) || 'Debe tener un caracter especial'
      ],
      dateRules: [
        v => !!v || 'Fecha de nacimiento requerido',
      ],
    }
  }
}
</script>

<style scoped>

</style>
