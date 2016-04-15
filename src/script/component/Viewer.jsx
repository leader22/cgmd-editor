import React from 'react';
import debounce from 'lodash.debounce';
import CGMD from 'codegrid-markdown';
const cgmd = new CGMD();

class Viewer extends React.Component {
  constructor({ debounceTime }) {
    super();

    this._updateIFrame = this._updateIFrame.bind(this);
    this._debouncedUpdateIFrame = debounce(this._updateIFrame, debounceTime);
  }

  render() {
    return (
      <iframe ref="iframe"></iframe>
    );
  }

  componentDidMount() {
    this._updateIFrame();
  }

  componentDidUpdate() {
    this._debouncedUpdateIFrame();
  }

  _updateIFrame() {
    const md = this.props.md;
    const iframe = this.refs.iframe;
    if (!iframe || md.length === 0) { return; }

    let article = '';
    try {
      article = cgmd.render(md);
    } catch(err) {
      console.log(err);
    }

    const html = `
      <html>
      <head>
        <link rel="stylesheet" href="http://ui.codegrid.net/assets2/css/codegrid-ui.min.css">
      </head>
      <body>
        <div class="CG2-narrowLayout">
          <div class="CG2-narrowLayout__main">
            <article class="CG2-article">
              <h2>※目次は自動生成されるので不要です！</h2>
              ${article}
            </article>
          </div>
        </div>
        <script src="http://ui.codegrid.net/assets2/js/codegrid-ui.min.js"></script>
      </body>
      </html>
    `;

    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(html);
    iframe.contentWindow.document.close();
  }
}

Viewer.propTypes = {
  md: React.PropTypes.string.isRequired,
  debounceTime: React.PropTypes.number
};

Viewer.defaultProps = {
  debounceTime: 300
};

export default Viewer;
