<template>
  <v-container fill-height>
    <v-row justify="center">
      <p class="display-3">Work Experiences</p>
    </v-row>
    <v-row>
      <template v-for="experience in experiences">
        <v-col v-bind:key="experience.id" xl="3" lg="4" md="4" sm="4" xs="1" offset-xs="3">
          <v-card raised>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="mb-4">
                  <v-img height="40" width="100" :src="getImgUrl(experience.src)" contain />
                </div>
                <v-list-item-title class="headline mb-3">{{experience.title}}</v-list-item-title>
                <v-list-item-subtitle class="mb-2">{{experience.company}}</v-list-item-subtitle>
                <v-list-item-subtitle class="mb-2">{{experience.description}}</v-list-item-subtitle>
                <v-list-item-title>{{experience.time}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      experiences: [
        {
          id: 0,
          src: "MAN_BE_Logo_SS_STK_MC_RGB-72.jpg",
          title: "Lagerarbetare",
          company: "Manpower",
          description: "Working part-time at DHL in Viared",
          time: "May 2018 - now"
        },
        {
          id: 1,
          src: "Liseberg_logo.png",
          title: "Butiksbiträde",
          company: "Liseberg",
          description: "Part-time",
          time: "August 2017 - January 2018"
        },
        {
          id: 2,
          src: "motorit.png",
          title: "IT Support",
          company: "Motor IT",
          description: "Part-time",
          time: "June 2014 - August 2016"
        }
      ]
    };
  },
  methods: {
    getImgUrl(pic) {
      return require(`@/assets/${pic}`);
    }
  }
};
</script>
