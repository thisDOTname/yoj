<template>
<div>
<section id="out--section" class="fixed--section">
    <div class="lg--bottom-triangle primary-color"></div>
	<!-- // HEADER -->
    <header class="primary-text-color">
        <h1 class="accent-text-color">YOJNA</h1>
        <h4 class="accent-text-color">PLAN YOUR PROJECTS</h4>

        <div class="wrapper">
            <div class="lg--box-container primary-color">
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="content">
                <div class="lg--box-heading accent-text-color">Log-in</div>
                <v-container fluid>
                    <form v-on:submit.prevent="logMeIn()">
                        <v-layout row>
                        <v-flex xs12>
                            <v-text-field
                            name="email"
                            label="Email"
                            id="email"
                            v-model="auth.email"
                            required
                            ></v-text-field>
                        </v-flex>
                        </v-layout>
                        <v-layout row>
                        <v-flex xs12>
                            <v-text-field
                            name="password"
                            label="Password"
                            id="password"
                            type="password"
                            v-model="auth.password"
                            required
                            ></v-text-field>
                        </v-flex>
                        </v-layout>
                        <div row class="text-xs-center">
                            <v-btn type="submit" round outline light class="accent-text-color">Log-in</v-btn>
                        </div>
                    </form>
                </v-container>
                </div>
            </div>
        </div>
    </header>
</section>
</div>
</template>

<script src="./login.js">

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../../../static/css/login.css';
</style>
