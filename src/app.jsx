import {RouterProvider} from 'react-router-dom'
import {router} from './app/index'
import React,{ useState, createContext} from 'react' 
export const UserContext = createContext()

const App = () => {
  const [user, setUser] = useState(false)

    return( 
      <UserContext.Provider value={[user, setUser]}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    )
  }
  
  export default App
