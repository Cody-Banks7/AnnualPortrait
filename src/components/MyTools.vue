<template>
  <div class="mytool">
    <h2>Teaching Tools</h2>
    <div class="tool">
      <Tool v-for="info,index in tools" :info="info" :key="index"/>
      <div style="width:245px;padding:20px"></div>
    </div>
  </div>
</template>

<script>
import Tool from "./Tool.vue"
export default {
  name:"MyTools",
  components:{
    Tool
  },
  data(){
    return {
      tools:[
        {
          src:"http://csbridge.org/",
          top:"CS Bridge",
          bottom:"INTRO CS IN ISTANBUL"
      },{
          top:"Purple Book",
          bottom:"ONLINE EXAM GRADING (SOON)"
      },{
          src:"",
          top:"Blue Book",
          bottom:"SECURE ELECTRONIC EXAMS (SOON)"
      },{
          top:"Pensieve",
          bottom:"STUDENTS SEE THEIR OWN PROGRESS"
      },{
          top:"High Resolution Feedback",
          bottom:"UNDERSTAND YOUR CLASS"
      },{
          top:"CS Website Maker",
          bottom:"STYLE AND DESIGN FOR CS PAGES"
      },{
          src:"http://stanford.edu/~cpiech/karel/learn.html",
          top:"Karel Online",
          bottom:"PROTO CODING ONLINE"
      },{
          src:"https://blog.udacity.com/2013/03/course-pods-new-way-to-connect-with.html",
          top:"Course Pods",
          bottom:"PROTO INPERSON MOOCS"
      },
      ]
    }
  }
}
</script>

<style scoped>
.mytool{
  width: 100%;
}
h2{
  font-size: 30px;
  margin-top: 20px;
  margin-bottom: 10px;
}
.tool{
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  padding-bottom: 30px;
  border-bottom:1px solid #ddd;
}
</style>