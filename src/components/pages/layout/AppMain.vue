<template>
    <section class="app-main">
        <transition name="fade-transform" mode="out-in">
            <keep-alive :include="cachedViews">
                <router-view :key="key"/>
            </keep-alive>
        </transition>
    </section>
</template>

<script>
    export default {
        name: 'AppMain',
        computed: {
            cachedViews() {
                let views = this.$store.state.tagsView.cachedViews
                return views
            },
            key() {
                return this.$route.fullPath
            }
        }
    }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
    .app-main {
        /*50 = navbar  */
        min-height: calc(100vh - 50px);
        width: 100%;
        position: relative;
        overflow: hidden;
    }

    .fixed-header + .app-main {
        padding-top: 85px;
        height: 100vh;
        overflow: auto;
    }
</style>
