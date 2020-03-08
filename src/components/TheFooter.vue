<template>
  <v-footer dark padless app>
    <v-card class="flex" flat tile>
      <v-card-title class="teal">
        <strong class="subheading">Get connected with me!</strong>
        <v-btn v-for="icon in icons" :key="icon" dark icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} —
        <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import { mdiLinkedin, mdiTwitter } from "@mdi/js";
export default {
  name: "TheFooter",
  data: () => ({
    icons: [mdiTwitter, mdiLinkedin]
  })
};
</script>
