import { Head } from "components";
import { CalendarPageHeader } from "components/product/Header/CalendarPageHeader/CalendarPageHeader";

export function CalendarLayout(props) {
  return (
    <>
      <Head />
      <CalendarPageHeader />
      <main>{props.children}</main>
      <footer></footer>
    </>
  );
}
