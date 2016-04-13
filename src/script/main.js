import React from 'react'; // eslint-disable-line no-unused-vars
import { render } from 'react-dom';
import CGMD from 'codegrid-markdown';

const cgmd = new CGMD();

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      html: ''
    };

    this._handleInput = this._handleInput.bind(this);
  }
  render() {
    const { html } = this.state;
    console.log(html);

    return (
      <div>
        <div>
          <textarea onInput={this._handleInput}></textarea>
          <iframe ref="iframe"></iframe>
        </div>
      </div>
    );
  }

  _handleInput(ev) {
    const html = `
      <html>
      <head>
        <link rel="stylesheet" href="https://app.codegrid.net/cg-ui/css/codegrid-ui.min.css" />
      </head>
      <body>
        ${cgmd.render(ev.currentTarget.value)}
      </body>
      </html>
    `;
    this.setState({ html: html });

    const iframe = this.refs.iframe;
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(html);
    iframe.contentWindow.document.close();
  }
}

window.addEventListener('load', () => {
  render(<App />, document.getElementById('jsApp'));
}, false);
