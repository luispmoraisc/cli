#!/usr/bin/env node

module.exports = () => {
    return `$themes: (
    clear: (
        primaryColorBrand: #0079BC,
        secondColorBrand: #b8b1ac,     
        spinnerColor: primaryColorBrand
    ),
    rico: (
        primaryColorBrand: #ff5200,
        secondColorBrand: #0f0e50,
        spinnerColor: primaryColorBrand        
    ),
    xp:(        
        primaryColorBrand: #FFC709,
        secondColorBrand: #18191a,
        spinnerColor: primaryColorBrand        
    )
);`;
};