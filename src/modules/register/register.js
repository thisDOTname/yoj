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
        website: '',
        desc: '',
        created_by: ''
      }
    }
  },
  methods: {
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