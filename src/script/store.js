import { EventEmitter } from 'events';

import { setStorage } from './util';
import dispatcher from './dispatcher';

const defaultMD = `
## CGMDとは
CodeGridの原稿を、ほぼMarkdownで書けてしまうものです！
記法は[CodeGrid Markdown](https://github.com/pxgrid/codegrid-markdown)からご確認ください。

> これであの\`jade\`(a.k.a. \`pug\`)なんか使わなくてもよくなります！！1

## CGMD Editorとは
そんな[CodeGrid Markdown](https://github.com/pxgrid/codegrid-markdown)の記法をリアルタイムにプレビューできるエディターです！

\`\`\`javascript#これもReactでできてます
import React from 'react';
import ActionCreator from '../action-creator';

class Editor extends React.Component {
  render() {
    const { md } = this.props;

    return (
      <textarea
        defaultValue={md}
        onChange={this._onChange}
      ></textarea>
    );
  }

  _onChange(ev) {
    ActionCreator.updateMd(ev.currentTarget.value);
  }
}

export default Editor;
\`\`\`

このエディター自体のリポジトリは[こちら](https://github.com/leader22/cgmd-editor)です。Folk, p-rなどなどご自由に。

[note]
# *注
エディターとしての機能は皆無です。

皆様お気に入りがあると思うので、コミットする前の確認くらいに使ってもらえればいいのかなーと。
[/note]
`.slice(1, -1); // 改行いらない

const _store = {
  md: defaultMD
};

class Store extends EventEmitter {
  get() {
    return Object.assign({}, _store);
  }
}

const store = new Store();

store.dispatchToken = dispatcher.register(({ type, data }) => {
  switch (type) {
  case 'LOAD_MD':
    _store.md = data.md;
    store.emit('CHANGE');
    break;
  case 'UPDATE_MD':
    _store.md = data.md;
    setStorage('CGMD-draft', data.md);
    store.emit('CHANGE');
    break;
  default:
    console.log('Undefined action type:', type);
  }
});

export default store;
