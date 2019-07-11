<template>
    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px"
             class="demo-ruleForm login-container">
        <h3 class="title">系统登录</h3>
        <el-form-item prop="account">
            <el-input type="text" v-model="ruleForm2.account"  placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass"  placeholder="密码"></el-input>
        </el-form-item>
        <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
        <el-form-item style="width:100%;">
            <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2" :loading="logining">登录
            </el-button>
            <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
        </el-form-item>
    </el-form>
</template>

<script>
    //import NProgress from 'nprogress'
    export default {
        data() {
            return {
                logining: false,
                ruleForm2: {
                    account: 'admin',
                    checkPass: '123456'
                },
                rules2: {
                    account: [
                        {required: true, message: '请输入账号', trigger: 'blur'},
                        //{ validator: validaePass }
                    ],
                    checkPass: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        //{ validator: validaePass2 }
                    ]
                },
                checked: true
            };
        },
        methods: {
            handleReset2() {
                this.$refs.ruleForm2.resetFields();
            },
            handleSubmit2(ev) {
                this.$router.push('/home');
            }
        }
    }

</script>

<style lang="scss" scoped rel="stylesheet/scss">
    .login-container {
        /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
        -webkit-border-radius: .5rem;
        border-radius: .5rem;
        -moz-border-radius: .5rem;
        background-clip: padding-box;
        margin: 18rem auto;
        width: 35rem;
        padding: 3.5rem 3.5rem 1.5rem 3.5rem;
        background: #fff;
        border: .1rem solid #eaeaea;
        box-shadow: 0 0 2.5rem #cac6c6;

    .title {
        font-size: 1.6rem;
        margin: 0 auto 4rem auto;
        text-align: center;
        color: #505458;
    }

    .remember {
        margin: 0 0 3.5rem 0;
    }

    }
</style>