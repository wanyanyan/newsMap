require('material-design-lite/material.min.js')
require('material-design-lite/material.min.css')
require('material-design-icons/iconfont/material-icons.css')


import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import VueMdl from 'vue-mdl'
import App from './views/App'
import Login from './views/Login'
import Uploads from './views/Upload'
import Atlas from './views/Atlas'
import User from './views/User'
import Layout from './components/Layout'
import Search from './components/Search'
import Pagination from './components/Pagination'
import Conditions from './components/Conditions'
import Footer from './components/Footer.vue'
import DataCards from './components/DataCards'
import DialogPrompt from './components/Dialog-Prompt'
import DialogInput from './components/Dialog-Input'
import LocationSelect from './components/LocationSelect'

Vue.config.debug = true
Vue.use(Router)
Vue.use(VueMdl)
Vue.use(Resource)

Vue.component('foxgis-layout', Layout)
Vue.component('foxgis-conditions',Conditions)
Vue.component('foxgis-search', Search)
Vue.component('foxgis-pagination', Pagination)
Vue.component('foxgis-footer', Footer)
Vue.component('foxgis-data-cards', DataCards)
Vue.component('foxgis-dialog-prompt',DialogPrompt)
Vue.component('foxgis-dialog-input',DialogInput)
Vue.component('foxgis-location-select',LocationSelect)

let router = new Router({
  history: false
})

router.map({
  '/': {
    component: function (resolve) {
      require(['./views/Login.vue'], resolve)
    }
  },
  '/login': {
    component: function (resolve) {
      require(['./views/Login.vue'], resolve)
    }
  },
  '/atlas': {
    component: function (resolve) {
      require(['./views/Atlas.vue'], resolve)
    }
  },
  '/news': {
    component: function (resolve) {
      require(['./views/Upload.vue'], resolve)
    }
  },
  '/user':{
    component:function (resolve) {
      require(['./views/User.vue'], resolve)
    }
  }
})


router.start(App, '#app')
