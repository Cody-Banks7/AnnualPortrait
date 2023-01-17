<template>
  <div id="pdfDom">
    <div class="container">
<!--    <MyHeader/>-->
<!--    <MyThrough/>-->
<!--    <MyStudents/>-->
<!--    <MyPapers/>-->
<!--    <MyTools/>-->
<!--    <MyData/>-->





        <MyForm/>
      <el-button @click="getPdf()">
       PDF
     </el-button>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue"
import MyThrough from "./components/MyThrough.vue"
import MyPapers from "./components/MyPapers.vue"
import MyTools from "./components/MyTools.vue"
import MyData from "./components/MyData.vue"
import MyStudents from "./components/MyStudents";
import MyForm from "./components/MyForm";


export default {
  data(){
    return{
      htmlTitle:''
    }
  },
  components:{
    MyForm,
    MyHeader,MyThrough,MyPapers,MyTools,MyData,MyStudents
    }
}
</script>

<style>
.container{
  width: 1200px;
  padding-top: 20px;
  margin: 0 auto;
}
a {
  text-decoration: none;
  color: #337ad7;
}
a:hover {
  text-decoration: underline;
  color: #23527c;
}
/*Original*/
/*.container{*/
/*  width: 920px;*/
/*  padding-top: 20px;*/
/*  margin: 0 auto;*/
/*}*/
/*a {*/
/*  text-decoration: none;*/
/*  color: #337ad7;*/
/*}*/
/*a:hover {*/
/*  text-decoration: underline;*/
/*  color: #23527c;*/
/*}*/
</style>