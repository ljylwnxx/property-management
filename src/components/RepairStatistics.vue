<template>
    <div>
     <h2>报修统计</h2>
     <div class="three" id="chartthree"></div>
    </div>
</template>

<script setup>
import {inject,onMounted,reactive} from 'vue'
import link from "../api/Link.js"
import apiUrl from "../api/url.js"
let $echarts = inject("echarts")



onMounted(()=>{
   let myChart = $echarts.init(document.getElementById("chartthree"))
   link("/getChartDataThree?apipost_id=a8f800").then((ok)=>{
     
      myChart.setOption({
            series:[
                {
                type:"pie",
                data:ok.data.chartDataThree,
                radius:[10,100],
                center:["50%","45%"],
                roseType:"area",
                }
            ],
            legend:{
                   top:"bottom" 
                },
            tooltip:{}
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
    .three{
        height: 4.5rem;

    }
</style>