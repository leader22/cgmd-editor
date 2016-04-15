import dispatcher from './dispatcher';
import { getStorage } from './util';

const Creator = {
  loadMd: () => {
    const draft = getStorage('CGMD-draft');
    if (!draft) { return; }

    const action = {
      type: 'LOAD_MD',
      data: { md: draft }
    };
    dispatcher.dispatch(action);
  },

  updateMd: (md) => {
    const action = {
      type: 'UPDATE_MD',
      data: { md }
    };
    dispatcher.dispatch(action);
  }
};

export default Creator;
