<template>
  <div class="container">
    <MyHeader/>
    <MyThrough/>
    <MyPapers/>
    <MyTools/>
    <MyData/>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue"
import MyThrough from "./components/MyThrough.vue"
import MyPapers from "./components/MyPapers.vue"
import MyTools from "./components/MyTools.vue"
import MyData from "./components/MyData.vue"
export default {
  components:{
    MyHeader,MyThrough,MyPapers,MyTools,MyData
    }
}
</script>

<style>
.container{
  width: 920px;
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
</style>