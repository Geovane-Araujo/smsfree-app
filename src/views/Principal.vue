<template>
  <div class="principal">
    <div style="margin-top: 10px" class="p-d-flex p-jc-between">
      <div>
        <H1>DashBoard</H1>
      </div>
      <div>
        <Button label="Download Android App" icon="pi pi-android" iconPos="left" />
      </div>
    </div>
    <div class="principal">
      <div class="row">
        <div class="col-sm-12">
          <div class="card-left">
            <div class="sts">
              <div class="row">
                <div class="col-sm-5">
                  <h2>Olá {{ form.nome }}</h2>
                  <div style="margin-top:50px" class="col sm-12">
                    <h4>Token da Api</h4>
                    <div class="p-flex">
                      <Textarea v-model="form.token" :autoResize="true" rows="8" cols="50" />
                    </div>
                  </div>
                </div>
                <div class="smsrigt col-sm-7">
                  <img src="../assets/img/aha.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div class="card-left">
            <div class="sts">
              <div class="row">
                <div class="col-sm-5">
                  <h2>Olá {{ form.nome }}</h2>
                  <div style="margin-top:50px" class="col sm-12">
                    <h4>Exemplos de Uso</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from 'primevue/button'
import Textarea from 'primevue/textarea'
export default {
  data () {
    return {
      form: {
        nome: '',
        login: '',
        token: ''
      }
    }
  },
  mounted () {
    this.form.nome = localStorage.getItem('nome')
    this.form.token = localStorage.getItem('token')
  },
  components: {
    Button,
    Textarea
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/style/app.scss";
h1{
  color: white;
}
.sts{
  font-family: 'ubuntu';
  margin-top: 10px;
  padding: 20px;
}
.card-left{
  background-color: white;
  border-radius: 20px;
}
.card-botton{
  background-color: white;
  border-radius: 20px;
  height: 300px;
}
.principal{
  overflow:hidden;
  height: auto;
}
</style>
