<template>
  <main>
      <div class="sortandfilter white">
        <div><p><i class="fa-solid fa-sliders"></i>Sort & Filter</p></div>
        <div><p><i class="fa-solid fa-location-dot"></i>Map View</p></div>
      </div>
      <div class="selectone blue_1">
        <h4>Select one</h4>
        <i class="fa-solid fa-caret-down"></i>
      </div>
      <Sidebar></Sidebar>
      <div class="resultcontainer">
          <h3>Singapore: 12345 properties found</h3>
          <Filter></Filter>
          <HotelResults></HotelResults>
      </div>
  </main>
</template>

<script>
import HotelResults from './HotelResults'
import Filter from './Filter'
import Sidebar from './Sidebar'
export default {
  components: {
    HotelResults,
    Filter, Sidebar },

}
</script>

<style scoped>
  main {
    display: flex;
    justify-content: flex-start;
    padding: 15px 115px;
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
 @media (max-width:420px){
   main{
     padding:0;
     flex-direction: column;
   }
   .sortandfilter{
     display: flex;
     width:414px;
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
 }
</style>