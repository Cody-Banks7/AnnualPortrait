<template>
  <div id="main">
    <div class="info">
      <img :src="this.form.scholar_photo"
           alt="" style="object-fit: cover">
      <div class="introduce">
        <h1>{{this.form.scholar_name}}</h1>
        <p></p>
        <hr>
        <p></p>
        <p>
          Title: {{this.form.title}}
          <br>
          Department: <a href="https://cs.stanford.edu/">{{this.form.department}}</a>
          <br>
          Office: {{this.form.office}}
          <br>
          Email: {{this.form.email}}
          <br>
          Homepage: <a :href="this.form.personal_homepage">{{this.form.personal_homepage}}</a>
          <br>
          Lab: <a :href="this.form.lab_homepage">{{this.form.lab_name}}</a>
        </p>
      </div>
    </div>
    <div class="text">
      <p>
        <em>{{this.form.biography}}</em>
      </p>
    </div>
    <div class="outer">
      <div class="inner">
        <div>News:</div>
        <a :href="this.form.news[0].link">{{this.form.news[0].title}}</a>
        {{this.form.news[0].text}}
        <br>
        <a :href="this.form.news[1].link">{{this.form.news[1].title}}</a>
        {{this.form.news[1].text}}
        <br>
        <a :href="this.form.news[2].link">{{this.form.news[2].title}}</a>
        {{this.form.news[2].text}}
        <br>
        <a :href="this.form.news[3].link">{{this.form.news[3].title}}</a>
        {{this.form.news[3].text}}
        <br>
        <a :href="this.form.news[4].link">{{this.form.news[4].title}}</a>
        {{this.form.news[4].text}}
        <br>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'MyHeader',
  data() {
    return {
      form: {
        scholar_photo:require("../assets/TangBo.png"),
        scholar_name:'唐博',
        title: '助理教授',
        department:'计算机科学与工程',
        office: '工学院南楼317室',
        email: 'tangb3@sustech.edu.cn',
        personal_homepage: 'https://acm.sustech.edu.cn/btang/',
        lab_name: 'DBGroup',
        lab_homepage: 'https://dbgroup.sustech.edu.cn/',
        biography:'\n' +
            'Bo Tang received the PhD Degree in the Department of Computing at Hong Kong Polytechnic University. He was a member of Database Research Group. He was supervised by Dr. Ken Yiu. He was a visiting researcher at MonetDB group (Amsterdam) and Microsoft Research Asia (Beijing). Before that, he obtained his BEng degree in computer science from Sichuan University.',
        news:[
          {title:'中国计算机学会CCF青年人才发展计划 (2022)',
           text:'',
           link:'https://www.ccf.org.cn/Media_list/2022-11-11/776429.shtml'},
          {title:'Shenzhen Excellent Teaching Award, 深圳市优秀教师 (2022)',
           text:'',
           link:''},
          {title:'Shenzhen Youth May Fourth Medal, 深圳青年五四奖章(集体)',
           text:'',
           link:''},
          {title:'ACM SIGMOD China Rising Star, ACM SIGMOD中国新星奖 (2021)',
           text:'',
           link:''},
          {title:'Overseas High-Caliber Personnel Level-C, 深圳市海外高层次人才“孔雀计划”C类 (2020)',
           text:'',
           link:''}
        ]

      },
    }
    },
  methods:{
    link(url){
      window.location.href=url;
    }
  }
}
</script>

<style scoped>
img {
  width: 206px;
  height: 206px;
  padding: 4px 4px;
  border: 1px #ddd solid;
  border-radius: 4px;
}
img:hover {
  border-color: #337ad7;
}
.introduce {
  width: 712px;
  padding: 0 15px;
}
.text {
  width: 920px;
}
.info {
  display: flex;
}
.inner {
  width: 950px;
}
b {
  color: #337ad7;
}
.inner {
  width: 880px;
  padding: 19px;
  border: 1px solid #ddd;
  border-radius: 5px;
  line-height: 25px;
}
.outer{
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
}
</style>