const products = [
  {
    name: 'Envases de caña de azúcar',
    description:
      'Solución principal para restaurantes y dark kitchens que necesitan empaques resistentes para comida caliente, delivery y takeout.',
    stat: '100% compostables',
    service: 'Servicio asociado: asesoría de formatos, reposición programada y personalización con tintas de soya.',
    details: ['Aptos para comida caliente', 'Compatibles con microondas', 'Alta resistencia a humedad y grasa'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Eco-friendly_cardboard_packaging_for_takeaways.jpg',
    alt: 'Empaques limpios de cartón ecológico para comida para llevar sobre fondo claro',
    credit: 'Meanwell Packaging, Wikimedia Commons, CC BY 2.0',
  },
  {
    name: 'Vasos de PLA',
    description:
      'Opción transparente para cafeterías, juguerías y restaurantes que venden bebidas frías con una presentación limpia y sostenible.',
    stat: 'Para bebidas frías',
    service: 'Servicio asociado: abastecimiento recurrente, recomendación de tapas compatibles y guía de uso para bebidas frías.',
    details: ['Aspecto similar al plástico', 'Material biodegradable', 'Ideales para bebidas frías y smoothies'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/PLA_Cups_12oz.jpg',
    alt: 'Vasos transparentes compostables de PLA',
    credit: 'Bioleaderpack, Wikimedia Commons, CC BY 4.0',
  },
];

const galleryItems = [
  {
    title: 'Set de packaging kraft',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Eco-friendly_cardboard_packaging_for_takeaways.jpg',
    alt: 'Cajas de cartón, porta bebidas y bolsa de papel sobre fondo claro',
    credit: 'Meanwell Packaging, Wikimedia Commons, CC BY 2.0',
  },
  {
    title: 'Pedido listo para entrega',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Food_delivery_driver_delivering_online_order.jpg',
    alt: 'Empaques de comida para llevar acomodados en un asiento de auto para delivery',
    credit: 'Meanwell Packaging, Wikimedia Commons, CC BY 2.0',
  },
  {
    title: 'Cajas para delivery',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Delivery_Driver_Leaving_Takeaway_Packages_at_a_Front_Door.jpg',
    alt: 'Cajas de cartón para comida colocadas cuidadosamente en una entrada',
    credit: 'Meanwell Packaging, Wikimedia Commons, CC BY 2.0',
  },
];

const brandValues = ['Sostenibilidad aplicada', 'Calidad verificable', 'Servicio cercano', 'Innovación responsable'];

function LeafIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="icon brand-leaf">
      <path d="M25.9 5.9C16.8 6.4 9.6 11.5 7.8 19c-.5 2.2.2 4.3 1.9 5.7 1.8 1.5 4.1 1.7 6.3.8 7.1-3.1 11-10.8 11.6-17.9.1-1-.7-1.8-1.7-1.7Z" />
      <path d="M11.3 22.1c3.2-5.8 7.6-9.8 13.1-12.4" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon">
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="16.8" cy="7.2" r="0.9" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon">
      <path d="M14.2 8.2h2.1V4.6c-.4-.1-1.7-.2-3.1-.2-3.1 0-5.2 1.9-5.2 5.4v3H4.6v4h3.4v6.8h4.1v-6.8h3.4l.5-4h-3.9v-2.6c0-1.2.3-2 2.1-2Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon">
      <path d="M6.7 9.3H3.4v11.1h3.3V9.3Z" />
      <path d="M5.1 4a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8Z" />
      <path d="M20.6 14.1c0-3.3-1.8-5-4.2-5-1.9 0-2.8 1.1-3.3 1.8V9.3H9.9v11.1h3.3v-5.5c0-1.5.3-2.9 2.1-2.9 1.7 0 1.8 1.6 1.8 3v5.4h3.4v-6.3Z" />
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
          <div className="nav-group">
            <a className="nav-parent" href="#quienes-somos" aria-haspopup="true">
              Nosotros
              <span aria-hidden="true">▾</span>
            </a>
            <div className="submenu" aria-label="Submenú de Nosotros">
              <a href="#quienes-somos">Quiénes somos</a>
              <a href="#mision">Misión y visión</a>
            </div>
          </div>
          <a href="#galeria">Galería</a>
          <a href="#productos">Productos</a>
          <a href="#ubicacion">Ubicación</a>
          <a className="nav-cta" href="#contacto">Cotizar</a>
        </nav>
      </header>

      <main id="inicio">
        <section className="hero section-shell">
          <div className="hero-content">
            <p className="eyebrow">Empaques sostenibles para gastronomía</p>
            <h1>Empaques ecológicos listos para delivery y takeout.</h1>
            <p className="hero-copy">
              GreenPack Panamá distribuye y personaliza envases biodegradables de alta resistencia para restaurantes,
              cafeterías, dark kitchens, reposterías y servicios de catering.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contacto">Solicitar cotización</a>
              <a className="button secondary" href="#productos">Ver catálogo</a>
            </div>
            <dl className="trust-row" aria-label="Indicadores destacados">
              <div>
                <dt>24 h</dt>
                <dd>asistencia express</dd>
              </div>
              <div>
                <dt>2029</dt>
                <dd>visión regional</dd>
              </div>
              <div>
                <dt>Eco</dt>
                <dd>materiales biodegradables</dd>
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

        <section className="section-shell intro-grid" id="quienes-somos" aria-labelledby="quienes-somos-title">
          <div>
            <p className="eyebrow">Quiénes somos</p>
            <h2 id="quienes-somos-title">Distribuidora aliada para una transición sostenible rentable.</h2>
          </div>
          <div className="intro-card">
            <h3>Quiénes somos</h3>
            <p>
              GreenPack Panamá es una marca enfocada en empaques biodegradables para restaurantes, cafeterías,
              dark kitchens y servicios de catering que buscan operar con menor impacto ambiental.
            </p>
          </div>
          <div className="intro-card highlighted">
            <h3>Qué hacemos</h3>
            <p>
              Distribuimos envases compostables, vasos biodegradables y soluciones de personalización para proyectos
              gastronómicos que necesitan empaques resistentes, asesoría y entrega local.
            </p>
          </div>
        </section>

        <section className="section-shell mvv-section" id="mision" aria-labelledby="mision-title">
          <div className="section-heading compact">
            <p className="eyebrow">Misión, visión y valores</p>
            <h2 id="mision-title">Una propuesta con enfoque sostenible.</h2>
          </div>
          <div className="mvv-grid">
            <article className="mvv-card">
              <h3>Misión</h3>
              <p>
                Abastecer a la gastronomía panameña con empaques circulares y biodegradables que preserven la frescura
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
              Una muestra visual del tipo de empaque sostenible que GreenPack ofrece para restaurantes de comida rápida,
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
              <h2 id="productos-title">Dos productos destacados del catálogo.</h2>
            </div>
            <p>
              La oferta se concentra en empaques fáciles de reconocer, explicar y adaptar a restaurantes, cafeterías
              y operaciones de delivery.
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

        <section className="section-shell map-section" id="ubicacion" aria-labelledby="ubicacion-title">
          <div className="map-copy">
            <p className="eyebrow">Ubicación local</p>
            <h2 id="ubicacion-title">Centro de atención en Costa del Este, Panamá.</h2>
            <p>
              La presencia local permite coordinar entregas, reposiciones y atención para proyectos gastronómicos de
              Ciudad de Panamá y provincias centrales.
            </p>
            <div className="map-details">
              <strong>Cobertura principal</strong>
              <span>Ciudad de Panamá, corredores de delivery y cabeceras principales.</span>
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
            <p className="eyebrow">Contacto</p>
            <h2 id="contacto-title">Convierte tu catálogo de empaques en una operación más sostenible.</h2>
            <p>
              Solicita asesoría sobre materiales, disponibilidad o una propuesta de personalización para tu marca.
            </p>
          </div>
          <div className="contact-card">
            <h3>Atención GreenPack</h3>
            <p>Consulta disponibilidad, formatos recomendados y opciones de personalización.</p>
            <a className="button primary full" href="https://wa.me/50760000000" target="_blank" rel="noreferrer">
              Escribir por WhatsApp
            </a>
            <a className="button secondary full" href="mailto:ventas@greenpackpanama.com">
              ventas@greenpackpanama.com
            </a>
            <div className="social-links" aria-label="Redes sociales">
              <a href="https://www.instagram.com/greenpackpty" target="_blank" rel="noreferrer" aria-label="Instagram de GreenPack Panamá">
                <InstagramIcon />
              </a>
              <a href="https://www.facebook.com/greenpackpty" target="_blank" rel="noreferrer" aria-label="Facebook de GreenPack Panamá">
                <FacebookIcon />
              </a>
              <a href="https://www.linkedin.com/company/greenpackpty" target="_blank" rel="noreferrer" aria-label="LinkedIn de GreenPack Panamá">
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <a className="brand" href="#inicio" aria-label="Volver al inicio de GreenPack Panamá">
            <span className="brand-mark">
              <LeafIcon />
            </span>
            <span>GreenPack Panamá</span>
          </a>
          <p>Empaques sostenibles para gastronomía, con materiales biodegradables y una presentación limpia.</p>
        </div>
        <nav className="footer-nav" aria-label="Navegación del pie de página">
          <a href="#quienes-somos">Nosotros</a>
          <a href="#galeria">Galería</a>
          <a href="#productos">Productos</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <div className="footer-contact">
          <a href="mailto:ventas@greenpackpanama.com">ventas@greenpackpanama.com</a>
          <a href="https://www.instagram.com/greenpackpty" target="_blank" rel="noreferrer">Instagram</a>
          <a href="#inicio">Volver arriba</a>
        </div>
      </footer>
    </>
  );
}

export default App;
