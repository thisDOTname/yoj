<template>
<div>
<section id="out--section">
	<!-- // HEADER -->
    <header class="primary-text-color">
        <h1 class="accent-text-color">YOJNA</h1>
        <h4 class="accent-text-color">PLAN YOUR PROJECTS</h4>

        <div class="rg--wrapper mt-5">
            <div class="rg-container">
                <div class="rg-content-heading accent-text-color">
                    Get started with YOJANA
                </div>
                <v-stepper v-model="registerStep" vertical>
                    <v-stepper-step step="1" v-bind:complete="registerStep > 1">
                        Set the locks
                        <small>
                            You know the drill
                        </small>
                    </v-stepper-step>
                    <v-stepper-content step="1">
                        <form v-on:submit.prevent="verifyEmail()">
                            <v-layout row>
                                <v-flex xs6>
                                    <v-text-field
                                    name="email"
                                    label="Email"
                                    id="email"
                                    v-model="u.email"
                                    type="email"
                                    required
                                    ></v-text-field>
                                </v-flex>
                                <v-flex xs6>
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
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-btn type="submit" primary light>Continue</v-btn>
                        </form>
                    </v-stepper-content>
                    <v-stepper-step step="2" v-bind:complete="registerStep > 2">
                        Add your organisation
                        <small>So that you can all work together</small>
                    </v-stepper-step>
                    <v-stepper-content step="2">
                        <form v-on:submit.prevent="addOrganisation()">
                            <v-layout row>
                                <v-flex xs6>
                                    <v-text-field
                                    name="orgName"
                                    label="Organisation Name"
                                    id="orgName"
                                    v-model="org.name"
                                    type="text"
                                    required
                                    ></v-text-field>
                                </v-flex>
                                <v-flex xs6>
                                    <v-text-field
                                    name="orgWebsite"
                                    label="Organisation Website"
                                    id="orgWebsite"
                                    v-model="org.website"
                                    type="text"
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex xs12>
                                    <v-text-field
                                    name="orgDesc"
                                    id="orgDesc"
                                    label="About your organisation"
                                    v-model="org.desc"
                                    multi-line
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-btn type="submit" primary light>Continue</v-btn>
                        </form>
                    </v-stepper-content>
                    <v-stepper-step step="3">
                        More about you
                        <small>How else will we know who you are</small>
                    </v-stepper-step>
                    <v-stepper-content step="3">
                        <form v-on:submit.prevent="verifyEmail()">
                            <v-layout row>
                                <v-flex xs6>
                                    <v-text-field
                                    name="fName"
                                    label="First Name"
                                    id="fName"
                                    v-model="u.fName"
                                    ></v-text-field>
                                </v-flex>
                                <v-flex xs6>
                                    <v-text-field
                                    name="lName"
                                    label="Last Name"
                                    id="lName"
                                    v-model="u.lName"
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-btn type="submit" primary light>Continue</v-btn>
                        </form>
                    </v-stepper-content>
                    <v-stepper-step step="4">View setup instructions</v-stepper-step>
                    <v-stepper-content step="4">
                        <v-card class="grey lighten-1 z-depth-1 mb-5" height="200px"></v-card>
                        <v-btn primary light @click.native="registerStep = 1">Continue</v-btn>
                        <v-btn flat light>Cancel</v-btn>
                    </v-stepper-content>
                </v-stepper>
            </div>
        </div>
    </header>
</section>
</div>
</template>

<script src="./register.js">

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rg-content-heading {
    font-size: 2rem;
    letter-spacing: 0.25rem;
}

.rg-container {
    width: 80%;
    height: 25rem;
    margin: auto;
}

</style>
