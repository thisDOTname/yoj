import auth from '../../../wrapper/auth'

export default {
  name: 'Register',
  data () {
    return {
      registerStep: 1,
      hidePassword: true,
      addUserSuccess: false,
      addUserFailure: false,
      u: {
          fName: '',
          lName: '',
          email: '',
          password: '',
          organisation: 0
      },
      org: {
        name: '',
        website: '',
        desc: '',
        created_by: ''
      }
    }
  },
  methods: {
    verifyEmail: function () {
      var vm  = this
      var isValidPassword = /^[a-zA-Z0-9]{8,15}$/.test(vm.u.password)
      if (isValidPassword) {
        auth.methods.validateRegisterEmail(vm, vm.u.email)
        .then(function(resp) {
          vm.registerStep++
        })
        .catch(function(e) {
          console.log(' ERROR e --> ', e)
          vm.registerStep = 4
          vm.addUserSuccess = false
          vm.addUserFailure = true
        })
      } else {
        alert(' Please enter a valid password ')
      }
    },
    addOrganisation: function () {
      var vm = this
      vm.registerStep++
    },
    createUser: function () {
      var vm = this
      var userData = {
        'user': vm.u,
        'org': vm.org
      }
      auth.methods.createUser(vm, userData)
      .then(function (resp) {
        vm.registerStep++
        vm.addUserSuccess = true
        vm.addUserFailure = false
      })
      .catch(function (e) {
        console.log(' createUser ERROR RESP :-> ', e)
        vm.registerStep++
        vm.addUserSuccess = false
        vm.addUserFailure = true
      })
    }
  }
}