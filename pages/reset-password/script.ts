import {updateHead} from "~/data/update-head";
import MailForm from "~/components/Forms/MailForm/index.vue";
import Logo from "~/components/Branding/Logo/index.vue";
import media from "~/mixins/media";
import Vue from "vue";

const title = "Mot de passe oublié"
const description = "Site communautaire dans lequel les éleveurs français d’animaux de compagnie pourront inscrire leur élevage et présenter les animaux destinés à la vente avec une fiche par animal."
const route = "/reset-password"

export default Vue.extend({
  name: "reset-password",
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
    handleSubmit(email: string): void{
      const formRef = this.$refs.MailForm as Vue & { loading: boolean };
      formRef.loading = true;
      setTimeout(() => {
        formRef.loading = false;
      }, 2500)
      this.email = email;
      this.mailSend = true;
    },
  }
})
