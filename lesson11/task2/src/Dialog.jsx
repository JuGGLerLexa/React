import React from 'react';

const Dialog = ({ content, title }) => {
  return (
    <div className="dialog">
      <div className="dialog__heading">
        <div className="dialog__title">{title}</div>
        <div className="dialog__close-btn">+</div>
      </div>
      <div className="dialog_content">{content}</div>
    </div>
  );
};

export default Dialog;
