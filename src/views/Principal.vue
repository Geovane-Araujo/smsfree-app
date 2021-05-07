<template>
  <div>
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
              <h2>Olá Geovane Araújo</h2>
            </div>
          </div>
        </div>
      </div>
      <div style="margin-top: 10px" class="row">
        <div class="col-sm-4">
          <div class="card-left">
            <div class="smscenter">
              <h2>Token</h2>
            </div>
          </div>
        </div>
        <div class="col-sm-8">
          <div class="card-botton">
            <h2>Ultimos Enviados</h2>
          </div>
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
h1{
  color: white;
}
.sts{
  font-family: 'ubuntu';
}
.card-left{
  background-color: white;
  border-radius: 20px;
  height: 300px;
}
.card-botton{
  background-color: white;
  border-radius: 20px;
  height: 300px;
}
</style>
