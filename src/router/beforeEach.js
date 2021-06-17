export default async (to, from, next) => {
  document.title = 'Send SMS'

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
