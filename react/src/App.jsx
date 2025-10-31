import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import ListGroup from './component/listgroup'
import UserForm from './component/Form'

function App() {
  const students = ['a1', 'a2', 'a3', 'a4', 'a5'];
  const teachers = ['T1', 'T2', 'T3', 'T4'];

  return (
    <>
      <UseForm></UseForm>
      <ListGroup title="Students" items={students} />
      <ListGroup title="Teachers" items={teachers} />
    </>
  )
}

export default App;