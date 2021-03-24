import { Head } from "components";

export function DefaultLayout(props) {
  return (
    <>
      <Head />
      <header></header>
      <main>{props.children}</main>
      <footer></footer>
    </>
  );
}
