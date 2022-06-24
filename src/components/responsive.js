import { css } from "styled-components"

export const mobile = (props) => {
    return css`
      @media screen and (max-width: 390px) {
        ${props}
      }
    `
}

//Breakpoints
// Mobile S - 320px
// Mobile M - 375px
// Mobile L - 425px
// Tablet - 768px
// Laptop - 1024px
// Laptop L - 1440px
// 4K - 2560px