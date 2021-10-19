import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const clickBtn = (ele, i) => {
    console.log(ele, i)
  }

  return (
    <div className="App" onClick={() => setCount(count + 1)}>
      { count }
      { [1, 2, 3, 4].map((ele, index) => 
        <div style={{ margin: '10px' }} key={index} onClick={(ele, index) => {clickBtn(ele, index)}}>{ele}----</div>
      )}
    </div>
  );
}

export default App;
