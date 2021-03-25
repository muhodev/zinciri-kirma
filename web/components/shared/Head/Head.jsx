import NextHead from "next/head";

export function Head(props) {
  return (
    <NextHead>
      <title>Takvim {props.title && ` | ${props.title}`}</title>
    </NextHead>
  );
}
