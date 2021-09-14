<template>
  <div>
    <h2>{{title | upperCase}}</h2>
    <h2>{{subTitle | upperCase}}</h2>
    <h2>{{title | lowerCase }}</h2>
    <h2>{{subTitle | lowerCase}}</h2>
    <p>{{number}}</p>
    <button @click="number++">+1</button>
  </div>
</template>

<script>
import { tokyoNumber } from "@/tokyoNumber";
export default {
  mixins: [tokyoNumber],
}
</script>