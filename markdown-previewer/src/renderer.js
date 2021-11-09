import React from "react";
import marked from "marked";

const Editor = (props) => {
  const marked = require("marked");
  const renderer = new marked.Renderer();
  const markdown = marked(
    "# Marked in the browser\n\nRendered by **marked**.",
    { sanitize: true }
  );
  return (
    <div>
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(markdown, { renderer: renderer }),
        }}
      />
    </div>
  );
};

export default Editor;
