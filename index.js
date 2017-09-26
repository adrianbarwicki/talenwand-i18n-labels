module.exports = {
    services: {
        i18n: lang => require(`./i18n/${lang}.json`),
        config: () => require(`./config/config.json`),
        userProperties: () => require(`./config/user-properties.json`),
        userVerifications: () => require(`./config/user-verifications.json`),
        labelGroups: () => require(`./config/label-groups.json`),
        posts: () => require(`./config/posts.json`)
    },
    partners: {
        i18n: lang => require(`./i18n/${lang}.json`),
        config: () => require(`./config/config.json`),
        userProperties: () => require(`./config/user-properties.json`),
        userVerifications: () => require(`./config/user-verifications.json`),
        labelGroups: () => require(`./config/label-groups.json`),
        posts: () => require(`./config/posts.json`)
    }
};