const products = [
  {
    name: 'Envases de caña de azúcar',
    description:
      'Solución principal para restaurantes y dark kitchens que necesitan empaques resistentes para comida caliente, delivery y takeout.',
    stat: '100% compostables',
    service: 'Servicio asociado: venta por mayor, asesoría de formatos y personalización con tintas de soya.',
    details: ['Aptos para comida caliente', 'Compatibles con microondas', 'Alta resistencia a humedad y grasa'],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Empty_takeaway_cheeseburger_box_Romford_outdoor_market_at_Market_Place_Romford_London_01.jpg',
    alt: 'Caja de comida para llevar similar a un envase compostable de caña de azúcar',
    credit: 'Acabashi, Wikimedia Commons, CC BY-SA 4.0',
  },
  {
    name: 'Vasos de PLA',
    description:
      'Opción transparente para cafeterías, juguerías y restaurantes que venden bebidas frías con una presentación limpia y sostenible.',
    stat: 'Para bebidas frías',
    service: 'Servicio asociado: abastecimiento recurrente, precios por volumen y recomendación de tapas compatibles.',
    details: ['Aspecto similar al plástico', 'Material biodegradable', 'Ideales para bebidas frías y smoothies'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/PLA_Cups_12oz.jpg',
    alt: 'Vasos transparentes compostables de PLA',
    credit: 'Bioleaderpack, Wikimedia Commons, CC BY 4.0',
  },
];

const galleryItems = [
  {
    title: 'Empaques para bebidas y takeout',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Biodegradable_food_packaging_including_coffee_cups_and_holder.jpg',
    alt: 'Empaques biodegradables para bebidas y comida para llevar en un entorno natural',
    credit: 'Meanwell Packaging, Wikimedia Commons, CC BY 2.0',
  },
  {
    title: 'Cartón compostable',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Compostable_cardboard_food_packaging.jpg',
    alt: 'Empaque de cartón compostable sobre compost y vegetación',
    credit: 'Meanwell Packaging, Wikimedia Commons, CC BY 2.0',
  },
  {
    title: 'Packaging para delivery',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Eco-friendly_cardboard_packaging_for_takeaways.jpg',
    alt: 'Cajas de cartón y bolsa de papel para comida para llevar',
    credit: 'Meanwell Packaging, Wikimedia Commons, CC BY 2.0',
  },
];

const values = [
  'Stock 100% local en Costa del Este, Panamá.',
  'Garantía de resistencia con certificación antifiltros y retención de calor.',
  'Personalización de marca con estampados en tintas de soya ecológicas.',
  'Asistencia B2B express para reabastecimiento en 24 horas.',
];

const brandValues = ['Sostenibilidad aplicada', 'Calidad verificable', 'Servicio cercano', 'Innovación responsable'];

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path d="M20.6 3.4C12.3 3.7 5.7 8.3 4.2 15.5c-.4 2 .2 4 1.8 5.3 1.5 1.3 3.6 1.7 5.4 1 6.7-2.3 10.5-9.4 10.8-17.2.1-.8-.6-1.3-1.6-1.2Z" />
      <path d="M7.9 17.1c2.4-4.7 6-7.9 10.5-10" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon small-icon">
      <path d="m5 12.5 4.2 4.2L19 6.8" />
    </svg>
  );
}

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir al inicio de GreenPack Panamá">
          <span className="brand-mark">
            <LeafIcon />
          </span>
          <span>GreenPack Panamá</span>
        </a>
        <nav className="main-nav" aria-label="Navegación principal">
          <a href="#quienes-somos">Nosotros</a>
          <a href="#galeria">Galería</a>
          <a href="#productos">Productos</a>
          <a href="#valor">Valor B2B</a>
          <a href="#mision">Misión</a>
          <a href="#ubicacion">Ubicación</a>
          <a className="nav-cta" href="#contacto">Cotizar</a>
        </nav>
      </header>

      <main id="inicio">
        <section className="hero section-shell">
          <div className="hero-content">
            <p className="eyebrow">Empaques sostenibles para gastronomía B2B</p>
            <h1>Abastece tu negocio con empaques ecológicos listos para delivery.</h1>
            <p className="hero-copy">
              GreenPack Panamá distribuye y personaliza envases biodegradables de alta resistencia para restaurantes,
              cafeterías, dark kitchens, reposterías y empresas de catering.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contacto">Solicitar cotización</a>
              <a className="button secondary" href="#productos">Ver catálogo</a>
            </div>
            <dl className="trust-row" aria-label="Indicadores comerciales destacados">
              <div>
                <dt>24 h</dt>
                <dd>asistencia express</dd>
              </div>
              <div>
                <dt>2029</dt>
                <dd>visión regional</dd>
              </div>
              <div>
                <dt>B2B</dt>
                <dd>compras recurrentes</dd>
              </div>
            </dl>
          </div>
          <div className="hero-panel" aria-label="Resumen de beneficios GreenPack">
            <div className="panel-card main-card">
              <div className="badge">Stock local</div>
              <h2>Menos plástico convencional. Más continuidad operativa.</h2>
              <p>
                Empaques certificados para proteger frescura, presentación y tiempos de entrega sin depender de
                importaciones lentas.
              </p>
            </div>
            <div className="floating-card card-one">Certificación de resistencia</div>
            <div className="floating-card card-two">Personalización con tintas de soya</div>
          </div>
        </section>

        <section className="section-shell intro-grid" aria-labelledby="quienes-somos">
          <div>
            <p className="eyebrow">Quiénes somos</p>
            <h2 id="quienes-somos">Distribuidora aliada para una transición sostenible rentable.</h2>
          </div>
          <div className="intro-card">
            <h3>Quiénes somos</h3>
            <p>
              GreenPack Panamá es una marca B2B enfocada en empaques biodegradables para restaurantes, cafeterías,
              dark kitchens y empresas de catering que buscan operar con menor impacto ambiental.
            </p>
          </div>
          <div className="intro-card highlighted">
            <h3>Qué hacemos</h3>
            <p>
              Distribuimos envases compostables, vasos biodegradables y soluciones de personalización para negocios
              gastronómicos que necesitan abastecimiento constante, asesoría y entrega local.
            </p>
          </div>
        </section>

        <section className="section-shell mvv-section" id="mision" aria-labelledby="mision-title">
          <div className="section-heading compact">
            <p className="eyebrow">Misión, visión y valores</p>
            <h2 id="mision-title">Una operación comercial con enfoque sostenible.</h2>
          </div>
          <div className="mvv-grid">
            <article className="mvv-card">
              <h3>Misión</h3>
              <p>
                Abastecer al canal B2B de Panamá con empaques circulares y biodegradables que preserven la frescura
                alimentaria y reduzcan la dependencia del plástico convencional.
              </p>
            </article>
            <article className="mvv-card">
              <h3>Visión</h3>
              <p>
                Consolidarnos para 2029 como referente tecnológico y logístico de empaques eco-amigables certificados
                en Ciudad de Panamá y provincias centrales.
              </p>
            </article>
            <article className="mvv-card values-card">
              <h3>Valores</h3>
              <ul>
                {brandValues.map((value) => (
                  <li key={value}>{value}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="section-shell gallery-section" id="galeria" aria-labelledby="galeria-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Galería biodegradable</p>
              <h2 id="galeria-title">Materiales pensados para servir, transportar y reducir residuos.</h2>
            </div>
            <p>
              Una muestra visual del tipo de empaque sostenible que GreenPack ofrece para negocios de comida rápida,
              cafeterías y operaciones de delivery.
            </p>
          </div>
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <figure className="gallery-item" key={item.title}>
                <img src={item.image} alt={item.alt} loading="lazy" decoding="async" />
                <figcaption>{item.title}</figcaption>
              </figure>
            ))}
          </div>
          <p className="image-credit">
            Imágenes de galería: {[...new Set(galleryItems.map((item) => item.credit))].join(' | ')}.
          </p>
        </section>

        <section className="section-shell" id="productos" aria-labelledby="productos-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Productos y servicios</p>
              <h2 id="productos-title">Dos productos clave para la campaña digital.</h2>
            </div>
            <p>
              La oferta se concentra en productos fáciles de explicar, cotizar y comprar por volumen para captar
              negocios gastronómicos con intención comercial clara.
            </p>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.name}>
                <div className="product-media">
                  <img src={product.image} alt={product.alt} loading="lazy" decoding="async" />
                </div>
                <div className="product-stat">{product.stat}</div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <ul className="product-details">
                  {product.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <p className="service-copy">{product.service}</p>
              </article>
            ))}
          </div>
          <p className="image-credit">
            Imágenes de catálogo: {products.map((product) => product.credit).join(' | ')}.
          </p>
        </section>

        <section className="section-shell value-section" id="valor" aria-labelledby="valor-title">
          <div className="value-copy">
            <p className="eyebrow">Por qué nos escogen</p>
            <h2 id="valor-title">Oferta de valor basada en inmediatez, resistencia y personalización.</h2>
            <p>
              Resolvemos los dolores habituales del comprador gastronómico: desabastecimiento, empaques que se rompen
              con humedad, poca personalización y fletes internacionales elevados.
            </p>
          </div>
          <ul className="value-list">
            {values.map((value) => (
              <li key={value}>
                <CheckIcon />
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="section-shell audience-section" aria-labelledby="audience-title">
          <div className="section-heading compact">
            <p className="eyebrow">Buyer persona gastronómico</p>
            <h2 id="audience-title">Hablamos con quien compra, opera y decide.</h2>
          </div>
          <div className="audience-grid">
            <article>
              <h3>Perfil comercial</h3>
              <p>Propietarios, administradores, chefs ejecutivos y encargados de compras.</p>
            </article>
            <article>
              <h3>Ubicación</h3>
              <p>Ciudad de Panamá, corredores de delivery y cabeceras de provincias centrales.</p>
            </article>
            <article>
              <h3>Consumo digital</h3>
              <p>Comparación de catálogos digitales, solicitudes de cotización y compras recurrentes.</p>
            </article>
          </div>
        </section>

        <section className="section-shell map-section" id="ubicacion" aria-labelledby="ubicacion-title">
          <div className="map-copy">
            <p className="eyebrow">Ubicación local</p>
            <h2 id="ubicacion-title">Centro de atención en Costa del Este, Panamá.</h2>
            <p>
              La presencia local permite coordinar entregas, reposiciones y atención comercial para empresas
              gastronómicas de Ciudad de Panamá y provincias centrales.
            </p>
            <div className="map-details">
              <strong>Cobertura principal</strong>
              <span>Ciudad de Panamá, corredores de delivery y cabeceras comerciales.</span>
            </div>
          </div>
          <div className="map-frame" aria-label="Mapa de Costa del Este, Panamá">
            <iframe
              title="Ubicación referencial de GreenPack Panamá en Costa del Este"
              src="https://www.google.com/maps?q=Costa%20del%20Este%2C%20Panam%C3%A1&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <section className="section-shell contact-section" id="contacto" aria-labelledby="contacto-title">
          <div>
            <p className="eyebrow">Cotización B2B</p>
            <h2 id="contacto-title">Convierte tu catálogo de empaques en una operación más sostenible.</h2>
            <p>
              Solicita precios por mayor, asesoría sobre materiales o una propuesta de personalización para tu marca.
            </p>
          </div>
          <div className="contact-card">
            <h3>Atención comercial</h3>
            <p>Solicita disponibilidad, precios por volumen y opciones de personalización para tu negocio.</p>
            <a className="button primary full" href="https://wa.me/50760000000" target="_blank" rel="noreferrer">
              Escribir por WhatsApp
            </a>
            <a className="button secondary full" href="mailto:ventas@greenpackpanama.com">
              ventas@greenpackpanama.com
            </a>
            <div className="social-links" aria-label="Redes sociales">
              <a href="https://www.instagram.com/greenpackpty" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://www.facebook.com/greenpackpty" target="_blank" rel="noreferrer">Facebook</a>
              <a href="https://www.linkedin.com/company/greenpackpty" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>GreenPack Panamá. Empaques sostenibles para negocios gastronómicos.</p>
        <a href="#inicio">Volver arriba</a>
      </footer>
    </>
  );
}

export default App;
