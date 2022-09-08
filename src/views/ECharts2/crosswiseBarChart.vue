<template>
    <div>
        <div ref="Chart" style="width: 100%;height:33vh;" class="crosswiseBarChart"></div>
    </div>
</template>

<script>
export default {
    name: 'crosswiseBarChart',
    data() {
        return {

            option: {
                title: {
                    // text: 'World Population'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {},
                grid: {
                    left: '3%',
                    right: '5%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    show: false,
                    boundaryGap: [0, 0.01]
                },
                yAxis: [
                    {
                        type: 'category',
                        data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World'],
                        // 轴线
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: "#fff",
                                width: 5,
                                type: "solid",
                            },

                        },

                        axisTick: {
                            show: false
                        }
                    },
                    {
                        type: 'category',
                        data: [36, 80, 72, 98, 80, 10],
                       

                        // 轴线
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: "#fff",
                                width: 5,
                                type: "solid",
                            },

                        },
                        axisTick: {
                            show: false
                        }
                    },
                ],
                series: [
                    {
                        name: '2011',
                        type: 'bar',
                         data: [36, 80, 72, 98, 80, 10],
                        itemStyle: {
                            barBorderRadius: 5,
                            borderWidth: 10,
                            borderType: 'solid',
                            // borderColor: '#73c0de',
                            shadowColor: '#5470c6',
                            shadowBlur: 1,
                            // color: 'red'
                            color: function (params) {
                                console.log(params)
                                let barColor = ['#037ef3', '#ff4c4c', "#00d1b2", "#ed008c", "#ffed00", "#9b4dca"]

                                return barColor[params.dataIndex]
                            },
                            yAxisIndex:0,//设置层级
                        },
                        // 显示柱子内的文字
                        label: {
                            normal: {
                                show: true,
                                position: "inside",
                                formatter: "{c}%"
                            }
                        },
                        // barWidth:0,//显示柱子的宽度
                        barCategoryGap: 10,//柱子间距


                    },
                    {
                        name: '2012',
                        type: 'bar',
                        data: [100,100,100,100,100,100],
                        itemStyle: {
                            barBorderRadius: 5,
                            borderWidth: 1,
                            borderType: 'solid',
                            borderColor: '#73c0de',
                            shadowColor: '#5470c6',
                            shadowBlur: 1,
                            color: 'rgba(180,180,180,0.2)'
                        },
                        yAxisIndex:1
                    },

                ]
            }
        }
    },
    mounted() {
        this.initChart(); //渲染完页面后加载后初始化echart,
    },
    created() {
        window.onresize = () => {
            this.echartsInstane.resize()
        }
    },
    methods: {
        initChart() {
            this.echartsInstane = this.$echarts.init(this.$refs.Chart, null);
            // this.initBarColor()
            this.echartsInstane.setOption(this.option); //挂载到虚拟Dom
        },
        initBarColor() {
            console.log('initBarColor')
            for (let i in this.barColor) {
                this.option.series[0].itemStyle.color.push(this.barColor[i])

            }
        },
    }
}
</script>

<style lang="less" scoped>
</style>