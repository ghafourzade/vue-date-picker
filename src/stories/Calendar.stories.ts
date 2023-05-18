import type { Meta, StoryObj } from "@storybook/vue3";

import DatePicker from "@components/DatePicker";
import { gregorianCalendar, jalaliCalendar } from "@services/Calendar";
import { ref } from "vue";

const meta: Meta<typeof DatePicker> = {
  title: "DatePicker",
  component: DatePicker,
  argTypes: {
    currentCalendar: { control: "radio", options: [0, 1] },
    monthCount: { control: "radio", options: [1, 2] },
  },
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Primary: Story = {
  render: args => ({
    components: { DatePicker },
    setup() {
      const value = ref({ start: null, end: null });
      return { args, value };
    },
    template: '<DatePicker v-bind="$props" v-on="$props" v-model="value" />',
  }),
  args: {
    calendars: [jalaliCalendar, gregorianCalendar],
    range: true,
    currentCalendar: 0,
    monthCount: 2,
  },
};
