export default {
  colors: {
    text: '#ECE8FF',
    background: '#34323F',
    primary: '#ECE8FF',
    secondary: '#fff',
    accent: '#fff',
    highlight: '#fff',
    muted: '#A8A0D1',
    yellow: '#E7EE10',
    green: '#00E893',
  },
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'Georgia, serif',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 700,
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
      fontSize: 32,
      fontFamily: 'heading',
      fontWeight: 'heading',
      color: 'primary',
      mt: 4,
      mb: 2,
    },
  }
}
