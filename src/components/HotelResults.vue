<template>
  <div class="results_container">
    <div class="result white">
      <div class="image_container">
          <img class="img1" src="../assets/map-bg.jpeg" alt="">
          <img src="../assets/map-bg.jpeg" alt="">
          <img src="../assets/map-bg.jpeg" alt="">
          <img src="../assets/map-bg.jpeg" alt="">
          <img src="../assets/map-bg.jpeg" alt="">
      </div>
      <div class="result_content">
          <h4>The Fullerton Bay Hotel <i class="fa-solid fa-star" v-for="index in 5" :key="index"></i></h4>
          <small>80 Collyer quay, Marina Bay, Singapore, Singapore, 049326 (view map)</small><br>
          <small>“Excellent boutique hotel. Great rooms in excellent location. Awesome vibe. Beautiful beac...</small>

          <div class="tags">
            <div class="tag">
              <small>Breakfast</small>
            </div>
            <div class="tag">
              <small>fsdafasdfasdfsadfasd</small>
            </div>
            <div class="tag extra">
              <div class="charcol">
                 <small><i class="fa-solid fa-check success"></i>Breakfast</small>
                 <small><i class="fa-solid fa-check success"></i>Free cancellation</small>
                 <small><i class="fa-solid fa-check success"></i>Free cancellation</small>
                 <small><i class="fa-solid fa-check success"></i>Free cancellation</small>
              </div>
              <small>+1</small>
            </div>
          </div>

          <div class="sglogo">
            <img src="../assets/vector.png" alt="">
            <small>Singapore - SG Clean</small>
          </div>
      </div>
      <div class="priceandrating">
        <img src="../assets/TY-score-widget-transparent.png" alt="">
        <div class="price">
          <div><small>SAVE 16% TODAY!</small></div>
          <small>Nightly avg.</small>
          <h2><span>SGD 120</span> SGD 100</h2>
        </div>
      </div>
    </div>
     <div class="result white">
      <div class="image_container">
          <img class="img1" src="../assets/map-bg.jpeg" alt="">
          <img src="../assets/map-bg.jpeg" alt="">
          <img src="../assets/map-bg.jpeg" alt="">
          <img src="../assets/map-bg.jpeg" alt="">
          <img src="../assets/map-bg.jpeg" alt="">
      </div>
      <div class="result_content">
          <h4>The Fullerton Bay Hotel <i class="fa-solid fa-star" v-for="index in 5" :key="index"></i></h4>
          <small>80 Collyer quay, Marina Bay, Singapore, Singapore, 049326 (view map)</small><br>
          <small>“Excellent boutique hotel. Great rooms in excellent location. Awesome vibe. Beautiful beac...</small>

          <div class="tags">
            <div class="tag">
              <small>Breakfast</small>
            </div>
            <div class="tag">
              <small>fsdafasdfasdfsadfasd</small>
            </div>
            <div class="tag extra">
              <small>+1</small>
            </div>
          </div>

          <div class="sglogo">
            <img src="../assets/vector.png" alt="">
            <small>Singapore - SG Clean</small>
          </div>
      </div>
      <div class="priceandrating">
        <img src="../assets/TY-score-widget-transparent.png" alt="">
        <div class="price">
          
          <small>Nightly avg.</small>
          <h2>SGD 100</h2>
        </div>
      </div>
    </div>
     <div class="result white">
      <div class="image_container">
          <img class="img1" src="../assets/map-bg.jpeg" alt="">
          <img src="../assets/map-bg.jpeg" alt="">
          <img src="../assets/map-bg.jpeg" alt="">
          <img src="../assets/map-bg.jpeg" alt="">
          <img src="../assets/map-bg.jpeg" alt="">
      </div>
      <div class="result_content">
          <h4>The Fullerton Bay Hotel <i class="fa-solid fa-star" v-for="index in 5" :key="index"></i></h4>
          <small>80 Collyer quay, Marina Bay, Singapore, Singapore, 049326 (view map)</small><br>
          <small>“Excellent boutique hotel. Great rooms in excellent location. Awesome vibe. Beautiful beac...</small>

          <div class="tags">
            <div class="tag">
              <small>Breakfast</small>
            </div>
            <div class="tag">
              <small>fsdafasdfasdfsadfasd</small>
            </div>
            <div class="tag extra">
              <small>+1</small>
            </div>
          </div>

          <div class="sglogo">
            <img src="../assets/vector.png" alt="">
            <small>Singapore - SG Clean</small>
          </div>
      </div>
      <div class="priceandrating">
        <img src="../assets/TY-score-widget-transparent.png" alt="">
        <div class="price">
          <small>Nightly avg.</small>
          <h2>SGD 100</h2>
        </div>
      </div>
    </div>
     <div class="result white">
      <div class="image_container">
          <img class="img1" src="../assets/map-bg.jpeg" alt="">
          <img src="../assets/map-bg.jpeg" alt="">
          <img src="../assets/map-bg.jpeg" alt="">
          <img src="../assets/map-bg.jpeg" alt="">
          <img src="../assets/map-bg.jpeg" alt="">
      </div>
      <div class="result_content">
          <h4>The Fullerton Bay Hotel <i class="fa-solid fa-star" v-for="index in 5" :key="index"></i></h4>
          <small>80 Collyer quay, Marina Bay, Singapore, Singapore, 049326 (view map)</small><br>
          <small>“Excellent boutique hotel. Great rooms in excellent location. Awesome vibe. Beautiful beac...</small>

          <div class="tags">
            <div class="tag">
              <small>Breakfast</small>
            </div>
            <div class="tag">
              <small>fsdafasdfasdfsadfasd</small>
            </div>
            <div class="tag extra">
              <small>+1</small>
            </div>
          </div>

          <div class="sglogo">
            <img src="../assets/vector.png" alt="">
            <small>Singapore - SG Clean</small>
          </div>
      </div>
      <div class="priceandrating">
        <img src="../assets/TY-score-widget-transparent.png" alt="">
        <div class="price">
          <small>Nightly avg.</small>
          <h2>SGD 100</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .results_container{
    width:904px;
     display: flex;
    justify-content:flex-start;
    flex-wrap: wrap;
  }
  .results_container .result{
    width: 884px;
    height: 210px;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
    display: flex;
  }
  .results_container .result .image_container{
    width:200px;
    height:100%;
    display: flex;
    flex-wrap: wrap;
  }
  .results_container .result .image_container img{
    width:50px;
    height:48px;
    cursor: pointer;
    transition: all 0.7s;
    transition-delay: 0.5s;
  }
  .results_container .result .image_container img:hover{
    transform: scale(2);
  }
  .results_container .result .image_container .img1{
    width:200px;
    height:160px;
  }
  .results_container .result .result_content{
    padding:16px;
  }
  .results_container .result .result_content h4 i{
    font-size: 10px;
    color:#E9BF2D;
  }
   .result .result_content small{
    margin: 7px 0;
    display: inline-block;
  }
  .result .result_content .tags{
    margin:7px 0;
    display: flex;
  }
 .result .result_content .tags .tag{
    height:20px;
    border: 1px solid #00A1E6;
    box-sizing: border-box;
    margin-right:5px;
    align-items: center;
    display: flex;
    padding:2px 5px;
    cursor: pointer;
  }
  .result .result_content .tags .tag.extra{
    position: relative;
  }
  .result .result_content .tags .tag.extra div small{
    color:#fff;
    width:110px;
    margin-left:5px;
  }
  .result .result_content .tags .tag.extra div small i{
    font-size: 10px;
    margin-right:4px;
  }
  .result .result_content .tags .tag.extra div{
    transition:all 0.7s;
    width:246px;
    position: absolute;
    left:-100px;
    bottom:-85px;
    height:64px;
    padding: 5px 5px;
    align-items: center;
    opacity: 0;
  }
   .result .result_content .tags .tag.extra:hover div{
    opacity: 1;
  }
  .result .result_content .tags .tag.extra div:before{
    content:"";
    position: absolute;
    width:1px;
    height:1px;
    top:-7px;
    left:108px;
    border: solid #333;
    border-width: 0 15px 15px 0;
    transform:rotate(-130deg);
    display: inline-block;
    padding: 3px;
  } 
  .result .result_content .tags .tag small{
    color:#00A1E5;
  }
  .result .result_content .sglogo{
    display:flex;
    margin-top:8px;
    align-items: center;
  }
  .result .result_content .sglogo img{
    width:16px;
    height:20px;
    margin-right:11px
  }
  .result .priceandrating{
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    height: 210px;
    padding:7px 0;
  }
  .result .priceandrating img{
    width: 146px;
    height: 50.5px;
  }
  .result .priceandrating .price{
    text-align: right;
    padding-bottom:14px;
    position:relative;
  }
    .result .priceandrating .price div{
      position:absolute;
      top:-25px;
      right:0;
      padding:5px;
      width: 108px;
      height: 15px;
      background: #00A1E6;
      text-align: center;
      align-items: center;
  }
  .result .priceandrating .price div small{
   color: #FFFFFF;
  }
  .result .priceandrating .price h2{
    width: 200px;
  }
  .result .priceandrating .price h2 span{
    font-family: Mulish;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    text-decoration-line: line-through;
    color: #757575;
  }
</style>