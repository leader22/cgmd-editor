import React from 'react'; // eslint-disable-line no-unused-vars

const Editor = (props) => {
  const {
    md,
    onUpdate,
  } = props;

  return (
    <textarea
      defaultValue={md}
      onChange={(ev) => { onUpdate(ev.currentTarget.value); }}
    ></textarea>
  );
};

export default Editor;
