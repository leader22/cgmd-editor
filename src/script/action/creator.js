import dispatcher from '../dispatcher';

const Creator = {
  updateMd: (md) => {
    const action = {
      type: 'UPDATE_MD',
      data: { md }
    };
    dispatcher.dispatch(action);
  }
};

export default Creator;
