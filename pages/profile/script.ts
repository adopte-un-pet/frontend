import UploadBanner from "@/components/Medias/UploadBanner/index.vue";
import UploadAvatar from "@/components/Medias/UploadAvatar/index.vue";
import ProfileForm from "@/components/Form/ProfileForm/index.vue";
import { mapActions } from "VueX";
import Vue from "vue"

export default Vue.extend({
    name: "profile",
    layout: "anonymous",
    components: {UploadBanner, UploadAvatar, ProfileForm},
    async fetch(){
        await this.refresh()
    },
    data(){
        return {
            user: {}
        }
    },
    methods: {
        ...mapActions('user', ['getUser']),
        async refresh(){
            this.user = await this.getUser();
        }
    }
})
