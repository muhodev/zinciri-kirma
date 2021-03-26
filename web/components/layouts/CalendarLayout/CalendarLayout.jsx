import { Head } from "components";
import { CalendarPageHeader } from "components/product/Header/CalendarPageHeader/CalendarPageHeader";

export function CalendarLayout(props) {
  return (
    <>
      <Head />
      <div className="flex flex-col justify-start h-screen w-full">
        <CalendarPageHeader />
        <main className="flex-1">{props.children}</main>
      </div>
    </>
  );
}
