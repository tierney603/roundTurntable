<template>
    <div>
        <div id="main" ref="seller" style="width: 600px;height:400px;"></div>
    </div>
</template>

<script>
export default {
    name: 'ECharts',
    data() {
        return {
            allData: []
        }
    },
    mounted() {
        this.initChart(); //渲染完页面后加载后初始化echart,
    },
    methods: {
        initChart() {
            this.echartsInstane = this.$echarts.init(this.$refs.seller, "dark");
            this.getData()
        },
        getData() {
            this.allData = [
                {
                    name: 'Matcha Latte',
                    year2015: 79.3,
                    year2016: 90,
                    year2017: 88,


                },
                {
                    name: 'Milk Tea',
                    year2015: 89,
                    year2016: 67,
                    year2017: 92.1,

                }, {
                    name: 'Cheese Cocoa',
                    year2015: 91.8,
                    year2016: 89,
                    year2017: 87.7,

                }, {
                    name: 'Walnut Brownie',
                    year2015: 89.3,
                    year2016: 72,
                    year2017: 61.5,

                }
            ]
            this.undateChart();
            // return new Promise((resolve) => {
            //     ApiCommon.getClass().then((res) => {
            //         if (res.errCode === 0) {
            //             this.allData = res.data;
            //             console.log(res.data);
            //             this.undateChart(); //拿到数据后渲染图标
            //             resolve(true);
            //         } else {
            //             resolve(false);
            //         }
            //     });
            // });
        },
        undateChart() {
            let option = {

                xAxis: {

                    type: 'category',
                    data: this.allData.map((v) => v.name)
                },
                yAxis: {

                },
                series: [
                    {
                        type: 'bar',
                        name: '2015年',
                        data: this.allData.map(v => v.year2015),
                        label: {
                            show: true,
                            // 高亮时标签的文字。
                            formatter: 'This is label.'
                        }
                    },
                    {
                        type: 'bar',
                        name: '2016年',
                        data: this.allData.map(v => v.year2016)
                    },
                    {
                        type: 'bar',
                        name: '2017年',
                        data: this.allData.map(v => v.year2017)
                    },

                ]
            };
            this.echartsInstane.setOption(option); //挂载到虚拟Dom
        },
    }

}
</script>

<style  scoped>
* {
    margin: 0;
    padding: 0;
}

#main {
    background-color: #111;
}
</style>