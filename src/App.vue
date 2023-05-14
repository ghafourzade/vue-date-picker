<script setup lang="ts">
import CustomizableDatePicker from "@/components/CustomizableDatePicker/CustomizableDatePicker.vue";
import { gregorianCalendar, jalaliCalendar } from "@/services/Calendar";
</script>

<template>
  <CustomizableDatePicker :calendars="[jalaliCalendar, gregorianCalendar]" />
</template>

<style scoped></style>
