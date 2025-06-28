import { Routes, Route,  } from 'react-router-dom'


import Homepage from './Homepage/Homepage'
import Todo from './pages/TodoApp/Todo'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/todo' element={<Todo/>}/>

    </Routes>
  )
}
export default App
