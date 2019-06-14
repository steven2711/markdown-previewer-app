import React from "react";

const Editor = props => {
  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="card-header">Editor</div>
          <div className="card-body">
            <div className="input-group">
              <textarea
                id="editor"
                className="form-control"
                rows="6"
                name="text"
                onChange={props.onChange}
                value={props.markdown}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
