import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdiSvg"
  },
  theme: {
    themes: {
      light: {
        primary: "#03a9f4",
        secondary: "#ffc107",
        accent: "#3f51b5",
        error: "#f44336",
        warning: "#ff9800",
        info: "#00bcd4",
        success: "#009688"
      }
    }
  }
});
