<template>
  <div>
    <h2>Teaching at Stanford</h2>
    <div class="container">
      <ThroughCard v-for="item,index in text"
                   :top="item.top"
                   :middle="item.middle"
                   :bottom="item.bottom"
                   :src="item.src"
                   :key="index" />
    </div>
    <p>I co-created and co-taught <a href="">Code in Place</a>. I last taught CS221 in <a href="">Summer 2013</a></p>
  </div>
</template>

<script>
import ThroughCard from "./ThroughCard.vue"
export default {
  name: "MyThrough",
  components: {
    ThroughCard
  },
  data () {
    return {
      text: [
        {
          src:"http://web.stanford.edu/class/archive/cs/cs106a/cs106a.1186/",
          top: "CS106A",
          middle: "Programming Methodologies",
          bottom: "LAST: FALL 2020"
        }, {
          src:"http://web.stanford.edu/class/archive/cs/cs109/cs109.1192/",
          top: "CS109",
          middle: "Probability for Computer Scientists",
          bottom: "LAST: WIN 2022"
        }, {
          src:"http://web.stanford.edu/class/cs398/",
          top: "CS398",
          middle: "Computational Education",
          bottom: "LAST: FALL 2019"
        }, {
          src:"http://web.stanford.edu/class/archive/cs/cs106b/cs106b.1172/",
          top: "CS106B",
          middle: "Programming Abstractions",
          bottom: "LAST: FALL 2016"
        }
      ]
    }
  }
}
</script>

<style scoped>
h2 {
  font-size: 30px;
  margin-bottom: 10px;
  margin-top: 40px;
}
.container {
  width: 920px;
  display: flex;
  justify-content: space-between;
}
p{
}
</style>