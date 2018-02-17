import React from 'react'
import Member from './member'

//Poderia ser assim pois não esta usando "props"
// export default () => (
export default props => (
    <div>
        <Member name='João' lastName='Silva'/>
        <Member name='Maria' lastName='Silva'/>
        <Member name='José' lastName='Silva'/>
        <Member name='Pedro' lastName='Silva'/>
    </div>
)