import React from "react";
import marked from "marked";

marked.setOptions({
  breaks: true,
});

const Previewer = ({ text }) => {
  return (
    <div>
      <div className="card mt-5">
        <div className="card-header">Previewer</div>
        <div className="card-body">
          <p
            id="preview"
            className="card-text"
            dangerouslySetInnerHTML={{
              __html: marked(text),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Previewer;
