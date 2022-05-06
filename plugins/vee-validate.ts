import {email, numeric, required, length} from "vee-validate/dist/rules";
import {extend, setInteractionMode} from 'vee-validate';


setInteractionMode('eager')

extend('required', {
  ...required,
  message: '{_field_} ne peux pas être vide'
})
extend('confirmed', {
  ...required,
  message: 'Les mots de passe saisis ne sont pas identiques'
})
extend('numeric',{
  ...numeric,
  message: 'Seuls les caractères numériques sont autorisés ici'

})
extend('length',{
  ...length,
  message: 'Ce n\'est pas la bonne longueur'

})


extend('password', {
  params: ['target'],
  validate(value: string, params: Record<string, any>) {
    return value === params.target;
  },
  message: 'Les mots de passe saisis ne sont pas identiques'
});

extend('email', {
  ...email,
  message: 'L\'email doit être valide'
})
