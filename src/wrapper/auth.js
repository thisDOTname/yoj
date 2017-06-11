const VALIDATE_REGISTER_EMAIL = '/api/verifyEmail'
const ADD_ORGANISATION = '/api/organisation/add'

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
    }
  }
}
