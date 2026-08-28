import "./style.scss";

export function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="newsletter">
        <div className="newsletter-content">
          <h3>Inscreva-se na nossa newsletter</h3>
          <p>
            Assine a nossa newsletter e receba as novidades e conteúdos
            exclusivos da Econverse.
          </p>
        </div>
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Digite seu nome" />
          <input type="email" placeholder="Digite seu e-mail" />
          <button type="submit">INSCREVER</button>
          <label className="terms">
            <input type="checkbox" /> Aceito os termos e condições
          </label>
        </form>
      </div>

      <div className="footer-links">
        <div className="brand-col">
          <h2>econverse</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="socials">📷 📘 💼</div>
        </div>

        <div className="link-col">
          <h4>Institucional</h4>
          <ul>
            <li>Sobre Nós</li>
            <li>Movimento</li>
            <li>Trabalhe conosco</li>
          </ul>
        </div>

        <div className="link-col">
          <h4>Ajuda</h4>
          <ul>
            <li>Suporte</li>
            <li>Fale Conosco</li>
            <li>Perguntas Frequentes</li>
          </ul>
        </div>

        <div className="link-col">
          <h4>Termos</h4>
          <ul>
            <li>Termos e Condições</li>
            <li>Política de Privacidade</li>
            <li>Troca e Devolução</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
