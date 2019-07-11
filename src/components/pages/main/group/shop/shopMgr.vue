<style lang="less">
    @import '../../../styles/common.less';
</style>

<template>
    <div class="margin-top-8">
        <div>
            <Button type="primary" @click="addShop" icon="plus-round">新增商户</Button>
        </div>
        <div class="margin-top-8">
            <Table border :columns="columns" :data="data"></Table>
            <div style="margin: 10px;overflow: hidden">
                <div style="float: right;">
                    <Page :total="100" :current="1" show-sizer></Page>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import addShop from './components/addShop.vue';
    export default {
        data () {
            return {
                columns: [
                    {
                        title: '登录名',
                        key: 'username',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.username)
                            ]);
                        }
                    },
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '状态',
                        key: 'status'
                    },
                    {
                        title: '角色',
                        key: 'role'
                    },
                    {
                        title: '手机号',
                        key: 'telephone'
                    },
                    {
                        title: '电子邮箱',
                        key: 'email'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '修改'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除'),
                                h('Button', {
                                    props: {
                                        type: 'success',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.restart(params.index)
                                        }
                                    }
                                }, '重置密码')
                            ]);
                        }
                    }
                ],
                data: [
                    {
                        username: 'Administrator',
                        name: '邓超',
                        status: '开启',
                        role: '系统管理员',
                        telephone: '17222189098',
                        email: '25727876@qq.com',
                    },
                    {
                        username: 'Jim Green',
                        name: '朱永',
                        status: '关闭',
                        role: '商户管理员',
                        telephone: '13387769909',
                        email: '11272787621@qq.com',
                    }
                ]
            }
        },
        methods: {
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data[index].name}<br>Age：${this.data[index].age}<br>Address：${this.data[index].address}`
                })
            },
            remove (index) {
                this.data.splice(index, 1);
            },
            restart (index) {
                this.$Modal.info({
                    title: '重置密码',
                    content: '确认要重置密码666666吗？'
                })
            },
            addShop () {
                this.$Modal.confirm({
                    title: '增加商户',
                    scrollable: true,
                    okText: '保存',
                    render: (h) => {
                        return h(addShop, {
                                props: {

                                },
                                on: {

                                }
                            }
                        );
                    },
                    onOk: () => {
                        this.$Message.success('新增成功!')
                    }
                })
            }
        }
    }
</script>
