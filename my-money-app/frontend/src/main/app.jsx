import React from 'react'

import Header from '../common/template/header'
import SideBar from  '../common/template/sidebar'
import Foorter from '../common/template/footer'
import Routes from './routes'
import Messages from '../common/msg/messages'

export default props => (
    <div className='wrapper'>
        <Header/>
        <SideBar/>
        <div className='content-wrapper'>
            {props.children}
        </div>
        <Foorter/>
        <Messages/>
    </div>
)