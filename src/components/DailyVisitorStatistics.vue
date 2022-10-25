<template>
    <div>
     <h2>每日访客统计</h2>
     <div class="two" id="charttwo"></div>
    </div>
</template>

<script setup>
import {inject,onMounted,reactive} from 'vue'
import link from "../api/Link.js"
import apiUrl from "../api/url.js"
let $echarts = inject("echarts")



onMounted(()=>{
   let myChart = $echarts.init(document.getElementById("charttwo"))
   link("/getChartDataTwo?apipost_id=0e2353").then((ok)=>{
     
      myChart.setOption({
        xAxis:{
            type:"category",
            data:ok.data.chartDataTwo.day,
            boundaryGap:false,
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
            left:"1%",
            right:"4%",
            bootom:"3%",
            containLabel:true
        },
        tooltip:{},
        series:[
            {
                type:"line",
                name:"外卖",
                data:ok.data.chartDataTwo.num.外卖,
                stack:"Total",
                smooth:true,
                areaStyle:{
                    opacity:0.8,
                    color:new $echarts.graphic.LinearGradient(0,0,0,1,[
                    {
                        offset:0,
                        color:"rgb(128,255,165)"
                    },
                    {
                        offset:1,
                        color:"rgb(1,191,236)"
                    }
                    ]),
                    lineStyle:{
                        width:0
                    }
                } 
            },
            {
                type:"line",
                name:"快递",
                data:ok.data.chartDataTwo.num.快递,
                stack:"Total",
                smooth:true,
                areaStyle:{
                    opacity:0.8,
                    color:new $echarts.graphic.LinearGradient(0,0,0,1,[
                    {
                        offset:0,
                        color:"rgb(0,221,255)"
                    },
                    {
                        offset:1,
                        color:"rgb(77,119,255)"
                    }
                    ]),
                    lineStyle:{
                        width:0
                    }
                } 
            },
            {
                type:"line",
                name:"一般访客",
                data:ok.data.chartDataTwo.num.一般访客,
                stack:"Total",
                smooth:true,
                areaStyle:{
                    opacity:0.8,
                    color:new $echarts.graphic.LinearGradient(0,0,0,1,[
                    {
                        offset:0,
                        color:"rgb(55,162,255)"
                    },
                    {
                        offset:1,
                        color:"rgb(116,21,219)"
                    }
                    ]),
                    lineStyle:{
                        width:0
                    }
                } 
            },
            {
                type:"line",
                name:"授权访客",
                data:ok.data.chartDataTwo.num.授权访客,
                stack:"Total",
                smooth:true,
                areaStyle:{
                    opacity:0.8,
                    color:new $echarts.graphic.LinearGradient(0,0,0,1,[
                    {
                        offset:0,
                        color:"rgb(255,55,134)"
                    },
                    {
                        offset:1,
                        color:"rgb(135,55,157)"
                    }
                    ]),
                    lineStyle:{
                        width:0
                    }
                } 
            }
        ]
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
    .two{
        height: 4.5rem;

    }
</style>