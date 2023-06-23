import React from 'react'
import { URL } from './constants'
import TabularListing from './Components/TableListing'


const App = () => {

  return (
    
      <TabularListing api={URL}/>

  )

}

export default App