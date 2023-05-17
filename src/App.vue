<script setup lang="ts">
import { ref } from "vue";
import { InputValue } from "@interfaces/Calendar";
import CustomizableDatePicker from "@components/CustomizableDatePicker";
import { gregorianCalendar, jalaliCalendar } from "@services/Calendar";

const value = ref<InputValue>({
  start: null,
  end: null,
});
const currentCalendar = ref(0);
</script>

<template>
  <CustomizableDatePicker
    :calendars="[jalaliCalendar, gregorianCalendar]"
    v-model="value"
    :currentCalendar="currentCalendar"
    :month-count="2"
    range
  />
</template>

<style scoped></style>
