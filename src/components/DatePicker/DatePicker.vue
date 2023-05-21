<script lang="ts" setup>
import CustomizableDatePicker from "@components/CustomizableDatePicker";
import { ICustomizableDatePickerEmits } from "@components/CustomizableDatePicker/CustomizableDatePicker.interface";
import { IDatePickerProps } from "./DatePicker.interface";
import { computed } from "@vue/reactivity";
const props = defineProps<IDatePickerProps>();
const emit = defineEmits<ICustomizableDatePickerEmits>();
const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <CustomizableDatePicker
    class="date-picker"
    :class="{ dark: props.darkMode }"
    :style="'--color-primaty: ' + props.color ?? '#188ef2'"
    v-model="value"
    v-bind="props"
    v-on="emit"
  >
    <template #day-container="{ day, daysInMonth }">
      <div
        class="day-wrapper"
        :class="{
          selected: day.isSelected,
          between: day.isBetween,
          disable: day.disabled,
          'start-range': day.startRange,
          'end-range': day.endRange,
          'start-week': day.dayInWeek === 0,
          'end-week': day.dayInWeek === 6,
          'start-month': day.dayInMonth === 1,
          'end-month': day.dayInMonth === daysInMonth,
          today: day.today,
        }"
      >
        <div class="day-container">
          <span class="holiday" v-if="day.dayInWeek === 6"></span>
          <div class="day">
            {{ day.dayInMonth }}
          </div>
          <div class="price">
            {{ 100 }}
          </div>
        </div>
      </div>
    </template>
  </CustomizableDatePicker>
</template>

<style lang="scss" src="./DatePicker.scss" scoped></style>
