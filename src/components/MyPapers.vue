<template>
  <div class="mypaper">
    <h2>Recent Papers</h2>
      <div class="papers">
        <Paper v-for="item,index in text" :key="index" :img="index" :info="item" />
      </div>
  </div>
</template>

<script>
import Paper from "./Paper.vue"
export default {
  name:"MyPaper",
  data(){
    return {
      text:[
        {
          top:"Effective and Efficient PageRank-based Positioning for Graph Visualization",
          middle:"Shiqi Zhang*, Renchi Yang, Xiaokui Xiao, Xiao Yan, Bo Tang",
          bottom:"Proceedings of the ACM Conference on Management of Data (SIGMOD), Seattle, WA, USA, June 2023.",
          src:"https://stanford.edu/~cpiech/bio/papers/playToGrade.pdf"
        },{
          top:"Speeding Up End-to-end Query Execution via Learning-based Progressive Cardinality Estimation",
          middle:"Fang Wang*, Xiao Yan, Man Lung Yiu, Shuai Li, Zunyao Mao, Bo Tang",
          bottom:"Proceedings of the ACM Conference on Management of Data (SIGMOD), Seattle, WA, USA, June 2023.",
          src:"https://stanford.edu/~cpiech/bio/papers/radioArchives.pdf"
        },{
          top:"EAR-Oracle: On Efficient Indexing for Distance Queries between Arbitrary Points on Terrain Surface",
          middle:"Bo Huang*,  Victor Junqiu Wei, Raymond Chi-Wing Wong, Bo Tang.",
          bottom:"Proceedings of the ACM Conference on Management of Data (SIGMOD), Seattle, WA, USA, June 2023.",
          src:"https://stanford.edu/~cpiech/bio/papers/cornealInfections.pdf"
        },{
          top:"GHive: Accelerating Analytical Query Processing in Apache Hive via CPU-GPU Heterogeneous Computing",
          middle:"Haotian Liu*, Bo Tang, Jiashu Zhang, Yangshen Deng, Xiao Yan, Xinying Zheng, Qiaomu Shen, Dan Zeng......",
          bottom:"Proceedings of the ACM Symposium on Cloud Computing (SoCC), San Francisco, California, November 2022.",
          src:"https://stanford.edu/~cpiech/bio/papers/pearProgramming.pdf"
        },{
          top:"Efficient and Error-bounded Spatiotemporal Quantile Monitoring in Edge Computing Environments",
          middle:"Huan Li, Lanjing Yi*, Bo Tang, Hua Lu, Christian Jensen.",
          bottom:"48th International Conference on Very Large Data Bases (PVLDB), Sydney, Australia, September 2022. ",
          src:"https://stanford.edu/~cpiech/bio/papers/codeInPlace.pdf"
        },{
          top:"𝜏-LevelIndex: Towards Efficient Query Processing in Continuous Preference Space",
          middle:"Jiahao Zhang*, Bo Tang, Man Lung Yiu, Xiao Yan, Keming Li*.",
          bottom:"Proceedings of the ACM Conference on Management of Data (SIGMOD), Philadelphia, PA, USA, June 2022.",
          src:"https://dl.acm.org/doi/pdf/10.1145/3514221.3526182"
        },{
          top:"Marrying Top-k with Skyline Queries: Relaxing the Preference Input while Producing Output of Controllable Size",
          middle:" Kyriakos Mouratidis, Keming Li*, Bo Tang.",
          bottom:"Proceedings of the ACM Conference on Management of Data (SIGMOD), Xi'an, Shannxi, China, June 2021.",
          src:"https://dl.acm.org/doi/pdf/10.1145/3448016.3457299"
        },{
          top:"Creating Top Ranking Options in the Continuous Option and Preference Space",
          middle:"Bo Tang, Kyriakos Mouratidis, Man Lung Yiu, Zhenyu Chen*.",
          bottom:"45th International Conference on Very Large Data Bases (PVLDB), Los Angeles, California, USA, August 2019. ",
          src:"https://acm.sustech.edu.cn/btang/pub/PVLDB19_TopRR.pdf"
        }
      ]
    }
  },
  components:{
    Paper
  }
}
</script>

<style scoped>
.mypaper{
  margin-top: 20px;
}
h2{
  font-size:30px;
  margin-top: 30px;
  margin-bottom: 10px;
}
.papers{
  width: 920px;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  padding-bottom: 30px;
  border-bottom:1px solid #ddd;
}
</style>