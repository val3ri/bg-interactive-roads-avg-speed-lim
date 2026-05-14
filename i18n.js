(function () {
    const DEFAULT_LANGUAGE = 'bg';
    const SUPPORTED_LANGUAGES = ['bg', 'en'];

    function getLanguageFromUrl() {
        const params = new URLSearchParams(window.location.search);
        return params.get('lang');
    }

    function getStoredLanguage() {
        try {
            return localStorage.getItem('preferredLanguage');
        } catch (error) {
            return null;
        }
    }

    function getLanguageFromPath() {
        return window.location.pathname.startsWith('/en/') ? 'en' : null;
    }

    function resolveLanguage() {
        const urlLanguage = getLanguageFromUrl();
        if (SUPPORTED_LANGUAGES.includes(urlLanguage)) {
            storeLanguage(urlLanguage);
            return urlLanguage;
        }

        const pathLanguage = getLanguageFromPath();
        if (SUPPORTED_LANGUAGES.includes(pathLanguage)) {
            storeLanguage(pathLanguage);
            return pathLanguage;
        }

        storeLanguage(DEFAULT_LANGUAGE);
        return DEFAULT_LANGUAGE;
    }

    function storeLanguage(language) {
        try {
            localStorage.setItem('preferredLanguage', language);
        } catch (error) {
            return;
        }
    }

    const currentLanguage = resolveLanguage();
    const translations = window.AppLocales[currentLanguage] || window.AppLocales[DEFAULT_LANGUAGE];
    const fallbackTranslations = window.AppLocales[DEFAULT_LANGUAGE];

    function t(key) {
        const translatedValue = key.split('.').reduce((value, part) => {
            if (value && Object.prototype.hasOwnProperty.call(value, part)) {
                return value[part];
            }

            return undefined;
        }, translations);

        if (translatedValue) {
            return translatedValue;
        }

        return key.split('.').reduce((value, part) => {
            if (value && Object.prototype.hasOwnProperty.call(value, part)) {
                return value[part];
            }

            return undefined;
        }, fallbackTranslations) || key;
    }

    function setMetaContent(selector, content) {
        const element = document.querySelector(selector);
        if (element && content) {
            element.setAttribute('content', content);
        }
    }

    function applyStaticTranslations() {
        const pageId = document.body ? document.body.dataset.page : null;
        const metaPrefix = pageId ? `pages.${pageId}.meta` : 'meta';
        const pageTitle = t(`${metaPrefix}.title`);
        const pageDescription = t(`${metaPrefix}.description`);

        document.documentElement.lang = t('meta.htmlLang');
        document.title = pageTitle;

        setMetaContent('meta[name="title"]', pageTitle);
        setMetaContent('meta[name="description"]', pageDescription);
        setMetaContent('meta[name="language"]', t('meta.language'));
        setMetaContent('meta[property="og:title"]', pageTitle);
        setMetaContent('meta[property="og:description"]', pageDescription);
        setMetaContent('meta[property="og:locale"]', t('meta.ogLocale'));
        setMetaContent('meta[property="twitter:title"]', pageTitle);
        setMetaContent('meta[property="twitter:description"]', pageDescription);

        document.querySelectorAll('[data-i18n]').forEach((element) => {
            element.textContent = t(element.dataset.i18n);
        });

        document.querySelectorAll('[data-i18n-html]').forEach((element) => {
            element.innerHTML = t(element.dataset.i18nHtml);
        });

        document.querySelectorAll('[data-lang-option]').forEach((element) => {
            element.classList.toggle('active', element.dataset.langOption === currentLanguage);
        });
    }

    function setLanguage(language) {
        if (!SUPPORTED_LANGUAGES.includes(language)) {
            return;
        }

        storeLanguage(language);
        window.location.href = getLocalizedUrl(language);
    }

    function getLocalizedUrl(language) {
        const url = new URL(window.location.href);
        const fileName = url.pathname.split('/').pop() || 'index.html';
        const normalizedFileName = fileName === '' ? 'index.html' : fileName;
        const extensionlessFileName = normalizedFileName.replace(/\.html$/, '');
        const pageFile = extensionlessFileName === 'index' ? '' : extensionlessFileName;

        url.searchParams.delete('lang');
        url.pathname = language === 'en'
            ? `/en/${pageFile}`
            : `/${pageFile}`;

        return url.toString();
    }

    function attachLanguageSwitcher() {
        document.querySelectorAll('[data-lang-option]').forEach((element) => {
            element.addEventListener('click', () => {
                setLanguage(element.dataset.langOption);
            });
        });
    }

    function init() {
        applyStaticTranslations();
        attachLanguageSwitcher();
    }

    window.AppI18n = {
        currentLanguage,
        t,
        applyStaticTranslations,
        setLanguage
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
