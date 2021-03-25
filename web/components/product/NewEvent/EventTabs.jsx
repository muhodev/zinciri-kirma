import cn from "classnames";
import style from "./style.module.css";

const tabs = ["Hedef", "Todo", "Etkinlik"];

export function EventTabs(props) {
  return (
    <div className="flex items-center py-4">
      {tabs.map((tab, index) => (
        <div
          onClick={() => props.changeTab(tab)}
          className={cn({
            [style.active]: props.activeTab === tab,
            [style.tab]: true,
          })}
          key={index}
        >
          {tab}
        </div>
      ))}
    </div>
  );
}
