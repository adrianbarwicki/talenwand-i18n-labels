module.exports = {
    i18n: lang => require(`./i18n/${lang}.json`),
    config: () => require(`./config/config.json`),
    userProperties: () => require(`./config/user-properties.json`),
    labelGroups: () => require(`./config/label-groups.json`)
};