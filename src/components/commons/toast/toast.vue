<template>
    <transition :name="fadeIn">
        <div class="alertBox" v-show="show">
            <div class="alert-mask" v-show="isShowMask"></div>
            <transition :name="translate">
                <div class="box" :class="position" v-show="show">
                    {{text}}
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        props: {
            show: { // 是否显示此toast
                default: false
            },
            time: { // 显示时间
                default: 2500
            },
            text: { // 提醒文字
                default: 'loading'
            },
            position: { // 提醒容器位置
                default: 'center'
            },
            isShowMask: { // 是否显示遮罩层
                default: false
            },
            transition: { // 是否开启动画
                default: true
            }
        },
        created() {

        },
        computed: {
            translate() { // 根据props，生成相对应的动画
                if (!this.transition) {
                    return ''
                } else {
                    if (this.position === 'top') {
                        return 'translate-top'
                    } else if (this.position === 'middle') {
                        return 'translate-middle'
                    } else if (this.position === 'bottom') {
                        return 'translate-bottom'
                    }
                }
            },
            fadeIn() { // 同上
                if (!this.transition) {
                    return ''
                } else {
                    return 'fadeIn'
                }
            }
        },
        watch: {
            show (val) {
                if(val) {
                    setTimeout(() => {
                        this.show = false;
                        this.value = false;
                    }, this.time)
                }
            }
        }
    }
</script>

<style lang="less" rel="stylesheet/less" scoped>
    .alertBox {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 999;
        font-size: .16rem;
    }

    .top {
        top: 5%;
    }

    .center {
        top: 40%;
    }

    .bottom {
        top: 80%;
    }

    .box{
        position: relative;
        margin: 0 auto;
        width: 1rem;
        background: rgba(0, 0, 0, 0.5);
        text-align: center;
        padding: .08rem;
        font-size: .12rem;
        border-radius: .01rem;
        z-index: 5000;
        color: #fff;
    }
    .box.top{
        /* top: 50px;
         margin-top: 0;*/
    }
    .box.center{
        /*top: 50%;
        margin-top: -100px;*/
    }
    .box.bottom{
        /*top: auto;
        bottom: 50px;
        margin-top: 0;*/
    }
    .alert-mask{
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        background: rgba(0,0,0,.5);
        z-index: 4999;
    }
    .fadeIn-enter-active, .fadeIn-leave-active{
        transition: opacity .3s;
    }
    .fadeIn-enter, .fadeIn-leave-active{
        opacity: 0;
    }
    .translate-top-enter-active, .translate-top-leave-active{
        transition: all 0.3s cubic-bezier(.36,.66,.04,1);
    }
    .translate-top-enter, .translate-top-leave-active{
        transform: translateY(-50%);
        opacity: 0;
    }
    .translate-middle-enter-active, .translate-middle-leave-active{
        transition: all 0.3s cubic-bezier(.36,.66,.04,1);
    }
    .translate-middle-enter, .translate-middle-leave-active{
        transform: translateY(80%);
        opacity: 0;
    }
    .translate-bottom-enter-active, .translate-bottom-leave-active{
        transition: all 0.3s cubic-bezier(.36,.66,.04,1);
    }
    .translate-bottom-enter, .translate-bottom-leave-active{
        transform: translateY(100%);
        opacity: 0;
    }
</style>