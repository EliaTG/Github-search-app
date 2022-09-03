import { createGlobalStyle } from "styled-components"



export const lightTheme = {
    body: '#f6f8ff',
    fontColor: '#697C9A',
    bgCard: '#ffffff',
    detailBox: '#F6F8FF;',
    heading: '#2B3442;',
    iconColor: '#697C9A',
    paragraph: '#1E1E1E',
    bgTransition: '.3s ease-in;',
    svg: '#697C9A',
    shadow: '0 1em 1.875em rgba(70, 96, 187, 0.2)',
    not_available:  '#a5b4cc'
}
export const darkTheme = {
    body: '#141d2f',
    fontColor: '#ffffff',
    bgCard: '#1e2a47',
    detailBox: '#141d2f;',
    heading: '#ffffff;',
    iconColor: '#fff',
    paragraph: '#fff',
    bgTransition: '.3s ease-out;',
    svg: '#fff',
    shadow: 'none',
    not_available: '#8e94ae'
}
export const GlobalStyles = createGlobalStyle`
    body{
        transition: ${(props) => props.theme.bgTransition};
        background-color: ${(props) => props.theme.body};

        h1.logo, h2.name{
            color: ${(props) => props.theme.heading};
        }
        .search-bar, .desktop, .tablet, .loading{
            background-color: ${(props) => props.theme.bgCard};
        }
        .search-bar{
            box-shadow: ${(props) => props.theme.shadow};
        }
        .details{
            background-color: ${(props) => props.theme.detailBox};
        }
        .date-joined, h3, h4, a, input{
            color: ${(props) => props.theme.fontColor};
        }
        p{
            color: ${(props) => props.theme.paragraph};
        }
        .container-links svg, 
        .darkmode svg, 
        span.darkmode, 
        input::placeholder,
        .loading span{
            color: ${(props) => props.theme.svg};
        }
        .twitter-icon path{
            fill: ${(props) => props.theme.svg};

        }
        .not-available a,
        .not-available  svg,
        .not-available .twitter-icon path{
            color: ${(props) => props.theme.not_available};
            fill: ${(props) => props.theme.not_available};
        }
    }
`;

// const Themes = {
//     light: LightTheme,
//     dark: DarkTheme
// };

// export default Themes