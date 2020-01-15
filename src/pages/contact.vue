<template>
  <div>
    <v-form ref="form">
      <v-container fill-height>
        <v-row>
          <v-col offset="5" cols="8">
            <v-row>
              <h1 font-weight-bold>Contact Me</h1>
            </v-row>
          </v-col>
        </v-row>

        <v-card class="mx-auto" max-width="400" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">
                <img src="../assets/Email.jpg" height="40" alt />
              </div>
              <v-list-item-title class="headline mb-3">EMAIL</v-list-item-title>
              <v-list-item-title id="copy" class>Ludvig.kh.karlsson@gmail.com</v-list-item-title>
              <v-card-actions>
                <v-btn x-small @click="copyText" max-width="10">Copy</v-btn>
              </v-card-actions>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
            <v-btn text @click="MailTo">Inquiries</v-btn>
          </v-card-actions>
        </v-card>
        <v-row>
          <v-col offset="5" cols="8"></v-col>
          <v-col offset="5" cols="8">
            <v-row offset="5" rows="10">
              <v-btn class="mx-2" fab dark small color="primary" @click="GoToLinkedin">
                <v-avatar size="40">
                  <img src="../assets/LinkedIn-300x300.png" />
                </v-avatar>
              </v-btn>
              <v-btn class="mx-2" fab dark small color="primary" @click="GoToGithub">
                <v-avatar size="40">
                  <img src="../assets/github.png" />
                </v-avatar>
              </v-btn>
              <v-btn class="mx-2" fab dark small color="primary" @click="GoToLinkedin">
                <v-avatar size="40">
                  <img src="../assets/LinkedIn-300x300.png" />
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
  methods: {
    MailTo() {
      window.open("mailto:ludvig.kh.karlsson@gmail.com");
    },
    copyText() {}
  }
};
</script>
