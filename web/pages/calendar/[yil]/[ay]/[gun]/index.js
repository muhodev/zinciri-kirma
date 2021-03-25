import { DefaultLayout } from "components";
import { useDate } from "hooks";
import style from "./style.module.css";
import { useRouter } from "next/router";

export default function HedefPage(props) {
  const { query } = useRouter();
  const { days } = useDate({ yil: query.yil, ay: query.ay, gun: query.gun });

  return (
    <DefaultLayout>
      <div className={style.hedef}>
        {days.map((item, index) => (
          <div className="border-r border-b" key={index}>
            <div className="text-sm text-center py-1">{item.value}</div>
          </div>
        ))}
      </div>
    </DefaultLayout>
  );
}
