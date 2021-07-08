<template>
  <div class="smscenter login">
    <loading class="loading" :active="showLoading" :height="45" :width="128" background-color="#c9cdf0" color="#232b70" loader="spinner" :is-full-page="true"/>
    <div class="smscenter cardLogin">
      <div class="smscontainer">
        <div class="smscenter">
          <img src="../assets/img/avatar.png" alt="">
        </div>
        <h1 class="smscenter">Login</h1>
        <md-field>
          <label>Email ID</label>
          <md-input v-model="form.login" md-counter="70"></md-input>
        </md-field>
        <md-field>
          <label>Senha</label>
          <md-input v-model="form.senha" type="password"></md-input>
        </md-field>
        <div class="p-flex">
          <Button @click="save" label="Entrar" style="width:100%" class="p-mr-2 p-mb-2" />
          <Button label="Retornar" style="width:100%" class="p-button-raised p-button-text" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from 'primevue/button'
import axios from 'axios'
import http from '../router/http'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
export default {
  data () {
    return {
      form: {
        login: '',
        senha: ''
      },
      showLoading: false
    }
  },
  components: {
    Button,
    Loading
  },
  methods: {
    async save () {
      this.showLoading = true
      await axios.post(http.url + 'login', this.form).then(res => {
        if (res.data.ret === 'success') {
          localStorage.setItem('token', res.data.obj.token)
          localStorage.setItem('nome', res.data.obj.nome)
          this.showLoading = false
          this.$router.push('dashboard')
        } else {
          alert('Login ou senha invalidos')
        }
        this.showLoading = false
      }).catch(err => {
        alert(err)
        this.showLoading = false
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
.smscontainer{
  padding: 10px;
  width: 80%;
}
</style>
