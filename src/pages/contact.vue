<template>
  <div>
    <v-row>
      <v-col>
        <v-row justify="center">
          <p class="display-3">Contact Me</p>
        </v-row>
      </v-col>
    </v-row>

    <v-card raised class="mx-auto" max-width="400">
      <v-list-item three-line>
        <v-list-item-content>
          <div class="mb-4">
            <img src="../assets/Email.jpg" height="40" alt />
          </div>
          <v-list-item-title class="headline mb-3">EMAIL</v-list-item-title>
          <v-list-item-title>Ludvig.kh.karlsson@gmail.com</v-list-item-title>
          <v-card-actions>
            <v-btn x-small max-width="10">Copy</v-btn>
          </v-card-actions>
        </v-list-item-content>
      </v-list-item>
      <v-card-actions>
        <v-btn text @click="MailTo">Inquiries</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  methods: {
    MailTo() {
      window.open("mailto:ludvig.kh.karlsson@gmail.com");
    }
  }
};
</script>
