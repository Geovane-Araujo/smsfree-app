import Home from '../views/Home.vue'
import Cadastro from '../views/Cadastro.vue'
import Security from '../security/login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Security
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro
  }
]

export default routes
