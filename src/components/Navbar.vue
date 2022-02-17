<template>
    <div id="nav" class="navbar_container">
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
export default {

}
</script>

<style scoped>
    .navbar_container {
        height:60.93px;   
        position: relative;
    }
    .navbar {
        position: absolute;
        left: 0%;
        right: 0%;
        top: 0%;
        bottom: 0%;
        /* white */
        background: #FFFFFF;
        /* line */
        border: 1px solid #DDDDDD;
    }
    .logo_img{
        position: absolute;
        width: 227.5px;
        height: 35px;
        left: 147px;
        top: 13px;
        background: url('../assets/logo.jpg');
        background-repeat: no-repeat;
        background-size:227.5px 35px;
    }
    .navbar_content {
        position: absolute;
        left: 68.12%;
        right: 9.31%;
        top: 35.18%;
        bottom: 32%;

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