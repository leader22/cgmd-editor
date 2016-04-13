import React from 'react';
import debounce from 'lodash.debounce';

import Header from './component/Header.jsx';
import Footer from './component/Footer.jsx';
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

    this._onUpdate = debounce(this._onUpdate.bind(this), 300);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="Container">
          <div className="Container_item">
            <Editor
              md={this.state.md}
              onUpdate={this._onUpdate}
            />
          </div>
          <div className="Container_item">
            <Viewer
              md={this.state.md}
            />
          </div>
        </div>
        <Footer
          charCount={this.state.md.length}
        />
      </div>
    );
  }

  _onUpdate(md) {
    this.setState({ md: md });
  }
}

export default App;
