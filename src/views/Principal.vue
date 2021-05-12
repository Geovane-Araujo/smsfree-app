<template>
  <div class="principal">
    <div style="margin-top: 10px" class="p-d-flex p-jc-between">
      <div>
        <H1>SMS Free</H1>
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
                <div class="col-sm-12">
                  <h2>Ultimos 50 Torpedos Enviados</h2>
                  <div style="margin-top:50px" class="col sm-12">
                    <md-table v-model="users" md-sort="name" md-sort-order="asc" md-card>

                      <md-table-row slot="md-table-row" slot-scope="{ item }">
                        <md-table-cell md-label="ID" md-numeric>{{ item.id }}</md-table-cell>
                        <md-table-cell md-label="Data" md-sort-by="name">{{ item.name }}</md-table-cell>
                        <md-table-cell md-label="Destinatário" md-sort-by="email">{{ item.email }}</md-table-cell>
                        <md-table-cell md-label="Mensagem" md-sort-by="gender">{{ item.gender }}</md-table-cell>
                      </md-table-row>
                    </md-table>
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
      },
      users: [
        {
          id: 1,
          name: 'Shawna Dubbin',
          email: 'sdubbin0@geocities.com',
          gender: 'Male',
          title: 'Assistant Media Planner'
        },
        {
          id: 2,
          name: 'Odette Demageard',
          email: 'odemageard1@spotify.com',
          gender: 'Female',
          title: 'Account Coordinator'
        },
        {
          id: 3,
          name: 'Lonnie Izkovitz',
          email: 'lizkovitz3@youtu.be',
          gender: 'Female',
          title: 'Operator'
        },
        {
          id: 4,
          name: 'Thatcher Stave',
          email: 'tstave4@reference.com',
          gender: 'Male',
          title: 'Software Test Engineer III'
        },
        {
          id: 5,
          name: 'Clarinda Marieton',
          email: 'cmarietonh@theatlantic.com',
          gender: 'Female',
          title: 'Paralegal'
        }
      ]
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
