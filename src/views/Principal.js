import Button from 'primevue/button'
import axios from 'axios'
import http from '../router/http'
export default {
  data () {
    return {
      form: {
        nome: '',
        login: '',
        token: ''
      },
      smss: []
    }
  },
  mounted () {
    this.form.nome = localStorage.getItem('nome')
    this.form.token = localStorage.getItem('token')
    console.log(this.form)
    this.getSmss()
  },
  methods: {
    async getSmss () {
      await axios.get(http.url + 'getsmss', { headers: { Authorization: 'Bearer ' + this.form.token } }).then(res => {
        if (res.data.ret === 'success') {
          this.smss = res.data.obj
        } else {
          alert(res.data.motivo)
        }
      }).catch(err => {
        alert(err)
      })
    },
    openDocumentation () {
      window.open('https://documenter.getpostman.com/view/10653101/TzeWHTg4')
    },
    openDownload () {
      window.open('https://apisms.adonaisoft.com.br/static/send-sms.apk')
    }
  },
  components: {
    Button
  }
}
