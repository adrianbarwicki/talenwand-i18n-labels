module.exports = {
    i18n: lang => require(`./i18n/${lang}.json`),
    config: () => require(`./config/config.json`)
};