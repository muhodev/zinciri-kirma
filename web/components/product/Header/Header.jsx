import Link from "next/link";
import { useRouter } from "next/router";
import { months } from "locale";
import { LeftArrowIcon, RightArrowIcon } from "components/icons";
let today = new Date();

export function Header(props) {
  const { query } = useRouter();
  return (
    <header className="border-b shadow-sm h-16 flex items-center w-full justify-center">
      <div className="mx-6 w-full flex items-center justify-between">
        <div className="flex">
          <div>Logo</div>
        </div>
        <div className="flex flex-1 items-center mx-8 justify-between">
          <div className="flex items-center">
            <div className="mr-5">
              <Link
                href={`/calendar/${today.getFullYear()}/${
                  today.getMonth() + 1
                }/${today.getDate()}`}
              >
                <a className="rounded py-1 px-2 border hover:bg-gray-100">
                  Bugün
                </a>
              </Link>
            </div>
            <div className="flex items-center mr-5">
              <div>
                <Link href={`/calendar/${query.yil}/${+query.ay - 1}/1`}>
                  <a>
                    <LeftArrowIcon />
                  </a>
                </Link>
              </div>
              <div className="ml-3">
                <Link href={`/calendar/${query.yil}/${+query.ay + 1}/1`}>
                  <a>
                    <span>
                      <RightArrowIcon />
                    </span>
                  </a>
                </Link>
              </div>
            </div>
            <div className="text-lg">
              {months[query.ay - 1]} {query.yil}
            </div>
          </div>
          <div>Hedefim</div>
        </div>
        <div className="flex">
          <div>Profil</div>
        </div>
      </div>
    </header>
  );
}
