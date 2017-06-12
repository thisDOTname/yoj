const VALIDATE_REGISTER_EMAIL = '/api/verifyEmail'
const ADD_ORGANISATION = '/api/organisation/add'
const ADD_USER = '/api/user/add'
const DO_LOGIN = '/api/login'

export default {
  methods: {
    validateRegisterEmail (context, email) {
      return new Promise((resolve, reject) => {
        context.$http.get(VALIDATE_REGISTER_EMAIL + '?e=' + email).then(response => {
          resolve(response.body)
        }, (response) => {
          reject(response)
        })
      })
    },
    addOrganisation (context, org) {
      return new Promise((resolve, reject) => {
        context.$http.post(ADD_ORGANISATION, org).then(response => {
          resolve(response.body)
        }, (response) => {
          reject(response)
        })
      })
    },
    createUser (context, userData) {
      return new Promise((resolve, reject) => {
        context.$http.post(ADD_USER, userData).then(response => {
          resolve(response.body)
        }, (response) => {
          reject(response)
        })
      })
    },
    doLogin (context, credentials) {
      return new Promise((resolve, reject) => {
        context.$http.post(DO_LOGIN, credentials).then(response => {
          resolve(response.body)
        }, (response) => {
          reject(response)
        })
      })
    }
  }
}
