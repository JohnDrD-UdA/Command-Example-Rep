<template>
  <v-row>
    <v-col md="6">
      <v-text-field placeholder="operando 1" v-model="params.a"> </v-text-field>
    </v-col>
    <v-col md="6">
      <v-text-field placeholder="operando 2" v-model="params.b"> </v-text-field>
    </v-col>
    <v-col md="12" style="text-align: center; margin: auto">
      <v-divider></v-divider>
      {{ resultText }}
    </v-col>
    <v-col md="12" style="text-align: center">
      <v-divider></v-divider>
      <v-btn
        elevation="2"
        raised
        rounded
        color="primary"
        @click="addNumbers()"
        style="margin: 10px"
        >Sumar</v-btn
      >
      <v-btn
        elevation="2"
        raised
        rounded
        @click="subNumbers()"
        style="margin: 10px"
        color="secondary"
        >Restar</v-btn
      >
      <v-btn
        elevation="2"
        raised
        rounded
        @click="timesNumbers()"
        style="margin: 10px"
        color="accent"
        >Multiplicar</v-btn
      >
    </v-col>
  </v-row>
</template>
<script lang="ts" src="./calculator.ts"></script>
