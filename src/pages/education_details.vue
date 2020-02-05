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
          title: "Computer and Systems Science",
          company: "University of Borås",
          description: "Computer and Systems Science at University of Borås",
          time: "2018 - 2021",
          completedcourses: [
            {
              id: 1,
              name: "Information Systems and Data"
            },
            {
              id: 2,
              name: "Introduction to Computer Science"
            },
            {
              id: 3,
              name: "System Analysis and Design"
            },
            {
              id: 4,
              name: "Computer Programming"
            },
            {
              id: 5,
              name: "Developer - roles, environment and practice"
            },
            {
              id: 6,
              name: "Algorithms and Data Structures I"
            },
            {
              id: 7,
              name: "Algorithms and Data Structures II"
            },
            {
              id: 8,
              name: "Computer Communication"
            },
            {
              id: 9,
              name: "Database Management Systems"
            },
            {
              id: 10,
              name: "Object-oriented Programming in C#"
            },
            {
              id: 11,
              name: "System Testing"
            },
            {
              id: 12,
              name: "Web and Mobile Development"
            }
          ],
          currentCourses: [
            {
              id: 0,
              name: "Machine Learning I"
            },
            {
              id: 1,
              name: "Object-oriented Software Development"
            }
          ]
        },
        {
          id: 1,
          src: "HB_Logo.jpg",
          title: "Systems Science",
          company: "University of Borås",
          description: "Systems Science at University of Borås",
          time: "2017 - 2018",
          completedcourses: [
            {
              id: 0,
              name: "Systemics and Management"
            },
            {
              id: 1,

              name:
                "Introduction to Program Development - from Information to Applications"
            },
            {
              id: 2,

              name: "Interaction design"
            },
            {
              id: 3,

              name: "System Analysis and Design"
            },

            {
              id: 4,

              name: "Basics of Programming, with C#"
            },
            {
              id: 5,

              name: "Developer - roles, environment and practice"
            },
            {
              id: 6,

              name: "Introduction to Business Processes and Enterprise Systems"
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
</style>