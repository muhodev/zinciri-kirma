import Link from "next/link";
import { useRouter } from "next/router";
import { months } from "locale";

export function Header(props) {
  const { query } = useRouter();
  return (
    <header className="border-b shadow-sm h-14 flex items-center w-full justify-center">
      <div className="container flex items-center justify-between">
        <div className="flex">
          <div>Logo</div>
        </div>
        <div className="flex flex-1 mx-8 justify-between">
          <div>Hedefim</div>
          <div className="flex items-center">
            <div>
              <Link href={`/calendar/${query.yil}/${+query.ay - 1}/1`}>
                <a>Left</a>
              </Link>
            </div>
            <div>{months[query.ay - 1]}</div>
            <div>
              <Link href={`/calendar/${query.yil}/${+query.ay + 1}/1`}>
                <a>Right</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex">
          <div>Profil</div>
        </div>
      </div>
    </header>
  );
}
