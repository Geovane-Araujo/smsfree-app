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
              <div class="row">
                <div class="col-sm-4">
                  <h2>Olá Geovane Araújo...</h2>
                  <div style="margin-top:50px" class="col sm-12">
                    <h4>Token</h4>
                    <p>s5d4s5sdsadasdhg===</p>
                  </div>
                </div>
                <div class="smsrigt col-sm-8">
                  <img src="../assets/img/homens.png" alt="">
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
</style>
