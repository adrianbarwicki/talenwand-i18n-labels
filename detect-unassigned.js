const labelGroups = require('./label-groups.json');
const labels = require('./examples/service-marketplace/i18n/en.json');

const unassignedLabels = Object.keys(labels)
.filter(labelKey => !labelGroups[labelKey])

const a = {};

unassignedLabels.forEach(_ => {
    a[_.toUpperCase()] = "GENERAL"
});

console.log(JSON.stringify(a, null, 2))