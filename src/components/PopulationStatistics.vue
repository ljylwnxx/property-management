<template>
    <div>
     <h2>人数统计</h2>
     <div class="one" id="chartone"></div>
    </div>
</template>

<script setup>
import {inject,onMounted,reactive} from 'vue'
import link from "../api/Link.js"
import apiUrl from "../api/url.js"
let $echarts = inject("echarts")
//  let data = reactive({})
 let xdata = reactive([])
 let ydata = reactive([])


onMounted(()=>{
   let myChart = $echarts.init(document.getElementById("chartone"))
   link("/getChartDataOne?apipost_id=a96e43").then((ok)=>{
     let {data} = ok
     xdata = data.chartDataOne.map(v=>v.title)
     ydata = data.chartDataOne.map(v=>v.num)
        myChart.setOption({
        xAxis:{
            type:"value",
            axisLine:{
                lineStyle:{
                    color:"#fff"
                }
            }
        },
        yAxis:{
            type:"category",
            data:xdata,
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
            type: "bar",
            data:ydata,
            itemStyle:{
                normal:{
                    barBorderRadius:[0,20,20,0],
                    color:new $echarts.graphic.LinearGradient(0,0,1,0,[
                    {
                        offset:0,
                        color:"#005eaa"
                    },
                    {
                        offset:0.5,
                        color:"#339ca8"
                    },
                    {
                        offset:1,
                        color:"#cda819"
                    }
                    ])
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
    .one{
        height: 4.5rem;

    }
</style>