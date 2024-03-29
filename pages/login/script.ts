import LoginForm from "@/components/Forms/LoginForm/index.vue"
import Logo from "@/components/Branding/Logo/index.vue"
import media from "~/mixins/media";
import {updateHead} from "~/data/update-head";
type Body = {
  email: string,
  password: string
}
const title = "Connexion"
const description = "Connectez-vous à votre compte et exporer les annonces et éleveurs d'animaux."
const route = "/login"

export default {
    name: "login",
    head: updateHead(title, description, route),
    components: {LoginForm, Logo},
    layout: "anonymous",
    mixins: [media],
    methods: {
      handleSubmit(form: Body){
        console.log(form)
      }
    }
}
