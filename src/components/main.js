import React from 'react'
import {ChatEngine, leaveChat} from 'react-chat-engine';
import ChatFeed from './Chatfeeds';
import Login from './Loginform';

function Main(){

    if(!localStorage.getItem('username')) return <Login />

    return(
          
        <ChatEngine 
        projectID='a0734dc1-6b49-4004-b173-93a66cc61992'
        userName='LaalBadshah'
        
        userSecret='12345678'
         renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
        
        />


    )


}

export default Main;