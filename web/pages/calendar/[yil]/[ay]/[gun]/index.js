import { DefaultLayout } from "components";
import { useDate } from "hooks";
import style from "./style.module.css";
import { useRouter } from "next/router";

const weekDays = [
  {
    title: "Pazartesi",
    short: "Pzt",
  },
  {
    title: "Salı",
    short: "Sal",
  },
  {
    title: "Çarşamba",
    short: "Çar",
  },
  {
    title: "Perşembe",
    short: "Per",
  },
  {
    title: "Cuma",
    short: "Cum",
  },
  {
    title: "Cumartesi",
    short: "Cmt",
  },
  {
    title: "Pazar",
    short: "Paz",
  },
];

export default function HedefPage(props) {
  const { query } = useRouter();
  const { days } = useDate({ yil: query.yil, ay: query.ay, gun: query.gun });

  return (
    <DefaultLayout>
      <div className={style.hedef}>
        <div className="w-full grid gap-0 grid-cols-7">
          {weekDays.map((weekDay, index) => (
            <div className="border-r text-center" key={index}>
              <span className="text-gray-500 text-xs py-1">
                {weekDay.short}
              </span>
            </div>
          ))}
        </div>
        <div className="grid gap-0 grid-cols-7 flex-1">
          {days.map((item, index) => (
            <div className="border-r border-b text-center mt-1" key={index}>
              <span
                className={`text-sm px-2 py-1 rounded-full cursor-pointer ${
                  item.isPadding ? `text-gray-500` : null
                } ${
                  item.isCurrentDay
                    ? `bg-blue-500 text-white`
                    : `hover:bg-gray-100`
                }`}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
}
