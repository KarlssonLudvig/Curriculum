<template>
  <v-container>
    <v-row justify="center">
      <p class="display-4">Ludvig Karlsson</p>
    </v-row>
    <v-row justify="center">
      <p class="subtitle-2 text-center mb-10">Currently studying system development</p>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  methods: {
    GoToLinkedin() {
      window.location.href =
        "https://www.linkedin.com/in/ludvig-karlsson-b47547140/";
    },
    GoToGithub() {
      window.location.href = "https://github.com/KarlssonLudvig";
    }
  }
};
</script>

<style scoped>
</style>
