import LoginForm from "@/components/Forms/LoginForm/index.vue"
import Logo from "@/components/Branding/Logo/index.vue"
import media from "~/mixins/media";
import {updateHead} from "~/data/update-head";
import Vue from "vue";

type Body = {
  email: string,
  password: string
}
const title = "Connexion"
const description = "Connectez-vous à votre compte et exporer les annonces et éleveurs d'animaux."
const route = "/login"

export default Vue.extend({
  name: "login",
  head: updateHead(title, description, route),
  components: {LoginForm, Logo},
  layout: "anonymous",
  mixins: [media],
  methods: {
    async handleSubmit(form: Body) {
      const formRef = this.$refs.LoginForm as Vue & { loading: boolean, formIsValid: boolean};
      const formIsValid = await formRef.formIsValid;
      if (!formIsValid) {
        console.log("Message d'erreur", 'Une ou plusieurs erreurs sont présentes dans le formulaire')
      }
      try {
        formRef.loading = true;

        await this.$auth
          .loginWith("local", {
            data: form,
          })
          .then(
            async (x) => {
              await this.$router.push("/");
              console.log('Message de validation', 'Connexion réussie, bienvenue 😃')
            },
            (error) => {
              console.log("Message d'erreur", 'Une erreur est survenue lors de la connexion')
              console.error(error);
            }
          );
      } catch (r) {
        console.log("Message d'erreur", 'Une erreur est survenue lors de la connexion')
        console.log(r);
      } finally {
        formRef.loading = false;
      }
    }
  }
})
