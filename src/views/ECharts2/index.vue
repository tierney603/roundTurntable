<template>
    <div class="body">
        <!-- <div class="header">
            <el-col :span="24">
                <div class="header bg-purple-dark">
                    <h1>可视化ECharts</h1>
                </div>
            </el-col>
        </div> -->
        <div class="content">
            <el-col :xs="24" :sm="7" :md="7" :lg="7" :xl="7">
                <div class="grid-content bg-purple">
                    <div class="smallBox">
                        <barChart></barChart>
                    </div>
                    <div class="smallBox">
                        <brokenLine></brokenLine>

                    </div>
                    <div class="smallBox">
                        <pieChart></pieChart>
                    </div>
                </div>
            </el-col>
            <el-col :xs="24" :sm="10" :md="10" :lg="10" :xl="10">
                <div class="grid-content middle bg-purple-light">
                    <div class="top">
                        <h1>top</h1>
                    </div>
                    <div class="map">
                        <mapChart></mapChart>
                    </div>
                </div>
            </el-col>
            <el-col :xs="24" :sm="7" :md="7" :lg="7" :xl="7">
                <div class="grid-content bg-purple">
                    <div class="smallBox">
                        <crosswiseBarChart></crosswiseBarChart>
                    </div>
                    <div class="smallBox">
                        <curveChart></curveChart>
                    </div>
                    <div class="smallBox">
                        <nightingaleChart></nightingaleChart>
                    </div>
                </div>
            </el-col>
        </div>
    </div>
</template>

<script>
import barChart from "./barChart.vue"
import brokenLine from "./brokenLine.vue"
import pieChart from "./pieChart.vue"
import mapChart from "./mapChart.vue"
import crosswiseBarChart from "./crosswiseBarChart.vue"
import curveChart from "./curveChart.vue"
import nightingaleChart from "./nightingaleChart.vue"





export default {
    components: { barChart, brokenLine, pieChart, mapChart, crosswiseBarChart, curveChart, nightingaleChart },
    name: 'ECharts',
    data() {
        return {
        }
    },
    mounted() {
    },
    methods: {
    }

}
</script>

<style  scoped lang="less">
* {
    margin: 0;
    padding: 0;
}

.body {
    width: 100vw;
    height: 100vh;
}
.header{
    height: 50px;
}
.content {
    width: 100vw;
    // height: calc(100vh - 50px);
    // height: calc(100vh -3.125rem);
    background-color: rgb(255, 0, 0);
    overflow-x: hidden;
    // padding: 10px;
}

.el-col {
    border-radius: .25rem;
}

.bg-purple-dark {
    background: #99a9bf;
}

.bg-purple {
    background: #d3dce6;
}

.bg-purple-light {
    background: #e5e9f2;
}

.header {
    line-height: 3.125rem;
    text-align: center;
}

// 左右两边
.grid-content {
    border-radius: .25rem;
    min-height: 2.25rem;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .smallBox {
        flex: 1;
        background-color: rgb(178, 178, 178);
        // margin: .0625rem;
        padding: 10px;
    }
}

//中间
.middle {
    background-color: rgb(0, 128, 255);
    display: flex;

    .top {
        flex: 4;
        max-height: 31.25rem;
        line-height: 6.25rem;
        background-color: #fff;
    }

    .map {
        flex: 8;
        background-color: red;
        // display: flex;
        // justify-content: center;
        // align-items: center;
    }
}
</style>