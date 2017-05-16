<template>
    <transition name="fade">
        <div class="details" v-show="showFlag">
            <div>
                <header class="header">
                    <header class="bar bar-nav">
                        <div class="pull-left" @click="hide()">
                            <span class="iconfont icon-left"></span>
                        </div>
                        <div class="title">{{detailsData.publishedAt || time | formatDate}}</div>
                    </header>
                </header>
                <v-day :data="detailsData" ref="day"></v-day>
            </div>
        </div>
    </transition>
</template>
<script>
import { formatDate } from '../../common/js/date.js'
import BScroll from 'better-scroll'
import vDay from '../day/day.vue'
export default{
    name: 'v-details',
    props: {
        time: {
            type: String
        },
        detailsData: {
            type: Object
        }
    },
    components: {
        vDay
    },
    data () {
        return {
            showFlag: false
        }
    },
    methods: {
        show () {
            this.showFlag = true
                this.$nextTick(() => {
                    if (!this.scroll) {
                        this.scroll = new BScroll(this.$el, {
                            click: true
                        })
                    } else {
                        this.scroll.refresh()
                    }
                    this.$refs.day.clearStyle()
                })
        },
        hide () {
            this.showFlag = false
        }
    },
    filters: {
        formatDate (time) {
            let date = new Date(time)
            return formatDate(date, 'yyyy-MM-dd')
        }
    }
}
</script>
<style lang="scss">
.details{
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    z-index: 20;
    background: #fff;
}
</style>
