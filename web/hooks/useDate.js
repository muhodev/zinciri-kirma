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

  const dateString = firstDayOfMonth.toLocaleDateString("tr-TR", {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  console.log(dateString);

  const paddingDays = firstDayOfMonth.getDay() - weekdays.indexOf(weekFirstDay);

  for (let i = 1; i <= paddingDays + daysInMonth; i++) {
    const dayString = `${month + 1}/${i - paddingDays}/${year}`;

    if (i > paddingDays) {
      days.push({
        value: i - paddingDays,
        isCurrentDay: i - paddingDays === day,
        date: dayString,
      });
    } else {
      days.push({
        value: new Date(year, month, 0).getDate() - (paddingDays - i),
        isCurrentDay: false,
        date: "",
      });
    }
  }
  let len = 42 - days.length;
  for (let index = 0; index < len; index++) {
    days.push({
      value: index + 1,
      isCurrentDay: false,
      date: "",
    });
  }

  return {
    days,
  };
};
