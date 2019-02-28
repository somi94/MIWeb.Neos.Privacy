# MIWeb.Neos.Privacy
Adds privacy features to Neos.
Current features:
* Cookie notification message (translated for en & de)
## Usage
### 1. Install package
```
composer require miweb/neos-privacy
```
### 2. Configure package
Add the following configuration to your projects Settings.yaml:
```
MIWeb:
  Neos:
    Privacy:
      enabled: true
```
### 3. Add custom translations (optional)
If you wish custom translations for your cookie message, change it via configuration:
```
MIWeb:
  Neos:
    Privacy:
      enabled: true
      translations:
        source: 'Privacy' 
        package: 'My.Custom.Package'
```
From now on, the privacy translations will be loaded from `Resources/Private/Translations/[language]/Privacy.xlf`.
