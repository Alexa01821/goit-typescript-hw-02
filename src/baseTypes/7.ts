/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekdays {
  monday = "monday",
  tuesday = "tuesday",
  Wednesday = "monday",
  thursday = "thursday",
  friday = "friday",
  saturday = "saturday",
  sunday = "sunday",
}
const isWeekend = (day: Weekdays): boolean => {
  const bool =
    day === Weekdays.saturday || day === Weekdays.sunday;
  return bool;
};
