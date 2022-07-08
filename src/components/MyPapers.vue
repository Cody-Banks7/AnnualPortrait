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
          top:"Play to Grade: Testing Coding Games as Classifying Markov Decision Process",
          middle:"A. Nie, E. Brunskill, C. Piech",
          bottom:"NeurIPS, Advances in Neural Information Processing Systems, Dec 2021",
          src:"https://stanford.edu/~cpiech/bio/papers/playToGrade.pdf"
        },{
          top:"Using radio archives for low-resource speech recognition",
          middle:"M. Doumbouya, L. Einstein, C. Piech",
          bottom:"Proceedings of the AAAI Conference on Artificial Intelligence, Apr 2021",
          src:"https://stanford.edu/~cpiech/bio/papers/radioArchives.pdf"
        },{
          top:"Differentiation of Active Corneal Infections from Healed Scars Using Deep Learning",
          middle:"M. Tiwari, C. Piech, ..., S. Thrun, C. Lin",
          bottom:"Othalmology, the journal of the American Academy of Ophthalmology, August 2021",
          src:"https://stanford.edu/~cpiech/bio/papers/cornealInfections.pdf"
        },{
          top:"PearProgram: A more fruitful approach to pair programming",
          middle:"M. Bigman, E. Roy, J. Garcia, M. Suzara, K. Wang, C. Piech",
          bottom:"SIGCSE, ACM Technical Symposium on Computer Science Education, 2021",
          src:"https://stanford.edu/~cpiech/bio/papers/pearProgramming.pdf"
        },{
          top:"Code in Place: Online Section Leading for Scalable Human-Centered Learning",
          middle:"C. Piech, A. Malik, K. Jue, M. Sahami",
          bottom:"SIGCSE, ACM Technical Symposium on Computer Science Education, 2021",
          src:"https://stanford.edu/~cpiech/bio/papers/codeInPlace.pdf"
        },{
          top:"Co-Teaching Computer Science Across Borders",
          middle:"★ Best Paper Award C. Piech, L. Yan, L. Einstein, A. Saavedra, B. Bozkurt, ..., N. McKeown",
          bottom:"7th conference on Learning@Scale, 2020",
          src:"https://stanford.edu/~cpiech/bio/papers/crossBorderCoteaching.pdf"
        },{
          top:"Variational Item Response Theory: Fast, Accurate, and Expressive",
          middle:"★ Best Paper Award M. Wu, R. Davis, B. Domingue, C. Piech, N. Goodman",
          bottom:"12th Conference on Educational Data Mining. 2020",
          src:"https://stanford.edu/~cpiech/bio/papers/variationalItemResponseTheory.pdf"
        },{
          top:"Stanford Acuity Test: A Precise Vision Exam",
          middle:"C. Piech, A. Malik, L. Mapstone, R. Chang, C. Lin",
          bottom:"Proceedings of the 34th AAAI conference on Artificial Intelligence, New York, USA. 2020",
          src:"https://stanford.edu/~cpiech/bio/papers/StAT.pdf"
        },{
          top:"Human Languages in Source Code: Auto-Translation for Localization",
          middle:"C. Piech, S. Haija",
          bottom:"7th conference on Learning@Scale, 2020",
          src:"https://stanford.edu/~cpiech/bio/papers/codeInternational.pdf"
        },{
          top:"Using Google Search Trends to Estimate Global Patterns in Learning",
          middle:"S. Arslan, M. Tiwari, C. Piech",
          bottom:"7th conference on Learning@Scale, 2020",
          src:"https://stanford.edu/~cpiech/bio/papers/googleTrends.pdf"
        },{
          top:"Measuring Ability-to-Learn Using Parametric Learning-Gain Functions",
          middle:"C. Piech, E. Bumbacher, R. Davis",
          bottom:"12th Conference on Educational Data Mining. 2020",
          src:"https://stanford.edu/~cpiech/bio/papers/abilityToLearnIRT.pdf"
        },{
          top:"Zero Shot Learning for Code Education",
          middle:"★ Best Student Paper Award M. Wu, M. Mosse, N. Goodman, C. Piech",
          bottom:"Proceedings of the 33rd AAAI conference on Artificial Intelligence, Honolulu, USA. 2019",
          src:"https://stanford.edu/~cpiech/bio/papers/zeroShotCode.pdf"
        },{
          top:"A Vision of AI for Joyful Education",
          middle:"C. Piech, L. Einstein",
          bottom:"Scientific American Opinions. 2019",
          src:"https://blogs.scientificamerican.com/observations/a-vision-of-ai-for-joyful-education/"
        },{
          top:"Grades are not Normal",
          middle:"N. Arthurs, B. Stenhaug, S. Karayev, C. Piech",
          bottom:"Proceedings of the 12th International Conference on Educational Data Mining, Montréal, Canada. 2019",
          src:"https://stanford.edu/~cpiech/bio/papers/gradesAreNotNormal.pdf"
        },{
          top:"Pensieve: Feedback on coding process for novices",
          middle:"L. Yan, A. Hu, C. Piech",
          bottom:"Proceedings of the 50th ACM Technical Symposium on Computer Science Education, Minneapolis, USA. 2019",
          src:"https://stanford.edu/~cpiech/bio/papers/pensieve.pdf"
        },{
          top:"The PyramidSnapshot Challenge: Understanding student process from visual output of programs",
          middle:"L. Yan, N. McKeown, C. Piech",
          bottom:"Proceedings of the 50th ACM Technical Symposium on Computer Science Education, Minneapolis, USA. 2019",
          src:"https://stanford.edu/~cpiech/bio/papers/pyramidChallenge.pdf"
        },{
          top:"Fairness through Adversarial Learning: Recidivism Prediction",
          middle:"C. Wadsworth, F. Vera, C. Piech",
          bottom:"5th Conference on Fairness, Accountability and Transparency in ML, Stockholm, Sweden. 2018",
          src:"https://stanford.edu/~cpiech/bio/papers/fairnessAdversary.pdf"
        },{
          top:"TMOSS: Understanding Excessive Collaboration",
          middle:"L. Yan, N. McKeown, M. Sahami, C. Piech",
          bottom:"Proceedings of the 49th ACM Technical Symposium on Computer Science Education, Baltimore, USA. 2018",
          src:"https://stanford.edu/~cpiech/bio/papers/tmoss.pdf"
        },{
          top:"BlueBook: Secure, Electronic Computer Science Exams",
          middle:"C. Piech, C. Gregg",
          bottom:"Proceedings of the 49th ACM Technical Symposium on Computer Science Education, Baltimore, USA. 2018",
          src:"https://stanford.edu/~cpiech/bio/papers/blueBook.pdf"
        },{
          top:"Deep Knowledge Tracing on Programming Excercises",
          middle:"L. Wang, A. Sy, L. Liu, C. Piech",
          bottom:"Proceedings of the 10th International Conference on Educational Data Mining, Wuhan, China. 2017",
          src:"https://stanford.edu/~cpiech/bio/papers/blueBook.pdf"
        },{
          top:"Deep Knowledge Tracing",
          middle:"C. Piech, J. Bassen, J. Huang, S. Ganguli, M. Sahami, L. Guibas, J. Sohl-Dickstein",
          bottom:"NeurIPS, Advances in Neural Information Processing Systems, 2015",
          src:"https://stanford.edu/~cpiech/bio/papers/deepKnowledgeTracing.pdf"
        },{
          top:"Learning Program Embeddings to Propagate Feedback",
          middle:"C. Piech, J. Huang, A. Nguyen, M.",
          bottom:"Phulsuksombati, M. Sahami, L. Guibas",
          src:"Proceedings of the 43rd International Conference on Machine Learning, Lille, France 2015"
        },{
          top:"Inferring Problem Solving Policies",
          middle:"C. Piech, M. Sahami, J. Huang, L. Guibas",
          bottom:"Proceedings of the 2nd ACM Conference on Learning at Scale, Vancouver, Canada, 2015",
          src:"https://stanford.edu/~cpiech/bio/papers/inferringProblemSolvingPolicies.pdf"
        },{
          top:"Scalable Homework Search",
          middle:"A. Nguyen, C. Piech, J. Huang, L. Guibas",
          bottom:"Proceedings of the 23rd international conference on World Wide Web, Seoul, Korea, 2014",
          src:"https://stanford.edu/~cpiech/bio/papers/scalableHomeworkSearch.pdf"
        },{
          top:"Variability of a Million Code Submissions",
          middle:"J. Huang, C. Piech, A. Nguyen, L. Guibas",
          bottom:"MOOC Shop, 11th International Conference on the Learning Sciences, Boulder, USA. 2014",
          src:"https://stanford.edu/~cpiech/bio/papers/homeworkVariance.pdf"
        },{
          top:"Tuning Peer Grading",
          middle:"C. Piech, J. Huang, Z. Chen, C. Do, A. Ng, D. Koller",
          bottom:"Proceedings of the 6th International Conference on Educational Data Mining, Memphis, USA. 2013",
          src:"https://stanford.edu/~cpiech/bio/papers/tuningPeerGrading.pdf"
        },{
          top:"The Future of Data-Enriched Assessment",
          middle:"C. Thille, E. Schneider, R. Kizilcec, C. Piech, S. Halawa, D. Greene",
          bottom:"Research and Practice in Assessment vol 9. 2014",
          src:"https://stanford.edu/~cpiech/bio/papers/futureOfAssessment.pdf"
        },{
          top:"Measuring Stereotype and Identity in Computer Science",
          middle:"R. Semmens, C. Piech, M. Friend",
          bottom:"Proceedings of the Third Conference on GenderIT, Philadelphia USA. 2015",
          src:"https://stanford.edu/~cpiech/bio/papers/whoAreYou.pdf"
        },{
          top:"Deconstructing Disengagment in MOOCs",
          middle:"R. Kizilcec, C. Piech, E. Schneider",
          bottom:"Proceedings of the 3rd International Conference on Learning Analytics and Knowledge, Leuven, Belgium. 2013",
          src:"https://stanford.edu/~cpiech/bio/papers/deconstructingDisengagement.pdf"
        },{
          top:"As CS Enrollements Grow, Are we Attracting Weaker Students?",
          middle:"M. Sahami, C. Piech",
          bottom:"Proceedings of the 47th ACM Technical Symposium on Computer Science Education, Memphis, USA. 2016",
          src:"https://stanford.edu/~cpiech/bio/papers/asCsEnrollmentsGrow.pdf"
        },{
          top:"Modeling How Students Learn To Program",
          middle:"C. Piech, M. Sahami, D. Koller, S. Cooper, P. Blikstein",
          bottom:"Proceedings of the 43rd ACM Technical Symposium on Computer Science Education, Raleigh, USA. 2012",
          src:"https://stanford.edu/~cpiech/bio/papers/modelingHowStudentsLearn.pdf"
        },{
          top:"Informatics Education Using Nothing but a Browser",
          middle:"C. Piech, E. Roberts",
          bottom:"Proceedings of the IFIP Conference on Informatics in a Globalised World of Education, Mombasa, Kenya. 2011",
          src:"https://stanford.edu/~cpiech/bio/papers/nothingButABrowser.pdf"
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