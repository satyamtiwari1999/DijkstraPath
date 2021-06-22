function App() {
  const repeateBlocks = () => {
    const arr = [];
    for(let i=1;i<=150;i++){
      arr.push(<div>{i}</div>);
    }
    return arr;
  }
  return (
    <div className="App" style={{height: "95vh", overflow: "hidden"}}>
      <div className="flex-container">
        {repeateBlocks()}
      </div>
    </div>
  );
}

export default App;
