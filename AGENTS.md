# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Project Overview

This is an interactive web map visualization showing certified average speed monitoring sections on Bulgaria's road network. The application displays road segments where speed cameras monitor and calculate average vehicle speeds.

## Architecture

### Core Components

**Frontend (Vanilla JavaScript)**
- `index.html` - Bulgarian main application entry point with map container
- `en/index.html` - English main application entry point
- `globi-sredna-skorost.html`, `statistika.html`, `za-kartata.html` - Bulgarian public information pages
- `en/globi-sredna-skorost.html`, `en/statistika.html`, `en/za-kartata.html` - English public information pages
- `map-script.js` - Primary application logic with Leaflet.js map implementation
- `i18n.js` - Language helper for dynamic UI text and language switching
- `locales/bg.js`, `locales/en.js` - Translation dictionaries for dynamic UI text
- `styles.css` - Responsive styling with mobile-first design and collapsible UI components

**Data Layer**
- `roads-data-cached.js` - Main data file containing all road configurations with coordinates, speed limits, and camera metadata
- `cache-generator/roads-config.js` - Source configuration for generating cached coordinate data; repo tool blocked publicly through Cloudflare Pages Functions
- `cache-generator/cache-generator.html` - Utility tool for processing road configurations into cached format; repo tool blocked publicly through Cloudflare Pages Functions

**Assets**
- `camera-images/` - Contains JPG images of speed camera installations at various monitoring points

### Data Structure

Road data is organized in `ROAD_TRACKS` object with categories:
- `highways` - Motorways (магистрали) with 140 km/h speed limits
- `mainRoads` - First-class roads (първокласни пътища) with varying speed limits
- `secondaryRoads` - Secondary roads (if applicable)

Each road segment contains:
- Unique ID and Bulgarian name
- Start/end points with coordinates, descriptions, and camera images
- Speed limit and distance information
- Either exact coordinate arrays or interpolated paths

### Key Features

**Interactive Map Controls**
- Individual road segment toggles with distance information
- Collapsible control panel (auto-collapsed on mobile)
- Responsive legend with road type statistics
- Map bounds restricted to Bulgaria territory

**Mobile Optimization**
- Responsive design with mobile-specific popup positioning
- Touch-friendly controls and auto-collapse behavior
- Viewport-aware popup handling

**Internationalization and SEO**
- Bulgarian remains the default language at root URLs.
- English pages are real static pages under `/en/`.
- Each public page has canonical and `hreflang` links for Bulgarian, English, and `x-default`.
- `sitemap.xml` includes all Bulgarian and English public URLs.
- The visible `BG | EN` switcher uses crawlable links between matching language versions.

## Development Workflow

### Making Data Changes

1. **Adding New Road Segments**: Edit `cache-generator/roads-config.js` to add new road configurations
2. **Regenerating Cache**: Use `cache-generator/cache-generator.html` locally to process configurations into `roads-data-cached.js`
3. **Camera Images**: Add corresponding JPG files to `camera-images/` directory using lowercase filenames matching location names

### Testing Changes

Open `index.html` or `en/index.html` in a web browser - no build process required. The application loads:
1. Leaflet.js from CDN for mapping functionality
2. Translation dictionaries from `locales/`
3. Cached road data from local file
4. Main application script with UI interactions

### Code Organization

**Map Initialization Flow**:
1. Initialize Leaflet map with Bulgaria bounds and zoom restrictions
2. Load and parse road data from `ROAD_TRACKS` configuration
3. Create interactive controls and legend components
4. Generate map layers for each road category with color coding
5. Add markers for start/end points with popup information

**UI Component Pattern**:
- Collapsible panels use toggle functions with CSS transforms
- Mobile responsiveness handled through media queries and JavaScript viewport detection
- Public information content lives in standalone HTML pages rather than modal fragments

## Data Sources

Road information sourced from [BG-Toll official website](https://www.bgtoll.bg/vaprosi-i-otgovori/sredna-skorost/wim). All coordinate data represents actual camera installation locations on the Bulgarian road network as of April 2026.
