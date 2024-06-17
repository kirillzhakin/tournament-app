<template>
  <v-container>
    <v-tabs v-model="tab">
      <v-tab>Основной турнир</v-tab>
      <v-tab>Отборочный этап</v-tab>
      <v-tab>Ожидающие игроки</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <player-table :players="mainTournamentPlayers" />
      </v-tab-item>
      <v-tab-item>
        <player-table :players="qualifyingStagePlayers" />
      </v-tab-item>
      <v-tab-item>
        <player-table :players="waitingPlayers" />
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PlayerTable from "./PlayerTable.vue";
import { DATA_TABLE } from "@/data";
import type { Player } from "@/types";
import { MAIN_TOUR, QUAL_STAGE, LATE_APP } from "@/const";

@Component({
  components: {
    PlayerTable,
  },
})
export default class MainContent extends Vue {
  tab = 0;

  players: Player[] = DATA_TABLE;

  get mainTournamentPlayers() {
    return this.players.filter(({ stage }) => stage === MAIN_TOUR);
  }

  get qualifyingStagePlayers() {
    return this.players.filter(({ stage }) => stage === QUAL_STAGE);
  }

  get waitingPlayers() {
    return this.players.filter(({ comment }) => comment === LATE_APP);
  }
}
</script>
