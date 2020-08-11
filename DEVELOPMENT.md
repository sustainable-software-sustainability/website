# Developing on the website

## Website location

The WoSSS website is available at [wosss.org](http://wosss.org).



#### Open [Preview website ](https://wosss.netlify.app)

Edit content: you can modify the content files directly on github from the [content](https://github.com/sustainable-software-sustainability/sustainable-software-sustainability.github.io/tree/new-web/content) folder.

You can check and download the lastest status of the [WoSSS Logo](https://github.com/sustainable-software-sustainability/sustainable-software-sustainability.github.io/tree/new-web/Logo).

Made with:
 - [Nuxt content](https://content.nuxtjs.org/), Allowing md style, html and Vue components inside the content files. 

## Updating content

To update the page content, you need to modify the corresponding `*.md` file in `content/` and `content/sections/`.

## Writing Vue components inside md files. 

**Important considerations**: 
- All components included in the folder `/components/global` can be shown inside any `*.md` file.  
- Self-closing tags like <goals/> don't work, instead use `<goals></goals>`. 
- Surround with line spaces the components in order to the parser to understand that it is a Vue component.

It is important to know that self-closed tags are not allowed, and the Vue components must have a  

Example:
```
# This is a title in md format
Adding Vue components directly, do not forget to leave space between this text and the components.

<goals></goals>

I can continue writting between the components in md style. 

<reports></reports>

...
```

### Running locally
```
# clone the repo.

# Install dependencies:
yarn install

# Run locally:
yarn dev

# Run locally production version:
yarn generate && yarn start

# Deploy:
commit and push changes to master branch will trigger CD automatically
```

<img width="796" alt="new-website" src="https://user-images.githubusercontent.com/4195550/89177852-9c248c00-d58c-11ea-9225-37e9cc86879e.png">
-----

