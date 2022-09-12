<template>
  <div class="home">

    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <el-input v-model="value" placeholder="请输入"></el-input>
     -->
    <CommonForm></CommonForm>
    <h1 @click="changeName">{{obj.info.name}}
    
    
    <br/>
    
    {{obj.arr}}
    </h1>
    <el-button @click="goDataWacth">
      数据可视化
    </el-button>
    <el-button @click="goTurntable">
      抽奖
    </el-button>
    
    <el-button @click="goTestTurn">
      抽奖2
    </el-button>
    
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import CommonForm from '@/components/fromCom.vue'



export default {
  name: 'HomeView',
  components: {
    // HelloWorld
    CommonForm
  },
  data() {
    return {
      isSearching: false, // // 是否查询中
      formConfig: [ // 表单配置
        { model: 'id', label: 'id', type: 'input' },
        {
          model: 'status', //  搜索项参数名，和 form 中的参数名一致
          label: '状态',  // 搜索项标签，即左侧文案
          type: 'select', // 搜索项类型
          multiple: true, // 是否支持多选
          max_tag_count: 1, // 多选时最多显示多少个 tag
          list: [], // select选择项列表
        },
        {
          model: 'confirm', // 确认按钮
          text: '查询', // 按钮文案
          type: 'confirm',
          label: '',
          labelWidth: 0,
          isSearching: this.isSearching
        },
      ],
      form: { // 检索参数
        id: '',
        page_number: 1,
        page_size: 10,
        time: [],
      },
      obj:{
        info:{
          name:"hwj"
        },
        arr:[0,2,3,4,5,7,8,0]
      },
      
    }
  },
  methods:{
    changeName(){
      // 
      this.$set(this.obj.info,"name","希斯特利亚")
      this.obj.arr.length=2
      // this.obj.name="希斯特利亚"
    },
    getList(){
      console.log("getList")
    },
    goDataWacth(){
      this.$router.push('/ECharts')
    },
    goTurntable(){
      this.$router.push('/Turntable')

    },
    goTestTurn(){
      this.$router.push('/testTurn')

    }
  }
}
</script>
