import {RouterProvider} from 'react-router-dom'
import {router} from './app/index'
import React,{ useState, createContext} from 'react' 
import axios from 'axios'
export const UserContext = createContext()

const baseUrl = 'http://85.209.9.201:777/' 

const App = () => {
  

    axios.get(baseUrl)


  const [user, setUser] = useState(true)

  

    return( 
      <UserContext.Provider value={[user, setUser]}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    )
  }
  
  export default App
