import auth from '../../../wrapper/auth'
import store from '../../../store/index'

export default {
  name: 'Login',
  data () {
    return {
      auth: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    logMeIn: function () {
      var vm = this
      auth.methods.doLogin(vm, vm.auth)
      .then(function(resp) {
        alert('Login successful!')
        store.dispatch('auth/logInSuccess')
        store.dispatch('auth/setLoggedInUser', resp[0])
        console.log(' doLogin SUCCESS resp :-> ', resp)
      })
      .catch(function(e) {
        if (e.status === 404) {
          alert('Invalid credentials!')
          store.dispatch('auth/logInFailure')
        }
      })
    }
  },
  mounted: function () {
    store.dispatch('auth/logOutUser')
  }
}