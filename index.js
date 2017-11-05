const PATHS = {
    SERVICES: './examples/service-marketplace'
};

const usecaseFactory = path => {
    return {
        i18n: lang => require(`${path}/i18n/${lang}.json`),
        config: () => require(`${path}/config/config.json`),
        userProperties: () => require(`${path}/config/user-properties.json`),
        userVerifications: () => require(`${path}/config/user-verifications.json`),
        posts: () => require(`${path}/config/posts.json`)
    };
};

module.exports = {
    labelGroups: () => require(`./label-groups.json`),
    services: usecaseFactory(PATHS.SERVICES)
};
