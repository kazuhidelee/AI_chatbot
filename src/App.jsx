import { useState } from 'react'
import './App.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react";

const API_KEY = "sk-proj-ABbEtuxU9ou5ViuLNJroT3BlbkFJlZ5w6CpIh9gMTzB7VCO9";


//Request format: 
// curl https://api.openai.com/v1/chat/completions \
//   -H "Content-Type: application/json" \
//   -H "Authorization: Bearer $OPENAI_API_KEY" \
//   -d '{
//      "model": "gpt-3.5-turbo",
//      "messages": [{"role": "user", "content": "Say this is a test!"}],
//      "temperature": 0.7
//    }'

function App() {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am ChatGPT, a.k.a. your tour guide for today! Ask me anything about Landmarks around the world:)",
      sender:  "ChatGPT",
      direction: "incoming",

    }
  ]) // []

  const handleSend = async (message) =>{
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing",
    }
    const newMessages = [...messages, newMessage]; //all messages + new message

    //undate message state
    setMessages(newMessages);
    //set a typing indicator 
    setTyping(true);
    //process message to chatGPT and see the response
    await processMessageToChatGPT(newMessages);
  }

  async function processMessageToChatGPT(chatMessages){
    // translate to formate: {role:"user" , content: "message" }

    let apiMessages = chatMessages.map((messageObject)=>{
      let role = "";
      if(messageObject.sender === "ChatGPT"){
        role = "assistant"
      }else{
        role = "user"
      }
      return {role: role, content: messageObject.message}
    });
    //system: specify how chatgpt responses
    const systemMessage = {
      role: "system",
      content: "Speak like a tour guide."
    }

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages":[
        systemMessage,
        ...apiMessages 
      ]
    }
    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers:{
        "Authorization": "Bearer " + API_KEY,
        "Content-Type":  "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data)=>{
      return data.json();
    }).then((data)=>{
      console.log(data.choices[0].message.content);
      setMessages(
        [...chatMessages,{
          message: data.choices[0].message.content,
          sender: "ChatGPT",
          direction: "incoming",
        }]
      );
      setTyping(false);
    });
  }

  return (
      <div>
        <div style={{position: "relative", height: "800px", width:"700px"}}>
          <MainContainer>
            <ChatContainer>
              <MessageList 
              scrollBehavior='smooth'
              typingIndicator = {typing ? <TypingIndicator content="ChatGPT is typing" /> : null}>
                {messages.map((message, i)=>{
                  return <Message key = {i} model={message}/>
                })}
              </MessageList>
              <MessageInput placeholder='type here' onSend={handleSend}/>
            </ChatContainer>
          </MainContainer>
        </div>

      </div>

  )
}

export default App
