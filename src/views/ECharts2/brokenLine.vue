<template>
    <div>
        <div ref="Chart" style="width: 100%;height:33vh;" class="brokenLine"></div>
    </div>
</template>

<script>
export default {
    name: 'brokenLine',
    data() {
        return {
            colors: ['#5470C6', '#EE6666'],
            option: {
                color: ['#5470C6', '#EE6666'],
                tooltip: {
                    trigger: 'none',
                    axisPointer: {
                        type: 'cross'
                    }
                },
                legend: {},
                grid: {
                    top: 70,
                    bottom: 50
                },
                xAxis: [
                    {
                        type: 'category',
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLine: {
                            onZero: false,
                            lineStyle: {
                                color: '#5470C6'
                            }
                        },
                        axisPointer: {
                            label: {
                                formatter: function (params) {
                                    return (
                                        'Precipitation  ' +
                                        params.value +
                                        (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                                    );
                                }
                            }
                        },
                        // prettier-ignore
                        data: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12']
                    },
                    {
                        type: 'category',
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLine: {
                            onZero: false,
                            lineStyle: {
                                color: '#EE6666'
                            }
                        },
                        axisPointer: {
                            label: {
                                formatter: function (params) {
                                    return (
                                        'Precipitation  ' +
                                        params.value +
                                        (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                                    );
                                }
                            }
                        },
                        // prettier-ignore
                        data: ['2015-1', '2015-2', '2015-3', '2015-4', '2015-5', '2015-6', '2015-7', '2015-8', '2015-9', '2015-10', '2015-11', '2015-12']
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        splitLine: {
                            lineStyle: {
                                color: "#012f4a" // 分割线颜色
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: 'Precipitation(2015)',
                        type: 'line',
                        xAxisIndex: 1,
                        smooth: true,
                        emphasis: {
                            focus: 'series'
                        },
                        data: [
                            2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
                        ]
                    },
                    {
                        name: 'Precipitation(2016)',
                        type: 'line',
                        smooth: true,
                        emphasis: {
                            focus: 'series'
                        },
                        data: [
                            3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7
                        ]
                    }
                ]
            },
        }
    },
    mounted() {
        this.initChart(); //渲染完页面后加载后初始化echart,
    },
    created() {
        window.onresize = () => {
            this.echartsInstane.resize()
            console.log('brokenLine')
        }
    },
    methods: {
        initChart() {
            this.echartsInstane = this.$echarts.init(this.$refs.Chart, null);
            this.echartsInstane.setOption(this.option); //挂载到虚拟Dom
        },
    }
}
</script>

<style lang="less" scoped>
</style>