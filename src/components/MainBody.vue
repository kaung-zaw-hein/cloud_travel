<template>
  <main :class="{'dnone':store.state.searchbar}">
      <div class="sideer">
        <div :class='{"dnone":store.state.sidebar}' class="sortandfilter white">
        <div @click.prevent="store.state.sidebar = !store.state.sidebar"><p><i class="fa-solid fa-sliders"></i>Sort & Filter</p></div>
        <div @click.prevent="store.state.sidebar = !store.state.sidebar"><p><i class="fa-solid fa-location-dot"></i>Map View</p></div>
      </div>
      <div :class='{"dnone":store.state.sidebar}'  class="selectone blue_1">
        <h4>Select one</h4>
        <i class="fa-solid fa-caret-down"></i>
      </div>
      <Sidebar></Sidebar>
      </div>
      <div :class='{"dnone":!store.state.sidebar}' class="white closecontainer">
        <button @click.prevent="store.state.sidebar = !store.state.sidebar">Clear</button>
        <button @click.prevent="store.state.sidebar = !store.state.sidebar" >Filter</button>
      </div>
      <div :class='{"dnone":store.state.sidebar}' class="resultcontainer">
          <h3>Singapore: 12345 properties found</h3>
          <Filter></Filter>
          <HotelResults></HotelResults>
      </div>
  </main>
</template>

<script>
import {useStore} from "vuex";
import HotelResults from './HotelResults'
import Filter from './Filter'
import Sidebar from './Sidebar'
export default {
  components: {
    HotelResults,
    Filter, Sidebar },
    setup(){
      const store = useStore();
      return {store};
    }

}
</script>

<style scoped>
  main {
    display: flex;
    justify-content:center;
    padding:25px 0;
  }
  main .sideer{
    width:20%;
  }
  .resultcontainer{
    width:65%;
    margin-left:10px;
  }
  .resultcontainer h3 {
    margin-bottom: 15px;
}
.sortandfilter{
  display: none;
}
.selectone{
  display:none;
}
.closecontainer{
  display: none;
}
 @media (max-width:420px){
   main{
     width:100%;
     padding:0;
     flex-direction: column;
   }
   main .sideer{
     width:100% !important;
     overflow-x:hidden;
    overflow-y: scroll;
    height:auto;
    margin-bottom:40px;
   }
   .sortandfilter{
     display: flex;
     width:100%;
   }
   .sortandfilter div{
     width:50%;
     display:flex;
     padding: 15px 50px;
     border:1px solid #ddd;
     align-items: center;
     text-align:center;
     cursor: pointer;
     color: #002d63;
   }
   .sortandfilter div i{
     margin-right:11px;
   }
   .selectone {
     display:flex;
     justify-content:space-between;
     width:354px;
     margin:10px 20px;
     padding:7px 10px;
   }
   .selectone h4,i{
      color: #fff;
   }
   .closecontainer{
     display:flex;
     padding: 10px;
     justify-content:center;
     align-items:center;
     border: 1px solid #DDDDDD;
     position: fixed;
     width:100%;
     bottom: 0;
   }
   .closecontainer button{
     border: 2px solid #002D63;
      box-sizing: border-box;
      border-radius: 3px;
      width:40%;
      height:40px;
      font-family: Mulish;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 18px;
      color: #002D63;
      margin:0 20px;
    }
    .closecontainer button:nth-child(2){
      background: #002D63;
      color: #fff;
    }
 }
</style>