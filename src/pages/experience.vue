<template>
  <div>
    <v-form ref="form">
      <v-container fill-height>
        <v-row>
          <v-col offset="5" cols="8">
            <v-row>
              <h1 font-weight-bold>Work Experiences</h1>
            </v-row>
          </v-col>
          <div class="row" v-bind:key="experience.id" v-for="experience in experiences">
              <v-card raised class="mx-auto, mb-10" max-width="300" outlined>
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="overline mb-4">
                        <v-avatar
                  size="45"
                  tile
                >
                  <v-img :src="getImgUrl(experience.src)" contain></v-img>
                </v-avatar>                    
                </div>
                    <v-list-item-title class="headline mb-3">{{experience.title}}</v-list-item-title>
                    <v-list-item-subtitle class="mb-2">{{experience.company}}</v-list-item-subtitle>
                    <v-list-item-subtitle id="copy" class="mb-2">{{experience.description}}</v-list-item-subtitle>
                    <v-list-item-title>{{experience.time}}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
          </div>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      experiences: [
        {
          id: 0,
          src: 'MAN_BE_Logo_SS_STK_MC_RGB-72.jpg',
          title: "Lagerarbetare",
          company: "Manpower",
          description: "Sommar- och extrajobb på DHL i viared",
          time: "maj 2018 - nu"
        },
        {
          id: 1,
          src: "Liseberg_logo.png",
          title: "Butiksbiträde",
          company: "Liseberg",
          description: "Sommar- och extrajobb",
          time: "augusti 2017 - januari 2018"
        },
        {
          id: 2,
          src: "motorit.png",
          title: "IT Support",
          company: "Motor IT",          
          description: "Sommar- och extrajobb",
          time: "Juni 2014 - aug 2016"
        }
      ]
    };
  },
  methods: {
    getImgUrl(pic){
      return require(`@/assets/${pic}`)
    },
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
