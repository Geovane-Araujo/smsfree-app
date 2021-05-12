export default async (to, from, next) => {
  document.title = 'Sms Free'

  if (to.name === 'Home') {
    next()
  } else if (to.name === 'Login') {
    next()
  } else if (to.name === 'Cadastro') {
    next()
  } else if (to.name === 'Principal' && localStorage.getItem('token') !== '') {
    next()
  } else {
    next({ name: 'Login' })
  }
}
