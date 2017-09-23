const async = require('async');
const writeFile = require('write-file');
const googleTranslate = require('google-translate')(process.env.GOOGLE_API_KEY);
const englishLabels = require('../i18n/en.json');

const translated = {};

const TARGET_LANG = process.argv[2];

if (TARGET_LANG === 'en') {
    throw new Error('"en" is source language');
}

async
    .eachSeries(Object.keys(englishLabels), (labelKey, cb) => {

        if (labelKey.indexOf('ICON') > -1) {
            translated[labelKey] = englishLabels[labelKey];

            return cb();
        }

        googleTranslate.translate(englishLabels[labelKey], TARGET_LANG, (err, translation) => {
            if (err) {
                console.error(err);

                return cb(err)
            }
            
            console.log(`Translating ${labelKey}`);

            translated[labelKey] = translation.translatedText;

            cb();
        });
    }, err => {
        if (err) {
            return console.error(err);
        }

            // automatically writes a json files 
        writeFile(`./i18n/${TARGET_LANG}.json`, translated, err => {
            if (err) {
                return console.error(err);
            }

            return console.log(`OK! Saved to ../i18n/${TARGET_LANG}.json`);
        })
    });

