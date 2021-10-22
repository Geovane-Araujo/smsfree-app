import Button from 'primevue/button'
import axios from 'axios'
import http from '../router/http'
import moment from 'moment'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
export default {
  data () {
    return {
      form: {
        nome: '',
        login: '',
        token: ''
      },
      torpedos: {
        mensagem: '',
        dataagendamento: moment(new Date()).format('yyyy-MM-DD HH:mm:ss'),
        destinatarios: []
      },
      fones: '',
      mensagem: '',
      smss: [],
      selected: [],
      showLoading: false
    }
  },
  mounted () {
    this.form.nome = localStorage.getItem('nome')
    this.form.token = localStorage.getItem('token')
    this.getSmss()
  },
  methods: {
    onSelect (items) {
      this.selected = items
    },
    async getSmss () {
      this.showLoading = true
      await axios.get(http.url + 'getsmss', { headers: { Authorization: 'Bearer ' + this.form.token } }).then(res => {
        if (res.data.ret === 'success') {
          this.smss = res.data.obj
          this.torpedos.destinatarios = []
        } else {
          this.$toast.add({ severity: 'error', summary: 'Send SMS', detail: res.data.motivo, life: 3000 })
        }
        this.showLoading = false
      }).catch(err => {
        this.$toast.add({ severity: 'error', summary: 'Send SMS', detail: err, life: 3000 })
        this.showLoading = false
      })
    },
    async sendSmss () {
      this.showLoading = true
      var splittelefones = this.fones.split(';')
      splittelefones.forEach(item => {
        var aux = {
          fone: item
        }
        this.torpedos.destinatarios.push(aux)
      })
      console.log(this.torpedos)
      await axios.post(http.url + 'torpedos', this.torpedos, { headers: { Authorization: 'Bearer ' + this.form.token } }).then(res => {
        if (res.data.ret === 'success') {
          this.$toast.add({ severity: 'success', summary: 'Send SMS', detail: res.data.obj, life: 3000 })
        } else {
          this.$toast.add({ severity: 'error', summary: 'Send SMS', detail: res.data.motivo, life: 3000 })
        }
        this.getSmss()
      }).catch(err => {
        this.$toast.add({ severity: 'error', summary: 'Send SMS', detail: err, life: 3000 })
        this.showLoading = false
      })
    },
    async deleteSmss () {
      this.showLoading = true
      await axios.post(http.url + 'delete', this.selected, { headers: { Authorization: 'Bearer ' + this.form.token } }).then(res => {
        if (res.data.ret === 'success') {
          this.$toast.add({ severity: 'success', summary: 'Send SMS', detail: res.data.obj, life: 3000 })
          this.getSmss()
        } else {
          this.$toast.add({ severity: 'error', summary: 'Send SMS', detail: res.data.motivo, life: 3000 })
        }
        this.showLoading = false
      }).catch(err => {
        this.$toast.add({ severity: 'error', summary: 'Send SMS', detail: err, life: 3000 })
        this.showLoading = false
      })
    },
    getAlternateLabel (count) {
      let plural = ''

      if (count > 1) {
        plural = 's'
      }

      return `${count} mensagem${plural} selecionada${plural}`
    },
    openDocumentation () {
      window.open('https://documenter.getpostman.com/view/10653101/TzeWHTg4')
    },
    openDownload () {
      window.open('https://sendsms.tech/api/static/SendSms.apk')
    }
  },
  components: {
    Button,
    Loading
  }
}
