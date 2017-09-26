module.exports = {
    services: {
        i18n: lang => require(`./service-marketplace/i18n/${lang}.json`),
        config: () => require(`./service-marketplace/config/config.json`),
        userProperties: () => require(`./service-marketplace/config/user-properties.json`),
        userVerifications: () => require(`./service-marketplace/config/user-verifications.json`),
        labelGroups: () => require(`./service-marketplace/config/label-groups.json`),
        posts: () => require(`./service-marketplace/config/posts.json`)
    },
    partners: {
        i18n: lang => require(`./partner-marketplace/i18n/${lang}.json`),
        config: () => require(`./partner-marketplace/config/config.json`),
        userProperties: () => require(`./partner-marketplace/config/user-properties.json`),
        userVerifications: () => require(`./partner-marketplace/config/user-verifications.json`),
        labelGroups: () => require(`./partner-marketplace/config/label-groups.json`),
        posts: () => require(`./partner-marketplace/config/posts.json`)
    }
};