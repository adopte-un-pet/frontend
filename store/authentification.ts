import {$axios} from '~/utils/api'
import {ActionContext} from 'vuex'

type ResetPassword = {
  data: { password: string, password_confirmation: string },
  token: string
}

export const state = () => ({})
/*get State*/
export const getters = {}
/*Appel api etc...*/
export const actions = {
  async sendForgotPasswordMail({commit, state}: ActionContext<unknown, unknown>, email: string) {
    await $axios.$post('/api/auth/forgot-password', {email}).then(e => {
      console.log(e)
    }).catch(err => {
      console.log(err)
    })
  },
  async resetPassword({commit, state}: ActionContext<unknown, unknown>, body: ResetPassword) {
    await $axios.$post(`/api/auth/reset-password/${body.token}`, body.data).then(e => {
      console.log(e)
    }).catch(err => {
      console.log(err)
    })
  }
}
export const mutations = {}
