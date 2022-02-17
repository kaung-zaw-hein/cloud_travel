<template>
  <main>
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
</style>