<template>
  <div class="principal">
    <div style="margin-top: 10px" class="p-d-flex p-jc-between">
      <div>
        <H1>Send SMS</H1>
      </div>
      <div>
        <Button label="Documentação" @click="openDocumentation" icon="pi pi-file-o" iconPos="left" style="margin-right: 10px;" />
        <Button label="Download Android App" @click="openDownload"  icon="pi pi-android" iconPos="left" />
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
                      <p>{{ form.token }}</p>
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
                    <md-table v-model="smss" md-sort="name" md-sort-order="asc" md-card>

                      <md-table-row slot="md-table-row" slot-scope="{ item }">
                        <md-table-cell md-label="ID" md-numeric>{{ item.id }}</md-table-cell>
                        <md-table-cell md-label="Mensagem" md-sort-by="mensagem">{{ item.mensagem }}</md-table-cell>
                        <md-table-cell md-label="Data Agendamento" md-sort-by="dataagendamento">{{ item.dataagendamento }}</md-table-cell>
                        <md-table-cell md-label="Quantidade" md-sort-by="quantidade">{{ item.quantidade }}</md-table-cell>
                        <md-table-cell md-label="Status" md-sort-by="quantidade">{{ item.status }}</md-table-cell>
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

<script src="./Principal.js">
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
