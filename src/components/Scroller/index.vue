<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from 'better-scroll';

export default {
    name: 'Scroller',
    props:{
        handleToScroll:{
            type: Function,
            default: function(){}
        },
        handleToTouchEnd: {
            type: Function,
            default: function(){}
        }
    },
    mounted() {
        // 使用betterScroll插件
        var scroll = new BScroll(this.$refs.wrapper, {
            //开启tap点击功能
            tap: true,
            //开启滚动事件
            probeType:1
        });
        
        //把scroll设置到组件属性props中去
        this.scroll = scroll;

        // 调用下拉刷新两个事件
        scroll.on('scroll',(pos) => {
            this.handleToScroll(pos);
        })
        scroll.on('touchEnd',(pos) =>{
            this.handleToTouchEnd(pos);
        });
    },
    methods: {
        handleScrollTo(y){
            this.scroll.scrollTo(0,y);
        }
    }
}
</script>

<style scoped>
    .wrapper{ height: 100%; }
</style>
