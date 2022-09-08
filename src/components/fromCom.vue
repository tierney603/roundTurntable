<template>
    <div class="hello">
        <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
            <el-form-item prop="email" label="邮箱">
                <el-input v-model="dynamicValidateForm.email"></el-input>
            </el-form-item>
            <el-form-item prop="qq" label="QQ">
                <el-input v-model="dynamicValidateForm.qq"></el-input>
            </el-form-item>
            <el-form-item prop="tel" label="电话">
                <el-input v-model="dynamicValidateForm.tel"></el-input>
            </el-form-item>

            <el-row :gutter="20" v-for="(domain, index) in dynamicValidateForm.domains" :key="domain.key">
                <div>
                    <el-col :span="6">
                        <div>
                            <el-form-item label='姓名' :prop="'domains.' + index + '.name'">
                                <el-input v-model="domain.name"></el-input>
                            </el-form-item>

                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div>
                            <el-form-item label='年龄' :key="domain.key" :prop="'domains.' + index + '.age'">
                                <el-input v-model="domain.age"></el-input>
                            </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div>
                            <el-form-item label="性别" :key="domain.key" :prop="'domains.' + index + '.six'">
                                <el-input v-model="domain.six"></el-input>
                            </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div>
                            <el-button @click.prevent="removeDomain(domain)">删除</el-button>
                        </div>
                    </el-col>
                </div>
            </el-row>
            <el-form-item>
                <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
                <el-button @click="addDomain">新增域名</el-button>
                <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
  name: 'fromCom',
  components: {
  },
 data() {
    return {
      dynamicValidateForm: {
        domains: [
          {
            name: "",
            age: "",
            six: ""
          }
        ],
        email: "",
        qq: "",
        tel: ""
      }
    };
  },
   methods: {
    submitForm(formName) {
        formName
      console.log(JSON.stringify(this.dynamicValidateForm));
      console.log(this.dynamicValidateForm)
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    removeDomain(item) {
      var index = this.dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        name: "",
        age: "",
        six: "",
        key: Date.now()
      });
    }
  }
}
</script>

<style scoped>
</style>