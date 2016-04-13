import React from 'react'; // eslint-disable-line no-unused-vars

const Footer = (props) => {
  const { charCount } = props;

  return (
    <footer className="Footer">
      文字数: {charCount}文字
    </footer>
  );
};

export default Footer;
