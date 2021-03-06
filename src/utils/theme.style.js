export default {
    colors: {
        black: `#111`,
        blue: `#303F9F`,
        darkblue: `#122d59`,
        lightblue: `#5587BC`,
        light: `#e5e5e5`,
        orange: `#F29F1D`,
        red: `#D8402B`,
        almostblack: `#333`,
        error: `#FF0000`,
        success: `#15af3c`
    },
    breakpoints: {
        small: `@media all and (min-width: 480px)`,
        medium: `@media all and (min-width: 736px)`,
        large: `@media all and (min-width: 1024px)`
    },
    backgrounds: {
        normal: `
                background: #3072ba;
                background: -moz-linear-gradient(top, #3072ba 0%, #13318c 100%);
                background: -webkit-linear-gradient(top, #3072ba 0%,#13318c 100%);
                background: linear-gradient(to bottom, #3072ba 0%,#13318c 100%);
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3072ba', endColorstr='#13318c',GradientType=0 );
        `,
        success: `
                background: #4f9345;
                background: -moz-linear-gradient(top, #4f9345 -1%, #007207 100%, #005700 100%);
                background: -webkit-linear-gradient(top, #4f9345 -1%,#007207 100%,#005700 100%);
                background: linear-gradient(to bottom, #4f9345 -1%,#007207 100%,#005700 100%);
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4f9345', endColorstr='#005700',GradientType=0 );
        `,
        failure: `
                background: #a90329;
                background: -moz-linear-gradient(top, #a90329 0%, #6d0019 100%);
                background: -webkit-linear-gradient(top, #a90329 0%,#6d0019 100%);
                background: linear-gradient(to bottom, #a90329 0%,#6d0019 100%);
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a90329', endColorstr='#6d0019',GradientType=0 );
        `,
        navBackground: `
                background: rgba(41,78,138,1);
                background: -moz-linear-gradient(top, rgba(41,78,138,1) 0%, rgba(18,45,89,1) 100%);
                background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(41,78,138,1)), color-stop(100%, rgba(18,45,89,1)));
                background: -webkit-linear-gradient(top, rgba(41,78,138,1) 0%, rgba(18,45,89,1) 100%);
                background: -o-linear-gradient(top, rgba(41,78,138,1) 0%, rgba(18,45,89,1) 100%);
                background: -ms-linear-gradient(top, rgba(41,78,138,1) 0%, rgba(18,45,89,1) 100%);
                background: linear-gradient(to bottom, rgba(41,78,138,1) 0%, rgba(18,45,89,1) 100%);
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#294e8a', endColorstr='#122d59', GradientType=0 );
        `
    }
}