import React from 'react';
import { render } from 'react-dom';
import debounce from 'lodash.debounce';

import Editor from './component/Editor.jsx';
import Viewer from './component/Viewer.jsx';


const defaultMD = `
## 見出し1
てきすと

[note]
# *注
これが注釈です。
[/note]
`.slice(1, -1); // 改行いらない

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      md: defaultMD
    };

    this._onUpdate = this._onUpdate.bind(this);
    this._onUpdate = debounce(this._onUpdate, 300);
  }

  render() {
    return (
      <div>
        <div className="Edt-Container">
          <div className="Edt-Container_item">
            <Editor
              md={this.state.md}
              onUpdate={this._onUpdate}
            />
          </div>
          <div className="Edt-Container_item">
            <Viewer
              md={this.state.md}
            />
          </div>
        </div>
      </div>
    );
  }

  _onUpdate(md) {
    this.setState({ md: md });
  }
}

window.addEventListener('load', () => {
  render(<App />, document.getElementById('jsApp'));
}, false);
