window.AppLocales = window.AppLocales || {};

window.AppLocales.en = {
    meta: {
        htmlLang: 'en',
        title: 'Average Speed Camera Sections in Bulgaria - Map',
        description: 'Interactive map of certified average speed control sections in Bulgaria, including motorways, main roads, camera locations, speed limits and coordinates.',
        language: 'English',
        ogLocale: 'en_US'
    },
    header: {
        title: 'Average Speed Camera Sections in Bulgaria (as of 25.08.2026)',
        fines: '💰 Fines',
        statistics: '📊 Statistics',
        about: 'ℹ️ About the map'
    },
    languageSwitcher: {
        label: 'Language',
        bg: 'BG',
        en: 'EN'
    },
    nav: {
        map: '🗺️ Map',
        fines: '💰 Fines',
        statistics: '📊 Statistics',
        about: 'ℹ️ About the map'
    },
    siteFooter: {
        text: 'Interactive map of average speed camera sections in Bulgaria'
    },
    loading: {
        roads: '🛣️ Loading road sections...'
    },
    footer: {
        description: 'Interactive map of all certified average speed control sections on motorways and main roads in Bulgaria. Average speed cameras on Trakia, Hemus, Struma motorways and first-class roads.',
        finesLink: '💰 Average speed fines',
        finesDescription: 'complete table of fines and sanctions for speeding based on average speed in Bulgaria.',
        copyright: '© 2026 bg-speed-zones.com | Data from'
    },
    controls: {
        title: 'Average speed sections',
        distanceUnit: 'km'
    },
    legend: {
        title: '📊 Statistics & Legend',
        mainRoadsCount: 'Main roads:',
        mainRoadsDistance: 'Main roads km:',
        highwaysCount: 'Motorways:',
        highwaysDistance: 'Motorway km:',
        newestRoads: 'New sections',
        highways: 'Motorways',
        roads: 'Roads'
    },
    popup: {
        coordinates: 'Coordinates:',
        route: 'Route:',
        speedLimit: 'Speed limit:',
        roadType: 'Road type:',
        segment: 'Segment:',
        distance: 'Distance:',
        geometry: 'Geometry:',
        exactGeometry: 'Exact road geometry',
        approximateGeometry: 'Straight line approximation',
        points: 'points',
        speedUnit: 'km/h',
        distanceUnit: 'kilometers',
        roadTypes: {
            highway: 'Motorway',
            mainRoad: 'Main road',
            secondaryRoad: 'Secondary road'
        }
    },
    errors: {
        missingRoadData: 'Error: roads-data-cached.js file not found. Please ensure the file is in the same folder.'
    },
    console: {
        newestActiveDate: 'Most recent active_since date:'
    },
    pages: {
        about: {
            meta: {
                title: 'About the Map - Average Speed Camera Sections in Bulgaria',
                description: 'Information about the interactive map of average speed camera sections in Bulgaria, including data sources, features and contact details.'
            },
            headerTitle: 'ℹ️ About the map',
            breadcrumbHome: 'Home - Map',
            breadcrumbCurrent: 'About the map',
            pageTitle: 'Average speed camera sections',
            projectTitle: '📋 About the project',
            projectText: 'This interactive map shows certified average speed camera sections on Bulgaria’s road network. The project visualizes the monitored road points where average speed is calculated and enforced.',
            openMap: '🗺️ Open the map',
            roadTypesTitle: '🛣️ Road types',
            highwaysType: 'Motorways: shown in dark blue',
            mainRoadsType: 'First-class roads: shown in blue',
            sourcesTitle: '📊 Data sources',
            sourcesText: 'Information for each section comes from BG-Toll. Camera coordinates are based on that page and on the Google Maps layer also published by BG-Toll.',
            featuresTitle: '✨ Features',
            featureToggle: 'Turn individual road sections on or off',
            featurePopups: 'Detailed popups with information about each road section',
            featureCameras: 'Information about where the toll cameras are located',
            noteTitle: '📝 Note',
            noteText: 'This project is for informational purposes. Please follow speed limits everywhere, not only in marked sections. The data shows the Bulgarian road sections current as of 25.08.2026 that are monitored for average speed violations.',
            usefulLinks: '💡 Useful links:',
            finesLink: 'Average speed fines',
            finesLinkDescription: 'complete table of fines and sanctions',
            statsLink: 'Statistics',
            statsLinkDescription: 'growth of the monitored section network',
            authorTitle: '👨‍💻 About the author',
            authorName: 'Valeri Penchev',
            authorText: 'For questions, errors or ideas for improving the website, feel free to contact me.',
            contact: 'Contact:'
        },
        fines: {
            meta: {
                title: 'Average Speed Camera Fines in Bulgaria 2026 - Fine Table',
                description: 'Average speed camera fines in Bulgaria for 2026. Full table of sanctions for speeding based on average speed camera sections.'
            },
            headerTitle: '💰 Fines',
            breadcrumbHome: 'Home - Map',
            breadcrumbCurrent: 'Average speed fines',
            pageTitle: 'Average speed camera fines in Bulgaria',
            intro: 'A practical table of fines for speeding detected by average speed cameras in Bulgaria for 2026. Sanctions for speeding detected by average speed camera sections follow the same framework as standard speed enforcement under the Bulgarian Road Traffic Act.',
            newsTitle: 'News',
            newsFirst: 'What the new fines are after the latest changes to the Road Traffic Act.',
            newsFirstSource: 'news.lex.bg · 18 August 2025',
            newsSecond: 'Bulgarian Ministry of Interior to suspend licences for average speed violations from May 2026',
            newsSecondSource: 'novinite.bg · 02 April 2026',
            tableTitle: 'Average speed fine table 2026',
            tableNote: 'Outside populated areas - motorways and first-class roads. Penalty points take effect from 7 May 2026.',
            excess: 'Excess speed',
            fine: 'Fine outside populated areas',
            additional: 'Additional sanction',
            fineUrban: 'Fine in populated areas',
            additionalUrban: 'Additional sanction',
            upTo10: 'Up to 10 km/h',
            over50: 'Over 50 km/h',
            points2: '2 penalty points',
            points6: '6 points',
            points12: '12 points',
            points18: '18 points + 2-month licence suspension',
            suspension2: '18 points + 2-month licence suspension',
            suspension3: '18 points + 3-month licence suspension',
            important: '⚠️ Important: For every additional 5 km/h over the 50 km/h threshold, the fine increases by 50 BGN (€25.56).',
            disclaimer: '⚠️ Note: Fine and penalty point data is compiled from publicly available sources and may not reflect the latest legislative changes.',
            howTitle: 'How does the average speed system work?',
            howText: 'Average speed cameras record a vehicle at the beginning and end of a defined road section. If the travel time shows an average speed above the limit, an electronic fine notice can be issued automatically.',
            usefulTitle: '💡 Good to know:',
            useful1: 'The system calculates average speed across the entire section between two cameras',
            useful2: 'Briefly slowing down at the cameras does not help',
            useful3: 'The fine can be issued automatically as an electronic notice, without a roadside stop',
            useful4: 'The same fine framework applies on motorways and first-class roads',
            whereTitle: 'Where are average speed cameras located?',
            whereText: 'Bulgaria has certified average speed camera sections on Trakia, Hemus and Struma motorways, as well as on many first-class roads. See all sections on the interactive map:',
            viewMap: '🗺️ View the map with all sections',
            legalTitle: 'Legal basis',
            legalText: 'Average speed fines are imposed under the Bulgarian Road Traffic Act, <a href="https://lex.bg/laws/ldoc/2134649345#i_11284" target="_blank" rel="noopener noreferrer nofollow">Article 182, paragraphs 1 and 2</a>. The sanctions are the same as those for speeding detected by fixed or mobile speed cameras.',
            mvrSource: 'Official information from the Ministry of Interior - Traffic Police: <a href="https://mvr.bg/opp/полезна-информация/полезна-пътна-информация/налагане-на-глоби-и-наказания-за-превишена-скорост" target="_blank" rel="noopener noreferrer nofollow">mvr.bg</a>.',
            faqTitle: 'Frequently asked questions',
            faqFineTitle: 'How much is the fine for exceeding the average speed limit?',
            faqFineText: 'The fine depends on the amount of excess speed, from 20 BGN for up to 10 km/h over the limit to a higher fine and licence suspension for over 50 km/h. See the full table above.',
            faqSlowTitle: 'Can you avoid a fine by slowing down at the cameras?',
            faqSlowText: 'No. The system calculates the average speed across the whole section between the two cameras, not the instant speed at each camera. The only way to avoid a fine is to keep your average speed below the limit for the entire section.',
            faqReceiveTitle: 'How is an average speed camera fine received?',
            faqReceiveText: 'When an average speed violation is detected, an electronic fine notice can be issued automatically and sent to the registered vehicle owner’s address. A roadside police stop is not required.',
            faqMotorwaysTitle: 'Do these fines also apply on motorways?',
            faqMotorwaysText: 'Yes. Average speed fines apply in the same way on motorways such as Trakia, Hemus and Struma and on first-class roads. The main difference is the speed limit for the specific section.',
            recommendation: '🛡️ Recommendation: Follow speed limits not only to avoid fines, but also for your safety and the safety of other road users.'
        },
        statistics: {
            meta: {
                title: 'Average Speed Camera Statistics in Bulgaria 2026',
                description: 'Statistics for the growth of average speed camera sections in Bulgaria, including monitored section count and covered kilometers.'
            },
            headerTitle: '📊 Statistics',
            breadcrumbHome: 'Home - Map',
            breadcrumbCurrent: 'Statistics',
            pageTitle: 'Network growth statistics',
            intro: 'This page shows how the number of average speed camera sections in Bulgaria is growing and how many kilometers are covered.',
            chartTitle: '📈 Cumulative section growth',
            chartText: 'The chart shows how total average speed section coverage has grown over time.',
            tableTitle: '📅 Detailed table by date',
            date: 'Date',
            newSections: 'New sections',
            addedKm: 'Added km',
            totalSections: 'Total sections',
            totalKm: 'Total km',
            cumulativeKm: 'Cumulative kilometers',
            cumulativeSections: 'Cumulative sections',
            chartNetworkTitle: 'Average speed camera network growth over time',
            kilometersAxis: 'Kilometers (km)',
            sectionsAxis: 'Number of sections',
            kmUnit: 'km'
        }
    }
};
