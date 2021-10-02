import React, { Component } from "react";
import Editor from "./components/editor";
import Previewer from "./components/previewer";

const placeholder = `# Heading

## Sub-heading

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function countFarts(smellLevel) {
  if(smell > 0) {
    return "One too many"
  }
  return "All clear"
}
\`\`\`
  
**bold text**


[my GitHub](https://github.com/steven2711)

> Example block quote


- Exaple list item

### Example embedded image

![Random image](https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=100&w=300)
`;

class App extends Component {
  state = {
    text: placeholder,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Markdown Previewer</h1>
        <div className="view">
          <Editor onChange={this.onChange} markdown={this.state.text} />
          <Previewer text={this.state.text} />
        </div>
      </div>
    );
  }
}

export default App;
