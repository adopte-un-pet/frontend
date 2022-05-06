import { $axios } from '~/utils/api'
import {ActionContext} from 'vuex'
export const state = () => ({})
/*get State*/
export const getters = {
}
/*Appel api etc...*/
export const actions = {
    async sendForgotMail({ commit, state }: ActionContext<unknown, unknown>, email: string) {
        await $axios.$post('/api/auth/forgot-password', {email})
    }
}
export const mutations = {}
