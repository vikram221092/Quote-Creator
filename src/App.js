import React from 'react'
import QuotesContainer from './QuotesContainer'
import './app.css'

const App = (props) =>{

return(
  <div className = "app" >
     <h1> Quote Book </h1>

     <QuotesContainer />
  </div>
)
}

export default App