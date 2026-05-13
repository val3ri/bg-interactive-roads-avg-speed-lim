# BG Speed Zones

Интерактивна карта на сертифицираните отсечки за контрол на средна скорост в България.

## Страници

Българският е основният език и се намира в root:

- `/`
- `/globi-sredna-skorost.html`
- `/statistika.html`
- `/za-kartata.html`

Английската версия е в `/en/`:

- `/en/`
- `/en/globi-sredna-skorost.html`
- `/en/statistika.html`
- `/en/za-kartata.html`

Всяка публична страница има canonical URL и `hreflang` връзки към българската, английската и `x-default` версията.

## Файлова структура

- `index.html` - основна карта на български.
- `en/index.html` - основна карта на английски.
- `globi-sredna-skorost.html`, `statistika.html`, `za-kartata.html` - допълнителни публични страници на български.
- `en/globi-sredna-skorost.html`, `en/statistika.html`, `en/za-kartata.html` - допълнителни публични страници на английски.
- `map-script.js` - Leaflet карта, контроли, легенда, popup-и и display имена за английски режим.
- `i18n.js` - helper за динамични UI текстове и езиков превключвател.
- `locales/bg.js`, `locales/en.js` - речници за динамични текстове.
- `roads-data-cached.js` - generated/cache файл с координати и данни за отсечките.
- `cache-generator/roads-config.js` - source конфигурация за генериране на cached данните. Това е repo tool и е блокиран публично чрез Cloudflare Pages Function.
- `camera-images/` - снимки на камерите.
- `sitemap.xml` - sitemap с BG и EN URL-и.
- `robots.txt` - robots правила и sitemap location.
- `_routes.json` - Cloudflare Pages Functions routing, ограничен само до `cache-generator/`.
- `functions/cache-generator/` - Cloudflare Pages Function, която връща 404 за работната папка `cache-generator/`.
- `404.html` - публична 404 страница.

## Езици и SEO

Избраната SEO структура е:

- `/` за български;
- `/en/` за английски.

`BG | EN` превключвателят използва реални crawlable линкове между съответните езикови версии.

След deploy трябва да се провери:

1. `https://bg-speed-zones.com/sitemap.xml` съдържа 8 публични URL-а.
2. `/` рендерира български.
3. `/en/` рендерира английски.
4. `hreflang` връзките сочат към правилните BG/EN версии.
5. Обновеният sitemap е submit-нат в Google Search Console и Bing Webmaster Tools.

## Разработка и тест

Няма build процес. За локален тест може да се отвори HTML файл директно или да се пусне static server:

```bash
python3 -m http.server 4173
```

След това:

- `http://localhost:4173/`
- `http://localhost:4173/en/`

## Данни

Информацията за отсечките е от BG Toll:

https://www.bgtoll.bg/vaprosi-i-otgovori/sredna-skorost/wim

Допълнителен линк към карта/снимки на отсечки от BG Toll:

https://www.google.com/maps/d/u/0/viewer?mid=1bydr93x-u18Oz3lm7ngmWhVTgsP2Eys

## Работни инструменти

Папката `cache-generator/` съдържа инструменти за поддръжка на данните:

- `cache-generator/cache-generator.html`
- `cache-generator/roads-config.js`

Те трябва да останат в репото, но не трябва да се третират като публична част от сайта. `robots.txt` казва на търсачките да не ги индексират, а Cloudflare Pages Function в `functions/cache-generator/` връща 404 за `/cache-generator` и `/cache-generator/*`. `_routes.json` ограничава Function invocation само до тези URL-и. След генериране се обновява публичният `roads-data-cached.js`.

За най-строг режим в Cloudflare Pages настройката Runtime -> Fail open / closed трябва да е `Fail closed`, за да не се сервира статичният файл, ако Function route-ът не може да бъде изпълнен.
