import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import UsersForm from './assets/components/UsersForm'
import UsersList from './assets/components/UsersList'


function App() {
const [isUser, setIsUser] = useState()
const [updateInfo, setUpdateInfo] = useState()
const [isFormOpen, setIsFormOpen] = useState(false)

const getAllUser = () => {
  const URL = `https://users-crud1.herokuapp.com/users/`
  axios.get(URL)
  .then(res => setIsUser(res.data))
  .catch(err => console.log(err))
}
 useEffect(() => {
  getAllUser()
 }, [])

 console.log(isUser)
 const handleOpenForm = () => setIsFormOpen(true)
 const handleCloseForm = () => setIsFormOpen(false)



  return (
    <div className="App">
      <button className='form__btn' onClick={handleOpenForm}>Open Form</button>
      <div className={isFormOpen ?'form-container' : 'form-none' }>
      <UsersForm 
      getAllUser={getAllUser}
      updateInfo={updateInfo}
      setUpdateInfo={setUpdateInfo}
      handleCloseForm={handleCloseForm}/>

      </div>
    <div className='user-container'>
      {
        isUser?.map(user => (
          <UsersList
          key={user.id} 
          user={user}
          getAllUser={getAllUser} 
          setUpdateInfo={setUpdateInfo}
          handleOpenForm={handleOpenForm}/>  
        ))
      }
    </div>
    </div>
  )
}

export default App
