<template>
  <div class="smscenter login">
    <div class="smscenter cardLogin">
      <div class="container">
        <div class="smscenter">
          <img src="../assets/img/cadastro.png" alt="">
        </div>
        <h1 class="smscenter">Cadastro</h1>
        <md-field>
          <label>Nome</label>
          <md-input v-model="form.nome" md-counter="70"></md-input>
        </md-field>
        <md-field>
          <label>Email</label>
          <md-input v-model="form.login" md-counter="70"></md-input>
        </md-field>
        <md-field>
          <label>Senha</label>
          <md-input v-model="form.senha" type="password"></md-input>
        </md-field>
        <div class="p-flex">
          <Button @click="save" label="Cadastre-se" style="width:20rem" class="p-mr-2 p-mb-2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from 'primevue/button'
import axios from 'axios'
export default {
  data () {
    return {
      form: {
        id: '',
        nome: '',
        login: '',
        senha: ''
      }
    }
  },
  components: {
    Button
  },
  methods: {
    async save () {
      await axios.post('http://localhost:8088/sms/v1/users', this.form).then(res => {
        if (res.data.ret === 'success') {
          this.$router.push('login')
        } else {
          alert(res.data.motivo)
        }
      }).catch(err => {
        alert(err)
      })
    }
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
