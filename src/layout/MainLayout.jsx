import React, { useContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios'
import Loader from '../components/Loader'
import { AllContext } from '../context/DataContext'

function MainLayout() {
    let {flights} = useContext(AllContext)
    if(!flights){
        return <Loader/>
    }
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout