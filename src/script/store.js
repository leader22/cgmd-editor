import dispatcher from './dispatcher';
import { EventEmitter } from 'events';

const defaultMD = `
## 見出し1
てきすと

[note]
# *注
これが注釈です。
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
  case 'UPDATE_MD':
    _store.md = data.md;
    store.emit('CHANGE');
    break;
  default:
    console.log('Undefined action type:', type);
  }
});

export default store;
