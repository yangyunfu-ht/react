// function App() {
//   console.log(this)

//   const onChange = (event) => {
//     console.log(event)
//   }

//   return (
//     <div className='App'>
//       <input type="checkbox" onChange={onChange}/>
//     </div>
//   );
// } 

import React, { Component } from 'react'

class App extends Component {
  render () {
    console.log(this)

    this.state = {
      name: 'yyf'
    }
    return <h1>
      <p>111</p>
      {/* <p>111---</p> */}
    </h1>
  }
}

export default App;
