export function HeaderBase(props) {
  return (
    <header className="border-b shadow-sm h-16 flex items-center w-full justify-center">
      <div className="mx-6 w-full flex items-center justify-between">
        {props.children}
      </div>
    </header>
  );
}
