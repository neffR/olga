export type Service = {
  name: string;
  price: string;
  note: string;
};

export type PortfolioItem = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const siteConfig = {
  brand: {
    shortName: "OLGA PM",
    fullName: "OLGA PM - перманентный макияж",
    slogan: "Стерильность, деликатность, авторская эстетика"
  },
  seo: {
    domain: "https://example.com",
    locale: "ru_RU",
    title: "Перманентный макияж в Выксе | Студия OLGA PM",
    description:
      "Перманентный макияж в городе Выксе: пудровые брови, акварельные губы, межресничка. Авторский подход, стерильность и бесплатная консультация.",
    ogImage: "/works/cover.jpg",
    keywords: [
      "перманентный макияж выкса",
      "пудровые брови выкса",
      "акварельные губы выкса",
      "межресничка выкса"
    ]
  },
  contacts: {
    city: "Выкса",
    address: "ул. Центральная, 12 (2 этаж)",
    phoneDisplay: "+7 (900) 000-00-00",
    phoneRaw: "+79000000000",
    whatsappRaw: "79000000000",
    schedule: "Пн-Сб: 10:00-20:00, Вс по запросу",
    mapEmbed:
      "https://yandex.ru/map-widget/v1/?um=constructor%3A0b9c1a69a5c54889b546fb93feba503dcb455b6ec66688200f94cf236503d17a&source=constructor",
    coordinates: {
      latitude: 55.3200,
      longitude: 42.1740
    }
  },
  socials: {
    vk: "https://vk.com/",
    instagram: "https://instagram.com/"
  },
  metrics: {
    yandexMetrikaId: "",
    gaId: ""
  },
  services: [
    {
      name: "Пудровые брови",
      price: "8 500 RUB",
      note: "Около 2.5 часов, включает эскиз и уход"
    },
    {
      name: "Акварельные губы",
      price: "9 500 RUB",
      note: "Около 3 часов, натуральный градиент"
    },
    {
      name: "Межресничка",
      price: "6 500 RUB",
      note: "Около 1.5 часов, без эффекта стрелок"
    },
    {
      name: "Коррекция",
      price: "4 000 RUB",
      note: "Для клиентов студии через 1.5-2 месяца"
    }
  ] as Service[],
  portfolio: [
    {
      title: "Пудровые брови",
      description: "Мягкая дымка, зажившие 4 недели.",
      image: "/works/3.jpg",
      alt: "Пудровые брови, пример работы"
    },
    {
      title: "Акварельные губы",
      description: "Нюдовый оттенок без четкого контура.",
      image: "/works/1.jpg",
      alt: "Акварельные губы, пример работы"
    },
    {
      title: "Межресничка",
      description: "Тонкая вуаль по линии ресниц.",
      image: "/works/2.jpg",
      alt: "Межресничка, пример работы"
    }
  ] as PortfolioItem[],
  faq: [
    {
      q: "Больно ли делать перманентный макияж?",
      a: "Используется аппликационная анестезия и мягкая техника. Ощущается легкое покалывание."
    },
    {
      q: "Сколько держится результат?",
      a: "В среднем от 12 до 24 месяцев в зависимости от зоны, типа кожи и ухода."
    },
    {
      q: "Когда нужна коррекция?",
      a: "Обычно через 6-8 недель после первичной процедуры для выравнивания оттенка."
    }
  ]
} as const;
