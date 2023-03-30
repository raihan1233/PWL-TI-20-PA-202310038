import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layouts from '../layouts/Layouts'
import Home from '../modules/components/Homes/Home'
import Explore from '../modules/components/Explore/Explore'
import Messages from '../modules/components/Messages/Messages'
import Feeds from '../modules/components/Explore/widgets/Feeds'
import Reels from '../modules/components/Explore/widgets/Reels'
import FYP from '../modules/components/Explore/widgets/FYP'
import Profiles from '../modules/components/Profiles/Profiles'
import Login from '../modules/components/Login/Login'
import Errors from '../layouts/components/errors/Errors'

export default function AppRoute() {
    const routing = [
        {   path: 'home', element: Home},
        {   
            path: 'explore', 
            element: Explore, 
            subExplore: [
                {   path: 'feeds', element: Feeds},
                {   path: 'reels', element: Reels},
                {   path: 'fyp', element: FYP},
            ]},
        {   path: 'messages', element: Messages},
        {   path: 'profile', element: Profiles},
    ]
    return (
        <Routes>
            {routing.map((v) => (
                <Route 
                    path={v.path}
                    element={<Layouts><v.element /></Layouts>} 
                >
                    {v.subExplore && v.subExplore.map(routeChild => (
                        <Route path={routeChild.path} element={<routeChild.element />} />
                    ))}
                </Route>
            ))}
            <Route index element={<Login />} />
            {/* <Route path='home' element={<Layouts><Home /></Layouts>} />
            <Route path='explore' element={<Layouts><Explore /></Layouts>} >
                <Route path="feeds" element={<Feeds />} />
                <Route path="reels" element={<Reels />} />
                <Route path="fyp" element={<FYP />} />
            </Route>
            <Route path='messages' element={<Layouts><Messages /></Layouts>} />
            <Route path='profile' element={<Layouts><Profiles /></Layouts>} /> */}
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<Layouts><Errors /></Layouts>}></Route>
        </Routes>
    )
}