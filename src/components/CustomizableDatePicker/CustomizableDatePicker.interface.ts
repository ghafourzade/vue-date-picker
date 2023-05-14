import { Calendar, InputValue } from "@/interfaces/Calendar";

type TOnlyPick = "start" | "end";

export interface ICustomizableDatePickerProps {
  calendars: Calendar[];
  value?: InputValue;
  monthCount?: number;
  currentCalendar?: number;
  range?: boolean;
  onlyPick?: TOnlyPick;
  readOnly?: boolean;
  min?: Date;
  max?: Date;
  startMonthFromNow?: boolean;
  trackStart?: boolean;
  unequalRange?: boolean;
}
