<template>
    <div>
     <h2>车辆统计</h2>
     <div class="four" id="chartfour"></div>
    </div>
</template>

<script setup>
import {inject,onMounted,reactive} from 'vue'
import link from "../api/Link.js"
import apiUrl from "../api/url.js"
let $echarts = inject("echarts")



onMounted(()=>{
   let myChart = $echarts.init(document.getElementById("chartfour"))
   link("/getChartDataFour?apipost_id=535400").then((ok)=>{
     let {data} = ok
      myChart.setOption({
        xAxis:{
            type:"category",
            data:data.chartDataFour.day,
            axisLine:{
                lineStyle:{
                    color:"#fff"
                }
            }
        },
        yAxis:{
            type:"value",
            axisLine:{
                lineStyle:{
                    color:"#fff"
                }
            }
        },
        grid:{
            top:"3%",
            left:"1%",
            bottom:"3%",
            right:"6%",
            containLabel:true
        },
        series:[
                {
                type:"bar",
                data:data.chartDataFour.num.一般用户,
                stack:"Total"
                },
                {
                type:"bar",
                data:data.chartDataFour.num.月租用户,
                stack:"Total"
                },
                {
                type:"bar",
                data:data.chartDataFour.num.特殊车辆,
                stack:"Total"
                }
            ],
            legend:{
                   top:"bottom" 
                },
            tooltip:{
                trigger:"axis",
                axisPointer:{
                    type:"shadow"
                }
            }
        })
    })
})
</script>

<style lang="scss" scoped>
    h2{
        height: 0.6rem;
        color: #fff;
        line-height: 0.6rem;
        text-align: center;
        font-size: 0.25rem;
    }
    .four{
        height: 4.5rem;

    }
</style>