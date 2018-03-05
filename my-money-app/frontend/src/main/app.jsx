import React from 'react'
import '../common/template/dependencies'

import Header from '../common/template/header'
import SideBar from  '../common/template/sidebar'
import Foorter from '../common/template/footer'

export default props => (
    <div className='wrapper'>
        <Header/>
        <SideBar/>
        <div className='content-wrapper'>
            <h1>Conteúdo</h1>
        </div>
        <Foorter/>
    </div>
)