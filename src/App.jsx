import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Users from './components/layout/Users';
import Home from './components/layout/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: "404"
  },
  {
    path: "users",
    element: < Users />,
    errorElement: "404"
  }
])

function App() {;
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
