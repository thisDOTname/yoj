<template>
  <div class="lg--base">
    <v-layout>
      <v-flex xs10 offset-xs1>
        <v-card class="lg-main-card white">
          <div class="lg-main-wrapper">
            <div class="rg-form-wrapper">
              <div class="shell-logo-text shell-logo-left shell-logo-large accent-text-color">YOJNA</div>
              <v-container fluid>
                <div class="rg-form-title" v-if="showForm">
                    Sign Up Form
                </div>
                <form v-on:submit.prevent="registerMe()" v-if="showForm">
                    <v-layout row>
                        <v-flex xs12>
                            <v-text-field
                            name="email"
                            label="Email"
                            id="email"
                            v-model="u.email"
                            type="email"
                            required
                            class="input-group--focused"
                            prepend-icon="email"
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12>
                            <v-text-field
                            name="password"
                            label="Password"
                            id="password"
                            v-model="u.password"
                            :append-icon="hidePassword ? 'visibility' : 'visibility_off'"
                            :append-icon-cb="() => (hidePassword = !hidePassword)"
                            :type="hidePassword ? 'password' : 'text'"
                            v-bind:rules="[() => /^[a-zA-Z0-9]{8,15}$/.test(u.password) || 'Use a 8-15 characters long alpha-numeric password']"
                            min="8"
                            max="15"
                            counter
                            required
                            class="input-group--focused"
                            prepend-icon="vpn_key"
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12>
                            <v-text-field
                            name="fName"
                            label="First Name"
                            id="fName"
                            v-model="u.fName"
                            required
                            class="input-group--focused"
                            prepend-icon="account_circle"
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12>
                            <v-text-field
                            name="lName"
                            label="Last Name"
                            id="lName"
                            v-model="u.lName"
                            required
                            class="input-group--focused"
                            prepend-icon="account_circle"
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12>
                            <v-text-field
                            name="orgName"
                            label="Organisation Name"
                            id="orgName"
                            v-model="org.name"
                            type="text"
                            required
                            class="input-group--focused"
                            prepend-icon="business"
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12>
                            <v-text-field
                            name="orgSubDomain"
                            label="Organisation Alias"
                            id="orgAlias"
                            v-model="org.alias"
                            type="text"
                            required
                            prefix="yojna.co/"
                            class="input-group--focused"
                            prepend-icon="domain"
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                    <div row class="text-xs-center">
                        <v-btn type="submit" round outline light class="accent-text-color">Sign Me Up!</v-btn>
                    </div>
                </form>
                <span class="loader rg-spinner accent-color" v-if="!showForm && !registerResponse"><span class="loader-inner"></span></span>
            <div class="rg--final-state" v-if="!showForm">
                <div class="rg--response-state-body rg--success-response" v-if="registerResponse && regSuccess" >
                    <div class="rg--response-state-body-header">
                        Congratulations!
                    </div>
                    <div class="rg--response-state-body-text">
                        Log-in and start planning your next release
                    </div>
                    <router-link class="btn btn--raised rg--login-btn primary-color white--text" :to="{ name: 'Login'}">Log In</router-link>
                </div>
                <div class="rg--response-state-body rg--failure-response" v-if="registerResponse && regFailure" >
                    <div class="rg--response-state-body-header">
                        Oh no!
                    </div>
                    <div class="rg--response-state-body-text">
                        {{responseMessage}}
                    </div>
                    <v-btn class="rg--login-btn accent-color" v-if="!emailError" @click.native="resetRegistration()">
                        Try Again
                    </v-btn>
                    <router-link class="btn btn--raised rg--login-btn accent-color white--text" :to="{ name: 'Login'}">Log In</router-link>
                </div>
            </div>
              </v-container>
            </div>
            <div class="lg-billboard-wrapper">
              <div class="lg-billboard-text-wrapper">
                <div class="lg-billboard-title">
                  Great Choice!
                </div>
                <div class="rg-billboard-text">
                  Create your free account and get started with <span class="shell-logo-text accent-text-color">YOJNA</span> 
                </div>
              </div>
            </div>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script src="./register.js">

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.rg--response-state-body-header {
    font-size: 3rem;
    font-weight: 700;
    margin: 2rem 0;
}

.rg--response-state-body-text {
    font-size: 1.5rem;
    margin: 1rem 0;
}

.rg--login-btn {
    margin: 2rem 0;
}

.rg-form-title {
    text-align: left;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 3rem;
    border-bottom: 1px solid #ddd;
    padding-bottom: 1rem;
    color: #666;
}

.rg-spinner {
    left: 17%;
}

</style>
