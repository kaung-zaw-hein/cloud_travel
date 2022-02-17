<template>
  <div  class="search_bar_container blue_1">
    <div class="search_bar">
      <input type="text" placeholder="&#xF002; Singapore, Singapore" style="font-family:Arial, FontAwesome" />
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
import {ref} from 'vue'
export default {
  setup(){
    const searchh_bar = ref();
    const handleScroll = () => {
      const searchnav = document.querySelectorAll(".search_bar_container");
      console.log(searchnav)
      // const {innerHeight} = window;
      // const bottomOfWindow = Math.round(scrollTop) + innerHeight === offsetHeight;
    }
    handleScroll();
    return{handleScroll,searchh_bar}
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
 .search_bar input{
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
 .search_bar div{
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
</style>