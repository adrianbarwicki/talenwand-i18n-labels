const PATHS = {
    SERVICES: './examples/service-marketplace',
    PARTNERS: './examples/partner-marketplace'
};

const usecaseFactory = path => {
    return {
        i18n: lang => require(`${path}/i18n/${lang}.json`),
        config: () => require(`${path}/config/config.json`),
        userProperties: () => require(`${path}/config/user-properties.json`),
        userVerifications: () => require(`${path}/config/user-verifications.json`),
        labelGroups: () => require(`./label-groups.json`),
        posts: () => require(`${path}/config/posts.json`)
    };
};

module.exports = {
    services: usecaseFactory(PATHS.SERVICES),
    partners: usecaseFactory(PATHS.PARTNERS)
};
