<style lang="less">

</style>

<template>
    <div style="margin-top: 20px">
        <Form ref="formValidate" :rules="ruleValidate" :label-width="80">
            <FormItem label="登录名" prop="username">
                <Input placeholder="Enter your name"></Input>
            </FormItem>
            <FormItem label="姓名" prop="name">
                <Input placeholder="Enter your desc"></Input>
            </FormItem>
            <FormItem label="状态" prop="status">
                <i-switch v-model="formItem.switch" size="large">
                    <span slot="open">开启</span>
                    <span slot="close">关闭</span>
                </i-switch>
            </FormItem>
            <FormItem label="角色">
                <Select v-model="formItem.select">
                    <Option value="admin">系统管理员</Option>
                    <Option value="shop">商户管理员</Option>
                    <Option value="fk">风控管理员</Option>
                </Select>
            </FormItem>
            <FormItem label="手机号" prop="telephone">
                <Input placeholder="Enter your desc"></Input>
            </FormItem>
            <FormItem label="电子邮箱" prop="email">
                <Input placeholder="Enter your desc"></Input>
            </FormItem>
        </Form>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                },
                ruleValidate: {
                    username: [
                        {required: true, message: 'The username cannot be empty', trigger: 'blur'}
                    ],
                    name: [
                        {required: true, message: 'name cannot be empty', trigger: 'blur'}
                    ]
                }
            }
        }
    }
</script>