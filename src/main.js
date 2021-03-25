import Vue from 'nativescript-vue'
import App from './components/App'
import VueDevtools from 'nativescript-vue-devtools'
var firebase = require("@nativescript/firebase").firebase;
import { TNSFontIcon, fonticon } from 'nativescript-fonticon'

// Load TNSFonticon
 TNSFontIcon.debug = true
 TNSFontIcon.paths = {
   fa: './assets/css/fontawesome.min.css',
   far: './assets/css/regular.min.css',
   fas: './assets/css/solid.min.css',
   fab: './assets/css/brand.min.css'
 }
 TNSFontIcon.loadCss()
 Vue.filter('fonticon', fonticon)

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}

firebase.init({
  // Optionally pass in properties for database, authentication and cloud messaging,
  // see their respective docs.

  onMessageReceivedCallback: function(message) {
    console.log("Title: " + message.title);
    console.log("Body: " + message.body);
    // if your server passed a custom property called 'foo', then do this:
    console.log("Value of 'foo': " + message.data.foo);
  },

  showNotifications: true,
  showNotificationsWhenInForeground: true

}).then(
    function () {
      console.log("firebase.init done");
    },
    function (error) {
      console.log("firebase.init error: " + error);
    }
);


// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  
  render: h => h('frame', [h(App)])
}).$start()
