<template>
  <div :class='{"dnone":store.state.sidebar || store.state.searchbar, }' class="footer">
      <div class="paginate">
          <div class="pag">
              <a href="#nav">Back to top</a>
                  <p class="pages">Showing Results 1 – 20 of 9999</p>
               <div class="num">
                      <i class="fa-solid fa-angle-left"></i>
                        <p class="ptag pactive" @click="active">1</p>
                        <p class="ptag" @click="active">2</p>
                        <p class="ptag" @click="active">3</p>
                        <p class="ptag" @click="active">4</p>
                        <p class="ptag" @click="active">5</p>
                        <p class="ptag" @click="active">6</p>
                        <p>...</p>
                        <p class="ptag" @click="active">13</p>
                        <i class="fa-solid fa-angle-right"></i>
                  </div>
          </div>
      </div>
      <div class="footernav charcol">
          <div>
             <p>FAQ  </p>
             <p>Terms of use </p>                           
             <p>Privacy policy </p>
             <p>Contact us</p>
              
          </div>
      </div>
      <div class="copyright black">
            <small>Copyright CloudTravel 2021.</small>
      </div>
  </div>
</template>

<script>
import {useStore} from 'vuex';
export default {
    setup(){
        const store = useStore();
        const active = () => {
            document.querySelectorAll('.ptag').forEach((item) =>{
            item.classList.remove('pactive')
            })
            event.target.classList.add("pactive");
        }

    return{store,  active};
    }
}
</script>

<style>
 .footer{
     width:100%;
     margin-top:80px;
 }
 .paginate{
     display:flex;
     justify-content:center;
     align-items:center;
     padding:40px 0 ;
 }
 .paginate .pag{
     width:66%;
     display:flex;
     justify-content:space-between;
     flex-wrap:wrap;
 }
 .paginate div a{
     width:11%;
     text-decoration:none;
     color: #002D63;
     cursor: pointer;
     margin-left:30px;
 }
 .paginate div .pages{
     width:45%;
     height:20px;
     display:flex;
     justify-content:flex-end;
     color: #333;
     flex-wrap:wrap;
 }
 .num{
     display: flex;
     align-items:center;
     justify-content:center;
     padding: 0 10px;
 }
 .num i{
     color: #002D63;
    opacity: 0.6;
    margin: 0 10px;
 }
 
 .num p{
     text-align:center;
      margin: 0 5px;
      cursor:pointer;
 }
 .pactive{
     width:20px;
    background: #002D63;
    border-radius: 5px;
    color:#fff;
 }
 .footernav{
     display:flex;
     justify-content:center;
     padding:30px;
 }
 .footernav div{
     display:flex;
     width:400px;
     justify-content:space-between;
 }
 .footernav div p{
     color:#fff;
     cursor: pointer;
 }
 .copyright{
      display:flex;
     justify-content:center;
     padding:20px;
 }
 .copyright small{
     color:#fff;
     cursor: pointer;
 }
@media (max-width:420px){
 .footer{
     overflow: hidden;
     margin-top:40px;
 }
 .paginate{
     padding:20px;
 }
 .paginate .pag{
     width:100%;
     flex-wrap: wrap;
 }
 .paginate div a{
     width:90px;
 }
 .paginate div .pages{
     height:20px;
     flex-direction:column;
     justify-content:flex-end;
     color: #333;
 }
  .paginate div .pages p{
      margin-left:150px;
  }
 .paginate div .pages div{
     align-items:center;
     justify-content:center;
     padding: 0 10px;
 }
 .footernav{
     display:flex;
     justify-content:center;
     padding:15px;
 }  
}
</style>