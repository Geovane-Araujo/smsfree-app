<template>
  <div class="center login">
    <div class="center cardLogin">
      <div class="container">
        <div class="center">
          <img src="../assets/img/cadastro.png" alt="">
        </div>
        <h1 class="center">Cadastro</h1>
        <md-field>
          <label>Nome</label>
          <md-input md-counter="70"></md-input>
        </md-field>
        <md-field>
          <label>Email</label>
          <md-input md-counter="70"></md-input>
        </md-field>
        <md-field>
          <label>Senha</label>
          <md-input type="password"></md-input>
        </md-field>
        <div class="p-flex">
          <Button label="Cadastre-se" style="width:20rem" class="p-mr-2 p-mb-2" />
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
.container{
  padding: 10px;
  width: 80%;
}
</style>
