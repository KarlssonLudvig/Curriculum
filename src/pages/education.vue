<template>
  <v-form ref="form">
    <v-container fill-height>
      <v-row justify="center">
        <p class="display-3">Education</p>
      </v-row>
      <v-row justify="center">
        <div class="row" v-bind:key="experience.id" v-for="experience in experiences">
          <v-card raised class="mx-auto" max-width="375" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">
                  <v-img height="25" width="130" tile>
                    <v-img :src="getImgUrl(experience.src)" contain></v-img>
                  </v-img>
                </div>
                <v-list-item-title class="headline mb-3">{{experience.title}}</v-list-item-title>
                <v-list-item-subtitle class="mb-2">{{experience.company}}</v-list-item-subtitle>
                <v-list-item-subtitle id="copy" class="mb-2">{{experience.description}}</v-list-item-subtitle>
                <v-list-item-title>{{experience.time}}</v-list-item-title>
                <v-btn elevation="7" rounded outlined class="mt-5" @click="goToDetails(experience.title)">Details</v-btn>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </div>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
// @ is an alias to /src

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
          time: "2018 - 2021"
        },
        {
          id: 1,
          src: "HB_Logo.jpg",
          title: "Systemvetare",
          company: "Högskolan i Borås",
          description: "Systemvetarutbildningen i Borås",
          time: "2017 - 2018"
        }
      ]
    };
  },
  methods: {
    getImgUrl(pic) {
      return require(`@/assets/${pic}`);
    },
    goToDetails(title) {
      // eslint-disable-next-line no-console
      console.log(title);
      this.$router.push({
        path: "education/Details/" + title,
        params: { title: title }
      });
    }
  }
};
</script>
