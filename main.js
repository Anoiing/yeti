import Vue from 'vue';
import App from './App';

App.mpType = 'app';
var gio = require("./utils/gio-minp/index.js").default;
gio("init", "abe974f37e10b497", "wxd703bebcd9364ca7", {
	version: "0.0.1",
	vue: Vue,
	debug: true,
	getLocation: {          //是否自动获取用户的地理位置信息, 并设置获取方式
   autoGet: true,       //默认不自动获取
   type: 'gcj02'           //支持wgs84 | gcj02为火星坐标系, 默认wgs84
},
});

Vue.config.productionTip = false;

// 引入全局uView
import uView from 'uview-ui';
Vue.use(uView);

const app = new Vue({
	...App
});
app.$mount();
