<template>
    <div id="nav" class="navbar_container" :class="{'dnone':store.state.searchbar}">
        <div class="navbar white">
        <div class="logo_img"></div>
        <div class="navbar_content">
           <p> English <i class="fa-solid fa-caret-down vector"></i>   </p>
            <p>USD <i class="fa-solid fa-caret-down vector"></i></p>
            <p>My Account</p>
            <p>Log out</p>
        </div>
        <div class="bars">
            <i class="fa-solid fa-bars"></i>
        </div>
    </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
    setup(){
        const store = useStore();
        return {store};
    }
}
</script>

<style scoped>
    .navbar_container {
        height:60.93px;   
        position: relative;
    }
    .navbar {
        display: flex;
        height:60px;
        align-items:center;
        justify-content:space-around;
        /* white */
        background: #FFFFFF;
        /* line */
        border: 1px solid #DDDDDD;
    }
    .logo_img{
        width: 227.5px;
        height: 35px;
        background: url('../assets/logo.jpg');
        background-repeat: no-repeat;
        background-size:227.5px 35px;
    }
    .navbar_content {

        font-family: Mulish;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        /* identical to box height */

        display: flex;
        align-items: flex-end;
        text-align: right;
        letter-spacing: 0.01em;
    }
    .navbar_content p{
        display: flex;
        flex-wrap: nowrap;
         margin-left:10px;
         cursor: pointer;
    }
    .vector{
            /* Vector */
            width: 8px;
            height: 5px;
            margin:0 10px;
    }
    .bars{
        display: none;
    }

    @media (max-width:420px) {
        .logo_img{
            position: absolute;
            width: 162.5px;
            height: 25px;
            left: 19px;
            top: 17px;
            background-repeat: no-repeat;
            background-size:162.5px 25px;

        }
        .navbar_content{
            display:none;
        }
        .bars{
            display:block;
            position: absolute;
            right: 10.94%;
            top: 17px;
            cursor: pointer;
            color:#757575;
        }
    }
</style>