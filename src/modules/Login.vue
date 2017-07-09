<template>
  <div class="lg--base">
    <v-layout>
      <v-flex xs10 offset-xs1>
        <v-card class="lg-main-card white">
          <div class="lg-main-wrapper">
            <div class="lg-form-wrapper">
              <div class="shell-logo-text shell-logo-left shell-logo-large accent-text-color">YOJNA</div>
              <v-container fluid>
                <v-layout row>
                <v-flex xs12>
                    <v-text-field
                    name="username"
                    label="Username"
                    id="username"
                    prepend-icon="sentiment_satisfied"
                    ></v-text-field>
                </v-flex>
                </v-layout>
                <v-layout row>
                <v-flex xs12>
                    <v-text-field
                    name="password"
                    label="Password"
                    id="password"
                    prepend-icon="vpn_key"
                    ></v-text-field>
                </v-flex>
                </v-layout>
                <div row class="text-xs-center">
                    <v-btn round outline light class="accent-text-color">Log-in</v-btn>
                </div>
              </v-container>
            </div>
            <div class="lg-billboard-wrapper">
              <div class="lg-billboard-text-wrapper">
                <div class="lg-billboard-title">
                  Optimized Project Management
                </div>
                <div class="lg-billboard-text">
                  For agile teams 
                </div>
              </div>
            </div>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script src="./login.js">

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../static/css/login.css';


</style>
