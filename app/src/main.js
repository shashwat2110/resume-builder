import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'
import VueCookie from 'vue-cookie'

import { store } from './store/store'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' 

Vue.use(Vuetify)
Vue.use(VueCookie)

Vue.config.productionTip = false;

let app = '';
const config = {
  apiKey: "AIzaSyADq_pn3kCQUlAVJ28i9kaAJ8WT7_StleY",
  authDomain: "getplaced-backend.firebaseapp.com",
  databaseURL: "https://getplaced-backend.firebaseio.com",
  projectId: "getplaced-backend",
  storageBucket: "getplaced-backend.appspot.com",
  messagingSenderId: "190515284956",
  appId: "1:190515284956:web:47349a0aecc732f3"
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app');
  }
});
