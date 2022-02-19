<template>
  <div>
    <div class="ph-item" v-if="!store.state.loading">
    <div class="ph-col-12 white" v-for="i in 10" :key="i">
        <div class="ph-picture"></div>
        <div class="ph-row">
            <div class="ph-col-12 big"></div>
            
            <div class="ph-col-12 big"></div>
            <div class="ph-col-12"></div>
            
            <div class="ph-col-12"></div>
            <div class="ph-col-6 empty"></div>
            <div class="ph-col-12"></div>
        </div>
    </div>
  </div>
    <div class="results_container" v-if="store.state.loading && data.length>1">
        <div class="result white"
        v-for="result in data" :key="result">
          <div class="image_container" >
                <img class="img1" :src="result.property.heroImage.url" alt="">
                <img v-for="item in 4" :key="item"
                :src="generateimage(result.property.gallery[item])"  alt="">
          </div>
          <div class="result_content">
              <h4>{{result.property.name}} <i class="fa-solid fa-star" v-for="index in result.property.starRating" :key="index"></i></h4>
              <small>{{result.property.location.address}} (view map)</small><br>
              <small v-if="result.property.reviews" class="reviewstext">{{result.property.reviews.summary.text}}</small>

              <div class="tags">
                <div 
                v-for="(pack,index) in generatepackage(result.packages)" :key="pack"
                :class="{'extra': index===2 , 'tag': index<3}">
                  <small v-if="index<2">{{pack}}</small>
                  <div  class="charcol"
                  v-if="index===2">
                    <small v-for="ipack in generatepackage(result.packages)" :key="ipack"><i class="fa-solid fa-check success"></i>{{ipack}}</small>
                    <!-- <small><i class="fa-solid fa-check success"></i>{{pack}}</small> -->
                  </div>
                  <small v-if="index===2">+1</small>
                </div>
              </div>

              <div v-if="result.property.covidSafety" class="sglogo">
                <img src="../assets/vector.png" alt="">
                <small>{{result.property.covidSafety}}</small>
              </div>
          </div>
          <div class="priceandrating">
            <img src="../assets/TY-score-widget-transparent.png" alt="">
            <div class="price">
              <div
              v-if="result.packages[0].displayRate.value !==result.packages[0].adjustedDisplayRate.value"><small >
              SAVE{{Math.floor((result.packages[0].displayRate.value-result.packages[0].adjustedDisplayRate.value)/result.packages[0].displayRate.value *100)}}% TODAY!
              </small></div>
              <small>Nightly avg.</small>
              <h2><span v-if="result.packages[0].displayRate.value !==result.packages[0].adjustedDisplayRate.value">SGD {{result.packages[0].displayRate.value}}</span>SGD {{result.packages[0].adjustedDisplayRate.value}}</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="no_result" v-if="!error && store.state.loading && data.length<1">
        <i class="fa-solid fa-magnifying-glass"></i>
        <h3>Sorry! We couldn't find any properties for your search.</h3>
      </div>
       <div class="no_result" v-if="error">
       <i class="fa-solid fa-circle-exclamation"></i>
        <h3>Opps, something went wrong.</h3>
        <small>error message here</small>
      </div>
  </div>
</template>

<script>
import {computed} from 'vue'
import { useStore } from 'vuex'
export default {
  setup(){
    const store = useStore();
    const data = computed (() => {
        return  store.state.searchdata;
    })
    const error = computed (() => {
        return  store.state.error;
    })
    const fetch= async () => {
      try{
        await store.dispatch("fetches","sgsg");
      }
      catch(err){
        console.log("err");
      }
    }
    fetch();
    const generateimage = (image) => {
      if(image.xs){
        return image.xs.url;
      }
      if(image.s){
        return image.s.url;
      }
      if(image.m){
        return image.m.url;
      }
      if(image.l){
        return image.l.url;
      }
      if(image.xl){
        return image.xl.url;
      }
        
    }
    
    const generatepackage = (pack) => {
        const packarr = [];
        if(pack[0].foodCode===1){
          packarr.push("breakfast")
        }else{
          packarr.push("breakfast","Lunch");
        }
        if(!pack[0].nonRefundable){
          packarr.push("Free cancellation");
        }
        if(pack[0].payAtHotel){
          packarr.push("Pay at Hotel");
        }
        if(pack[0].payLater){
          packarr.push("Pay Later");
        }
        return packarr;
    }
    
    return{ data,store,generateimage,generatepackage,error}
  }
}
</script>

<style scoped>

.ph-item{
  padding: 10px;
  background:transparent;
  width:900px;
  overflow:hidden;
}
.ph-col-12{
  justify-content: flex-start;
  flex-direction: row;
  padding:10px 0  ;
  margin:10px 0;
}
.ph-picture{
  width:200px;
  height:200px;
  margin:0 20px;
}
.ph-row{
  height:200px;
  width:600px;
}
.no_result{
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  color:#757575;
  padding:30px;
}
.no_result i{
  font-size:24px;
  margin:10px 0;
}

@media (max-width:420px){
  .ph-item{
  padding: 5px;
  background:transparent;
}
.ph-col-12{
  justify-content: flex-start;
  flex-direction: row;
  padding:5px 0  ;
  margin:5px 0;
  width:420px;
  overflow:hidden;
}
.ph-picture{
  width:100px;
  height:100px;
  margin:0 10px;
}
.ph-row{
  height:100px;
  width:300px;
}
}
</style>