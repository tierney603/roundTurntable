<template>
    <div>
        <div ref="Chart" style="width: 100%;height:33vh;" class="NightingaleChart"></div>
    </div>
</template>

<script>
export default {
    name: 'NightingaleChart',
    data() {
        return {
            option: {
                legend: {
                    top: 'bottom'
                },
                toolbox: {
                    // show: false,
                    // feature: {
                    //     mark: { show: true },
                    //     dataView: { show: true, readOnly: false },
                    //     restore: { show: true },
                    //     saveAsImage: { show: true }
                    // }
                },
                series: [
                    {
                        name: 'Nightingale Chart',
                        type: 'pie',
                        // radius: [50, 250],
                        // center: ['50%', '50%'],
                        // roseType: 'area',
                        itemStyle: {
                            borderRadius: 8
                        },
                        
                        data: [
                            { value: 40, name: 'rose 1' },
                            { value: 38, name: 'rose 2' },
                            { value: 32, name: 'rose 3' },
                            { value: 30, name: 'rose 4' },
                            { value: 28, name: 'rose 5' },
                            { value: 26, name: 'rose 6' },
                            { value: 22, name: 'rose 7' },
                            { value: 18, name: 'rose 8' }
                        ]
                    }
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
            this.echartsInstane.setOption(this.option); //挂载到虚拟Dom
        },
    }
}
</script>

<style lang="less" scoped>
</style>