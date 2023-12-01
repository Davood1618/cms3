import Home from './Pages/Home'
import UserList from './Pages/Users/UserList'
import NewUser from './Pages/NewUser/NewUser'
import Products from './Pages/Products/Products'

let routes=[

    {path:'/' , element:<Home/>},
    {path:'/Users', element:<UserList/>},
    {path:'/NewUser', element:<NewUser/>},
    {path:'/Products', element:<Products/>}, 

]

export default routes 