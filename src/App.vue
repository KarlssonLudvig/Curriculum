<template>
  <v-app>
    <v-app-bar elevation="24" app color="white" dark hide-on-scroll>
      <v-app-bar-nav-icon color="pink" dark @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <router-link tag="p" to="/">
        <v-btn text color="black">
          <v-avatar size="30">
            <v-img class="mx-2" src="./assets/Profile.jpg" max-height="40" max-width="40" contain></v-img>
          </v-avatar>
          <span>Ludvig Karlsson</span>
        </v-btn>
      </router-link>
      <v-divider></v-divider>
      <router-link tag="p" to="/experience">
        <v-btn text color="black">
          <span>Work Experience</span>
        </v-btn>
      </router-link>
      <router-link tag="p" to="/education">
        <v-btn text color="black">
          <span>Education</span>
        </v-btn>
      </router-link>
      <router-link tag="p" to="/skills">
        <v-btn text color="black">
          <span>Qualifications</span>
        </v-btn>
      </router-link>
      <router-link tag="p" to="/contact">
        <v-btn text color="black">
          <span>Contact</span>
        </v-btn>
      </router-link>
    </v-navigation-drawer>

    <v-content>
      <router-view />
    </v-content>
    <v-col>
      <v-row justify="center">
        <v-btn class="mx-4" fab dark medium color="white" @click="GoToLinkedin">
          <v-avatar size="50">
            <img src="./assets/LI-In-Bug.png" />
          </v-avatar>
        </v-btn>
        <v-btn fab dark medium color="white" @click="GoToGithub">
          <v-avatar size="50">
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

  methods: {
    GoToLinkedin() {
      window.location.href =
        "https://www.linkedin.com/in/ludvig-karlsson-b47547140/";
    },
    GoToGithub() {
      window.location.href = "https://github.com/KarlssonLudvig";
    }
  },

  data() {
    return {
      drawer: null
    };
  }
};
</script>
<style scoped>
</style>
