<template>
    <main :class='{"dnone":store.state.sidebar}'>
        <Navbar></Navbar>
        <SearchBar></SearchBar>
    </main>
</template>

<script>
import {useStore} from 'vuex';
import Navbar from './Navbar'
import SearchBar from './SearchBar'
export default {
  components: {
    Navbar, SearchBar },
    setup(){
        const store = useStore();
        return {store};
    }

}
</script>

<style scoped>
</style>