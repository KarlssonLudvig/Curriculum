<template>
  <v-app>
    <v-app-bar app color="white" dark>
      <router-link tag="li" to="/home">
        <v-btn text color="black">
          <span class>Ludvig Karlsson</span>
        </v-btn>
      </router-link>
      <v-spacer></v-spacer>
      <router-link tag="li" to="/experience">
        <v-btn text color="black">
          <span>Work Experience</span>
        </v-btn>
      </router-link>
      <router-link tag="li" to="/education">
        <v-btn text color="black">
          <span>Education</span>
        </v-btn>
      </router-link>
      <router-link tag="li" to="/skills">
        <v-btn text color="black">
          <span>Skills</span>
        </v-btn>
      </router-link>
      <router-link tag="li" to="/about">
        <v-btn text color="black">
          <span>About Me</span>
        </v-btn>
      </router-link>
      <router-link tag="li" to="/contact">
        <v-btn text color="black">
          <span>Contact</span>
        </v-btn>
      </router-link>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
    <v-col>
      <v-row justify="center" >
        <v-btn class="mx-2" fab dark small color="white" @click="GoToLinkedin">
          <v-avatar size="40">
            <img src="./assets/LI-In-Bug.png" />
          </v-avatar>
        </v-btn>
        <v-btn class="mx-2" fab dark small color="primary" @click="GoToGithub">
          <v-avatar size="40">
            <img src="./assets/github.png" />
          </v-avatar>
        </v-btn>
      </v-row>
    </v-col>
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

<style scoped>
</style>
