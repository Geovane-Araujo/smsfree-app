<template>
  <div class="smscenter login">
    <loading class="loading" :active="showLoading" :height="45" :width="128" background-color="#c9cdf0" color="#232b70" loader="spinner" :is-full-page="true"/>
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
        <div style="flex: 100%;">
          <Button @click="save" label="Cadastre-se" style="width:100%" class="p-d-flex" />
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
      showLoading: false,
      form: {
        add: true,
        edit: false,
        dele: false,
        id: '',
        nome: '',
        login: '',
        senha: ''
      }
    }
  },
  components: {
    Button,
    Loading
  },
  methods: {
    async save () {
      this.showLoading = true
      await axios.post(http.url + 'users', this.form).then(res => {
        if (res.data.ret === 'success') {
          this.$router.push('login')
          this.$toast.add({ severity: 'success', summary: 'Send SMS', detail: 'Conta Liberada, ja pode utilizar', life: 3000 })
        } else {
          this.$toast.add({ severity: 'error', summary: 'Send SMS', detail: res.data.motivo, life: 3000 })
        }
        this.showLoading = false
      }).catch(err => {
        this.$toast.add({ severity: 'error', summary: 'Send SMS', detail: err, life: 3000 })
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
.container{
  padding: 10px;
  width: 80%;
}
</style>
