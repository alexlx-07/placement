import { useState } from 'react'
import { BrowserRouter, Route,Routes} from 'react-router-dom';

import Placement from './placement/placement';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter basename='/placement/'>
      <Routes>
        <Route path='' element={<Placement/>}> 
         
        </Route>
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
