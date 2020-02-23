export default {
  colors: {
    text: '#fff',
    background: '#34323F',
    primary: '#ECE8FF',
    secondary: '#fff',
    accent: '#fff',
    highlight: '#fff',
    muted: '#A8A0D1',
    yellow: '#E7EE10',
    green: '#00E893',
    lightPurple: '#545165'
  },
  fonts: {
    body: 'Titillium Web, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'Georgia, serif',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    semiBold: 500,
    heading: 700,
  },
  fontSizes: {
    heading: 42,
    navItem: 20
  },
  styles: {
    root: {
      // uses the theme values provided above
      fontFamily: 'body',
      fontWeight: 'body',
      a: {
        color: 'text',
        textDecorationColor: 'yellow'
      }
    },
    h1: {
      fontSize: 'heading',
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: '130%',
      color: 'primary',
      mt: 4,
      mb: 2,
    },
  }
}
