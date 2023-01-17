<template>
  <div class="paper">
    <img ref="img">
    <div class="text">
      <a style="font-size:16px" @click="toPage">{{info.top}}</a>
      <p>{{info.middle}}</p>
      <i>{{info.bottom}}</i>
    </div>
  </div>
</template>

<script>
export default {
  name:"Paper",
  props:["img","info"],
  mounted(){
    this.$refs.img.src=require("/src/assets/"+(this.img+1)+".png")
  },
  methods:{
    toPage(){
      location.href=this.info.src
    }
  }
}
</script>

<style scoped>
.paper{
  width: 405px;
  height: 170px;
  padding: 19px;
  border: 1px solid #ddd;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.paper>img{
  width: 130px;
  height: 130px;
}
.text{
  width: 255px;
}
i{
  font-size: 12px;
  color: #333333;
}
p{
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>