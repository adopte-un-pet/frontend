import {updateHead} from "~/data/update-head";

const title = "Création mot de passe"
const description = "Site communautaire dans lequel les éleveurs français d’animaux de compagnie pourront inscrire leur élevage et présenter les animaux destinés à la vente avec une fiche par animal."
const route = "/create-password"

import ConfirmPassword from "@/components/Forms/ConfirmPassword/index.vue"
import Logo from "@/components/Branding/Logo/index.vue"
import media from "~/mixins/media";
import Vue from "vue";
import {mapActions} from "vuex";

export default Vue.extend({
  name: "create-password",
  components: {ConfirmPassword, Logo},
  head: updateHead(title, description, route),
  layout: "anonymous",
  mixins: [media],
  data(){
    return {
      token: this.$route.query.token,
    }
  },
  methods: {
    ...mapActions('authentification', ['resetPassword']),
    async handleSubmit(password: string, password_confirmation: string): Promise<void> {
      const formRef = this.$refs.ConfirmPassword as Vue & { loading: boolean, formIsValid: boolean };
      formRef.loading = true;

      const formIsValid = await formRef.formIsValid;
      if (!formIsValid) {
        console.log("Message d'erreur", 'Une ou plusieurs erreurs sont présentes dans le formulaire')
        return;
      }
      await this.resetPassword({token: this.token, data: {password, password_confirmation}})
      formRef.loading = false
      await this.$router.push('/login')
    }
  }
})
