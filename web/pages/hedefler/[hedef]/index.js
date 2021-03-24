import { DefaultLayout } from "components";
import style from "./style.module.css";

export default function HedefPage(props) {
  return (
    <DefaultLayout>
      <div className={style.hedef}>
        {[...new Array(35)].map((item, index) => (
          <div className="border-r border-b" key={index}>
            {index}
          </div>
        ))}
      </div>
    </DefaultLayout>
  );
}
