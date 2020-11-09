<template>
  <v-timeline>
    <v-timeline-item v-for="(year, i) in years" :key="i" :color="year.color" small>
      <template v-slot:opposite>
        <span
        ></span>
      </template>
      <div class="py-4">
        <h2 :class="`headline font-weight-light mb-4 orange--text`" class="purple lighten-2">
          Lorem ipsum
        </h2>
        <div>
          Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
        </div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
name: "Receta_2",
  data: () => ({
    years: [
      {
        color: 'cyan',
        year: '1960',

      },
      {
        color: 'green',
        year: '1970',
      },
      {
        color: 'pink',
        year: '1980',
      },
      {
        color: 'amber',
        year: '1990',
      },
      {
        color: 'orange',
        year: '2000',
      },
    ],
  }),

}

</script>

<style scoped>

</style>