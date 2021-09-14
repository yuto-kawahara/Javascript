<template>
 <!-- templateはルート要素を一つにしなければならないことに注意する -->
  <div>
   <p>いいね({{halfNumber}})</p>
   <button @click="increment">+1</button>
  </div>
</template>

<script>

export default {
  props: {
    totalNumber: {
      type:Number,
      default: 20
    }
  },
  computed: {
    halfNumber() {
      return this.totalNumber / 2;
    }
  },
  methods: {
    increment() {
      this.$emit("my-click",this.totalNumber);
    }
  }
}
</script>
