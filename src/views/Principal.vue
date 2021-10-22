<template>
  <div class="principal">
    <loading class="loading" :active="showLoading" :height="45" :width="128" background-color="#c9cdf0" color="#232b70" loader="spinner" :is-full-page="true"/>
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
                  <div class="col-sm-9">
                    <b-form-group id="input-group-1" label="Telefone (para mais de 1 separar com ; ponto e virgula):" label-for="input-1">
                      <b-form-input id="input-1"  v-model="fones"
                        type="text"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-sm-9">
                    <b-form-group id="input-group-1" label="Mensagem:" label-for="input-1">
                      <b-form-textarea rows="7" id="input-1" max-rows="7"  v-model="torpedos.mensagem"
                        type="text"
                        required
                        no-resize
                      ></b-form-textarea>
                    </b-form-group>
                  </div>
                  <b-col lg="4" class="pb-2"><b-button @click="sendSmss" size="sm">Enviar</b-button></b-col>
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
                    <md-table v-model="smss" md-sort="name" md-sort-order="asc" md-card @md-selected="onSelect">
                      <md-table-toolbar>
                        <h1 class="md-title">Torpedos Enviados</h1>
                        <b-col lg="1" class="pb-2"><b-button @click="getSmss" size="sm">Atualizar</b-button></b-col>
                      </md-table-toolbar>
                      <md-table-toolbar slot="md-table-alternate-header" slot-scope="{ count }">
                        <div class="md-toolbar-section-start">{{ getAlternateLabel(count) }}</div>

                        <div class="md-toolbar-section-end">
                          <md-button @click="deleteSmss()" class="md-icon-button">
                            <i class="pi pi-trash" ></i>
                          </md-button>
                        </div>
                      </md-table-toolbar>
                      <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="multiple" md-auto-select>
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
