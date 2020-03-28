const React = require('react');

exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({
    lang: 'en',
  });
  setHeadComponents([
    <meta
      name="description"
      content="Experienced software engineer with a passion for full stack web and mobile development!"
    />,
  ]);
};
