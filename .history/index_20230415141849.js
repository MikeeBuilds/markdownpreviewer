function App() {
    return (
        <div className="text-center px-4">
            <h1 className="p-4">Markdown Previewer</h1>
            <textarea name="text" id="text" cols="30" rows="10" className="" />
        </div>
        
    )
}




ReactDOM.render(<App />, document.getElementById('root'));