<template>
  <div>
    <LikeHeader>
      <template v-slot:title>
        <h1>こんにちわ</h1>
      </template>
      <h3>はじめまして</h3>
      <p>よろしくお願いします</p>
      <template v-slot:num>
        <h2>({{number}})</h2>
      </template>
    </LikeHeader>
    <p>{{number}}</p>
    <LikeNumber @my-click="incrementNumber"></LikeNumber>
    <LikeNumber :total-number="number"></LikeNumber>
  </div>
</template>

<script>
//ローカルコンポーネントの使用方法
import LikeHeader from "./components/LikeHeader.vue";

export default {
  data() {
    return {
      number: 7
    }
  },
  components: {
    LikeHeader
  },
  methods: {
    incrementNumber(value) {
      this.number = value + 1;
    }
  }
}
</script>

<style scoped>
  div {
    border: 1px solid blue;
  }
</style>