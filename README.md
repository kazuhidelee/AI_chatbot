# Open AI Chatbot
<img width="730" alt="Screenshot 2024-06-26 at 4 02 57 PM" src="https://github.com/kazuhidelee/AI_chatbot/assets/122251831/74918e58-b643-472e-8fa9-8eeadf2c4be0">

## Tools Used
-Front-end: React + Chat UI Kit Library (https://github.com/chatscope/chat-ui-kit-react)
-Back-end: Javascript

## How to run
- add a .env.local folder in the root and add OpenAI API key in the file
- in terminal type: npm run dev

## Approach
This is a simple chat application using React.js and the Chat UI Kit library from Chatscope. The application allows users to interact with an AI chatbot powered by OpenAI where users can type messages, which are then sent to the backend (OpenAI's API). 
First, the message typed by the user is added to the messages array and it will be displayed in the chat UI. Then, the message will be processed into format that is suitable for the Open AI request format. After the conversion, the funciton will put all the required information (model, api message, system message) in JSON format and send it to the API. If processed successfully, the API will return response message from ChatGPT, and the function will display the message content onto the chat UI. 

## Challenges
Since I haven't had experiences with handling OpenAI API, I was bit confused about figuring out the correct format for the api request. Also, it was a bit challenging to find where the ChatGPT response is within the Json file returned by API, but I was able to figure it out by looking at console.log. Also, I had some challenges with the Open AI API keys and had to find a way to post the code without revealing the key since the key can be auto-deleted when exposed.  

## Features
- The ChatGPT responses are set to "Speak like a tour guide" so it is more suitable for the purpose of the chatbot, which is a chatbot that can answer generic questions about famous Landmarks.
- When the response is being processed, the user can see the loading message "ChatGPT is typing" on top of the message input box

## To-Do
- Make a close button so that the chatbox can be minimized.
- Enable users to upload pictures of landmarks and ask questions about the image
- Make some suggestion prompts on top of the message input box for users

