<template>
  <div>
    <a v-if="info.src" @click="toPage">{{info.top}}</a>
    <h4 v-else>{{info.top}}</h4>
    <p>{{info.bottom}}</p>
  </div>
</template>

<script>
export default {
  name:"Tool",
  methods:{
    toPage(){
      location.href=this.info.src
    }
  },
  props:["info"]
}
</script>

<style scoped>
div{
  width: 245px;
  height: 65px;
  padding: 19px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 20px;
}
a{
  font-size: 18px;

}
h4{
  font-size: 18px;
  margin: 10px 0;
  font-weight: 1;
}
p{
  font-size: 12px;
  color: #959595;
}
</style>