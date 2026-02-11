import Image from "next/image";
import { siteConfig } from "@/site.config";
import { toAbsoluteUrl } from "@/lib/utils";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { LazyYandexMap } from "@/components/lazy-yandex-map";

function formatPrice(price: string) {
  return price.replace("RUB", "₽");
}

export default function HomePage() {
  const waLink = `https://wa.me/${siteConfig.contacts.whatsappRaw}`;
  const phoneLink = `tel:${siteConfig.contacts.phoneRaw}`;
  const yandexRouteLink = `https://yandex.ru/maps/?pt=${siteConfig.contacts.coordinates.longitude},${siteConfig.contacts.coordinates.latitude}&z=15&l=map`;

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: siteConfig.brand.fullName,
    image: toAbsoluteUrl(siteConfig.seo.domain, siteConfig.seo.ogImage),
    telephone: siteConfig.contacts.phoneDisplay,
    url: siteConfig.seo.domain,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contacts.address,
      addressLocality: siteConfig.contacts.city,
      addressRegion: "Нижегородская область",
      addressCountry: "RU"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.contacts.coordinates.latitude,
      longitude: siteConfig.contacts.coordinates.longitude
    },
    hasMap: siteConfig.contacts.mapEmbed,
    sameAs: [siteConfig.socials.vk, siteConfig.socials.instagram],
    openingHours: "Mo-Sa 10:00-20:00",
    priceRange: "₽₽",
    areaServed: siteConfig.contacts.city,
    currenciesAccepted: "RUB",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contacts.phoneDisplay,
      contactType: "customer service",
      availableLanguage: ["ru"]
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a
      }
    }))
  };

  const offersJsonLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Услуги перманентного макияжа",
    itemListElement: siteConfig.services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name
      },
      priceCurrency: "RUB",
      price: service.price.replace(/[^\d]/g, "")
    }))
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <span className="logo-mark" aria-hidden="true">PM</span>
          <span className="logo-text">Перманентный макияж</span>
        </div>
        <nav className="nav" aria-label="Основная навигация">
          <a href="#prices">Цены</a>
          <a href="#portfolio">Работы</a>
          <a href="#faq">FAQ</a>
          <a href="#contacts">Контакты</a>
          <a className="btn btn-primary" href={waLink} target="_blank" rel="noreferrer">
            Записаться сейчас
          </a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero">
          <div className="hero-main">
            <p className="kicker">{siteConfig.contacts.city} · Перманентный макияж</p>
            <h1>Перманентный макияж в Выксе</h1>
            <p className="lead">{siteConfig.seo.description}</p>

            <div className="cta-row">
              <a className="btn btn-primary" href={waLink} target="_blank" rel="noreferrer">
                Записаться в WhatsApp
              </a>
              <a className="btn btn-secondary" href={phoneLink}>
                Позвонить
              </a>
            </div>

            <div className="trust-row">
              <span>Ответ в течение 10 минут в рабочее время</span>
              <span>8+ лет практики</span>
              <span>Стерильный кабинет</span>
            </div>
            <div className="mobile-quick-nav" aria-label="Быстрая навигация по разделам">
              <a href="#prices">Цены</a>
              <a href="#portfolio">Работы</a>
              <a href="#contacts">Контакты</a>
            </div>
          </div>

          <aside className="hero-offer-card">
            <p className="offer-title">Ближайшие слоты</p>
            <p className="offer-time">Пн-Сб: 10:00-20:00</p>
            <p className="offer-note">Оставьте заявку сейчас и получите персональный подбор формы и оттенка перед процедурой.</p>
            <a className="btn btn-primary block" href={waLink} target="_blank" rel="noreferrer">
              Забронировать слот
            </a>
          </aside>
        </section>

        <section className="section proof-strip">
          <div className="proof-item">
            <strong>500+</strong>
            <span>процедур</span>
          </div>
          <div className="proof-item">
            <strong>4.9/5</strong>
            <span>оценка клиентов</span>
          </div>
          <div className="proof-item">
            <strong>6-8 недель</strong>
            <span>коррекция по плану</span>
          </div>
          <div className="proof-item">
            <strong>12-24 мес</strong>
            <span>держится результат</span>
          </div>
        </section>

        <section id="prices" className="section">
          <div className="section-head">
            <h2>Услуги и цены</h2>
            <p>Прозрачная стоимость без скрытых доплат.</p>
          </div>
          <div className="cards service-grid">
            {siteConfig.services.map((service) => (
              <article key={service.name} className="card service-card">
                <h3>{service.name}</h3>
                <p className="price">{formatPrice(service.price)}</p>
                <div className="service-desktop">
                  <p className="service-note">{service.note}</p>
                  <a className="inline-cta" href={waLink} target="_blank" rel="noreferrer">
                    Записаться на услугу
                  </a>
                </div>
                <details className="service-mobile-accordion">
                  <summary>Подробнее и запись</summary>
                  <div className="service-mobile-panel">
                    <p className="service-note">{service.note}</p>
                    <a className="inline-cta" href={waLink} target="_blank" rel="noreferrer">
                      Записаться на услугу
                    </a>
                  </div>
                </details>
              </article>
            ))}
          </div>
        </section>

        <section className="section mid-cta">
          <div>
            <h2>Хотите точный расчет под ваш случай?</h2>
            <p>Напишите в WhatsApp, отправьте фото при дневном свете, и получите рекомендацию по технике и стоимости.</p>
          </div>
          <a className="btn btn-primary" href={waLink} target="_blank" rel="noreferrer">
            Получить консультацию
          </a>
        </section>

        <section id="portfolio" className="section">
          <div className="section-head">
            <h2>Работы</h2>
            <p>Реальные примеры результата и заживших работ.</p>
          </div>
          <div className="portfolio-grid">
            {siteConfig.portfolio.map((item) => (
              <article key={item.title} className="card portfolio-card">
                <div className="portfolio-media">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={760}
                    height={960}
                    className="work-image"
                    sizes="(max-width: 720px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
          <div className="portfolio-cta">
            <a className="btn btn-primary" href={waLink} target="_blank" rel="noreferrer">
              Хочу такой результат
            </a>
          </div>
        </section>

        <section id="faq" className="section">
          <h2>FAQ</h2>
          <div className="faq-list">
            {siteConfig.faq.map((item) => (
              <details key={item.q} className="faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contacts" className="section contacts">
          <div className="section-head">
            <h2>Контакты и запись</h2>
            <p>Выберите удобный способ связи. Отвечаю быстро в рабочее время.</p>
          </div>
          <div className="cards contact-grid">
            <article className="card contact-card">
              <div className="contact-chip-row">
                <span className="contact-chip">Выкса</span>
                <span className="contact-chip">Онлайн-запись</span>
                <span className="contact-chip">Без выходных по запросу</span>
              </div>
              <div className="contact-list">
                <div className="contact-item">
                  <span className="contact-label">Адрес</span>
                  <span className="contact-value">{siteConfig.contacts.city}, {siteConfig.contacts.address}</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Телефон</span>
                  <a className="contact-value" href={phoneLink}>{siteConfig.contacts.phoneDisplay}</a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">График</span>
                  <span className="contact-value">{siteConfig.contacts.schedule}</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">VK</span>
                  <a className="contact-value" href={siteConfig.socials.vk} target="_blank" rel="noreferrer">Открыть VK</a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Instagram</span>
                  <a className="contact-value" href={siteConfig.socials.instagram} target="_blank" rel="noreferrer">Открыть Instagram</a>
                </div>
              </div>
              <div className="contact-actions">
                <a className="btn btn-secondary" href={phoneLink}>Позвонить</a>
                <a className="btn btn-secondary" href={yandexRouteLink} target="_blank" rel="noreferrer">Маршрут</a>
              </div>
              <a className="btn btn-primary block" href={waLink} target="_blank" rel="noreferrer">
                Написать и записаться
              </a>
            </article>
            <div className="card contact-map-script map-wrap">
              <LazyYandexMap
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A82c3a72b73a8b7c65e54df35dec76dc4c30fcb0a4fefee0c5fa7c5018455e48b&source=constructor"
                title="Карта рядом с блоком контактов"
              />
            </div>
          </div>
        </section>

      </main>

      <footer className="footer">
        <p>Студия перманентного макияжа, {siteConfig.contacts.city}</p>
      </footer>

      <MobileStickyCta
        phoneHref={phoneLink}
        targets={[
          { id: "prices", label: "Услуги и цены", href: "#prices" },
          { id: "portfolio", label: "Смотреть работы", href: "#portfolio" },
          { id: "contacts", label: "Записаться", href: waLink }
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offersJsonLd) }}
      />
    </>
  );
}
