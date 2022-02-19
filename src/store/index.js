import { createStore } from 'vuex'
export default createStore({
  state: {
    searchdata: [],
    loading: false,
    error: false,
  },
  mutations: {
    setdata(state,payload){
      state.searchdata = payload;
      state.loading = true;
    }
  },
  actions: {
    async fetches({commit},payload){
      var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
        function doCORSRequest(options, printResult) {
          var x = new XMLHttpRequest();
          x.open(options.method, cors_api_url + options.url);
          x.onload = x.onerror = function() {
            printResult(
              (x.responseText || '')
            );
          };
          x.send(options.data);
        }

        // Bind event
            doCORSRequest({
              method: 'GET',
              url: `https://hiring.zumata.xyz/job01/search/${payload}`,
              data: ""
            }, function printResult(result) {
              let data = result;
              data = JSON.parse(data)
              commit('setdata',data.outlets.availability.results)
              
            });
    }
  },
})
