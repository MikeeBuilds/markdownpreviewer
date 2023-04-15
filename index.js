const initialState = `# Welcome to my React Markdown Previewer!

# Heading
**This is bolded text**
## Heading 2

- list item 1
- list item 2
- list item 3


[Visit FreeCodeCamp](https://www.freecodecamp.com)

This is inline div: \`<div></div>\`

This is a block of code: 

\`\`\`
let x = 1;
let y = 2;
let z = x + y;
\`\`\`

> This is a blockquote

![React](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)

`;

marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();

function App () {
  const [text, setText] = React.useState(initialState);
  return (
    <div className="text-center px-4">
      <h1 className="p-4">Markdown Previewer</h1>
      <textarea
        name="text"
        id="editor"
        value={text}
        rows="10"
        className="textarea"
        onChange={(e) => setText(e.target.value)}
      />
      <h3 className="mt-3">Output</h3>
      <Preview markdown={text}></Preview>
    </div>
  );
}

function Preview({ markdown }) {
  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: marked(markdown, { renderer: renderer }),
        }}
        id="preview"
      ></div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
