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
                <small>fsdafasdfasdfsadfasd</small>
                  <small>fdafasdfassdf</small>

            </div>
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
  .results_container .result .result_content small{
    margin: 7px 0;
    display: inline-block;
  }
</style>