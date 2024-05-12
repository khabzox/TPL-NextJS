const config = {
  // REQUIRED
  appName: "TPL of Nextjs",
  // REQUIRED: a short description of your app for SEO tags (can be overwritten)
  appDescription:
    "This is a TPl (Template) of nextjs",
  // REQUIRED (no https://, not trialing slash at the end, just the naked domain)
  domainName: "YourDomainName.st",

  colors: {
    // REQUIRED — The DaisyUI theme to use (added to _document.js). Leave blank for default (light & dark mode). If you any other theme than light/dark, you need to add it in config.tailwind.js in daisyui.themes.
    theme: "light",
    // REQUIRED — This color will be reflected on the whole app outside of the document (loading bar, Chrome tabs, etc..). By default it takes the primary color from your DaisyUI theme (make sure to update your the theme name after "data-theme=")
    // OR you can just do this to use a custom color: main: "#f37055". HEX only.
    // main: themes[`[data-theme=light]`]["primary"],
  }
};

export default config;
