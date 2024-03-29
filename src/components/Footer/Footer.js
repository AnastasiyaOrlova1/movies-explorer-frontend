import "./Footer.css";

export default function Footer(props) {

  const footerClassName = (
    `${props.isSign ? 'footer_hidden' : 'footer'}`
  )

  return (
    <footer className={`${footerClassName}`}>
      <h3 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__content">
        <p className="footer__year">&copy; 2020</p>
        <ul className="footer__links">
          <li className="footer__link-element">
            <a className="footer__link" href="https://praktikum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
          </li>

          <li className="footer__link-element">
            <a className="footer__link" href="https://github.com/AnastasiyaOrlova1" target="_blank" rel="noreferrer">Github</a>
          </li>

          <li className="footer__link-element">
            <a className="footer__link" href="https://www.facebook.com/anastasiya.orlova.121" target="_blank" rel="noreferrer">Facebook</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}