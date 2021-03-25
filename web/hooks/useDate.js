import { shortMonths } from "locale";
import { useEffect, useState } from "react";

export const useDate = ({ yil, ay }) => {
  let days = [];

  const weekFirstDay = "Pazartesi";

  const weekdays = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  const dt = new Date(yil, ay - 1, 1);

  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear();

  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let paddingDays = firstDayOfMonth.getDay() - weekdays.indexOf(weekFirstDay);

  if (paddingDays < 0) {
    paddingDays = weekdays.length + paddingDays;
  }

  for (let i = 1; i <= paddingDays + daysInMonth; i++) {
    const dayString = `${month + 1}/${i - paddingDays}/${year}`;

    if (i > paddingDays) {
      let value =
        i - paddingDays === 1
          ? `${i - paddingDays} ${shortMonths[month]}`
          : i - paddingDays;
      days.push({
        value: value,
        isCurrentDay:
          new Date(yil, ay - 1, i - paddingDays).toLocaleDateString() ===
          new Date().toLocaleDateString(),
        date: dayString,
        isPadding: false,
      });
    } else {
      days.push({
        value: new Date(year, month, 0).getDate() - (paddingDays - i),
        isCurrentDay: false,
        date: "",
        isPadding: true,
      });
    }
  }
  let len = 42 - days.length;
  for (let index = 0; index < len; index++) {
    days.push({
      value:
        index + 1 === 1
          ? `${index + 1} ${shortMonths[month === 11 ? 0 : month + 1]}`
          : index + 1,
      isCurrentDay: false,
      date: "",
      isPadding: true,
    });
  }
  console.log(month);

  return {
    days,
  };
};
