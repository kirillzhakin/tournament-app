<template>
  <MainLayout>
    <MainContent />
  </MainLayout>
</template>

<script lang="ts">
import Vue from "vue";
import { MainLayout } from "@/layouts";
import { MainContent } from "@/components";

export default Vue.extend({
  name: "App",

  components: {
    MainLayout,
    MainContent,
  },

  data: () => ({}),
});
</script>
