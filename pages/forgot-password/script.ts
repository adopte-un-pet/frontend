import {updateHead} from "~/data/update-head";
import MailForm from "~/components/Forms/MailForm/index.vue";
import Logo from "~/components/Branding/Logo/index.vue";
import media from "~/mixins/media";
import Vue from "vue";
import { mapActions } from "vuex";

const title = "Mot de passe oublié"
const description = "Site communautaire dans lequel les éleveurs français d’animaux de compagnie pourront inscrire leur élevage et présenter les animaux destinés à la vente avec une fiche par animal."
const route = "/forgot-password"

export default Vue.extend({
  name: "forgot-password",
  layout: "anonymous",
  head: updateHead(title, description, route),
  components: {MailForm, Logo},
  data(){
    return {
      mailSend: false,
      email: ""
    }
  },
  mixins: [media],
  methods: {
    ...mapActions('authentification', ['sendForgotPasswordMail']),
    async handleSubmit(email: string): Promise<void> {
      const formRef = this.$refs.MailForm as Vue & { loading: boolean, formIsValid: boolean };
      const formIsValid = await formRef.formIsValid;
      if (!formIsValid) {
        console.log("Message d'erreur", 'Une ou plusieurs erreurs sont présentes dans le formulaire')
        return;
      }
      formRef.loading = true;
      await this.sendForgotPasswordMail(email)
      formRef.loading = false;
      this.email = email;
      this.mailSend = true;
    },
  }
})
