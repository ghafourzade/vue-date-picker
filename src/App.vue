<script setup lang="ts">
import { ref, watch } from "vue";
import { InputValue } from "@/interfaces/Calendar";
import CustomizableDatePicker from "@/components/CustomizableDatePicker";
import { gregorianCalendar, jalaliCalendar } from "@/services/Calendar";

const value = ref<InputValue>({
  start: null,
  end: null,
});
const currentCalendar = ref(0);

watch(
  value,
  val => {
    console.log(val);
  },
  { deep: true }
);

const onDayClick = (day: any) => {
  // console.log(day);
};
</script>

<template>
  <CustomizableDatePicker
    :calendars="[jalaliCalendar, gregorianCalendar]"
    v-model="value"
    :currentCalendar="currentCalendar"
    :month-count="2"
    range
    @day-click="onDayClick"
  />
</template>

<style scoped></style>
