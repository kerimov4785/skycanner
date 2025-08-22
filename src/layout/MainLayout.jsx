import React, { useContext, useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios'
import Loader from '../components/Loader'
import { AllContext } from '../context/DataContext'

function MainLayout() {
    let {flights , cars } = useContext(AllContext)
    let location = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    },[location])
    if(!flights || !cars){
        return <Loader/>
    }
    return (
        <>
            <Header/>
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout