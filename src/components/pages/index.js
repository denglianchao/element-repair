// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import {router} from '@/router/index';
import store from '../../store/'
import axios from 'axios';
import vueAxios from  'vue-axios';
import Qs from 'qs';
import FastClick from 'fastclick';
import ElementUI from 'element-ui'
/*import 'element-ui/lib/theme-default/index.css'*/
import 'element-ui/lib/theme-chalk/index.css';

//scss style
import '../../styles/reset.scss';

import '../../assets/icons/index';
/*import './styles/animate.css';*/


//消除移动端页面的延迟加载
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body);
    }, false);
}


//创建一个axios实例
var axios_instance = axios.create({
//config里面有这个transformRquest，这个选项会在发送参数前进行处理。这时候我们通过Qs.stringify转换为表单查询参数
    transformRequest: [function (data) {
        data = Qs.stringify(data);
        return data;
    }],
//设置Content-Type
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
});

// axios全局配置, 引用vueAxios无需全局配置,vueAxios统一规范$http请求
/*Vue.prototype.$http = axios;*/
Vue.use(vueAxios, axios_instance);

Vue.use(ElementUI);

//设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false;

//error跳转
Vue.prototype.$onError = function (error) {
    let toastFlag = true;
    let errorCode = 400;
    if(error || error.response) {
        errorCode = 404;
    }else {
        errorCode = 500;
    }
    this.$toast.show({
        text: '请求异常,服务器异常..',
        time: 2000
        },
    )
    if (toastFlag) {
        this.$router.push({
            path: '/error',
            query: {
                errorCode: errorCode,

            }
        });
    }
}

new Vue({
    el: '#app',
    router, store,
    components: {App},
    template: '<App/>'
});
