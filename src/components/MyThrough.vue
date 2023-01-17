<template>
  <div>
    <h2>Teaching at SUSTECH</h2>
    <div class="container">
      <ThroughCard v-for="item,index in text"
                   :top="item.top"
                   :middle="item.middle"
                   :bottom="item.bottom"
                   :src="item.src"
                   :key="index" />
    </div>
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
          top: "CS203",
          middle: "Data Structure and Algorithm Analysis",
          bottom: "LAST: FALL 2022"
        }, {
          src:"http://web.stanford.edu/class/archive/cs/cs109/cs109.1192/",
          top: "CS302",
          middle: "Operating System",
          bottom: "LAST: SPRING 2022"
        }, {
          src: "http://web.stanford.edu/class/cs398/",
          top: "CS398",
          middle: "Data Structure and Algorithm Analysis(H)",
          bottom: "LAST: FALL 2022"
        },{
          src:"http://web.stanford.edu/class/archive/cs/cs106b/cs106b.1172/",
          top: "XCPC",
          middle: "SUSTech programming team",
          bottom: "LAST: FALL 2022"
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