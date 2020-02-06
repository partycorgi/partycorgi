const React = require("react");
const { ThemeProvider } = require("theme-ui");
const theme = require("./theme");

exports.wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
};
