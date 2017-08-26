# VQ-Marketplace config
Default configuration for VQ-Marketplace

## i18n Labels
### Autotranslations with Google Translate API

## Listing categories
## App design config
## Pricing strategies
## Publishing strategy
## Buyer profile configuration
## Seller profile configuration
## Profile verifications
Specify verification rules for users that would be required for using the platform.

```
// userType 1 has to have status 10 before being able to interact with the platform
{
    "name": "email-verification",
    "userType": 1,
    "dbName": "user",
    "fieldKey": "status",
    "steps": [ "equals", 10 ]
},
```


## Licence
MIT

## Contact person
info@vq-labs.com