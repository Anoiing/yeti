import Vue from 'vue';
import App from './App';

// App.mpType = 'app';
// var gio = require("./utils/gio-minp/index.js").default;
// gio("init", "abe974f37e10b497", "wxd703bebcd9364ca7", {
// 	version: "0.0.1",
// 	vue: Vue,
// 	debug: true,
// });

Vue.config.productionTip = false;

// 引入全局uView
import uView from 'uview-ui';
Vue.use(uView);

const app = new Vue({
	...App
});
app.$mount();
