<template>
    <div class="menu">
        <div class="menu-list" :class="{'show':show}">
            <div class="menu-header">
                <img class="menu-avatar" src="../../assets/avatar.jpg" />
                <div class="menu-title">
                    gsy
                </div>
            </div>
            <div class="menu-ul">
                <div v-for="menu in menus"  @click="updateHeader(menu)">
                    <router-link :to="menu" class="icon-quanbu iconfont item">
                        <div class="menu-icon">
                            <i class="iconfont" :class="'icon-'+menu"></i>
                        </div>
                        <span class="menu-text">{{MENU_CONVERT[menu]}}</span>
                        <div class="menu-new" v-show="menu === 'day' && news>0">
                            <span>5</span>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
const MENU_CONVERT = { 'welfare': '福利', 'day': '每日推荐', 'ios': 'IOS', android: 'Android', web: '前端' }
export default{
    name: 'v-menu',
    props: {
        show: {
            type: Boolean
        }
    },
    mounted () {

    },
    data () {
        return {
            MENU_CONVERT: MENU_CONVERT
        }
    },
    methods: {
        updateHeader (menu) {
            this.$store.commit('UPDATE_HEADER', this.MENU_CONVERT[menu])
            this.$store.dispatch('updateMenuShow')
            if (menu === 'day') {
                this.$store.commit('UPDATE_NEWS', 0)
            }
        }
    },
    computed: {
        ...mapState([
            'menus', 'news', 'headerTitle'
        ])
    }
}
</script>
<style lang="scss" scoped>
.menu{
    .menu-list{
        position: fixed;
        top:0;
        bottom:0;
        flex:0 0 250px;
        left:-250px;
        width:250px;
        /*left:-250px;*/
        background-color:#22262a;
        color:#fff;
        transition:all 0.3s ease;
        z-index:99;
        .menu-header{
            width: 100%;
            height: 180px;
            .menu-avatar{
                width:40%;
                border-radius:50%;
                height:auto;
                margin:20px 70px;
            }
            .menu-title{
                font-size: 14px;
                color: #ffffff;
                line-height: 28px;
                font-weight: 500;
                text-align: center;
            }
        }
        &.show{
            transform: translate(250px,0);
        }
        .menu-ul{
            margin: 0;
            padding: 0;
            overflow: hidden;
            .item{
                display: block;
                font-size:14px;
                padding:10px 13px;
                text-align:left;
                text-indent: 1px;
                line-height: 15px;
                color: #a6adb3;
                font-weight: 700;
                /*border-1px(#40474a);*/
                &last-child{
                margin-bottom: 50px;
                }
                &before{
                color: #2c3e50
                }
                .line{
                    border-top: 1px solid #d4d4d4;
                }
                .menu-icon{
                    display: inline-block;
                    width: 30px;
                    height :30px;
                    background-color: #383c40;
                    border-radius: 50%;
                    vertical-align: top;
                    text-align: center;
                }
                .iconfont{
                    color :#999999;
                    line-height: 30px;
                    font-weight :700;
                }
                &.active{
                    color: #01aef3;
                }
                .menu-icon{
                    background-color: #01aef3;
                    .iconfont{
                        color: #ffffff;
                    }
                }
                .menu-text{
                    display: inline-block;
                    font-size: 15px;
                    line-height: 32px;
                    vertical-align: top;
                    margin-left: 10px;
                    font-weight: 700;
                }
                .menu-new{
                    display: inline-block;
                    width: 30px;
                    height: 30px;
                    background-color: #d81229;
                    border-radius: 50%;
                    vertical-align: top;
                    text-align: center;
                    float: right;
                    span{
                        color: #ffffff;
                        font-size: 15px;
                        line-height: 30px;
                        font-weight: 500;
                    }
                }
                
            }
        }

    }
}
</style>
