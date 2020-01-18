<template>
  <div>
    <v-card raised class="mx-auto, mb-10" max-width="1000" height="1000" outline>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">
            <v-img height="60" width="300" tile>
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
    </v-card>
  </div>
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
          description: "Systemarkitektur utbildningen i Borås",
          time: "2018 - 2021"
        },
        {
          id: 1,
          src: "HB_Logo.jpg",
          title: "Systemvetare",
          company: "Högskolan i Borås",
          description: "Systemvetar utbildningen i borås",
          time: "2017 - 2018"
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