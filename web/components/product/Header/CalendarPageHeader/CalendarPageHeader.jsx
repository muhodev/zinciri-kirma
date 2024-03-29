import Link from "next/link";
import { useRouter } from "next/router";
import { months } from "locale";
import { HeaderBase, Logo } from "components";
import { LeftArrow, RightArrow } from "components/icons";
import { isLastMonth, isFirstMonth } from "utils";
let today = new Date();

export function CalendarPageHeader(props) {
  const { query } = useRouter();
  let prevMonth = isFirstMonth(query.ay - 1)
    ? `/calendar/${+query.yil - 1}/12/1`
    : `/calendar/${+query.yil}/${+query.ay - 1}/1`;

  let nextMonth = isLastMonth(query.ay - 1)
    ? `/calendar/${+query.yil + 1}/1/1`
    : `/calendar/${+query.yil}/${+query.ay + 1}/1`;

  return (
    <HeaderBase>
      <div className="flex">
        <Logo />
      </div>
      <div className="flex flex-1 items-center mx-3 md:mx-8 justify-between">
        <div className="flex items-center">
          <div className="mr-5 hidden md:flex">
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
          <div className="flex items-center mr-3 md:mr-5">
            <div>
              <Link href={prevMonth}>
                <a>
                  <span className="text-2xl">
                    <LeftArrow />
                  </span>
                </a>
              </Link>
            </div>
            <div className="ml-3">
              <Link href={nextMonth}>
                <a>
                  <span className="text-2xl">
                    <RightArrow />
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div className="text-lg">
            {months[query.ay - 1]} {query.yil}
          </div>
        </div>
      </div>
      <div className="hidden md:flex">
        <div>Profil</div>
      </div>
    </HeaderBase>
  );
}
