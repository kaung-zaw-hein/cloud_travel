<template>
  <div  v-if="data"  class="search_bar_container blue_1"
  :class="{'topnav': istopnav}">
   <div class="white rect145" :class="{'dnone':!store.state.searchbar}">
      <i @click.prevent="store.state.searchbar = !store.state.searchbar" class="fa-solid fa-xmark"></i>
      <h3>Where?</h3>
    </div>
    <div class="search_bar" 
    :class="{'dnone':!store.state.searchbar}">
      <div class="inputdiv">
        <input v-model="search_w" type="text" 
        placeholder="&#xF002; search  Singapore select and press enter" 
        style="font-family:Arial, FontAwesome"  
        @keypress.enter.prevent="handleSubmit" />
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
    <div class="mobo_search_bar white" 
    @click.prevent="store.state.searchbar = !store.state.searchbar"
    :class="{'dnone':store.state.searchbar}">
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
import { useStore } from 'vuex'
export default {
  setup(){
    const store = useStore();
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
        return item.label.toLowerCase().includes(search_w.value === null ? search_w.value : search_w.value.toLowerCase() );
      })
    })

    const handleSubmit = () => {
      data.value.forEach((item) => {
          if( item.label.toLowerCase().includes( event.target.value.toLowerCase())){
            if(item.cityCode !=="mlph"){
              store.dispatch("fetches",item.cityCode);
              store.state.error = false;
              event.target.value = null;
            }
            else{
              event.target.value = null;
              store.state.error = true;
              store.state.searchdata ="";
            }
          }
      })
    }

    handleScroll();
    return{handleScroll,searchh_bar,istopnav,data,search_w,searchh_r,handleSubmit,store}
  }
}
</script>

<style>
 .search_bar_container{
   height:50px;

  /* blue 1 */

  background: #002D63;
  border-radius: 3px;
  padding:10px;
  display:flex;
  align-items:center;
  justify-content:center;
 }
 .search_bar{
   width:80%;
   height:100%;
   display:flex;
   justify-content:space-between;
 }
 .search_bar .inputdiv{
   position:relative;
   width:40%;
 }
 .search_bar .inputdiv input{
   width:100%;
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
   width:21%;
   height:50px;
  border: 1px solid #DDDDDD;
  box-sizing: border-box;
  border-radius: 3px;
  margin-left:10px;
  display: flex;
  color: #333;
  text-align:center;
  align-items:center;
  overflow: hidden;
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
   width:13%;
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
       flex-direction: column;
       padding:0;
       background:#fff!important;
       height: auto;
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
    .search_bar{
      width:90% !important;
      height:100vh;
      flex-direction:column;
      justify-content: flex-start;
      padding:20px;
    }
    .search_bar div{
      width:100% !important;
      margin-bottom:20px;
    }
    .search_bar button{
      width:50%;
    }
   }  
   .topnav{
     width: 100%;
     position: fixed;
     top:0;
    z-index: 1000;
   }
</style>