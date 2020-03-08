<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center" class="mx-auto">
      <v-col cols="12" sm="6" md="4" class="grey lighten-5">
        <ValidationObserver ref="observer">
          <form>
            <v-row justify="center" align="center">
              <v-col cols="12">
                <ValidationProvider
                  v-slot="{ errors }"
                  name="Email"
                  rules="required|email"
                >
                  <v-text-field
                    v-model="email"
                    :error-messages="errors"
                    label="Email"
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col cols="12">
                <ValidationProvider
                  v-slot="{ errors }"
                  name="password"
                  rules="required"
                >
                  <v-text-field
                    v-model="password"
                    :error-messages="errors"
                    label="Password"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show ? 'text' : 'password'"
                    @click:append="show = !show"
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col cols="4" offset="8">
                <v-btn color="primary" @click="submit" block large>Login</v-btn>
              </v-col>
            </v-row>
          </form>
        </ValidationObserver>
      </v-col>
    </v-row>
    <TheFooter />
  </v-container>
</template>

<script>
import { Auth } from "../firebase/firebase";
import TheFooter from "@/components/TheFooter.vue";
import { required, email } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode
} from "vee-validate";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty"
});

extend("email", {
  ...email,
  message: "Email must be valid"
});

export default {
  name: "Login",
  components: {
    ValidationProvider,
    ValidationObserver,
    TheFooter
  },
  data: () => ({
    email: "",
    password: "",
    show: false
  }),

  methods: {
    clear() {
      this.email = "";
      this.password = "";
      this.$refs.observer.reset();
    },
    submit() {
      this.$refs.observer.validate();
      Auth.signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.clear();
          this.$router.push("/home");
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
