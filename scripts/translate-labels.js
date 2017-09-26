const async = require('async');
const writeFile = require('write-file');
const googleTranslate = require('google-translate')(process.env.GOOGLE_API_KEY);

const translated = {};

const MARKETPLACE_TYPE = process.argv[2];
const TARGET_LANG = process.argv[3];

const englishLabels = require(`../examples/${MARKETPLACE_TYPE}/i18n/en.json`);

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
        
        const targetPath = `./examples/${MARKETPLACE_TYPE}/i18n/${TARGET_LANG}.json`;
            // automatically writes a json files 
        writeFile(targetPath,translated, err => {
            if (err) {
                return console.error(err);
            }

            return console.log(`OK! Saved to ${targetPath}`);
        })
    });

