<template>
  <v-app>
    <v-app-bar app color="white" dark>
      <router-link to="/home">
        <v-btn text color="black">
          <span class>Ludvig Karlsson</span>
        </v-btn>
      </router-link>
      <v-spacer></v-spacer>
      <router-link to="/education">
        <v-btn text color="black">
          <span>Education</span>
        </v-btn>
      </router-link>
      <router-link to="/skills">
        <v-btn text color="black">
          <span>Skills</span>
        </v-btn>
      </router-link>
      <router-link to="/about">
        <v-btn text color="black">
          <span>About Me</span>
        </v-btn>
      </router-link>
      <router-link to="/contact">
        <v-btn text color="black">
          <span>Contact</span>
        </v-btn>
      </router-link>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  })
};
</script>
