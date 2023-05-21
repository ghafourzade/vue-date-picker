import { ICustomizableDatePickerProps } from "@components/CustomizableDatePicker/CustomizableDatePicker.interface";

export interface IDatePickerProps extends ICustomizableDatePickerProps {
  color?: string | null;
  darkMode?: boolean | null;
}
