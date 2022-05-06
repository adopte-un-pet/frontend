import BreederCreateForm from "~/components/Forms/BreederCreateForm/index.vue"
import Logo from "@/components/Branding/Logo/index.vue"
import media from "~/mixins/media";
import {updateHead} from "~/data/update-head";
import Vue from "vue";

type Body = {
  email: string,
  password: string
}
const title = "Adopter un animal : nos annonces et nos éleveurs"
const description = "Site communautaire dans lequel les éleveurs français d’animaux de compagnie pourront inscrire leur élevage et présenter les animaux destinés à la vente avec une fiche par animal."
const route = "/login/breeder"

export default Vue.extend({
    name: "loginBreeder",
    head: updateHead(title, description, route),
    components: {BreederCreateForm, Logo},
    layout: "anonymous",
    mixins: [media],
    methods: {
      handleSubmit(form: Body) {
        console.log(form)
        const formRef = this.$refs.BreederCreateForm as Vue & { loading: boolean };
        formRef.loading = true;
        setTimeout(() => {
          formRef.loading = false;
        }, 2500)
      }
    }
})
