const VALIDATE_REGISTER_EMAIL = '/api/verifyEmail'
const ADD_ORGANISATION = '/api/organisation/add'
const ADD_USER = '/api/user/add'

export default {
  methods: {
    doRegistration (context, user, org) {
      return new Promise((resolve, reject) => {
        var self = this
        user.role = 'yoda'
        self.addUser(context, user)
        .then(response => {
          console.log('*** doRegistration | addUser resp -> ', response.body)
          org.created_by = response.body.user_id
          self.addOrganisation(context, org)
          .then(response => {
            console.log('*** doRegistration | addUser | addOrgansation resp -> ', response.body)
            resolve(true)
          }, (response) => {
            console.log(' *** addOrganisation error : ', response)
            reject(false)
          })
        }, (response) => {
          console.log('*** doRegistration | addUser error -> ', response)
          reject(false)
        })
      })
    },
    validateRegisterEmail (context, email) {
      return new Promise((resolve, reject) => {
        context.$http.get(VALIDATE_REGISTER_EMAIL + '?e=' + email)
        .then(response => {
          resolve(response.body)
        }, (response) => {
          reject(response)
        })
      })
    },
    addUser (context, user) {
      return new Promise((resolve, reject) => {
        console.log(' *** user : ', user)
        context.$http.post(ADD_USER, user)
        .then(response => {
          console.log('*** addUser resp -> ', response.body)
          resolve(response)
        }, (response) => {
          console.log('*** addUser error -> ', response)
          reject(response)
        })
      })
    },
    addOrganisation (context, org) {
      return new Promise((resolve, reject) => {
        context.$http.post(ADD_ORGANISATION, org)
        .then(response => {
          console.log('*** addOrganisation resp -> ', response.body)
          resolve(response)
        }, (response) => {
          console.log('*** addOrganisation error -> ', response)
          reject(response)
        })
      })
    }
  }
}
