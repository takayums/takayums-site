import { ReturnConvertTime } from "@/types/types";

function convertMiliseconds(secondsInput: number, format: 's' | 'm' | 'h' | 'd' | 'a' = 'a'): number | ReturnConvertTime {

  let total_seconds: number = secondsInput;
  let total_minutes: number = Math.floor(total_seconds / 60);
  let total_hours: number = Math.floor(total_minutes / 60);
  let days: number = Math.floor(total_hours / 24);

  let seconds: number = total_seconds % 60;
  let minutes: number = total_minutes % 60;
  let hours: number = total_hours % 24;

  switch (format) {
    case 's':
      return seconds;
    case 'm':
      return minutes;
    case 'h':
      return hours;
    case 'd':
      return days;
    default:
      return { d: days, h: hours, m: minutes, s: seconds };
  }
}

export { convertMiliseconds };

