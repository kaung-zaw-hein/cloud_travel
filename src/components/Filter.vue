<template>
  <div class="filter_container white">
      <div class="filter" 
      @click.self.prevent = "active"
      v-for="(item, index) in filterbar" :key="item"
      :class="{'factive': index === 0 } ">
         <h4>{{item}}</h4>
         <div v-if="index ===1" @click.prevent='chgprice'>
           <h3>{{hiddenprice}}</h3>
         </div>
      </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup(){
    const filterbar = ref(["Popularity","Price (lowest first)","Reviews","Discount"]);
    const active = () => {
        document.querySelectorAll('.filter').forEach((item) =>{
          item.classList.remove('factive')
        })
        event.target.classList.add("factive");
    }
    const hiddenprice = ref("Price (highest first)");
    const chgprice = async () => {
      const p = filterbar.value[1];
       filterbar.value[1] = hiddenprice.value;
      hiddenprice.value =p
    }
    return{ filterbar, active, chgprice, hiddenprice};
  }
}
</script>

<style scoped>
  .filter_container{
    width:904px;
    height:44px;
    margin-bottom:15px;
    display: flex;
    justify-content:flex-start;
  }
  .filter{
    width:226px;
    height:44px;
    border-left:1px solid #ddd;
    border-radius: 5px 0px 0px 5px;
    display: flex;
    align-items:center;
    justify-content:center;
    transition:all 0.5s;
  }
  .factive{
    background: #002D63;
  }
  .factive h4{
    color:#fff;
  }
  .filter:nth-child(2){
    position:relative;
    cursor:pointer;
  }
  .filter:nth-child(2) div{
    position:absolute;
    width:100%;
    height:85%;
    bottom:-90%;
    display:none;
    justify-content:center;
    align-items:center;
    border-radius: 5px;
    border-top:3px solid #ddd;
    background:#fff;
    overflow: hidden;
  }
  .filter:nth-child(2):hover div{
    display: flex;
  }
  @media (max-width:420px){
    .filter_container{
      display: none;
    }
  }
  
</style>