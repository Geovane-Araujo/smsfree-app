<template>
  <div class="smscenter login">
    <div class="smscenter cardLogin">
      <div class="smscontainer">
        <div class="smscenter">
          <img src="../assets/img/avatar.png" alt="">
        </div>
        <h1 class="smscenter">Login</h1>
        <md-field>
          <label>Email ID</label>
          <md-input md-counter="70"></md-input>
        </md-field>
        <md-field>
          <label>Senha</label>
          <md-input type="password"></md-input>
        </md-field>
        <div class="p-flex">
          <Button label="Entrar" style="width:20rem" class="p-mr-2 p-mb-2" />
          <Button label="Retornar" style="width:20rem" class="p-button-raised p-button-text" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from 'primevue/button'
export default {
  components: {
    Button
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/style/app.scss";
.login{
  height: 100vh;
  width: 100vw;
}
.cardLogin{
  width: 30%;
  background-color: azure;
  border-radius: 20px;
}
.smscontainer{
  padding: 10px;
  width: 80%;
}
</style>
