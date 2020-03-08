<template>
  <v-footer light padless app>
    <v-card class="flex" color="info" flat tile>
      <v-card-title class="justify-center">
        <strong class="subheading white--text mr-4 "
          >Get connected with me!</strong
        >
        <v-btn v-for="icon in icons" :key="icon" class="white--text" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>
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
