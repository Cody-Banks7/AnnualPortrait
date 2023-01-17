<template>
  <div>
    <h2>Data Visualization</h2>
    <div class="container">
      <div class="left">
        <img :src="this.imgButton[0].img" ref="img">
        <p ref="text">Code.org problem solving policy graph of learned policy for how to solve a single open ended programming assignment from over 1M users. Each node is a unique partial-solution (and node 0 is the correct answer)</p>
      </div>
      <div class="right">
        <img :src="img.img" alt="" v-for="img in imgButton" @click="changeText(img.img,img.text)">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"MyData",
  data(){
    return {
      imgButton:[{
        img:require("../assets/23.png"),
        text:"Code.org problem solving policy graph of learned policy for how to solve a single open ended programming assignment from over 1M users. Each node is a unique partial-solution (and node 0 is the correct answer)"
      },{
        img:require("../assets/33.png"),
        text:"Coursera CS1 Geographic Density: this graph shows all 100K users in the coursera intro CS course linked by physical distance. Students within 1 km are combined into a single node."
      },{
        img:require("../assets/34.png"),
        text:"Code.org Learning Blossoms: This graphic is a screen shot of an animation that shows 509,405 students solving the third challenge in the code.org hour of code. The pink dots are students. See the <a href='http://stanford.edu/~cpiech/demos/research/blossoms.html'>demo website </a>for the animation."
      },{
        img:require("../assets/25.png"),
        text:"Coursera Machine Learning Code Web: Submissions from 40K students to logistic regression. Edge strength is inverse of abstract syntax tree edit distance. Node size is number of students."
      },{
        img:require("../assets/35.png"),
        text:"CS106A clustered transitions: Transitions between 6K submissions from 400 students in Stanford's intro to CS course. Nodes are clusters of API calls for partial solutions. Edges are proportional to humber of student transitions. S is start. G is goal. Nodes like 16 and 0 are sink states."
      },{
        img:require("../assets/26.png"),
        text:"Coursera HCI Peer Grading: A peer grading network of 63K peer grades for 7K students in an online course. A single student is highlighted, red squares graded the student, red circles were graded by the student."
      }
      ]
    }
  },methods:{
    changeText(img,text){
      this.$refs.img.src=img
      this.$refs.text.innerHTML=text
    }
  }
}
</script>

<style scoped>
div{
  width: 100%;
}
h2{
  font-size: 30px;
  margin-top: 20px;
  margin-bottom: 10px;
}
.container{
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;
}
.left{
  width: 525px;
}
.left>img{
  width: 492px;
  height: 400px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.right{
  width: 365px;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  justify-content: space-around;
  height: 450px;
}
.right>img{
  width: 140px;
  height: 140px;
  padding: 4px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 5px;
}
.right>img:hover{
  border: 1px solid #337ad7;
}
p{
  padding-top: 10px;
}
</style>