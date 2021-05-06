<template>
  <div>
    <div style="text-align: right;padding: 5px;">
        <Button @click="login()" style="margin-right: 10px" label="Entrar"  class="p-button-rounded" />
        <Button @click="cadastro()" style="margin-right: 10px" label="Cadastre-se" class="p-button-rounded" />
    </div>
    <section>
      <div>
        <div class="nav">
          <h1>SMS <spam style="color: #622774">Free</spam></h1>
          <p id="par">Pra que pagar uma api se você pode usar os torpedos gratuitos de sua operadora para enviar mensagens promocionais</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// https://www.youtube.com/watch?v=zx2axQoY_YM
// https://www.youtube.com/watch?v=hFsscx2U5bw
import Button from 'primevue/button'
export default {
  name: 'Home',
  components: {
    Button
  },
  mounted () {
    this.pipe()
  },
  methods: {
    pipe () {
      const text = document.getElementById('par').innerHTML.split('')
      document.getElementById('par').innerHTML = ''
      var i = 0
      text.forEach(a => {
        i++
        setTimeout(function () {
          document.getElementById('par').innerHTML += a
        }, 80 * i)
      })
    },
    login () {
      this.$router.push('dashboard')
    },
    cadastro () {
      this.$router.push('cadastro')
    }
  }
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300&family=Ubuntu:wght@500&display=swap');
h1{
  font-size: 140px;
  font-family: "Ubuntu";
  margin-left: 50px;
  color:white;
}
p{
  font-size: 20px;
  margin-left: 50px;
  color:white;
}
p::after{
  content: "|";
  color:white;
  margin-left: 5px;
  opacity: 1;
  animation: piscadinha .7s infinite;
}
@keyframes piscadinha {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
.nav{
  justify-content:center;
  height: 90vh;
  width: 50vw;
  display: table-cell;
  vertical-align: middle;
}
.home{
  text-align: right;
}
</style>
