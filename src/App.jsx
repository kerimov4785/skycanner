import { Route, Routes } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import Flight from "./pages/Flight"
import Main from "./pages/Main"
import Carhire from "./pages/Carhire"
import { useState } from "react"
import { Toaster } from "react-hot-toast"
import { duration } from "@mui/material/styles"
import Transport from "./pages/Transport"
import Tickets from "./pages/Tickets"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Profile from "./pages/Profile"
import Saved from "./pages/Saved"
import Error from "./pages/Error"

function App() {
  return (
    <>
      <Toaster position="top-center" toastOptions={{
        duration: 3000, style: {
          font: '400 16px "Inter"', zIndex: '100'
        }
      }} />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Main />} />
          <Route path="/flights" element={<Flight />} />
          <Route path="/flights/transport" element={<Transport />} />
          <Route path="/flights/transport/tickets" element={<Tickets />} />
          <Route path="/carhire" element={<Carhire />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/saved" element={<Saved />} />
        </Route>
        <Route path='signUp' element={<SignUp /> } />
        <Route path='signIn' element={<SignIn /> } />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App
