# OLGA PM - Next.js сайт с SEO

Проект переведен на Next.js (App Router). Все изменяемые данные вынесены в один файл конфигурации.

## Где менять ваши данные
Единая точка настройки: `/Users/roma/Downloads/olga/site.config.ts`

Заполняете только этот файл:
- Бренд и тексты
- Домен и SEO
- Контакты и карта
- Соцсети
- Цены и услуги
- FAQ
- Аналитику (GA и/или Яндекс Метрика)
- Портфолио

## Куда загружать свои работы
Картинки кладите в папку:
- `/Users/roma/Downloads/olga/public/works`

Потом пропишите их в `site.config.ts`:
```ts
portfolio: [
  {
    title: "Пудровые брови",
    description: "Зажившие 4 недели.",
    image: "/works/brows-01.jpg",
    alt: "Пудровые брови"
  }
]
```

Важно:
- Используйте webp/avif/jpg.
- Для OG-обложки задайте `seo.ogImage`, например `/works/cover.jpg` (рекомендуется 1200x630).

## Запуск
```bash
npm install
npm run dev
```
Открыть: [http://localhost:3000](http://localhost:3000)

## SEO что уже сделано
- `metadata` в `app/layout.tsx`
- Open Graph и Twitter cards
- canonical
- `robots` в `app/robots.ts`
- `sitemap` в `app/sitemap.ts`
- JSON-LD: `BeautySalon` и `FAQPage` в `app/page.tsx`
- Семантические секции и FAQ

## Перед деплоем
1. В `site.config.ts` заменить `seo.domain` на реальный домен.
2. Заполнить реальный телефон, WhatsApp, ссылки на соцсети.
3. Добавить реальные фото в `public/works`.
4. При необходимости заполнить `metrics.gaId` и `metrics.yandexMetrikaId`.

## Команды
- `npm run dev` - локальная разработка
- `npm run build` - production-сборка
- `npm run start` - запуск production
- `npm run lint` - линтинг
