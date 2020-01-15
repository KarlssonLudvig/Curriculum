<template>
  <div>
    <v-form ref="form">
      <v-container fill-height>
        <v-row>
          <v-col offset="5" cols="8">
            <v-row>
              <h1 font-weight-bold>Ludvig Karlsson</h1>
            </v-row>
          </v-col>
          <v-col offset="5" cols="8">
            <v-row offset="5" rows="10">
              <v-btn class="mx-2" fab dark small color="white" @click="GoToLinkedin">
                <v-avatar size="40">
                  <img src="../assets/LI-In-Bug.png" />
                </v-avatar>
              </v-btn>
              <v-btn class="mx-2" fab dark small color="primary" @click="GoToGithub">
                <v-avatar size="40">
                  <img src="../assets/github.png" />
                </v-avatar>
              </v-btn>
              <v-btn class="mx-2" fab dark small color="white" @click="GoToLinkedin">
                <v-avatar size="40">
                  <img src="../assets/LI-In-Bug.png"/>
                </v-avatar>
              </v-btn>
              <v-btn class="mx-2" fab dark small color="primary" @click="GoToGithub">
                <v-avatar size="40">
                  <img src="../assets/github.png" />
                </v-avatar>
              </v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
    methods:{
        GoToLinkedin(){
            window.location.href="https://www.linkedin.com/in/ludvig-karlsson-b47547140/"
        },
        GoToGithub(){
            window.location.href="https://github.com/KarlssonLudvig"
        }
    }
};
</script>
