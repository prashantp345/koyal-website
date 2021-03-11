import Vue from 'vue';
import Vuex from 'vuex';

Vue.use( Vuex );

export default new Vuex.Store( {
    state: {
        showMenuModal: false,
        showSearchModal: false,
        showPlansModal: false,
        orderText: ''
    },
    mutations: {
        toggleMenuModal( state ) {
            state.showMenuModal = ! state.showMenuModal;
        },
        toggleSearchModal( state ) {
            state.showSearchModal = ! state.showSearchModal;
        },
        togglePlansModal( state, orderText ) {
            state.showPlansModal = ! state.showPlansModal;
            state.orderText      = orderText;
        },
        variablesNull( state ) {
            state.showMenuModal   = false;
            state.showSearchModal = false;
            state.showPlansModal  = false;
        }
    },
    getters: {
        showMenuModal: state => state.showMenuModal,
        showSearchModal: state => state.showSearchModal,
        showPlansModal: state => state.showPlansModal,
        orderText: state => state.orderText
    }
} );
