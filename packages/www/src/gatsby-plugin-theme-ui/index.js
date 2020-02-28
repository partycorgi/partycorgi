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
    lightPurple: '#545165',
    // TODO: Use this. Might need to move it to a different top level key and import the theme
    heroGradient: 'linear-gradient(164.92deg, #9B6BD3 12.72%, #00E992 84.21%)'
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
    navItem: 20,
    wordmark: 34
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
