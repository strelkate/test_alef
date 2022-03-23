export const modulePopUp = {
    state: {
        showPopUp: false,
        type: '',
        text: ''
    },
    mutations: {
        SET_SHOW_POP_UP(state, showPopUp) {
            state.showPopUp = showPopUp
        },
        SET_TYPE_TEXT_POP_UP(state, {type, text}) {
            state.type = type;
            state.text = text;
        },

    },
    getters: {
        GET_SHOW_POP_UP: state => state.showPopUp,
        GET_TYPE_POP_UP: state => state.type,
        GET_TEXT_POP_UP: state => state.text,

    },
    actions: {
        SET_POP_UP({commit}, {type, text}) {
            commit('SET_TYPE_TEXT_POP_UP', {type, text})
            commit('SET_SHOW_POP_UP', true)
            setTimeout(function () {
                commit('SET_SHOW_POP_UP', false)
            }, 3000)
        }
    },
}
