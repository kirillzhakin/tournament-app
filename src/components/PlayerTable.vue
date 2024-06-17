<!-- eslint-disable vue/valid-v-slot -->
<template>
  <div>
    <v-text-field
      v-model="search"
      class="search-input"
      append-icon="mdi-magnify"
      label="Поиск"
      single-line
      hide-details
    ></v-text-field>
    <v-data-table
      class="elevation-1"
      :headers="headers"
      :items="players"
      :item-class="itemClass"
      :search="search"
    >
      <template #item.pay_tour="{ item }">
        {{ item.pay_tour !== "0.00" ? "Оплачено" : "Не оплачено" }}
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import type { Player } from "@/types";

@Component
export default class PlayerTable extends Vue {
  @Prop({
    type: Array as () => Player[],
    required: true,
  })
  players!: Player[];
  search = "";

  headers = [
    { text: "№", value: "tm_id", sortable: false },
    { text: "РНИ", value: "rtt_number", sortable: false },
    { text: "ФИО", value: "name", sortable: false },
    { text: "Город", value: "doc_city", sortable: false },
    { text: "Дата рождения", value: "birth_date", sortable: false },
    { text: "Оплата ежегодного взноса", value: "pay_tour" },
    { text: "Дата заявки", value: "join_date" },
    { text: "Примечание", value: "comment", sortable: false },
  ];

  itemClass(item: Player) {
    return item.pay_tour === "0.00" ? "text-color" : "";
  }
}
</script>

<style>
.search-input {
  width: 350px;
  margin-bottom: 15px;
}
.text-color {
  color: #ef5350;
}
</style>
