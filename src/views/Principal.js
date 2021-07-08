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
        destinatarios: [
          {
            fone: ''
          }
        ]
      },
      mensagem: '',
      smss: [],
      selected: [],
      showLoading: false
    }
  },
  mounted () {
    this.form.nome = localStorage.getItem('nome')
    this.form.token = localStorage.getItem('token')
    console.log(this.form)
    this.getSmss()
  },
  methods: {
    onSelect (items) {
      this.selected = items
      console.log(this.selected)
    },
    async getSmss () {
      this.showLoading = true
      await axios.get(http.url + 'getsmss', { headers: { Authorization: 'Bearer ' + this.form.token } }).then(res => {
        if (res.data.ret === 'success') {
          this.smss = res.data.obj
        } else {
          alert(res.data.motivo)
        }
        this.showLoading = false
      }).catch(err => {
        alert(err)
        this.showLoading = false
      })
    },
    async sendSmss () {
      this.showLoading = true
      await axios.post(http.url + 'torpedos', this.torpedos, { headers: { Authorization: 'Bearer ' + this.form.token } }).then(res => {
        if (res.data.ret === 'success') {
          alert(res.data.obj)
        } else {
          alert(res.data.motivo)
        }
        this.getSmss()
      }).catch(err => {
        alert(err)
        this.showLoading = false
      })
    },
    async deleteSmss () {
      this.showLoading = true
      await axios.post(http.url + 'delete', this.selected, { headers: { Authorization: 'Bearer ' + this.form.token } }).then(res => {
        if (res.data.ret === 'success') {
          alert(res.data.obj)
          this.getSmss()
        } else {
          alert(res.data.motivo)
        }
        this.showLoading = false
      }).catch(err => {
        alert(err)
        this.showLoading = false
      })
    },
    getAlternateLabel (count) {
      let plural = ''

      if (count > 1) {
        plural = 's'
      }

      return `${count} user${plural} selected`
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
