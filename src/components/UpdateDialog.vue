<template>
    <el-dialog v-model="$store.state.HomeModule.dialogFormVisible" title="请输入修改信息">
      <el-form :model="form" :label-width="formLabelWidth">
        <el-form-item label="楼盘名称" :label-width="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off" />
        </el-form-item>
        <el-form-item label="房源类型" :label-width="formLabelWidth">
          <el-input v-model="form.type" autocomplete="off" />
        </el-form-item>
        <el-form-item label="门牌号" :label-width="formLabelWidth">
          <el-input v-model="form.num" autocomplete="off" />
        </el-form-item>
        <el-form-item label="房源户型" :label-width="formLabelWidth">
          <el-input v-model="form.hometype" autocomplete="off" />
        </el-form-item>
        <el-form-item label="户主" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="closeDialog(0)">取消</el-button>
          <el-button type="primary" @click="closeDialog(1)">
            保存
          </el-button>
        </span>
      </template>
    </el-dialog>
  </template>
  
  <script lang="ts" setup>
  import { logicalExpression } from '@babel/types';
  import { reactive, ref } from 'vue'
  import {useStore} from "vuex"
  import link from "../api/Link.js"
  import apiUrl from "../api/url.js"

  let store = useStore()
  let closeDialog=(num:number)=>{
    if(num===1){
      console.log(store.state.HomeModule.uplistData)
      console.log(form.name)
      console.log(form.addr)

      let data ={
        title:form.title,
        type:form.type,
        num:form.num,
        hometype:form.hometype,
        name:form.name

      }

      link("/updateDialog?apipost_id=e0e40f"+"/"+store.state.HomeModule.uplistData.id,"PUT",data).then((ok:any)=>{
        console.log(ok, 'op')
      })
    }
    store.commit("DIALOG")
  }

  const dialogFormVisible = ref(false)
  const formLabelWidth = '140px'
  
  const form = reactive({
    title: '',
    type: '',
    num: '',
    hometype: '',
    name: '',
  })

  </script>
  <style scoped>
  .el-button--text {
    margin-right: 15px;
  }
  .el-select {
    width: 300px;
  }
  .dialog-footer button:first-child {
    margin-right: 10px;
  }
  </style>