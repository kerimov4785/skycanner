import React, { useContext } from 'react'
import { AllContext } from '../context/DataContext'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

function Profile() {
  let { setUser } = useContext(AllContext)
  let navigate = useNavigate()
  function exit() {
    localStorage.removeItem('user')
    setUser({})
    navigate('/')
    toast.success('Logged out of your account')
  }
  return (
    <div className='container' >
      <button onClick={exit} >exit</button>
    </div>
  )
}

export default Profile