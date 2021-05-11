<template>
  <div>
    <div>
      <!-- <div class=" col-sm-1">
        <div class="side">
          <div class="smscenter sms">
            <img src="../assets/img/sms.png" alt="">
          </div>
          <router-link to="/" v-tooltip.right="'DashBoard'">
            <div class="smscenter btna">
              <img src="../assets/img/chart2.png" alt="">
            </div>
          </router-link>
          <router-link to="/" v-tooltip.right="'Sms Enviados'">
            <div class="smscenter btna">
              <img src="../assets/img/airplane.png" alt="">
            </div>
          </router-link>
          <router-link to="/" v-tooltip.right="'Contatos'">
            <div class="smscenter btna">
              <img src="../assets/img/contatos.png" alt="">
            </div>
          </router-link>
        </div>
      </div> -->
      <div class="col-sm-12">
        <div class="content-page">
          <router-view/>
        </div>
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
.side{
  height: 100vh;
  width: 80px;
  position: fixed;
  background-color: rgba($color: #da57a3, $alpha: 1.0);
  box-shadow: #da57a3;
  .btna{
    height: 80px;
    width: 100%;
    background-color: #da57a3;
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
.fix{
  position: fixed;
  float: left;
}
</style>
