import React from 'react';

import ActionCreator from '../action-creator';

class Editor extends React.Component {
  render() {
    const {
      md
    } = this.props;

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

Editor.propTypes = {
  md: React.PropTypes.string.isRequired
};

export default Editor;
