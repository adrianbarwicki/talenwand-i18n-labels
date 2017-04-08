module.exports = {
    i18n: lang => require(`./langs/${lang}.json`),
    config: () => require(`./config/config.json`)
};