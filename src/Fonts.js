import { Global } from "@emotion/react"

export const Fonts = () => {
   <Global styles={`
        @font-face {
        font-family: 'Glory';
        font-style: normal;
        font-weight: 100;
        font-display: swap;
        src: url('https://fonts.googleapis.com/css2?family=Glory:wght@100&display=swap')
    `
    }
    />
}
