import {updateHead} from "~/data/update-head";

const title = "Création mot de passe"
const description = "Site communautaire dans lequel les éleveurs français d’animaux de compagnie pourront inscrire leur élevage et présenter les animaux destinés à la vente avec une fiche par animal."
const route = "/create-password"

import ConfirmPassword from "@/components/Forms/ConfirmPassword/index.vue"
import Logo from "@/components/Branding/Logo/index.vue"
import media from "~/mixins/media";
import Vue from "vue";

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
    handleSubmit(password: string): void {
      console.log(password)
      const formRef = this.$refs.ConfirmPassword as Vue & { loading: boolean };
      formRef.loading = true;
      setTimeout(() => {
        formRef.loading = false;
      }, 2500)
    }
  }
})
