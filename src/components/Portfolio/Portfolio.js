import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <li className="portfolio__links-element">
          <a className="portfolio__link" href="https://how-to-learn-one.vercel.app/">
            Статичный сайт
          </a>
          <a className="portfolio__link" href="https://how-to-learn-one.vercel.app/">↗</a>
        </li>
        <li className="portfolio__links-element">
          <a className="portfolio__link" href="https://anastasiyaorlova1.github.io/russian-travel/">
            Адаптивный сайт
          </a>
          <a className="portfolio__link" href="https://anastasiyaorlova1.github.io/russian-travel/">↗</a>
        </li>
        <li className="portfolio__links-element">
          <a className="portfolio__link" href="https://github.com/AnastasiyaOrlova1/react-mesto-api-full">
            Одностраничное приложение
          </a>
          <a className="portfolio__link" href="https://github.com/AnastasiyaOrlova1/react-mesto-api-full">↗</a>
        </li>
      </ul>
    </section>
  );
}
