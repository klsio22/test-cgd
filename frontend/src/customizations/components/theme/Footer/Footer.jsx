import LogoInformation from './LogoInformation';

const Footer = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="">
        <div className="bg-yellow-200 flex w-full p-8">
          <div className="flex mx-auto items-start justify-between w-[1024px]">
            <div>
              <h3>Acesso Rápido</h3>
              <ul>
                <li>
                  <a href="https://portal.utfpr.edu.br/pesquisa-e-pos-graduacao/pesquisador">
                    Apoio ao Pesquisador
                  </a>
                </li>
                <li>
                  <a href="https://portal.utfpr.edu.br/comissoes">Comissões</a>
                </li>
                <li>
                  <a href="http://portal.utfpr.edu.br/login">Login no portal</a>
                </li>
                <li>
                  <a href="https://nuvem.utfpr.edu.br/">Nuvem</a>
                </li>
                <li>
                  <a href="https://portal.utfpr.edu.br/servidores/site">
                    Portal do Servidor
                  </a>
                </li>
                <li>
                  <a href="https://portal.utfpr.edu.br/servicos-internos/utfpr-digital">
                    UTFPR Digital
                  </a>
                </li>
                <li>
                  <a href="http://mail.utfpr.edu.br/">Webmail</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Serviços</h3>
              <ul>
                <li>
                  <a href="https://portal.utfpr.edu.br/comunicacao">
                    Área de imprensa
                  </a>
                </li>
                <li>
                  <a href="https://portal.utfpr.edu.br/contato/ouvidoria">
                    Ouvidoria
                  </a>
                </li>
                <li>
                  <a href="https://portal.utfpr.edu.br/transparencia/">
                    Transparência
                  </a>
                </li>
                <li>
                  <a href="http://www.funtefpr.org.br">Fundação de apoio</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Redes sociais</h3>
              <ul>
                <li>
                  <a href="http://facebook.com/utfpr">Facebook</a>
                </li>
                <li>
                  <a href="https://www.flickr.com/photos/168609044@N04/">
                    Flickr
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/utfpr_">Instagram</a>
                </li>
                <li>
                  <a href="http://www.linkedin.com/school/universidade-tecnol%C3%B3gica-federal-do-paran%C3%A1/">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://bit.ly/utfpr_tk">Tik Tok</a>
                </li>
                <li>
                  <a href="https://bit.ly/utfpr_tk">Tik Tok</a>
                </li>
                <li>
                  <a href="https://twitter.com/utfpr_">Twitter</a>
                </li>
                <li>
                  <a href="http://youtube.com/canaldaUTFPR">YouTube</a>
                </li>
              </ul>
            </div>
            <div className="flex gap-3 flex-col">
              <div>
                <h3>RSS</h3>
                <ul>
                  <li>
                    <a href="https://portal.utfpr.edu.br/english">
                      English Version
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3>Navegação</h3>
                <ul>
                  <li>
                    <a href="https://portal.utfpr.edu.br/acessibilidade">
                      Acessibilidade
                    </a>
                  </li>
                  <li>
                    <a href="https://portal.utfpr.edu.br/mapadosite">
                      Mapa do site
                    </a>
                  </li>
                  <li>
                    <a href="https://portal.utfpr.edu.br/english">
                      English Version
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="py-8 w-[1024px] mx-auto">
          <div id="wrapper-footer-brasil" className="flex items-center">
            <a href="http://www.acessoainformacao.gov.br/">
              <LogoInformation />
            </a>
            <a
              className="logo-governo-federal"
              href="http://www.brasil.gov.br/"
              alt="Governo Federal"
              title="Governo Federal"
            >
              Acesso à informações
            </a>
          </div>
        </div>
        <div className="py-8 w-[1024px] mx-auto">
          <span>
            Desenvolvido com o CMS de código aberto{' '}
            <a href="https://plone.org/" alt="Link plone">
              Plone
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
