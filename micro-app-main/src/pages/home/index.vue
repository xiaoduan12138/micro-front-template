<template>
<div>
  <section class="home-container">这是一个qiankun框架的微前端基座</section>
  <img alt='vue框架' src="@/assets/cmf1.png">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {}
</script>

<style lang="less" scoped>
.home-container {
  padding: 30px;
}
</style>
