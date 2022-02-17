<template>
  <div class="side_bar_container">

    <div class="location_img">
      <button class="blue_1"><h4>Show on map </h4></button>
    </div>

    <div class="price_per_night white">
      <div>
        <h4>Price per night</h4>
        <button @click.prevent="clear">CLEAR</button>
        </div>
        
          <input v-model="slide1" min="0" max="5000" step="400" type="range">
          <input v-model="slide2" min="0" max="5000" step="400" type="range">

        <div class="rangedata_container">
          <div class="rangedata white">
            <small>SGD {{slide1 > slide2 ? slide2 : slide1}} </small>
          </div>
          <i class="fa-solid fa-minus"></i>
        <div class="rangedata white">
            <small>SGD{{slide1 > slide2 ? slide1 : slide2}} </small>
          </div>
        </div>
    </div>

    <div class="reviews white">
      <div>
        <h4>Reviews</h4>
        <button>CLEAR</button>
      </div>
        <section class="checkbox_container">
          <div v-for= " review in reviews" :key="review">
              <div>
                  <label>{{review}}
                    <input type="checkbox" id="scales" name="scales">
                    <span class="checkmark"></span>
                  </label>
                </div>
                <small>123</small>
          </div>
        </section>
      
    </div>

    <div class="ratings white">
      <div>
        <h4>Star rating</h4>
        <button>Clear</button>
      </div>
       <section class="checkbox_container">
          <div>
              <div>
                  <label><i class="fa-solid fa-star" v-for="index in 5" :key="index"></i>
                    <input type="checkbox" id="scales" name="scales">
                    <span class="checkmark"></span>
                  </label>
                </div>
                <small>123</small>
          </div>
          <div>
              <div>
                  <label><i class="fa-solid fa-star" v-for="index in 4" :key="index"></i>
                    <input type="checkbox" id="scales" name="scales">
                    <span class="checkmark"></span>
                  </label>
                </div>
                <small>223</small>
          </div>

          <div>
              <div>
                  <label><i class="fa-solid fa-star" v-for="index in 3" :key="index"></i>
                    <input type="checkbox" id="scales" name="scales">
                    <span class="checkmark"></span>
                  </label>
                </div>
                <small>323</small>
          </div>

          <div>
              <div>
                  <label><i class="fa-solid fa-star" v-for="index in 2" :key="index"></i>
                    <input type="checkbox" id="scales" name="scales">
                    <span class="checkmark"></span>
                  </label>
                </div>
                <small>423</small>
          </div>

          <div>
              <div>
                  <label><i class="fa-solid fa-star" v-for="index in 1" :key="index"></i>
                    <input type="checkbox" id="scales" name="scales">
                    <span class="checkmark"></span>
                  </label>
                </div>
                <small>523</small>
          </div>

          <div>
              <div>
                  <label>No rating
                    <input type="checkbox" id="scales" name="scales">
                    <span class="checkmark"></span>
                  </label>
                </div>
                <small>23</small>
          </div>
        </section>
    </div>

    <div class="hotel_name white">
      <h4>Hotel name</h4>
      <div>
        <input type="text" placeholder="e.g. Hilton, Ibis ...">
      <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>

    <div class="reservation white">
        <h4>Reservatoion policy</h4>
         <section class="checkbox_container">
          <div v-for="reserve in reservation" :key="reserve">
              <div>
                  <label>{{reserve}}
                    <input type="checkbox" id="scales" name="scales">
                    <span class="checkmark"></span>
                  </label>
                </div>
                <small>99</small>
          </div>
        </section>
    </div>

    <div class="meal_plan white">
      <h4>Meal plan</h4>
        <section class="checkbox_container">
          <div v-for="index in (Math.round(meal_plan.length * mvalue))" :key="index">
              <div>
                  <label>{{meal_plan[index - 1]}}
                    <input type="checkbox" id="scales" name="scales">
                    <span class="checkmark"></span>
                  </label>
                </div>
                <small>999</small>
          </div>
        </section>
         <p @click.prevent="mvalue = mvalue === 0.25 ? 1: 0.25 ">
           {{mvalue === 0.25 ? "Show 5 more" : "show less"}}
           <i class="fa-solid vector" :class="{'fa-caret-down' : mvalue === 0.25 , 'fa-caret-up' : mvalue === 1 }">
            </i>
         </p>
    </div>

    <div class="property white">
      <h4>Property type</h4>
        <section class="checkbox_container">
          <div v-for="index in (Math.floor(property.length * pvalue))" :key="index">
              <div>
                  <label>{{property[index - 1]}}
                    <input type="checkbox" id="scales" name="scales">
                    <span class="checkmark"></span>
                  </label>
                </div>
                <small>999</small>
          </div>
        </section>
         <p @click.prevent="pvalue = pvalue === 0.25 ? 1: 0.25 ">
           {{pvalue === 0.25 ? "Show 5 more" : "show less"}}
           <i class="fa-solid vector" :class="{'fa-caret-down' : pvalue === 0.25 , 'fa-caret-up' : pvalue === 1 }">
            </i>
         </p>
    </div>
    <div class="property white">
      <h4>Facilities</h4>
        <section class="checkbox_container">
          <div v-for="index in fvalue" :key="index">
              <div>
                  <label>{{facilities[index % 3]}}
                    <input type="checkbox" id="scales" name="scales">
                    <span class="checkmark"></span>
                  </label>
                </div>
                <small>999</small>
          </div>
        </section>
         <p @click.prevent="fvalue = fvalue === 3 ? 26: 3 ">
           {{fvalue === 3 ? "Show 26 more" : "show less"}}
           <i class="fa-solid vector" :class="{'fa-caret-down' : fvalue === 3 , 'fa-caret-up' : fvalue === 26 }">
            </i>
         </p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup(){
    const slide1 = ref(0);
    const slide2 = ref(550);
    const reviews = ref(["Excellent","Very Good","Good","Fair","Poor","No review"])
    const reservation = ref(["Free cancellation","Book now, pay later","Pay at hotel"]);
    const meal_plan = ref(["Room only", "Breakfast", "Lunch","Dinner", "Half board", "Full board", "All inclusive"]);
    const property = ref(["Hotel","Hostel/Backpacker","accomodation","Apartment","Aparthotel","Resort","Inn","Motel","Bed & breakfast","Guesthouse","Condo","All-inclusive property","Hostal"]);
    const facilities = ref(["Swimming pool","Internet access","Non-smoking floor"])
    const clear = () => {
      slide1.value = 0;
      slide2.value = 550;
    }

    const mvalue = ref(0.25);
    const pvalue = ref(0.25);
    const fvalue = ref(3);

    return{ slide1, slide2,clear, meal_plan,reservation,reviews,property,mvalue,pvalue,facilities,fvalue}
  }
}
</script>

<style scoped>
 
</style>