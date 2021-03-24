import style from "./style.module.css";

export function Header(props) {
  return (
    <header className="border-b shadow-sm h-14 flex items-center w-full justify-center">
      <div className="container flex items-center justify-between">
        <div className="flex">
          <div>Logo</div>
        </div>
        <div className="flex flex-1 mx-8 justify-between">
          <div>Hedefim</div>
          <div className="flex items-center">
            <div>Mayıs</div>
          </div>
        </div>
        <div className="flex">
          <div>Profil</div>
        </div>
      </div>
    </header>
  );
}
