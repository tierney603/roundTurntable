<template>
    <div>
        <div ref="Chart" style="width: 100%;height:33vh;" class="barChart"></div>
    </div>
</template>

<script>
export default {
    name: 'barChart',
    data() {
        return {
            option: {
                title: {
                    text: "ikun粉丝数量",
                    x: 'center',
                    padding: [
                        20,  // 上
                        // 10, // 右
                        // 5,  // 下
                        10, // 左
                    ]
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#fff",
                                width: 5,
                                type: "solid",

                            },

                        },
                        position: "bottom",//x 轴的位置。
                        nameRotate: 100

                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLine: {
                            color: 'red',

                        }
                    },

                ],
                series: [
                    {
                        name: 'Direct',
                        type: 'bar',
                        barWidth: '50%',
                        data: [10, 52, 200, 334, 390, 330, 220],
                        itemStyle: {
                            barBorderRadius: 2,
                            borderWidth: 1,
                            borderType: 'solid',
                            // borderColor: '#73c0de',
                            shadowColor: '#5470c6',
                            shadowBlur: 1
                        }
                    }
                ],
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
            this.echartsInstane.setOption(this.option); //挂载到虚拟Dom
        },
    }
}
</script>

<style lang="less" scoped>

</style>