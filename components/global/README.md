Writing Vue components inside md files. 

**Important considerations**: 
- All components included in the folder `/components/global` can be shown inside any `*.md` file.  
- Self-closing tags like <goals/> don't work, instead use `<goals></goals>`. 
- Surround with line spaces the components in order to the parser to understand that it is a vue component.
    
It is important to know that self-closed tags are note allowed, and the vue components must have a  

Example:
```
# This is a title in md format
Adding vue components directly, do not forget to leave space between this text and the components.

<goals></goals>

I can continue writting between the components in md style. 

<reports></reports>

...
```
