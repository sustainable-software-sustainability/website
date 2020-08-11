# Developing on the website

## Website location
The WoSSS website is available at [wosss.org](http://wosss.org).

Is it served via [Netlify](https://wosss.netlify.app).

## Logo files
Check and downlaod the the logo files in the [WoSSS logo](Logo) folder. 

## Platform
The WoSSS site uses the [Nuxt.js](https://nuxtjs.org/) platform.

In addition it uses the [Nuxt content](https://content.nuxtjs.org/) module to allow markdown, html and [Vue components](https://vuejs.org/v2/guide/components.html) inside the content files.

## Adding and updating content
To add or modify content, modify and existing `*.md` file in [content](content) and [content/sections](content/sections) or add one.

## Using  Vue components inside .md files. 

The following are some important consideratins when using Vue components in the .md files:
- All components included in the folder `/components/global` can be shown inside any `*.md` file.  
- Self-closing tags like <goals/> don't work, instead use `<goals></goals>`. 
- Surround the tags specifying a Vue components with newline. This is needed in order for the parser to understand that it is a Vue component.

Example:
```
# This is a title in md format
Adding Vue components directly, do not forget to leave space between this text and the components.

<goals></goals>

I can continue writting between the components in md style. 

<reports></reports>

...
```

## Running locally

### Installation requirements

Install [npm](https://www.npmjs.com/get-npm).

Install [yarn](https://yarnpkg.com/getting-started/install).

### Steps for building locally
This should be done to test changes locally before e.g. issuing a pull request for changes to be integrated into the main repository.

```
# clone the repo.
git clone https://github.com/sustainable-software-sustainability/sustainable-software-sustainability.github.io.git

# move to the right directory
cd sustainable-software-sustainability.github.io.git

# Install dependencies:
yarn install

# Run locally:
yarn dev

# Run locally production version:
yarn generate && yarn start
```

## Deploy:
pushing changes to the main branch will trigger an update on the main website via the use use of a webhook.

