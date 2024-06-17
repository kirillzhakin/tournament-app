<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-toolbar-title class="white--text">Таблицы</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <slot />
    </v-content>

    <v-footer app color="primary">
      <span class="white--text">&copy; Кирилл Жакин {{ currentYear }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class MainLayout extends Vue {
  get currentYear(): number {
    return new Date().getFullYear();
  }
}
</script>
<style lang="scss" scoped></style>
