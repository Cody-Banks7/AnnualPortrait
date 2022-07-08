<template>
  <div id="main">
    <div class="info">
      <img src="../assets/chrisP.jpg"
           alt="">
      <div class="introduce">
        <h1>Chris Piech</h1>
        <p></p>
        <hr>
        <p></p>
        <p>
          Assistant Professor of
          <a href="https://cs.stanford.edu/">Computer Science</a>
          Education, Stanford University.
          <br>
          PhD advised by
          <a href="https://geometry.stanford.edu/member/guibas/">Leo Guibas</a>
          and
          <a href="http://robotics.stanford.edu/users/sahami/bio.html">Mehran Sahami</a>
          .
        </p>
        <p>
          Office: Durand Building, Room 305
          <br>
          Email: piech at cs.stanford.edu
          <br>
          Twitter: <a href="https://twitter.com/chrispiech">@chrispiech</a>
          <br>
          <a href="https://piechlab.stanford.edu/">The Piech Lab</a>
        </p>
      </div>
    </div>
    <div class="text">
      <p>
        <em>I was born and grew up in Nairobi, Kenya. When I was twelve I moved to Kuala Lumpur, Malaysia where I lived until I came to Stanford for university, liked it a lot and stayed. I love teaching and I'm into exploring our world (through both science and travelling). My research is in machine learning to understand human learning.</em>
      </p>
    </div>
    <div class="outer">
      <div class="inner">
        <div>News (June, 2022):</div>
        <b>Grading Open-Ended Midterms:</b>
        Our work to rubric-grade novel open-ended exams was covered in the New York Times. See the
        <a href="http://ai.stanford.edu/blog/prototransformer/">HAI blog.</a>
        <br>
        <b>Code in Place:</b>
        As a service project taught CS106A to 20k students with 2k volunteer TAs across via Code in Place. It was a good time!
        <br>
        <b>AI Visual Acuity Test: </b>
        Our new
        <a href="https://myeyes.ai/"> AI based algorithm </a>
        for precisely measuring vision was covered in
        <a href="https://www.science.org/content/article/eye-robot-artificial-intelligence-dramatically-improves-accuracy-classic-eye-exam">Science Magazine </a>
        and
        <a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)02149-8/fulltext">the Lancet </a>
        [<a href="https://arxiv.org/pdf/1906.01811.pdf">paper</a>]
        <br>
        <b>HAI Hoffman-Yee grant: </b>
        A group of CS and Education professors were recently awarded an HAI Hoffman-Yee grant and won a renewal.
        <br>
        <b>Best paper awards:</b>
        The lab is humbled to have received recent best paper awards from
        <a href="https://stanford.edu/~cpiech/bio/papers/variationalItemResponseTheory.pdf">EDM'20</a>,
        <a href="https://stanford.edu/~cpiech/bio/papers/crossBorderCoteaching.pdf">L@S'20</a>
        and
        <a href="https://stanford.edu/~cpiech/bio/papers/zeroShotCode.pdf">AAAI'19</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

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