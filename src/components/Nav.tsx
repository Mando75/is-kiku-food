interface INavProps {}

function Nav(_props: INavProps) {
  const path = window.location;
  const person = path.pathname.includes("kikubro") ? "Kikubro" : "Kiku";
  return (
    <nav>
      <ul></ul>
      <ul>
        <li>
          <strong>Is {person} Food?</strong>
        </li>
      </ul>
      <ul></ul>
    </nav>
  );
}

export default Nav;
