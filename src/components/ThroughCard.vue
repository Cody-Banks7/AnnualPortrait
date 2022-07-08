<template>
  <div class="card">
    <div id="top">
      <h4>{{top}}</h4>
    </div>
    <div id="middle">
      <p @click="toPage"><a>{{middle}}</a></p>
    </div>
    <div id="bottom">
      <p>{{bottom}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name:"ThroughCard",
  props:["src","top","middle","bottom"],
  methods:{
    toPage(){
      location.href=this.src
    }
  }
}
</script>

<style scoped>
.card{
  width: 167.5px;
  padding: 19px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 15px;
}
#top>h4{
  font-size: 18px;
  margin: 10px 0;
}
#bottom>p{
  color:#959595;
  font-size: 12px;
}
</style>