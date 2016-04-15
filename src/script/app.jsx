import React from 'react';

import Store from './store';

import Header from './component/Header.jsx';
import Footer from './component/Footer.jsx';
import Editor from './component/Editor.jsx';
import Viewer from './component/Viewer.jsx';


class App extends React.Component {
  constructor() {
    super();

    this.state = Store.get();

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    Store.on('CHANGE', this._onChange);
  }

  componentWillUnmount() {
    Store.off('CHANGE', this._onChange);
  }

  _onChange() {
    this.setState(Store.get());
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="Container">
          <div className="Container_item">
            <Editor
              md={this.state.md}
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
}

export default App;
