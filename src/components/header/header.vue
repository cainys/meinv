<template>
    <div>
        <div class="page-over" v-show="menuShow" @click="isShow"></div>
        <header class="header" :class="{'show':menuShow}" @click="isShow">
            <header class="bar bar-nav">
                <div class="pull-left">
                    <span class="iconfont icon-fenlei"></span>
                </div>
                <div class="title">{{headerTitle}}</div>
                <div class="pull-right">
                    <span class="iconfont icon-sousuo_sousuo"></span>
                </div>
            </header>
        </header>
        <v-menu :show ="menuShow"></v-menu>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import vMenu from '../menu/menu'
export default{
    name: 'v-header',
    components: {
        vMenu
    },
    computed: {
        ...mapState([
            'headerTitle', 'menuShow'
        ])
    },
    methods: {
        isShow () {
            this.$store.dispatch('updateMenuShow')
        }
    }
}
</script>
<style lang="scss" scoped>
.header{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    color:#fff;
    width: 100%;
    min-height: 50px;
    font-size: 16px;
    z-index: 10;
    line-height: 50px;
    background: #03a9f4;
    text-align: center;
    display: table;
    box-shadow:0 1px 0 rgba(0, 0, 0, .1),0 1px 2px rgba(0, 0, 0, .1);
    transition: all .3s ease;
    &.show{
        transform: translate(250px,0);
    }
    .title{
        min-height: 50px;
        position: absolute;
        margin:0;
        left: 100px;
        right: 100px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: auto;
        text-align: center;
        font-weight: 500;
        z-index: 2;
    }
    .iconfont{
        font-size: 18px;
    }
    .pull-left,.pull-right{
        padding: 0 10px;
        font-weight: 400;
        z-index: 2;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        display: flex;
        display: -webkit-flex;
        float: left !important;
        align-items: center;
    }
    .pull-right{
        float: right !important;
    }
}
</style>
