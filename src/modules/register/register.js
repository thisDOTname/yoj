import auth from '../../wrapper/auth'

export default {
  name: 'Register',
  data () {
    return {
      registerStep: 1,
      hidePassword: true,
      u: {
          fName: '',
          lName: '',
          email: '',
          password: '',
          organisation: 0
      },
      org: {
        name: '',
        alias: '',
        created_by: ''
      },
      showForm: true,
      regSuccess: false,
      regFailure: false,
      registerResponse: false,
      responseMessage: '',
      emailError: false
    }
  },
  methods: {
    registerMe: function () {
      var vm = this
      var isValidPassword = /^[a-zA-Z0-9]{8,15}$/.test(vm.u.password)
      if (isValidPassword) {
        vm.showForm = false
        auth.methods.validateRegisterEmail(vm, vm.u.email)
        .then(function(resp) {
          auth.methods.doRegistration(vm, vm.u, vm.org)
          .then(function(resp) {
            if (resp) {
              vm.registerResponse = true
              vm.regSuccess = true
              vm.regFailure = false
            }
          })
          .catch(function(e) {
            vm.registerResponse = true
            vm.regFailure = true
            vm.regSuccess = false
            vm.responseMessage = 'Our server failed to register you. Please try again!'
          })
        })
        .catch(function(e) {
          vm.registerResponse = true
          vm.regFailure = true
          vm.regSuccess = false
          vm.emailError = true
          vm.responseMessage = 'This email is already in use. Try resetting your password and logging in.'
        })
      } else {
        alert('Provide a valid password')
      }
    },
    verifyEmail: function () {
      var vm  = this
      console.log('PASSOWRD VALIDATION :- ', /^[a-zA-Z0-9]{8,15}$/.test(vm.u.password))
      var isValidPassword = /^[a-zA-Z0-9]{8,15}$/.test(vm.u.password)
      if (isValidPassword) {
        auth.methods.validateRegisterEmail(vm, vm.u.email)
        .then(function(resp) {
          console.log(' VALID EMAIL')
          vm.registerStep++
        })
        .catch(function(e) {
          console.log(' ERROR e --> ', e)
        })
      }
    },
    resetRegistration: function () {
      var vm = this

      vm.showForm = true
      vm.registerResponse = false
      vm.regFailure = false
      vm.regSuccess = false

      console.log('RESETTING REGISTERATION')
    },
    addOrganisation: function () {
      var vm = this
      vm.org.created_by = vm.u.email
      vm.registerStep++
      /*auth.methods.addOrganisation(vm, vm.org)
      .then(function(resp) {
        vm.u.organisation = resp.org_id
        vm.registerStep++
      })
      .catch(function(e) {
        console.log('ADD ORG ERROR :-> ', e)
      })*/
    }
  }
}