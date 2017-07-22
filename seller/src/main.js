// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 插件的使用都要先注册
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import 'commen/stylus/index.styl';

Vue.config.productionTip = false;

// 相当于把插件应用到vue中
// 0. 载入路由，
Vue.use(VueRouter);
// 载入请求的插件vue resource
Vue.use(VueResource);

// 下面的注释是通过esline来忽略new对象后需要赋值给某一个变量的规则
// 因为es6规定new后需要有一个对象获取，而vue是不需要给任何对象赋值的，只需要创建组件就好
// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// });

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller }
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  linkActiveClass: 'active',
  routes // （缩写）相当于 routes: routes
});

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
/* eslint-disable no-new */
new Vue({
  router,
  // 不加载App组件会无法挂载到index.html上的‘#app’
  template: '<App/>',
  components: { App }
}).$mount('#app');

router.push('/goods');
