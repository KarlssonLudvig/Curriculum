<template>
  <v-container>
    <v-row justify="center" class="mt-10">
      <v-card raised class="mb-10">
        <v-list-item three-line>
          <v-list-item-content>
            <div class="mb-4">
              <v-img height="60" width="300">
                <v-img :src="getImgUrl(experience.src)" contain></v-img>
              </v-img>
            </div>
            <v-list-item-title class="headline mb-3">{{experience.title}}</v-list-item-title>
            <v-list-item-subtitle class="mb-6">{{experience.company}}</v-list-item-subtitle>
            <v-list-item-subtitle class="mb-6">{{experience.description}}</v-list-item-subtitle>
            <v-list-item-title>{{experience.time}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="headline mb-3">Current courses:</v-list-item-title>
            <v-list-item-subtitle
              v-if="experience.currentCourses.length == 0"
            >I'm no longer studying this program.</v-list-item-subtitle>

            <div v-bind:key="currentCourse.id" v-for="currentCourse in experience.currentCourses">
              <v-list-item-subtitle class="mb-6">{{currentCourse.name}}</v-list-item-subtitle>
            </div>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="headline mb-3">Completed courses:</v-list-item-title>
            <div
              v-bind:key="completedcourse.id"
              v-for="completedcourse in experience.completedcourses"
            >
              <v-list-item-subtitle class="mb-6">{{completedcourse.name}}</v-list-item-subtitle>
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      experiences: [
        {
          id: 0,
          src: "HB_Logo.jpg",
          title: "Systemarkitekt",
          company: "Högskolan i Borås",
          description: "Systemarkitekturutbildningen i Borås",
          time: "2018 - 2021",
          completedcourses: [
            {
              id: 1,
              name: "Informationssystem och data"
            },
            {
              id: 2,
              name: "Programutveckling - en datalogisk introduktion"
            },
            {
              id: 3,
              name: "Systemanalys och design"
            },
            {
              id: 4,
              name: "Programmeringsteknik"
            },
            {
              id: 5,
              name: "Systemutvecklare - roller, miljö och praktik"
            },
            {
              id: 6,
              name: "Algoritmer och datastrukturer 1"
            },
            {
              id: 7,
              name: "Datakommunikation"
            },
            {
              id: 8,
              name: "Databasteknik"
            },
            {
              id: 9,
              name: "Objektorienterad programmering i C#"
            },
            {
              id: 10,
              name: "Test av IT-system"
            },
            {
              id: 11,
              name: "Webb- och mobilutveckling "
            }
          ],
          currentCourses: [
            {
              id: 0,
              name: "Maskininlärning 1"
            },
            {
              id: 1,
              name: "Objektorienterad mjukvaruutveckling"
            }
          ]
        },
        {
          id: 1,
          src: "HB_Logo.jpg",
          title: "Systemvetare",
          company: "Högskolan i Borås",
          description: "Systemvetarutbildningen i borås",
          time: "2017 - 2018",
          completedcourses: [
            {
              id: 0,
              name: "System- och Organisationsteori"
            },
            {
              id: 1,

              name:
                "Introduktion till programutveckling - från information till tillämpning"
            },
            {
              id: 2,

              name: "Interaktionsdesign"
            },
            {
              id: 3,

              name: "Systemanalys och Design"
            },

            {
              id: 4,

              name: "Grundläggande programmering med C#"
            },
            {
              id: 5,

              name: "Systemutvecklare - roller, miljö och praktik "
            },
            {
              id: 6,

              name: "Introduktion till verksamhetsprocesser och affärssystem"
            }
          ],
          currentCourses: []
        }
      ]
    };
  },
  computed: {
    experience() {
      // eslint-disable-next-line no-console
      return this.experiences.filter(e => e.title == this.$route.params.id)[0];
    }
  },
  methods: {
    getImgUrl(pic) {
      return require(`@/assets/${pic}`);
    }
  }
};
</script>

<style>
.sdf {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
</style>