module.exports = {
  url: 'http://the-internet.herokuapp.com/login',
  input: {
    name: '#username',
    password: '#password',
  },
  button: {
    submit: '[type=submit]',
    logout: 'a.button',
  },
  message: 'You logged into a secure area!',
}
