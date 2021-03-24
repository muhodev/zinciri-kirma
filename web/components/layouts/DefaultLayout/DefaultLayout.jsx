import { Head, Header } from "components";

export function DefaultLayout(props) {
  return (
    <>
      <Head />
      <Header />
      <main>{props.children}</main>
      <footer></footer>
    </>
  );
}
