import dispatcher from '../dispatcher';

const Creator = {
  updateMd: (md) => {
    dispatcher.dispatch({
      type: 'UPDATE_MD',
      data: {
        md: md
      }
    });
  }
};

export default Creator;
