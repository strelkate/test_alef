import Vue from 'vue'
import Vuex from 'vuex'
import {modulePopUp} from "@/store/pop-up"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        popUp: modulePopUp,
    }
})
