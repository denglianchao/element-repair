<template>
    <div class="wrap">
        <div class="logo">
            <div class="sub">
                <p>{{error_msg}}</p>
                <p>
                    <div @click="$router.go(-1)">
                        <a href="#">Go Back to Home</a>
                    </div>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                code: '',
                error_msg: ''
            }
        },
        created() {
            let _code = this.$route.query.errorCode;
            if(_code) {
                this.code = parseInt(_code);
            }
        },
        mounted() {
            switch (this.code) {
                case 401:
                    this.error_msg = '请先登录';
                    break;
                case 500:
                    this.error_msg = '服务器错误';
                    break;
                case 504:
                    this.error_msg = '网络超时';
                    break;
            }
        }
    }
</script>

<style lang="less" rel="stylesheet/less" scoped>
    .wrap {
        background:skyblue;
        position: absolute;
        width: 100%;
        height: 100%;
        padding-top: 60px;
    }

    .logo {
        text-align: center;
        margin-bottom: 1px;
    }

    img.deadlink-404 {
        width: 200px;
    }

    .sub {
        font-size: .2rem;
        color: #FFF;
        a {
            color: yellow;
            background: #06afd8;
            text-decoration: none;
            padding: 5px;
            font-size: .12rem;
            font-family: arial, serif;
            font-weight: bold;
        }
    }

    .footer {
        color: white;
        position: absolute;
        right: 10px;
        bottom: 1px;
    }

    .footer a {
        color: yellow;
    }
</style>