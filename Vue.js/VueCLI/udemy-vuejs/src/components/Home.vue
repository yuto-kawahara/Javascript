<template>
  <div>
    <p v-border:solid.round.shadow="{width: '10px', color: 'brown'}">Home</p>
    <h2>{{title | upperCase}}</h2>
    <h2>{{subTitle | upperCase}}</h2>
    <h2>{{title | lowerCase }}</h2>
    <h2>{{subTitle | lowerCase}}</h2>
    <p>{{number}}</p>
    <button @click="number++">+1</button>
    <CountNumber></CountNumber>
  </div>
</template>

<script>
import CountNumber from "./CountNumber.vue";
import { tokyoNumber } from "@/tokyoNumber";

export default {
  mixins: [tokyoNumber],
  components: {
    CountNumber
  },
  // computed:{
  //   upperCaseTitle() {
  //     return this.title.toUpperCase();
  //   }
  // },
  // filters: {
  //   lowerCase(value) {
  //     return value.toLowerCase();
  //   }
  // },
  directives: {
    border(el,binding) {
      el.style.border ="solid black 2px";
      el.style.borderWidth = binding.value.width;
      el.style.borderColor = binding.value.color;
      el.style.borderStyle = binding.arg;
      if(binding.modifiers.round) {
        el.style.borderRadius = "0.5rem";
      }
      if(binding.modifiers.shadow) {
        el.style.boxShadow = "0 2px 5px rgba(0,0,0,0.8)";
      }
    }
  }
}
</script>