<template>
  <div class="login row">
    <div class="col-sm-1">
      <div class="side">
        <div class="smscenter sms">
          <img src="../assets/img/sms.png" alt="">
        </div>
        <router-link to="/" v-tooltip.right="'DashBoard'">
          <div class="smscenter btna">
            <img src="../assets/img/chart.png" alt="">
          </div>
        </router-link>
        <router-link to="/" v-tooltip.right="'Sms Enviados'">
          <div class="smscenter btna">
            <img src="../assets/img/enviados.png" alt="">
          </div>
        </router-link>
        <router-link to="/" v-tooltip.right="'Contatos'">
          <div class="smscenter btna">
            <img src="../assets/img/contacts.png" alt="">
          </div>
        </router-link>
      </div>
    </div>
    <div class="col-sm-11">
      <div class="content-page">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
<style lang="scss" scoped>
@import "../assets/style/app.scss";
.login{
  width: 100vw;
}
.side{
  height: 100vh;
  width: 90px;
  position: fixed;
  background-color: rgba($color: #ffffff, $alpha: 1.0);
  box-shadow: #ffffff;
  .btna{
    height: 80px;
    width: 100%;
    background-color: white;
  }
  .btna:hover{
    background-color: #da57a3;
  }
  .sms{
    height: 70px;
    width: 100%;
    margin-bottom: 20px;
  }
  router-link:hover{
    background-color: black;
  }
}
.content{
  margin-left: 10px;
  margin-top: 20px;
}
</style>
