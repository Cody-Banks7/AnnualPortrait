<template>
  <div class="mystudent" >
     <h2>Student Supervision</h2>
     <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="姓名"
        style="width: 100%">
      </el-table-column>
      <el-table-column
        prop="education"
        label="学历"
        style="width: 100%">
      </el-table-column>
    </el-table>
    <div style="width:245px;padding:20px"></div>
  </div>
</template>

<script>
export default {
  name: "MyStudents",
  data() {
        return {
          tableData: [{
            name: 'Jian ZENG',
            education: 'PhD candidate from 2018, SUSTech'
          }, {
            name: 'Shiqi ZHANG',
            education: 'PhD candidate from 2019, SUSTech-NUS joint PhD programme'
          }, {
            name: 'Wentao NING',
            education: 'PhD candidate from 2020, SUSTech-HKU joint PhD programme'
          }, {
            name: 'Haotian LIU',
            education: 'PhD candidate from 2020, SUSTech'
          }, {
            name: 'Bian Zheng',
            education: 'PhD candidate from 2020, SUSTech-PolyU joint PhD programme'
          }, {
            name: 'Runzhong Li',
            education: 'PhD candidate from 2021, SUSTech-PolyU joint PhD programme'
          },{
            name: 'Long Xiang',
            education: 'PhD candidate from 2021, SUSTech'
          }]
        }
      }
}
</script>

<style scoped>
.mystudent{
  margin-top: 20px;
}
h2{
  font-size:30px;
  margin-top: 30px;
  margin-bottom: 10px;
}
</style>