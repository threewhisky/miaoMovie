<template>
    <div class="cinema_body">
        <Loading v-if="isLoading" />
        <Scroller v-else>
            <ul>
                <li v-for="item in cinemaList" :key="item.id">
                    <div>
                        <span>{{item.nm}}</span>
                        <span class="q"><span class="price">{{item.sellPrice}}</span> 元起</span>
                    </div>
                    <div class="address">
                        <span>{{item.addr}}</span>
                        <span>{{item.distance}}</span>
                    </div>
                    <div class="card" v-if="item.tag.vipTag">
                        <div>小吃</div>
                        <div>折扣卡</div>
                    </div>
                </li>
            </ul>
        </Scroller>
    </div>
</template>

<script>
export default {
    name: 'CinemaList',
    data(){
        return{
            cinemaList: [],
            isLoading: true,
            preCityId: -1
        }
    },
    activated() {
        var cityId = this.$store.state.city.id;
        //对比存储的城市id和新的城市id，如果相等则不需要请求数据直接返回
        if( this.preCityId === cityId){
            return;
        }
        //请求数据
        this.axios.get('/api/cinemaList?cityId=' + cityId).then((res) => {
            var msg = res.data.msg;
            if(msg === "ok"){
                var cinemaList = res.data.data.cinemas;
                this.cinemaList = cinemaList;
                this.isLoading = false;
                this.preCityId = cityId;
            }
        })
    }
}
</script>

<style scoped>
    
    #content .cinema_body{ flex:1; overflow:auto;}
    .cinema_body ul{ padding:20px;}
    .cinema_body li{  border-bottom:1px solid #e6e6e6; margin-bottom: 20px;}
    .cinema_body div{ margin-bottom: 10px;}
    .cinema_body .q{ font-size: 11px; color:#f03d37;}
    .cinema_body .price{ font-size: 18px;}
    .cinema_body .address{ font-size: 13px; color:#666;}
    .cinema_body .address span:nth-of-type(2){ float:right; }
    .cinema_body .card{ display: flex;}
    .cinema_body .card div{ padding: 0 3px; height: 15px; line-height: 15px; border-radius: 2px; color: #f90; border: 1px solid #f90; font-size: 13px; margin-right: 5px;}
    .cinema_body .card div.or{ color: #f90; border: 1px solid #f90;}
    .cinema_body .card div.bl{ color: #589daf; border: 1px solid #589daf;}
</style>
