import { Head, HomeHeader } from "components";

export function DefaultLayout(props) {
  return (
    <>
      <Head />
      <HomeHeader />
      <main>{props.children}</main>
      <footer></footer>
    </>
  );
}
