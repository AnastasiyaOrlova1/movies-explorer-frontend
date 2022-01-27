import "./NavTab.css";

export default function NavTab(props) {
  return (
    <nav className="navtab-navigation">
      <ul className="navtab-navigation__links">
        <li>
          <a className="navtab-navigation__link button" href="#about-project">
            О проекте
          </a>
        </li>
        <li>
          <a className="navtab-navigation__link button" href="#techs">
            Технологии
          </a>
        </li>
        <li>
          <a className="navtab-navigation__link button" href="#about-me">
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}