<template>
  <div v-if="data"  class="search_bar_container blue_1"
  :class="{'topnav': istopnav}">
    <div class="search_bar">
      <div class="inputdiv">
        <input v-model="search_w" type="text" placeholder="&#xF002; search  Singapore and press enter" style="font-family:Arial, FontAwesome" />
        <div :class="{'svalue': search_w !==null}" class="white" v-for="item in searchh_r" :key="item" 
        @click.prevent="search_w = item.label"
        ><p>{{item.label}}</p></div>
        <i class="fa-solid fa-xmark white"
        :class="{'svalue': search_w !==null}"
        @click.prevent="search_w = null"></i>
      </div>
      <div class="datetime white">
        <i class="fa-solid fa-calendar"></i>
        <p> Jul 19 - Jul 20 </p>
        <p> 1night</p>
      </div>
      <div class="guestcount white">
          <p>2 adults, 0 children, 1 room</p>
      </div>
      <button class="submit blue_2"><p>Search</p></button>
    </div>
    <div class="mobo_search_bar white">
      <i class="fa-solid fa-magnifying-glass"></i>
      <div>
        <h4>Singapore, Singapore</h4>
        <div class="dateandguest">
          <p>Aug 18 - Aug 19</p>
          <p>2 adults, 1 room, 0 children</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import {ref,computed} from 'vue'
export default {
  setup(){
    const searchh_bar = ref();
    const istopnav = ref(false);
    const handleScroll = () => {
      if(document.documentElement.scrollTop > 100 ){
        istopnav.value = true;
      }
      else{
        istopnav.value = false;
      }
    }
    window.addEventListener('scroll',handleScroll)
    
    const data = ref();
    const fetch = async() => {

         var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
        function doCORSRequest(options, printResult) {
          var x = new XMLHttpRequest();
          x.open(options.method, cors_api_url + options.url);
          x.onload = x.onerror = function() {
            printResult(
              (x.responseText || '')
            );
          };
          if (/^POST/i.test(options.method)) {
            x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
          }
          x.send(options.data);
        }

        // Bind event
            doCORSRequest({
              method: 'GET',
              url: "https://hiring.zumata.xyz/job01/autosuggest",
              data: ""
            }, function printResult(result) {
              data.value = result;
              data.value = JSON.parse(data.value)
            });

    
    }
    fetch();

    const search_w = ref(null);
    const searchh_r = computed(() => {
      return data.value.filter((item) => {
        // if (search_w.value !== null){
        //   search_w.value = search_w.value.toLowerCase();
        // }
        return item.label.toLowerCase().includes(search_w.value === null ? search_w.value : search_w.value.toLowerCase() );
      })
    })

    handleScroll();
    return{handleScroll,searchh_bar,istopnav,data,search_w,searchh_r}
  }
}
</script>

<style>
 .search_bar_container{
   height:50px;

  /* blue 1 */

  background: #002D63;
  border-radius: 3px;
  padding:10px 145px;
 }
 .search_bar{
   height:100%;
   display:flex;
   flex-direction:flex-start;
 }
 .search_bar .inputdiv{
   position:relative;
 }
 .search_bar .inputdiv input{
   width:470px;
   height:50px;
   outline:none;
   border:none;
   border: 1px solid #DDDDDD;
  box-sizing: border-box;
  border-radius: 3px;
   margin-left:10px;
   padding: 0 10px 0 19px;
 }
 .search_bar .inputdiv i{
   width:20px;
   height:20px;
   text-align: center;
   align-items:center;
   border-radius:5px;
   display:none;
 }
 .search_bar div:nth-child(n+2){
   width:250px;
   height:50px;
  border: 1px solid #DDDDDD;
  box-sizing: border-box;
  border-radius: 3px;
  margin-left:10px;
  display: flex;
  color: #333;
  text-align:center;
  align-items:center;
  position: relative;
 }
  .search_bar .inputdiv div{
    display: none;
   width:470px;
   height:50px;
   padding: 0 10px 0 19px;
   border: none;
  text-align:left;
  align-items: center;
 }
  .svalue{
   display:flex !important;
 }
 .svalue:hover{
   background:#6d8baf;
   cursor: pointer;
 }
 .search_bar button{
   width:150px;
   height:50px;
   border-radius: 3px;
   margin-left:10px;
   border:none;
 }
 .search_bar button p{
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    /* identical to box height */
    color:#ffff;
    cursor: pointer;
    text-align: center;
 }
 .search_bar .datetime i{
   color:#757575;
   margin: 0 10px;
 }
 .search_bar .datetime p:nth-child(3){
   color:#757575;
   font-size:1em;
   position: absolute;
   right:12px;
 }
 .guestcount p{
   margin-left: 16px;
    /* 333 */
    color: #333333;
    }
  .mobo_search_bar{
    display:none;
  }
   @media (max-width:420px) {
     .search_bar_container{
       padding:0;
     }
     .search_bar{
     display: none;
     }
     .mobo_search_bar{
       width:100%;
       display: flex;
       align-items:center;
       height:50px;
       border: 1px solid #DDDDDD;
     }
     .mobo_search_bar i{
        width: 15.09px;
        height: 16px;
        color:#757575;
        margin:0 15px;
     }
     .dateandguest{
       display: flex;
     }

   }  
   .topnav{
     width: 100%;
     position: fixed;
     top:0;
    z-index: 1000;
   }
</style>