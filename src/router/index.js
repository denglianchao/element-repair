import Vue from 'vue';
import Router from 'vue-router';
import {setStore, getStore} from '../config/mUtils';

import login from '../components/pages/login/Login.vue';
import home from '../components/pages/home.vue';
import error from '../components/commons/error/error.vue';

import dashboard from '../components/pages/main/dashboard/index.vue';
import form from '../components/pages/main/form/index.vue';
import admin from '../components/pages/main/group/admin/adminMgr.vue';

const routes = [
    {
        path: '/error',
        name: '错误',
        component: error,
        hidden: true
    },
    {
        path: '/login',
        name: 'login',
        component: login,
        hidden: true
    },
    {
        path: '/',
        redirect: '/dashboard',
        component: home,
        children: [
            {
                path: '/dashboard',
                component: dashboard,
                name: 'Dashboard',
                meta: {title: '首页', icon: 'dashboard'}
            }
        ]
    },
    {
        path: '/group',
        component: home,
        meta: {
            title: '系统管理',
            icon: 'user'
        },
        children: [
            {
                path: 'admin',
                component: admin,
                name: 'Admin',
                meta: {title: '权限控制', icon: 'form'},
            },
            {
                path: 'shop',
                component: form,
                name: 'Shop',
                meta: {title: '商户管理', icon: 'form'},
            }
        ]
    },
    {
        path: '/base-data',
        component: home,
        meta: {
            title: '基础数据',
            icon: 'nested'
        },
        children: [
            {
                path: 'company',
                component: form,
                name: 'Company',
                meta: {title: '公司信息', icon: 'form'},
            },
            {
                path: 'goods-data',
                component: form,
                name: 'GoodsData',
                meta: {title: '商品资料', icon: 'form'},
            },
            {
                path: 'expend',
                component: form,
                name: 'Expend',
                meta: {title: '日常收支', icon: 'form'},
            },
            {
                path: 'provider',
                component: form,
                name: 'Provider',
                meta: {title: '供应商', icon: 'form'},
            }
        ]
    },
    {
        path: '/goods-mgr',
        component: home,
        meta: {
            title: '商品管理',
            icon: 'example'
        },
        children: [
            {
                path: 'procurement',
                component: form,
                name: 'Procurement',
                meta: {title: '采购进货', icon: 'form'},
            },
            {
                path: 'good-sale',
                component: form,
                name: 'GoodSale',
                meta: {title: '商品销售', icon: 'form'},
            },
            {
                path: 'whole-sale',
                component: form,
                name: 'WholeSale',
                meta: {title: '商品批发', icon: 'form'},
            },
            {
                path: 'good-store',
                component: form,
                name: 'GoodStore',
                meta: {title: '当前库存', icon: 'form'},
            }
        ]
    },
    {
        path: '/service-mgr',
        component: home,
        meta: {
            title: '维修管理',
            icon: 'link'
        },
        children: [
            {
                path: 'register',
                component: form,
                name: 'Register',
                meta: {title: '维修登记', icon: 'form'},
            },
            {
                path: 'service-operation',
                component: form,
                name: 'ServiceOperation',
                meta: {title: '维修业务管理', icon: 'form'},
            }
        ]
    },
    {
        path: '/statement',
        component: home,
        meta: {
            title: '报表分析',
            icon: 'table'
        },
        children: [
            {
                path: 'buy-report',
                component: form,
                name: 'BuyReport',
                meta: {title: '采购分析', icon: 'form'},
            },
            {
                path: 'sale-report',
                component: form,
                name: 'SaleReport',
                meta: {title: '销售分析', icon: 'form'},
            },
            {
                path: 'whole-report',
                component: form,
                name: 'WholeReport',
                meta: {title: '批发分析', icon: 'form'},
            },
            {
                path: 'service-report',
                component: form,
                name: 'ServiceReport',
                meta: {title: '维修分析', icon: 'form'},
            },
            {
                path: 'manage-report',
                component: form,
                name: 'ManageReport',
                meta: {title: '经营分析', icon: 'form'},
            }
        ]
    },

];


Vue.use(Router);

export const router = new Router({
    routes,
    history: true
});

router.beforeEach((to, from, next) => {
    //判断路径与底部餐单联动
    if (to.path == '/home/shop' || to.path == '/home/placeArea') {
        setStore("selectIndex", 0);
    } else if (to.path == '/home/search') {
        setStore("selectIndex", 1);
    } else if (to.path == '/home/myBills') {
        setStore("selectIndex", 2);
    } else if (to.path == '/home/personInfo') {
        setStore("selectIndex", 3);
    }
    next();
});



