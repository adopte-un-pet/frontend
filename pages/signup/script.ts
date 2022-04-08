import SignupForm from "@/components/Forms/SignupForm/index.vue"
import Logo from "@/components/Branding/Logo/index.vue"
import media from "~/mixins/media";
import {updateHead} from "~/data/update-head";

type Body = {
  email: string,
  password: string
}
const title = "Créer un compte gratuitement"
const description = "Inscrivez-vous à adopte un pet et exporer les annonces et éleveurs d'animaux."
const route = "/signup"

export default {
  name: "signup",
  components: {SignupForm, Logo},
  head: updateHead(title, description, route),
  layout: "anonymous",
  mixins: [media],
  methods: {
    handleSubmit(form: Body) {
      console.log(form)
    }
  }
}
